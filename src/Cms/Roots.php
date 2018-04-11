<?php

namespace Kirby\Cms;

/**
 * Registry for all system-relevant directory roots
 *
 * @package   Kirby Cms
 * @author    Bastian Allgeier <bastian@getkirby.com>
 * @link      http://getkirby.com
 * @copyright Bastian Allgeier
 */
class Roots extends Ingredients
{

    protected $accounts;
    protected $blueprints;
    protected $cache;
    protected $collections;
    protected $config;
    protected $content;
    protected $controllers;
    protected $emails;
    protected $env;
    protected $index;
    protected $kirby;
    protected $loaders;
    protected $media;
    protected $panel;
    protected $plugins;
    protected $roles;
    protected $sessions;
    protected $site;
    protected $snippets;
    protected $templates;

    public function accounts(): string
    {
        return $this->accounts = $this->accounts ?? $this->site() . '/accounts';
    }

    public function blueprints(): string
    {
        return $this->blueprints = $this->blueprints ?? $this->site() . '/blueprints';
    }

    public function cache(): string
    {
        return $this->cache = $this->cache ?? $this->site() . '/cache';
    }

    public function collections(): string
    {
        return $this->collections = $this->collections ?? $this->site() . '/collections';
    }

    public function config(): string
    {
        return $this->config = $this->config ?? $this->site() . '/config';
    }

    public function content(): string
    {
        return $this->content = $this->content ?? $this->index() . '/content';
    }

    public function controllers(): string
    {
        return $this->controllers = $this->controllers ?? $this->site() . '/controllers';
    }

    public function emails(): string
    {
        return $this->emails = $this->emails ?? $this->site() . '/emails';
    }

    public function env(): string
    {
        return $this->env = $this->env ?? $this->site();
    }

    public function index(): string
    {
        return $this->index = $this->index ?? realpath(__DIR__ . '/../../../');
    }

    public function kirby(): string
    {
        return $this->kirby = $this->kirby ?? realpath(__DIR__ . '/../../');
    }

    public function loaders(): string
    {
        return $this->loaders = $this->loaders ?? $this->kirby() . '/loaders';
    }

    public function translations(): string
    {
        return $this->translations = $this->translations ?? $this->kirby() . '/translations';
    }

    public function media(): string
    {
        return $this->media = $this->media ?? $this->index() . '/media';
    }

    public function panel(): string
    {
        return $this->panel = $this->panel ?? $this->index() . '/panel';
    }

    public function plugins(): string
    {
        return $this->plugins = $this->plugins ?? $this->site() . '/plugins';
    }

    public function roles(): string
    {
        return $this->roles = $this->roles ?? $this->blueprints() . '/users';
    }

    public function sessions(): string
    {
        return $this->sessions = $this->sessions ?? $this->site() . '/sessions';
    }

    public function site(): string
    {
        return $this->site = $this->site ?? $this->index() . '/site';
    }

    public function snippets(): string
    {
        return $this->snippets = $this->snippets ?? $this->site() . '/snippets';
    }

    public function templates(): string
    {
        return $this->templates = $this->templates ?? $this->site() . '/templates';
    }

}

