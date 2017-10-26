<?php

use Kirby\Cms\File;

return [
    'pattern' => 'pages/(:all)/files',
    'method'  => ['POST', 'OPTIONS'],
    'action'  => function ($path) {

        $page    = $this->site()->find($path);
        $request = $this->request();

        if ($request->is('OPTIONS')) {
            return true;
        }

        foreach ($request->files()->data() as $file) {
            File::create($page, $file['tmp_name'], $file['name']);
        }

        return true;

    }
];
