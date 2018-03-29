<?php

namespace Kirby\Cms;

use Exception;
use Kirby\Data\Data;
use Kirby\Form\Fields;
use Kirby\Util\F;

/**
 * The Blueprint class converts an array from a
 * blueprint file into an object with a Kirby-style
 * chainable API for sections and everything
 * else
 *
 * @package   Kirby Cms
 * @author    Bastian Allgeier <bastian@getkirby.com>
 * @link      http://getkirby.com
 * @copyright Bastian Allgeier
 */
class Blueprint extends BlueprintObject
{

    /**
     * All registered blueprint extensions
     */
    public static $mixins = [];

    /**
     * Cache for the fields collection
     *
     * @var BlueprintCollection
     */
    protected $fields;

    /**
     * @var string
     */
    protected $icon;

    /**
     * The blueprint name
     *
     * @var string
     */
    protected $name;

    /**
     * Model option settings
     *
     * @var array
     */
    protected $options;

    /**
     * Cache for the sections collection
     *
     * @var BlueprintCollection
     */
    protected $sections;

    /**
     * @var BlueprintTabs
     */
    protected $tabs;

    /**
     * The blueprint title
     *
     * @var string
     */
    protected $title;

    /**
     * Creates a new Blueprint and converts
     * the input to always return a valid nested array
     * of options.
     *
     * @param array $props
     */
    public function __construct(array $props = [])
    {
        $props = static::extend($props);
        $props = BlueprintConverter::convertFieldsToSection($props);
        $props = BlueprintConverter::convertSectionsToColumns($props);
        $props = BlueprintConverter::convertColumnsToTabs($props);

        $this->tabs = new BlueprintTabs($this, $props['tabs'] ?? []);

        $this->setProperties($props);
    }

    /**
     * Prepare the BlueprintTabs object for the
     * Blueprint::toArray method
     *
     * @return array
     */
    protected function convertTabsToArray(): array
    {
        return $this->tabs()->toArray();
    }

    /**
     * Convert the options object to array
     *
     * @return array
     */
    protected function convertOptionsToArray(): array
    {
        return $this->options()->toArray();
    }

    /**
     * Extend blueprints props with a mixin
     *
     * @param array|string $props
     * @return array
     */
    public static function extend($props): array
    {
        if (is_string($props) === true) {
            $props = [
                'extends' => $props
            ];
        }

        if (isset($props['extends']) === false) {
            return $props;
        }

        if ($mixin = static::mixin($props['extends'])) {
            $props = array_replace_recursive($mixin, $props);
        }

        unset($props['extends']);

        return $props;
    }

    /**
     * Create a new blueprint for a model
     *
     * @param string $name
     * @param string $fallback
     * @param Model $model
     * @return self
     */
    public static function factory(string $name, string $fallback = null, Model $model)
    {
        try {
            $props = static::load($name);
        } catch (Exception $e) {
            $props = $fallback !== null ? static::load($fallback) : null;
        }

        if ($props === null) {
            return null;
        }

        // inject the parent model
        $props['model'] = $model;

        return new static($props);
    }


    /**
     * Returns a specific field from the blueprint
     *
     * @param string $name
     * @return BlueprintField|null
     */
    public function field(string $name)
    {
        if ($field = $this->fields()->find($name)) {
            return $field;
        }

        throw new Exception('The field could not be found');
    }

    /**
     * Returns a collection of all Fields
     * in the blueprint
     *
     * @return BlueprintCollection
     */
    public function fields()
    {
        if (is_a($this->fields, BlueprintCollection::class) === true) {
            return $this->fields;
        }

        $fields = new Fields;

        foreach ($this->sections() as $section) {
            // skip sections without fields
            if (method_exists($section, 'fields') === false) {
                continue;
            }

            foreach ($section->fields() as $field) {
                $fields->set($field->name(), $field);
            }
        }

        return $this->fields = $fields;
    }


