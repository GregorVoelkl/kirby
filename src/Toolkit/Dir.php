<?php

namespace Kirby\Toolkit;

use Exception;

class Dir
{

    /**
     * Get all subdirectories
     *
     * @param string $dir
     * @return array
     */
    public static function dirs(string $dir, array $ignore = null): array
    {
        return array_filter(static::read($dir, $ignore), 'is_dir');
    }

    /**
     * Get all files
     *
     * @param string $dir
     * @return array
     */
    public static function files(string $dir, array $ignore = null): array
    {
        return array_filter(static::read($dir, $ignore), 'is_file');
    }

    /**
     * Read the directory and all subdirectories
     *
     * @param string $dir
     * @param array $ignore
     * @return array
     */
    public static function index(string $dir, bool $recursive = false, array $ignore = null, string $path = null)
    {
        $result = [];
        $dir    = realpath($dir);
        $items  = static::read($dir);

        foreach ($items as $item) {
            $root     = $dir . '/' . $item;
            $entry    = $path !== null ? $path . '/' . $item: $item;
            $result[] = $entry;

            if ($recursive === true && is_dir($root) === true) {
                $result = array_merge($result, static::index($root, true, $ignore, $entry));
            }
        }

        return $result;
    }

    /**
     * Checks if the folder has any contents
     *
     * @return boolean
     */
    public static function isEmpty(string $dir): bool
    {
        return count(static::read($dir)) === 0;
    }

    /**
     * Creates a new directory
     *
     * @param   string  $dir The path for the new directory
     * @param   boolean $recursive Create all parent directories, which don't exist
     * @return  boolean True: the dir has been created, false: creating failed
     */
    public static function make(string $dir, bool $recursive = true): bool
    {
        if (empty($dir) === true) {
            return false;
        }

        if (is_dir($dir) === true) {
            return true;
        }

        $parent = dirname($dir);

        if ($recursive === true) {
            if (is_dir($parent) === false) {
                static::make($parent, true);
            }
        }

        if (is_writable($parent) === false) {
            throw new Exception(sprintf('The directory "%s" cannot be created', $dir));
        }

        return mkdir($dir);
    }

    /**
     * Moves a directory to a new location
     *
     * @param   string  $old The current path of the directory
     * @param   string  $new The desired path where the dir should be moved to
     * @return  boolean true: the directory has been moved, false: moving failed
     */
    public static function move(string $old, string $new): bool
    {
        if ($old === $new) {
            return true;
        }

        if (is_dir($old) === false || is_dir($new) === true) {
            return false;
        }

        return rename($old, $new);
    }

    /**
     * Reads all files from a directory and returns them as an array.
     * It skips unwanted invisible stuff.
     *
     * @param   string  $dir The path of directory
     * @param   array   $ignore Optional array with filenames, which should be ignored
     * @return  array   An array of filenames
     */
    public static function read(string $dir, array $ignore = null): array
    {
        if (is_dir($dir) === false) {
            return [];
        }

        if ($ignore === null) {
            $ignore = [
                '.',
                '..',
                '.DS_Store',
                '.gitignore',
                '.git',
                '.svn',
                '.htaccess',
                'Thumb.db',
                '@eaDir'
            ];
        }

        return (array)array_diff(scandir($dir), $ignore);
    }

    /**
     * Removes a folder including all containing files and folders
     *
     * @param string $dir
     * @return boolean
     */
    public static function remove(string $dir): bool
    {
        $dir = realpath($dir);

        if (is_dir($dir) === false) {
            return true;
        }

        foreach (scandir($dir) as $childName) {
            if (in_array($childName, ['.', '..']) === true) {
                continue;
            }

            $child = $dir . '/' . $childName;

            if (is_dir($child) === true) {
                static::remove($child);
            } else {
                F::remove($child);
            }
        }

        return rmdir($dir);
    }
}