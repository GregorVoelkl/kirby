<?php

namespace Kirby\Cms;

use Exception;
use Kirby\Util\Str;

/**
 * The Site class is the root element
 * for any site with pages. It represents
 * the main content folder with its site.txt
 *
 * @package   Kirby Cms
 * @author    Bastian Allgeier <bastian@getkirby.com>
 * @link      http://getkirby.com
 * @copyright Bastian Allgeier
 */
class Site extends Model
{

    use SiteActions;

    use HasChildren;
    use HasContent;
    use HasFiles;
    use HasStore;

    protected static $toArray = [
        'children',
        'content',
        'errorPage',
        'files',
        'homePage',
        'url'
    ];

    /**
     * The SiteBlueprint object
     *
     * @var SiteBlueprint
     */
    protected $blueprint;

    /**
     * The error page object
     *
     * @var Page
     */
    protected $errorPage;

    /**
     * The id of the error page, which is
     * fetched in the errorPage method
     *
     * @var string
     */
    protected $errorPageId = 'error';

    /**
     * The files collection
     *
     * @var Files
     */
    protected $files;

    /**
     * The home page object
     *
     * @var Page
     */
    protected $homePage;

    /**
     * The id of the home page, which is
     * fetched in the errorPage method
     *
     * @var string
     */
    protected $homePageId = 'home';

    /**
     * The current page object
     *
     * @var Page
     */
    protected $page;

    /**
     * The page url
     *
     * @var string
     */
    protected $url = '/';

    /**
     * Creates a new Site object
     *
     * @param array $props
     */
    public function __construct(array $props = [])
    {
        $this->setProperties($props);
    }

    /**
     * @return SiteBlueprint
     */
    public function blueprint(): SiteBlueprint
    {
        if (is_a($this->blueprint, SiteBlueprint::class) === true) {
            return $this->blueprint;
        }

        return $this->blueprint = SiteBlueprint::load('site', null, $this);
    }

    /**
     * Returns the Children collection
     *
     * @return Pages
     */
    public function children()
    {
        if (is_a($this->children, Pages::class) === true) {
            return $this->children;
        }

        return $this->children = $this->store()->children();
    }

    protected function defaultStore()
    {
        return SiteStoreDefault::class;
    }

    /**
     * Returns the error page object
     *
     * @return Page
     */
    public function errorPage()
    {
        if (is_a($this->errorPage, Page::class) === true) {
            return $this->errorPage;
        }

        return $this->errorPage = $this->find($this->errorPageId());
    }

    /**
     * Returns the global error page id
     *
     * @return string
     */
    public function errorPageId(): string
    {
        return $this->errorPageId ?? 'error';
    }

    /**
     * Returns the Files collection
     *
     * @return Files
     */
    public function files()
    {
        if (is_a($this->files, Files::class) === true) {
            return $this->files;
        }

        return $this->files = $this->store()->files();
    }

    /**
     * Returns the home page object
     *
     * @return Page
     */
    public function homePage()
    {
        if (is_a($this->homePage, Page::class) === true) {
            return $this->homePage;
        }

        return $this->homePage ?? $this->find($this->homePageId());
    }

    /**
     * Returns the global home page id
     *
     * @return string
     */
    public function homePageId(): string
    {
        return $this->homePageId ?? 'home';
    }

    /**
     * The site's base url for any files
     *
     * @return string
     */
    public function mediaUrl(): string
    {
        return $this->kirby()->url('media') . '/site';
    }

    /**
     * Returns the current page if `$path`
     * is not specified. Otherwise it will try
     * to find a page by the given path.
     *
     * If no current page is set with the page
     * prop, the home page will be returned if
     * it can be found. (see `Site::homePage()`)
     *
     * @param  string $path
     * @return Page|null
     */
    public function page(string $path = null)
    {
        if ($path !== null) {
            return $this->find($path);
        }

        if (is_a($this->page, Page::class) === true) {
            return $this->page;
        }

        return $this->page = $this->homePage();
    }

    /**
     * Alias for `Site::children()`
     *
     * @return Pages
     */
    public function pages(): Pages
    {
        return $this->children();
    }

    /**
     * Returns the absolute path to the content directory
     *
     * @return string
     */
    public function root(): string
    {
        return $this->kirby()->root('content');
    }

    /**
     * Returns the SiteRules class instance
     * which is being used in various methods
     * to check for valid actions and input.
     *
     * @return SiteRules
     */
    protected function rules()
    {
        return new SiteRules();
    }

    /**
     * Sets the Blueprint object
     *
     * @param SiteBlueprint|null $blueprint
     * @return self
     */
    protected function setBlueprint(SiteBlueprint $blueprint = null): self
    {
        $this->blueprint = $blueprint;
        return $this;
    }

    /**
     * Sets the error page object
     *
     * @param Page|null $errorPage
     * @return self
     */
    public function setErrorPage(Page $errorPage = null): self
    {
        if (is_a($this->errorPage, Page::class) === true) {
            throw new Exception('The error page has already been set');
        }

        $this->errorPage = $errorPage;
        return $this;
    }

    /**
     * Sets the id of the error page, which
     * is used in the errorPage method
     * to get the default error page if nothing
     * else is set.
     *
     * @param string $id
     * @return self
     */
    protected function setErrorPageId(string $id = 'error'): self
    {
        $this->errorPageId = $id;
        return $this;
    }

    /**
     * Sets the home page object
     *
     * @param Page|null $homePage
     * @return self
     */
    public function setHomePage(Page $homePage = null): self
    {
        if (is_a($this->homePage, Page::class) === true) {
            throw new Exception('The home page has already been set');
        }

        $this->homePage = $homePage;
        return $this;
    }

    /**
     * Sets the id of the home page, which
     * is used in the homePage method
     * to get the default home page if nothing
     * else is set.
     *
     * @param string $id
     * @return self
     */
    protected function setHomePageId(string $id = 'home'): self
    {
        $this->homePageId = $id;
        return $this;
    }

    /**
     * Sets the current page object
     *
     * @param Page|null $page
     * @return self
     */
    public function setPage(Page $page = null): self
    {
        $this->page = $page;
        return $this;
    }

    /**
     * Sets the Url
     *
     * @param string $url
     * @return void
     */
    protected function setUrl(string $url = null): self
    {
        $this->url = rtrim($url, '/');
        return $this;
    }

    /**
     * Returns the Url
     *
     * @return string
     */
    public function url()
    {
        return $this->url ?? '/';
    }

    /**
     * Sets the current page by
     * id or page object and
     * returns the current page
     *
     * @param  string|Page $page
     * @return Page
     */
    public function visit($page): Page
    {
        // convert ids to a Page object
        if (is_string($page)) {
            $page = $this->find($page);
        }

        // handle invalid pages
        if (is_a($page, Page::class) === false) {
            throw new Exception('Invalid page object');
        }

        // set the current active page
        $this->setPage($page);

        // return the page
        return $page;
    }

}