    /**
     * Find a blueprint by name
     *
     * @param string $name
     * @return string|array
     */
    public static function find(string $name)
    {
        $kirby = App::instance();
        $root  = $kirby->root('blueprints');
        $file  = $root . '/' . $name . '.yml';

        if (F::exists($file, $root) === true) {
            return $file;
        }

        if ($blueprint = $kirby->extension('blueprints', $name)) {
            return $blueprint;
        }

        throw new Exception(sprintf('The blueprint "%s" could not be loaded', $name));
    }

    /**
     * @return string|null
     */
    public function icon()
    {
        return $this->icon;
    }

    /**
     * Checks if this is the default blueprint
     *
     * @return bool
     */
    public function isDefault(): bool
    {
        return $this->name() === 'default';
    }

    /**
     * Load a blueprint mixin from file or extension
     *
     * @param string $path
     * @return array
     */
    public static function mixin(string $path): array
    {
        if (isset(static::$mixins[$path]) === true) {
            return static::$mixins[$path];
        }

        try {
            return static::$mixins[$path] = static::load($path);
        } catch (Exception $e) {
            if ($mixin = App::instance()->extension('blueprints', $path)) {
                return static::$mixins[$path] = $mixin;
            }

            throw new Exception(sprintf('The mixin "%s" does not exist', $path));
        }
    }

    /**
     * Loads a blueprint from file or array
     *
     * @param string $name
     * @param string $fallback
     * @param Model $model
     * @return self
     */
    public static function load(string $name)
    {
        $props = static::find($name);

        if (is_array($props) === true) {
            return $props;
        }

        $file  = $props;
        $props = Data::read($file);

        // inject the filename as name if no name is set
        $props['name'] = $props['name'] ?? F::name($file);

        return $props;
    }

    /**
     * Returns the Blueprint name
     *
     * @return string
     */
    public function name(): string
    {
        return $this->name;
    }

    /**
     * Returns all model options
     *
     * @return array
     */
    public function options()
    {
        return $this->options ?? new BlueprintOptions($this->model(), $this->options);
    }

    /**
     * Returns a specific BlueprintSection object
     * by name, if it exists
     *
     * @param string $name
     * @return BlueprintSection|null
     */
    public function section(string $name)
    {
        if ($section = $this->sections()->find($name)) {
            return $section;
        }

        throw new Exception(sprintf('The section "%s" could not be found', $name));
    }

    /**
     * Returns a collection of all sections
     *
     * @return BlueprintCollection
     */
    public function sections(): BlueprintCollection
    {
        if (is_a($this->sections, BlueprintCollection::class) === true) {
            return $this->sections;
        }

        $sections = new BlueprintCollection;

        foreach ((array)$this->sections as $name => $props) {
            // section extensions
            $props = Blueprint::extend($props);

            // use the key as name
            $props['name'] = $name;

            // pass down the model
            $props['model'] = $this->model();

            $section = BlueprintSection::factory($props);
            $sections->set($section->id(), $section);
        }

        return $this->sections = $sections;
    }

    /**
     * @param string $icon
     * @return self
     */
    protected function setIcon(string $icon = null): self
    {
        $this->icon = $icon;
        return $this;
    }

    /**
     * @param string $name
     * @return self
     */
    protected function setName(string $name): self
    {
        $this->name = $name;
        return $this;
    }

    /**
     * @param array $options
     * @return self
     */
    protected function setOptions(array $options = null): self
    {
        $this->options = $options;
        return $this;
    }

    /**
     * @param array $sections
     * @return self
     */
    protected function setSections(array $sections = null): self
    {
        $this->sections = $sections;
        return $this;
    }

    /**
     * @param string|array $title
     * @return self
     */
    protected function setTitle($title): self
    {
        $this->title = $this->i18n($title);
        return $this;
    }

    /**
     * @return BlueprintTabs
     */
    public function tabs(): BlueprintTabs
    {
        return $this->tabs;
    }

    /**
     * Returns the Blueprint title
     *
     * @return string
     */
    public function title(): string
    {
        return $this->title;
    }

}
