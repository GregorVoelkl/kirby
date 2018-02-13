<?php

namespace Kirby\Cms;

use Exception;
use Kirby\Util\Str;

/**
 * The Page class is the heart and soul of
 * Kirby. It is used to construct pages and
 * all their dependencies like children,
 * files, content, etc.
 *
 * @package   Kirby Cms
 * @author    Bastian Allgeier <bastian@getkirby.com>
 * @link      http://getkirby.com
 * @copyright Bastian Allgeier
 */
class Page extends Model
{

    protected static $cache = [];

    use HasChildren;
    use HasContent;
    use HasFiles;
    use HasSiblings;
    use HasStore;

    /**
     * Registry with all Page models
     *
     * @var array
     */
    protected static $models = [];

    /**
     * Properties that should be converted to array
     *
     * @var array
     */
    protected static $toArray = [
        'children',
        'content',
        'files',
        'id',
        'num',
        'parent',
        'slug',
        'template',
        'uid',
        'url'
    ];

    /**
     * The PageBlueprint object
     *
     * @var PageBlueprint
     */
    protected $blueprint;

    /**
     * Sorting number + slug
     *
     * @var string
     */
    protected $dirname;

    /**
     * Path of dirnames
     *
     * @var string
     */
    protected $diruri;

    /**
     * The Page id
     *
     * @var string
     */
    protected $id;

    /**
     * The sorting number
     *
     * @var integer|null
     */
    protected $num;

    /**
     * The parent page
     *
     * @var Page|null
     */
    protected $parent;

    /**
     * The parent Site object
     *
     * @var Site|null
     */
    protected $site;

    /**
     * The URL-appendix aka slug
     *
     * @var string
     */
    protected $slug;

    /**
     * The template name
     *
     * @var string|null
     */
    protected $template;

    /**
     * The page url
     *
     * @var string|null
     */
    protected $url;

    /**
     * Creates a new page object
     *
     * @param array $props
     */
    public function __construct(array $props)
    {
        $this->setProperties($props);

        // set the id, depending on the parent
        if ($parent = $this->parent()) {
            $this->id = $parent->id() . '/' . $this->slug();
        } else {
            $this->id = $this->slug();
        }
    }

    /**
     * @return PageBlueprint
     */
    public function blueprint(): PageBlueprint
    {
        if (is_a($this->blueprint, PageBlueprint::class) === true) {
            return $this->blueprint;
        }

        return $this->blueprint = $this->store()->blueprint();
    }

    /**
     * Changes the sorting number
     *
     * @param int $num
     * @return self
     */
    public function changeNum(int $num = null): self
    {
        if ($num === $this->num()) {
            return $this;
        }

        $this->rules()->changeNum($this, $num);

        return $this->store()->changeNum($num);
    }

    /**
     * Changes the slug/uid of the page
     *
     * @param string $slug
     * @return self
     */
    public function changeSlug(string $slug): self
    {
        if ($slug === $this->slug()) {
            return $this;
        }

        $this->rules()->changeSlug($this, $slug);

        return $this->store()->changeSlug($slug);
    }

    /**
     * Changes the page template
     *
     * @param string $template
     * @return self
     */
    public function changeTemplate(string $template): self
    {
        if ($template === $this->template()) {
            return $this;
        }

        $this->rules()->changeTemplate($this, $template);

        return $this->store()->changeTemplate($template);
    }

    /**
     * Returns the Children collection for this page
     * The HasChildren trait takes care of the rest
     *
     * @return Pages|Children
     */
    public function children(): Pages
    {
        if (is_a($this->children, Pages::class) === true) {
            return $this->children;
        }

        return $this->children = $this->store()->children();
    }

    /**
     * Returns the default parent collection
     *
     * @return Collection
     */
    public function collection()
    {
        if (is_a($this->collection, Collection::class)) {
            return $this->collection;
        }

        if ($parent = $this->parent()) {
            return $this->collection = $parent->children();
        }

        if ($site = $this->site()) {
            return $this->collection = $site->children();
        }

        return $this->collection = new Pages([$this]);
    }

    /**
     * Creates a child of the current page
     *
     * @param array $props
     * @return self
     */
    public function createChild(array $props): self
    {
        $props['content'] = $props['content'] ?? [];
        $props['url']     = null;
        $props['num']     = null;
        $props['parent']  = $this;
        $props['site']    = $this->site();
        $props['store']   = null;

        // temporary child for validation
        $child = Page::factory($props);

        // validate the child
        $this->rules()->createChild($this, $child);

        return $this->store()->createChild($child);
    }

    public function createFile(string $source, array $props = [])
    {
        $props['filename'] = $props['filename'] ?? basename($source);
        $props['parent']   = $this;
        $props['store']    = null;
        $props['url']      = null;

        // temporary child for validation
        $file = new File($props);

        // validate the child
        $this->rules()->createFile($this, $file);

        return $this->store()->createFile($file, $source);
    }

