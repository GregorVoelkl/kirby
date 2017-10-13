<?php

namespace Kirby\Cms;

use Closure;
use Kirby\Toolkit\A;
use Kirby\Data\Data;

class Schema
{

    protected $definitions;
    protected $model;
    protected $blueprint;

    public function definition(string $for): array
    {
        return $this->definitions[$for] ?? [];
    }

    public function __construct($model, array $blueprint, array $definitions)
    {
        $this->model       = $model;
        $this->definitions = $definitions;
        $this->blueprint   = $this->blueprint($blueprint);
    }

    public function blueprint(array $blueprint = null): array
    {

        if ($blueprint === null) {
            return $this->blueprint;
        }

        foreach ($blueprint['layout'] as $columnIndex => $column) {
            foreach ($column['sections'] as $sectionIndex => $section) {
                if ($section['type'] === 'fields') {
                    foreach ($section['fields'] as $fieldIndex => $field) {

                        $type       = $field['type'];
                        $definition = $this->definition($type);

                        if (is_a($definition['setup'] ?? null, Closure::class)) {
                            $field = array_merge($field, $definition['setup']($this->model, $field));

                            // TODO: nope, just nope!
                            $blueprint['layout'][$columnIndex]['sections'][$sectionIndex]['fields'][$fieldIndex] = $field;
                        }
                    }
                }
            }
        }

        return $blueprint;

    }

    public function layout(): array
    {
        return $this->blueprint()['layout'];
    }

    public function fields(): array
    {
        $fields = [];
        foreach ($this->layout() as $column) {
            foreach ($column['sections'] as $section) {
                if ($section['type'] === 'fields') {
                    $fields = array_merge($fields, $section['fields']);
                }
            }
        }

        // the title should always be included
        if (!isset($fields['title'])) {
            $fields['title'] = [
                'name' => 'title',
                'type' => 'text'
            ];
        }

        return $fields;
    }

    protected function apply(array $input, string $method)
    {
        $input  = array_change_key_case($input, CASE_LOWER);
        $output = [];

        foreach ($this->fields() as $field) {

            $key        = strtolower($field['name']);
            $definition = $this->definition($field['type']);
            $value      = $input[$key] ?? '';

            if (is_a($definition[$method] ?? null, Closure::class)) {
                $value = $definition[$method]($this->model, $key, $value, $field);
            }

            $output[$key] = $value;

        }

        return $output;
    }

    public function read(array $input): array
    {
        $output = $this->apply($input, 'read');
        return array_merge($input, $output);
    }

    public function write(array $input): array
    {
        $output = $this->apply($input, 'write');

        // only include the data that has been sent in the input array
        $output = A::get($output, array_keys($input));

        return $output;
    }

    public function toArray(): array
    {
        return $this->blueprint();
    }

}
