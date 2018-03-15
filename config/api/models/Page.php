<?php

use Kirby\Cms\Form;
use Kirby\Cms\Page;

/**
 * Page
 */
return [
    'fields' => [
        'blueprint' => function (Page $page) {
            return $page->blueprint();
        },
        'children' => function (Page $page) {
            return $page->children();
        },
        'content' => function (Page $page) {
            return Form::for($page)->values();
        },
        'errors' => function (Page $page) {
            return $page->errors();
        },
        'files' => function (Page $page) {
            return $page->files();
        },
        'id' => function (Page $page) {
            return $page->id();
        },
        'next' => function (Page $page) {
            return $page->next();
        },
        'num' => function (Page $page) {
            return $page->num();
        },
        'options' => function (Page $page) {
            return $page->blueprint()->options()->toArray();
        },
        'parent' => function (Page $page) {
            return $page->parent();
        },
        'parents' => function (Page $page) {
            return $page->parents()->flip();
        },
        'prev' => function (Page $page) {
            return $page->prev();
        },
        'siblings' => function (Page $page) {
            return $page->siblings();
        },
        'slug' => function (Page $page) {
            return $page->slug();
        },
        'status' => function (Page $page) {
            return $page->status();
        },
        'template' => function (Page $page) {
            return $page->template();
        },
        'title' => function (Page $page) {
            return $page->title()->value();
        },
        'url' => function (Page $page) {
            return $page->url();
        },
    ],
    'type' => Page::class,
    'views' => [
        'compact' => [
            'id',
            'title',
            'url',
            'num'
        ],
        'default' => [
            'content',
            'id',
            'status',
            'num',
            'options',
            'parent' => 'compact',
            'slug',
            'template',
            'title',
            'url'
        ],
        'panel' => [
            'id',
            'blueprint',
            'status',
            'next'    => ['id', 'slug', 'title'],
            'parents' => ['id', 'slug', 'title'],
            'prev'    => ['id', 'slug', 'title'],
            'slug',
            'title',
            'url'
        ]
    ],
];
