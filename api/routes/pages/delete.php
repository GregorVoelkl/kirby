<?php

use Kirby\Cms\Assets\PageAssets;

return [
    'pattern' => 'pages/(:all)',
    'method'  => 'DELETE',
    'action'  => function ($path) {
        return $this->site()->find($path)->delete();
    }
];
