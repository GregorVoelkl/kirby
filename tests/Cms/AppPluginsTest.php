<?php

namespace Kirby\Cms;

use Kirby\Form\Field;
use Kirby\Form\TextField;
use Kirby\Image\Image;

class DummyField extends TextField {}
class DummyPage  extends Page {}

class AppPluginsTest extends TestCase
{

    public function setUp()
    {
        App::removePlugins();
    }

    public function testBlueprint()
    {
        $kirby = new App([
            'blueprints' => [
                'pages/test' => $file = 'test.yml'
            ]
        ]);

        $this->assertEquals($file, $kirby->extension('blueprints', 'pages/test'));
    }

    public function testCollection()
    {
        $pages = new Pages([]);
        $kirby = new App([
            'collections' => [
                'test' => function () use ($pages) {
                    return $pages;
                }
            ],
        ]);

        $this->assertEquals($pages, $kirby->collection('test'));
    }

    public function testController()
    {
        $kirby = new App([
            'controllers' => [
                'test' => function () {
                    return ['foo' => 'bar'];
                }
            ]
        ]);

        $this->assertEquals(['foo' => 'bar'], $kirby->controller('test'));
    }

    public function testContentFieldMethod()
    {
        $kirby = new App([
            'fieldMethods' => [
                'test' => function () {
                    return 'test';
                }
            ]
        ]);

        $page = new Page(['slug' => 'test']);
        $this->assertEquals('test', $page->customField()->test());

        // reset methods
        ContentField::$methods = [];
    }

    public function testField()
    {
        $app = new App([
            'fields' => [
                'dummy' => DummyField::class
            ]
        ]);

        $field = Field::factory([
            'type' => 'dummy',
            'name' => 'dummy'
        ]);

        $this->assertInstanceOf(DummyField::class, $field);
    }

    public function testHook()
    {
        $phpUnit  = $this;

        $kirby = new App([
            'hooks' => [
                'testHook' => function ($message) use ($phpUnit, &$executed) {
                    $phpUnit->assertEquals('test', $message);
                }
            ]
        ]);

        $kirby->trigger('testHook', 'test');
    }

    public function testHooks()
    {
        $phpUnit  = $this;
        $executed = 0;

        $kirby = new App([
            'hooks' => [
                'testHook' => [
                    function ($message) use ($phpUnit, &$executed) {
                        $phpUnit->assertEquals('test', $message);
                        $executed++;
                    },
                    function ($message) use ($phpUnit, &$executed) {
                        $phpUnit->assertEquals('test', $message);
                        $executed++;
                    }
                ]
            ]
        ]);

        $kirby->trigger('testHook', 'test');
        $this->assertEquals(2, $executed);

    }

    public function testPageMethod()
    {
        $kirby = new App([
            'pageMethods' => [
                'test' => function () {
                    return 'test';
                }
            ]
        ]);

        $page = new Page(['slug' => 'test']);
        $this->assertEquals('test', $page->test());

        // reset methods
        Page::$methods = [];
    }

    public function testPageModel()
    {
        $kirby = new App([
            'pageModels' => [
                'dummy' => DummyPage::class
            ]
        ]);

        $page = Page::factory([
            'slug'     => 'test',
            'template' => 'dummy'
        ]);

        $this->assertInstanceOf(DummyPage::class, $page);
    }

    public function testOption()
    {
        $kirby = new App([
            'options' => [
                'testOption' => 'testValue'
            ]
        ]);

        $this->assertEquals('testValue', $kirby->option('testOption'));
    }

    public function testRoute()
    {
        $kirby = new App([
            'routes' => [
                [
                    'pattern' => 'test',
                    'action'  => function () {
                        return 'test';
                    }
                ]
            ]
        ]);

        $this->assertEquals('test', $kirby->call('test'));
    }

    public function testSnippet()
    {
        $kirby = new App([
            'snippets' => [
                'header' => $file = 'header.php'
            ]
        ]);

        $this->assertEquals($file, $kirby->extension('snippets', 'header'));
    }

    public function testTemplate()
    {
        $kirby = new App([
            'templates' => [
                'project' => $file = 'project.php'
            ]
        ]);

        $this->assertEquals($file, $kirby->extension('templates', 'project'));
    }

}
