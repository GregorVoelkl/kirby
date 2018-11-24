<?php

namespace Kirby\Cms;

use Kirby\Toolkit\Dir;
use Kirby\Toolkit\F;
use Kirby\Toolkit\Str;

/**
 * The System class gathers all information
 * about the server, PHP and other environment
 * parameters and checks for a valid setup.
 *
 * This is mostly used by the panel installer
 * to check if the panel can be installed at all.
 */
class System
{

    /**
     * @var App
     */
    protected $app;

    /**
     * @param App $app
     */
    public function __construct(App $app)
    {
        $this->app = $app;

        // try to create all folders that could be missing
        $this->init();
    }

    /**
     * Improved var_dump output
     *
     * @return array
     */
    public function __debuginfo(): array
    {
        return $this->toArray();
    }

    /**
     * Get an status array of all checks
     *
     * @return array
     */
    public function status(): array
    {
        return [
            'accounts'  => $this->accounts(),
            'content'   => $this->content(),
            'curl'      => $this->curl(),
            'mbstring'  => $this->mbstring(),
            'media'     => $this->media(),
            'php'       => $this->php(),
            'server'    => $this->server(),
        ];
    }

    /**
     * Check for a writable accounts folder
     *
     * @return boolean
     */
    public function accounts(): bool
    {
        return is_writable($this->app->root('accounts'));
    }

    /**
     * Check for a writable content folder
     *
     * @return boolean
     */
    public function content(): bool
    {
        return is_writable($this->app->root('content'));
    }

    /**
     * Check for an existing curl extension
     *
     * @return boolean
     */
    public function curl(): bool
    {
        return extension_loaded('curl');
    }

    /**
     * Create the most important folders
     * if they don't exist yet
     *
     * @return void
     */
    public function init()
    {
        Dir::make($this->app->root('accounts'));
        Dir::make($this->app->root('content'));
        Dir::make($this->app->root('media'));
    }

    /**
     * Check if Kirby is already installed
     *
     * @return boolean
     */
    public function isInstalled(): bool
    {
        return $this->app->users()->count() > 0;
    }

    /**
     * Check if this is a local installation
     *
     * @return boolean
     */
    public function isLocal(): bool
    {
        $server = $this->app->server();
        $host   = $server->host();

        if ($host === 'localhost') {
            return true;
        }

        if (in_array($server->address(), ['::1', '127.0.0.1', '0.0.0.0']) === true) {
            return true;
        }

        if (Str::endsWith($host, '.dev') === true) {
            return true;
        }

        if (Str::endsWith($host, '.local') === true) {
            return true;
        }

        if (Str::endsWith($host, '.test') === true) {
            return true;
        }

        return false;
    }

    /**
     * Check if all tests pass
     *
     * @return boolean
     */
    public function isOk(): bool
    {
        return in_array(false, array_values($this->status()), true) === false;
    }

    /**
     * Loads the license file and returns
     * the license information if available
     *
     * @return array|false
     */
    public function license()
    {
        $file = $this->app->root('config') . '/.license';

        if (file_exists($file) === false) {
            return false;
        }

        return F::read($file);
    }

    /**
     * Check for an existing mbstring extension
     *
     * @return boolean
     */
    public function mbString(): bool
    {
        return extension_loaded('mbstring');
    }

    /**
     * Check for a writable media folder
     *
     * @return boolean
     */
    public function media(): bool
    {
        return is_writable($this->app->root('media'));
    }

    /**
     * Check for a valid PHP version
     *
     * @return boolean
     */
    public function php(): bool
    {
        return version_compare(phpversion(), '7.1.0', '>');
    }

    /**
     * Validates the license key
     * and adds it to the .license file in the config
     * folder if possible.
     *
     * @param string $license
     * @return boolean
     */
    public function register(string $license): bool
    {
        $file = $this->app->root('config') . '/.license';
        return F::write($file, $license);
    }

    /**
     * Check for a valid server environment
     *
     * @return boolean
     */
    public function server(): bool
    {
        $servers = [
            'apache',
            'caddy',
            'litespeed',
            'nginx',
            'php'
        ];

        $software = $_SERVER['SERVER_SOFTWARE'] ?? null;

        return preg_match('!(' . implode('|', $servers) . ')!i', $software) > 0;
    }

    /**
     * Upgrade to the new folder separator
     *
     * @param string $root
     * @return void
     */
    public static function upgradeContent(string $root)
    {
        $index = Dir::read($root);

        foreach ($index as $dir) {
            $oldRoot = $root . '/' . $dir;
            $newRoot = preg_replace('!\/([0-9]+)\-!', '/$1_', $oldRoot);

            if (is_dir($oldRoot) === true) {
                Dir::move($oldRoot, $newRoot);
                static::upgradeContent($newRoot);
            }
        }
    }

    /**
     * Return the status as array
     *
     * @return array
     */
    public function toArray(): array
    {
        return $this->status();
    }
}
