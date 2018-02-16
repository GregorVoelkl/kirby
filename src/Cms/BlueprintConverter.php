<?php

namespace Kirby\Cms;

class BlueprintConverter
{

    public static function convertColumnsToTabs(array $data): array
    {
        if (isset($data['columns']) === false || isset($data['tabs']) === true) {
            return $data;
        }

        $data['tabs'] = [
            'main' => [
                'label'   => 'Main',
                'columns' => $data['columns']
            ]
        ];

        unset($data['columns']);

        return $data;
    }

    public static function convertFieldsToSection(array $data): array
    {
        if (isset($data['fields']) === false) {
            return $data;
        }

        $data['sections'] = [
            'fields' => [
                'type'   => 'fields',
                'fields' => $data['fields']
            ]
        ];

        unset($data['fields']);

        return $data;
    }

}
