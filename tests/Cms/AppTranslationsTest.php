<?php

namespace Kirby\Cms;

use Kirby\Exception\Exception;
use Kirby\Util\I18n;

class AppTranslationsTest extends TestCase
{

    public function app()
    {
        return new App([
            'users' => [
                [
                    'email' => 'admin@getkirby.com',
                    'language' => 'de_DE'
                ]
            ],
            'user' => 'admin@getkirby.com',
            'translations' => [
                'en_US' => [
                    'save'       => 'Save',
                    'reset'      => 'Reset',
                    'error.test' => 'This is a test error',
                ],
                'de_DE' => [
                    'save'       => 'Speichern',
                    'error.test' => 'Das ist ein Testfehler',
                ]
            ]
        ]);
    }

    public function testTranslations()
    {
        $app = new App([
            'roots' => [
                'translations' => __DIR__ . '/fixtures/translations'
            ]
        ]);

        $translations = $app->translations();

        $this->assertInstanceOf(Translations::class, $translations);

        $i = 0;

        foreach ($translations as $translation) {
            $this->assertInstanceOf(Translation::class, $translation);
            $i++;
        }

        $this->assertEquals($i, $translations->count());
    }

    public function testTranslateUserLanguage()
    {
        $app = $this->app();

        $this->assertEquals('Save', t('save'));
        $this->assertEquals('Reset', t('reset'));

        // the current user must be called once
        // before their language is activated.
        $app->user();

        $this->assertEquals('Speichern', t('save'));
        $this->assertEquals('Reset', t('reset'));

    }

    public function testExceptionWithoutLanguage()
    {
        $exception = new Exception([
            'key'      => 'test',
            'fallback' => $fallbackError = 'This would be the fallback error'
        ]);

        $this->assertEquals('error.test', $exception->getKey());
        $this->assertEquals($fallbackError, $exception->getMessage());
    }

    public function testExceptionWithDefaultLanguage()
    {
        $this->app();

        $exception = new Exception([
            'key' => 'test'
        ]);

        $this->assertEquals('This is a test error', $exception->getMessage());
    }

    public function testExceptionWithUserLanguage()
    {
        $app = $this->app();
        $app->user();

        $exception = new Exception([
            'key' => 'test'
        ]);

        $this->assertEquals('Das ist ein Testfehler', $exception->getMessage());
    }

    public function testExceptionPinned()
    {
        $app = $this->app();

        $exception = new Exception([
            'key'       => 'test',
            'fallback'  => 'This would be the fallback error',
            'translate' => false
        ]);

        $this->assertEquals('error.test', $exception->getKey());
        $this->assertEquals('This would be the fallback error', $exception->getMessage());
    }

    public function testExceptionInvalidKey()
    {
        $app = $this->app();

        $exception = new Exception([
            'key'      => 'no-real-key',
            'fallback' => 'This would be the fallback error'
        ]);

        $this->assertEquals('error.no-real-key', $exception->getKey());
        $this->assertEquals('This would be the fallback error', $exception->getMessage());
    }

}
