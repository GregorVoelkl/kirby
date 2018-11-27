<?php

$aliases = [

    // cms classes
    'dir'        => 'Kirby\Cms\Dir',
    'field'      => 'Kirby\Cms\Field',
    'file'       => 'Kirby\Cms\File',
    'files'      => 'Kirby\Cms\Files',
    'html'       => 'Kirby\Cms\Html',
    'kirby'      => 'Kirby\Cms\App',
    'page'       => 'Kirby\Cms\Page',
    'pages'      => 'Kirby\Cms\Pages',
    'pagination' => 'Kirby\Cms\Pagination',
    'response'   => 'Kirby\Cms\Response',
    'site'       => 'Kirby\Cms\Site',
    'structure'  => 'Kirby\Cms\Structure',
    'url'        => 'Kirby\Cms\Url',
    'user'       => 'Kirby\Cms\User',
    'users'      => 'Kirby\Cms\Users',

    // data handler
    'data'      => 'Kirby\Data\Data',
    'json'      => 'Kirby\Data\Json',
    'yaml'      => 'Kirby\Data\Yaml',

    // http classes
    'header'     => 'Kirby\Http\Header',

    // image classes
    'dimensions' => 'Kirby\Image\Dimensions',

    // toolkit classes
    'a'          => 'Kirby\Toolkit\A',
    'c'          => 'Kirby\Toolkit\Config',
    'config'     => 'Kirby\Toolkit\Config',
    'collection' => 'Kirby\Toolkit\Collection',
    'escape'     => 'Kirby\Toolkit\Escape',
    'f'          => 'Kirby\Toolkit\F',
    'i18n'       => 'Kirby\Toolkit\I18n',
    'obj'        => 'Kirby\Toolkit\Obj',
    'remote'     => 'Kirby\Toolkit\Remote',
    'str'        => 'Kirby\Toolkit\Str',
    'tpl'        => 'Kirby\Toolkit\Tpl',
    'v'          => 'Kirby\Toolkit\V',
    'xml'        => 'Kirby\Toolkit\Xml'
];

spl_autoload_register(function ($class) use ($aliases) {

    $class = strtolower($class);

    if (isset($aliases[$class]) === true) {
        class_alias($aliases[$class], $class);
    }

});
