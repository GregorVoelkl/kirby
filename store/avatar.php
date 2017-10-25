<?php

use Kirby\Cms\Avatar;
use Kirby\Cms\User;

return [
    'avatar.create' => function (User $user, string $source): Avatar {

        if (file_exists($source) === false) {
            throw new Exception(sprintf('The source file "%s" does not exist', $source));
        }

        $avatar = new Avatar([
            'root' => $user->root() . '/profile.jpg',
            'url'  => $this->media()->url($user)  . '/profile.jpg',
            'user' => $user
        ]);

        // delete all prior versions of the avatar
        $this->media()->delete($avatar->user(), $avatar);

        // copy the source to the final location
        copy($source, $avatar->root());

        // create a new public version of the avatar
        $this->media()->create($avatar->user(), $avatar);

        return $avatar;

    },
    'avatar.replace' => function (Avatar $avatar, string $source): Avatar {
        return Avatar::create($avatar->user(), $source);
    },
    'avatar.delete' => function (Avatar $avatar): bool {

        // delete all versions of the avatar
        $this->media()->delete($avatar->user(), $avatar);

        // delete the original
        if (file_exists($avatar->root())) {
            unlink($avatar->root());
        }

        return true;

    }
];
