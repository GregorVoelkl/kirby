<?php

return function ($file) {

    $output = [
        'id'         => $file->id(),
        'filename'   => $file->filename(),
        'url'        => $file->url(),
        'mime'       => $file->mime(),
        'meta'       => $file->meta()->toArray(),
        'parent'     => $file->page() ? $file->page()->id(): null,
        'niceSize'   => $file->niceSize(),
        'dimensions' => '1024 x 768',
        'created'    => date('d.m.Y - H:i:s', filectime($file->root())),
        'next'       => null,
        'prev'       => null
    ];

    if ($prev = $file->prev()) {
        $output['prev'] = $prev->filename();
    }

    if ($next = $file->next()) {
        $output['next'] = $next->filename();
    }

    return $output;

};
