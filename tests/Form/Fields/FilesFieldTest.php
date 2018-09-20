<?php

namespace Kirby\Form\Fields;

use Kirby\Cms\App;
use Kirby\Cms\Page;
use Kirby\Form\Field;

class FilesFieldTest extends TestCase
{

    public function setUp()
    {
        $this->app = new App([
            'roots' => [
                'index' => '/dev/null'
            ],
            'site' => [
                'children' => [
                    [
                        'slug' => 'test',
                        'files' => [
                            [
                                'filename' => 'a.jpg'
                            ],
                            [
                                'filename' => 'b.jpg'
                            ],
                            [
                                'filename' => 'c.jpg'
                            ]
                        ]
                    ]
                ]
            ]
        ]);
    }

    public function model()
    {
        return $this->app->page('test');
    }

    public function testDefaultProps()
    {
        $field = new Field('files', [
            'model' => $this->model()
        ]);

        $this->assertEquals('files', $field->type());
        $this->assertEquals('files', $field->name());
        $this->assertEquals([], $field->value());
        $this->assertEquals([], $field->default());
        $this->assertEquals('list', $field->layout());
        $this->assertEquals(null, $field->max());
        $this->assertEquals(true, $field->multiple());
        $this->assertTrue($field->save());
    }

    public function testValue()
    {
        $field = new Field('files', [
            'model' => $this->model(),
            'value' => [
                'test/a.jpg', // exists
                'test/b.jpg', // exists
                'test/e.jpg'  // does not exist
            ]
        ]);

        $value = $field->value();
        $ids   = array_column($value, 'id');

        $expected = [
            'test/a.jpg',
            'test/b.jpg'
        ];

        $this->assertEquals($expected, $ids);
    }

}
