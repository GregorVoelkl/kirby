<?php

namespace Kirby\Cms;

use Kirby\Exception\InvalidArgumentException;

/**
 * The Structure class wraps
 * array data into a nicely chainable
 * collection with objects and Kirby-style
 * content with fields. The Structure class
 * is the heart and soul of our yaml conversion
 * method for pages.
 *
 * @package   Kirby Cms
 * @author    Bastian Allgeier <bastian@getkirby.com>
 * @link      http://getkirby.com
 * @copyright Bastian Allgeier
 */
class Structure extends Collection
{

    /**
     * The internal setter for collection items.
     * This makes sure that nothing unexpected ends
     * up in the collection. You can pass arrays or
     * StructureObjects
     *
     * @param string $id
     * @param array $object
     */
    public function __set(string $id, $props)
    {
        if (is_array($props) !== true) {
            throw new InvalidArgumentException('Please define the structure object props as array');
        }

        $object = new StructureObject([
            'content'    => $props,
            'id'         => $props['id'] ?? $id,
            'parent'     => $this->parent,
            'structure'  => $this
        ]);

        return parent::__set($object->id(), $object);
    }
}