    protected function defaultStore()
    {
        return PageStoreDefault::class;
    }

    /**
     * Deletes the page
     *
     * @param bool $force
     * @return bool
     */
    public function delete(bool $force = false): bool
    {
        $this->rules()->delete($this, $force);

        // delete all files individually
        foreach ($this->files() as $file) {
            $file->delete();
        }

        // delete all children individually
        foreach ($this->children() as $child) {
            $child->delete(true);
        }

        return $this->store()->delete();
    }

    /**
     * Sorting number + Slug
     *
     * @return string
     */
    public function dirname(): string
    {
        return $this->num() !== null ? $this->num() . '.' . $this->slug() : $this->slug();
    }

    /**
     * Sorting number + Slug
     *
     * @return string
     */
    public function diruri(): string
    {
        if (is_string($this->diruri) === true) {
            return $this->diruri;
        }

        if ($parent = $this->parent()) {
            return $this->diruri = $this->parent()->diruri() . '/' . $this->dirname();
        }

        return $this->diruri = $this->dirname();
    }

    /**
     * Checks if the page exists in the store
     *
     * @return bool
     */
    public function exists(): bool
    {
        return $this->store()->exists();
    }

    /**
     * Constructs a Page object and also
     * takes page models into account.
     *
     * @return self
     */
    public static function factory($props): self
    {
        if (isset(static::$cache[$props['slug']]) === true) {
            return static::$cache[$props['slug']];
        }

        if (empty(static::$models) === true) {
            return static::$cache[$props['slug']] = new static($props);
        }

        if (empty($props['template']) === false) {
            return static::$cache[$props['slug']] = static::model($props['template'], $props);
        }

        if (empty($props['root']) === false) {
            foreach (static::$models as $template => $class) {
                if (is_file($props['root'] . '/' . $template . '.txt')) {
                    return static::$cache[$props['slug']] = static::model($template, $props);
                }
            }
        }

        return static::$cache[$props['slug']] = new static($props);
    }

    /**
     * Returns the Files collection
     *
     * @return Files
     */
    public function files(): Files
    {
        if (is_a($this->files, Files::class) === true) {
            return $this->files;
        }

        return $this->store()->files();
    }

    /**
     * Checks if there's a next invisible
     * page in the siblings collection
     *
     * @return bool
     */
    public function hasNextInvisible(): bool
    {
        return $this->nextInvisible() !== null;
    }

    /**
     * Checks if there's a next visible
     * page in the siblings collection
     *
     * @return bool
     */
    public function hasNextVisible(): bool
    {
        return $this->nextVisible() !== null;
    }

    /**
     * Checks if there's a previous invisible
     * page in the siblings collection
     *
     * @return bool
     */
    public function hasPrevInvisible(): bool
    {
        return $this->prevInvisible() !== null;
    }

    /**
     * Checks if there's a previous visible
     * page in the siblings collection
     *
     * @return bool
     */
    public function hasPrevVisible(): bool
    {
        return $this->prevVisible() !== null;
    }

    /**
     * Changes the status to unlisted
     *
     * @return self
     */
    public function hide(): self
    {
        return $this->changeStatus('unlisted');
    }

    /**
     * Returns the Page Id
     *
     * @return string
     */
    public function id(): string
    {
        return $this->id;
    }

    /**
     * Compares the current object with the given page object
     *
     * @param Page $page
     * @return bool
     */
    public function is(Page $page): bool
    {
        return $this->id() === $page->id();
    }

    /**
     * Checks if the page is the current page
     *
     * @return bool
     */
    public function isActive(): bool
    {
        return $this->site()->page()->is($this);
    }

    /**
     * Checks if the page is the error page
     *
     * @return bool
     */
    public function isErrorPage(): bool
    {
        if ($errorPage = $this->site()->errorPage()) {
            return $errorPage->is($this);
        }

        return false;
    }

    /**
     * Checks if the page is the home page
     *
     * @return bool
     */
    public function isHomePage(): bool
    {
        if ($homePage = $this->site()->homePage()) {
            return $homePage->is($this);
        }

        return false;
    }

    /**
     * It's often required to check for the
     * home and error page to stop certain
     * actions. That's why there's a shortcut.
     *
     * @return boolean
     */
    public function isHomeOrErrorPage(): bool
    {
        return $this->isHomePage() === true || $this->isErrorPage() === true;
    }

    /**
     * Checks if the page is invisible
     *
     * @return bool
     */
    public function isInvisible(): bool
    {
        return $this->isVisible() === false;
    }

    /**
     * Checks if the page is open.
     * Open pages are either the current one
     * or descendants of the current one.
     *
     * @return bool
     */
    public function isOpen(): bool
    {
        return $this->isActive() || $this->site()->page()->parents()->has($this->id());
    }

    /**
     * Checks if the page is visible
     *
     * @return bool
     */
    public function isVisible(): bool
    {
        return $this->num() !== null;
    }

    /**
     * The page's base url for any files
     *
     * @return string
     */
    public function mediaUrl(): string
    {
        return $this->kirby()->url('media') . '/pages/' . $this->id();
    }

    /**
     * Creates a Page model if it has been registered
     *
     * @param string $name
     * @param array $props
     * @return Page
     */
    public static function model(string $name, array $props = [])
    {
        if ($class = (static::$models[$name] ?? null)) {
            $object = new $class($props);

            if (is_a($object, Page::class)) {
                return $object;
            }
        }

        return new static($props);
    }

    /**
     * Setter and getter for Page models
     *
     * @param null|array $models
     * @return array
     */
    public static function models(array $models = null): array
    {
        if ($models === null) {
            return static::$models;
        }

        return static::$models = $models;
    }

    /**
     * Returns the next invisible page if it exists
     *
     * @return self|null
     */
    public function nextInvisible()
    {
        return $this->nextAll()->invisible()->first();
    }

    /**
     * Returns the next visible page if it exists
     *
     * @return self|null
     */
    public function nextVisible()
    {
        return $this->nextAll()->visible()->first();
    }

    /**
     * Returns the sorting number
     *
     * @return integer|null
     */
    public function num()
    {
        return $this->num;
    }

    /**
     * Returns the parent Page object
     *
     * @return Page|null
     */
    public function parent()
    {
        return $this->parent;
    }

    /**
     * Returns a list of all parents and their parents recursively
     *
     * @return Pages
     */
    public function parents(): Pages
    {
        $parents = new Pages;
        $page    = $this->parent();

        while ($page !== null) {
            $parents->append($page->id(), $page);
            $page = $page->parent();
        }

        return $parents;
    }

    /**
     * Returns the previous invisible page
     *
     * @return self|null
     */
    public function prevInvisible()
    {
        return $this->prevAll()->invisible()->first();
    }

    /**
     * Returns the previous visible page
     *
     * @return self|null
     */
    public function prevVisible()
    {
        return $this->prevAll()->visible()->last();
    }

    /**
     * Returns the PageRules class instance
     * which is being used in various methods
     * to check for valid actions and input.
     *
     * @return PageRules
     */
    protected function rules()
    {
        return new PageRules();
    }

    /**
     * Sets the Blueprint object
     *
     * @param PageBlueprint|null $blueprint
     * @return self
     */
    protected function setBlueprint(PageBlueprint $blueprint = null): self
    {
        $this->blueprint = $blueprint;
        return $this;
    }

    /**
     * Sets the sorting number
     *
     * @param integer $num
     * @return self
     */
    protected function setNum(int $num = null): self
    {
        $this->num = $num === null ? $num : intval($num);
        return $this;
    }

    /**
     * Sets the parent page object
     *
     * @param Page|null $parent
     * @return self
     */
    protected function setParent(Page $parent = null): self
    {
        $this->parent = $parent;
        return $this;
    }

    /**
     * Sets the required Page slug
     *
     * @param string $slug
     * @return self
     */
    protected function setSlug(string $slug): self
    {
        $this->slug = Str::slug($slug);
        return $this;
    }

    /**
     * Sets the template name
     *
     * @param string $template
     * @return self
     */
    protected function setTemplate(string $template = null): self
    {
        $this->template = $template !== null ? Str::slug($template) : null;
        return $this;
    }

    /**
     * Sets the Url
     *
     * @param string $url
     * @return self
     */
    protected function setUrl(string $url = null): self
    {
        if (is_string($url) === true) {
            $url = rtrim($url, '/');
        }

        $this->url = $url;
        return $this;
    }

    /**
     * Returns the slug of the page
     *
     * @return string
     */
    public function slug(): string
    {
        return $this->slug;
    }

    /**
     * Changes the page number
     *
     * @param int $position
     * @return self
     */
    public function sort(int $position): self
    {
        return $this->changeStatus('listed', $position);
    }


    /**
     * Returns the template name
     *
     * @return string
     */
    public function template(): string
    {
        return $this->template = $this->template ?? $this->store()->template();
    }

    /**
     * Returns the title field or the slug as fallback
     *
     * @return ContentField
     */
    public function title(): ContentField
    {
        return $this->content()->get('title')->or($this->slug());
    }

    /**
     * Returns the UID of the page
     *
     * @see self::slug()
     * @return string
     */
    public function uid(): string
    {
        return $this->slug();
    }

    /**
     * Returns the Url
     *
     * @return string
     */
    public function url(): string
    {
        if (is_string($this->url) === true) {
            return $this->url;
        }

        if ($parent = $this->parent()) {
            return $this->url = $this->parent()->url() . '/' . $this->slug();
        }

        return $this->site()->url() . '/' . $this->slug();
    }

}
