<?php

namespace Kirby\Toolkit;

use Closure;
use Exception;

class Collection extends Iterator
{
    public static $filters = [
        'between'   => 'between',
        '*='        => 'contains',
        '!*='       => 'notContains',
        '$='        => 'endsWith',
        '=='        => 'same',
        'in'        => 'in',
        '<'         => 'less',
        '<='        => 'max',
        '>'         => 'more',
        '>='        => 'min',
        '!='        => 'different',
        'not in'    => 'notIn',
        '^='        => 'startsWith',
        'match'     => 'match',
        'maxLength' => 'maxLength',
        'minLength' => 'minLength',
        'maxWords'  => 'maxWords',
        'minWords'  => 'minWords',
    ];

    /**
     * Pagination object
     * @var Pagination
     */
    protected $pagination;

    /**
     * Magic getter function
     *
     * @param  string $key
     * @param  mixed  $arguments
     * @return mixed
     */
    public function __call(string $key, $arguments)
    {
        return $this->__get($key);
    }

    /**
     * Constructor
     *
     * @param array $data
     */
    public function __construct(array $data = [])
    {
        $this->set($data);
    }

    /**
     * Improve var_dump() output
     *
     * @return array
     */
    public function __debuginfo(): array
    {
        return $this->keys();
    }

    /**
     * Low-level getter for items
     *
     * @param  mixed $key
     * @return mixed
     */
    public function __get($key)
    {
        if (isset($this->data[$key])) {
            return $this->data[$key];
        }

        return $this->data[strtolower($key)] ?? null;
    }

    /**
     * Low-level setter for collection items
     *
     * @param string  $key    string or array
     * @param mixed   $value
     */
    public function __set(string $key, $value)
    {
        $this->data[strtolower($key)] = $value;
        return $this;
    }

    /**
     * Makes it possible to echo the entire object
     *
     * @return string
     */
    public function __toString(): string
    {
        return $this->toString();
    }

    /**
     * Low-level item remover
     *
     * @param mixed $key the name of the key
     */
    public function __unset($key)
    {
        unset($this->data[$key]);
    }

    /**
     * Appends an element to the data array
     *
     * @param  mixed      $key
     * @param  mixed      $item
     * @return Collection
     */
    public function append($key, $item): self
    {
        return $this->set($key, $item);
    }

    /**
     * Creates chunks of the same size
     * The last chunk may be smaller
     *
     * @param  int        $size  Number of items per chunk
     * @return Collection        A new collection with an item for each chunk and
     *                           a sub collection in each chunk
     */
    public function chunk(int $size): self
    {
        // create a multidimensional array that is chunked with the given
        // chunk size keep keys of the items
        $chunks = array_chunk($this->data, $size, true);

        // convert each chunk to a subcollection
        $collection = [];

        foreach ($chunks as $items) {
            // we clone $this instead of creating a new object because
            // different objects may have different constructors
            $clone = clone $this;
            $clone->data = $items;

            $collection[] = $clone;
        }

        // convert the array of chunks to a collection
        $result = clone $this;
        $result->data = $collection;

        return $result;
    }

    public function clone()
    {
        return clone $this;
    }

    /**
     * Getter and setter for the collection data
     *
     * @param  array $data
     * @return array|Collection
     */
    public function data(array $data = null)
    {
        if ($data === null) {
            return $this->data;
        }

        // clear all previous data
        $this->data = [];

        // overwrite the data array
        $this->data = $data;

        return $this;
    }

    /**
     * Clone and remove all items from the collection
     *
     * @return Collection
     */
    public function empty()
    {
        $collection = clone $this;
        $collection->data = [];

        return $collection;
    }

    /**
     * Adds all items to the collection
     *
     * @return Collection
     */
    public function extend($items): self
    {
        $collection = clone $this;
        return $collection->set($items);
    }

    public function filter($filter): self
    {
        if (is_array($filter)) {
            $collection = $this;

            foreach ($filter as $arguments) {
                $collection = $collection->filterBy(...$arguments);
            }

            return $collection;
        } elseif (is_a($filter, 'Closure')) {
            $collection = clone $this;
            $collection->data = array_filter($this->data, $filter);

            return $collection;
        }

        throw new Exception('The filter method needs either an array of filterBy rules or a closure function to be passed as parameter.');
    }

    public function filterBy(string $attribute, $operator, ...$filter): self
    {
        if (count(func_get_args()) === 2) {
            $filter   = [$operator];
            $operator = '==';
        }

        if (!isset(static::$filters[$operator])) {
            throw new Exception('Missing filter for operator: ' . $operator);
        }

        $filterMethod = static::$filters[$operator];
        $collection   = clone $this;

        foreach ($this->data as $key => $item) {
            if (V::$filterMethod($this->getAttribute($item, $attribute), ...$filter) !== true) {
                unset($collection->data[$key]);
            }
        }

        return $collection;
    }

    public function find(...$keys)
    {
        if (count($keys) === 1) {
            return $this->findByKey($keys[0]);
        }

        $result = [];

        foreach ($keys as $key) {
            if ($item = $this->findByKey($key)) {
                $result[$key] = $item;
            }
        }

        $collection = clone $this;
        return $collection->data = $result;
    }

    public function findBy(string $attribute, $value)
    {
        foreach ($this->data as $key => $item) {
            if ($this->getAttribute($item, $attribute) == $value) {
                return $item;
            }
        }
        return null;
    }

    public function findByKey($key)
    {
        return $this->get($key);
    }

    /**
     * Returns the first element from the array
     *
     * @return mixed
     */
    public function first()
    {
        $array = $this->data;
        return array_shift($array);
    }

    /**
     * Returns the array in reverse order
     *
     * @return Collection
     */
    public function flip(): self
    {
        $collection = clone $this;
        $collection->data = array_reverse($this->data, true);
        return $collection;
    }

    /**
     * Getter
     *
     * @param  mixed  $key
     * @param  mixed  $default
     * @return mixed
     */
    public function get($key, $default = null)
    {
        return $this->__get($key) ?? $default;
    }

    public function getAttribute($item, $attribute)
    {
        return $this->{'getAttributeFrom' . gettype($item)}($item, $attribute);
    }

    protected function getAttributeFromArray(array $array, string $attribute)
    {
        return $array[$attribute] ?? null;
    }

    protected function getAttributeFromObject($object, string $attribute)
    {
        return $object->{$attribute}();
    }

    public function isEven(): bool
    {
        return $this->count() % 2 === 0;
    }

    public function isOdd(): bool
    {
        return $this->count() % 2 !== 0;
    }

    /**
     * Returns the last element from the array
     *
     * @return mixed
     */
    public function last()
    {
        $array = $this->data;
        return array_pop($array);
    }

    /**
     * Returns a new object with a limited number of elements
     *
     * @param  int        $limit  The number of elements to return
     * @return Collection
     */
    public function limit(int $limit): self
    {
        return $this->slice(0, $limit);
    }

    /**
     * Map a function to each item in the collection
     *
     * @param  callable $callback
     * @return Collection
     */
    public function map(callable $callback): self
    {
        $this->data = array_map($callback, $this->data);
        return $this;
    }

    /**
     * Returns the nth element from the array
     *
     * @param integer $n
     * @return mixed
     */
    public function nth(int $n)
    {
        return array_values($this->data)[$n] ?? null;
    }

    /**
     * Returns a Collection without the given element(s)
     *
     * @param  args    any number of keys, passed as individual arguments
     * @return Collection
     */
    public function not(...$keys)
    {
        $collection = clone $this;
        foreach ($keys as $key) {
            unset($collection->$key);
        }
        return $collection;
    }

    /**
     * Returns a new object starting from the given offset
     *
     * @param  int        $offset  The index to start from
     * @return Collection
     */
    public function offset(int $offset): self
    {
        return $this->slice($offset);
    }

    /**
     * Add pagination
     *
     * @param  int        $limit  number of items per page
     * @param  int        $page   optional page number to return
     * @return Collection         a sliced set of data
     */
    public function paginate(...$arguments)
    {
        if (is_array($arguments[0])) {
            $options = $arguments[0];
        } else {
            $options = [
                'limit' => $arguments[0],
                'page'  => $arguments[1] ?? 1,
            ];
        }

        $pagination = new Pagination([
            'total' => $this->count(),
            'limit' => $options['limit'] ?? 10,
            'page'  => $options['page'] ?? 1
        ]);

        // add the pagination object before
        // the collection gets cloned to keep it protected
        $this->pagination = $pagination;

        // slice and clone the collection according to the pagination
        return $this->slice($pagination->offset(), $pagination->limit());
    }

    /**
     * Get the previously added pagination object
     *
     * @return Pagination|null
     */
    public function pagination()
    {
        return $this->pagination;
    }

    /**
     * Prepends an element to the data array
     *
     * @param  mixed       $key
     * @param  mixed       $item
     * @return Collection
     */
    public function prepend($key, $item): self
    {
        $data = $this->data;

        $this->data = [];
        $this->set($key, $item);
        $this->data += $data;

        return $this;
    }

    public function query(array $arguments): self
    {
        $result = clone $this;

        if (isset($arguments['not']) === true) {
            $result = $result->not(...$arguments['not']);
        }

        if (isset($arguments['filterBy']) === true) {
            foreach ($arguments['filterBy'] as $filter) {
                if (isset($filter['field']) === true && isset($filter['value']) === true) {
                    $result = $result->filterBy($filter['field'], $filter['operator'] ?? '==', $filter['value']);
                }
            }
        }

        if (isset($arguments['offset']) === true) {
            $result = $result->offset($arguments['offset']);
        }

        if (isset($arguments['limit']) === true) {
            $result = $result->limit($arguments['limit']);
        }

        if (isset($arguments['sortBy']) === true) {
            if (is_array($arguments['sortBy'])) {
                $sort = explode(' ', implode(' ', $arguments['sortBy']));
            } else {
                $sort = explode(' ', $arguments['sortBy']);
            }
            $result = $result->sortBy(...$sort);
        }

        if (isset($arguments['paginate']) === true) {
            $result = $result->paginate($arguments['paginate']);
        }

        return $result;
    }

    /**
     * Removes an element from the array by key
     *
     * @param mixed $key the name of the key
     */
    public function remove($key): self
    {
        $this->__unset($key);
        return $this;
    }

    /**
     * Adds a new item to the collection
     *
     * @param  mixed  $key    string or array
     * @param  mixed  $value
     * @return self
     */
    public function set($key, $value = null): self
    {
        if (is_array($key)) {
            foreach ($key as $k => $v) {
                $this->__set($k, $v);
            }
        } else {
            $this->__set($key, $value);
        }
        return $this;
    }

    /**
     * Shuffle all elements in the array
     *
     * @return Collection
     */
    public function shuffle(): self
    {
        $data = $this->data;
        $keys = $this->keys();
        shuffle($keys);

        $collection = clone $this;
        $collection->data = [];

        foreach ($keys as $key) {
            $collection->data[$key] = $data[$key];
        }

        return $collection;
    }

    /**
     * Returns a slice of the object
     *
     * @param  int        $offset  The optional index to start the slice from
     * @param  int        $limit   The optional number of elements to return
     * @return Collection
     */
    public function slice(int $offset = 0, int $limit = null): self
    {
        if ($offset === 0 && $limit === null) {
            return $this;
        }

        $collection = clone $this;
        $collection->data = array_slice($this->data, $offset, $limit);
        return $collection;
    }

    /**
     * Sorts the object by any number of fields
     *
     * @param   $field      string
     * @param   $direction  string  asc or desc
     * @param   $method     int     The sort flag, SORT_REGULAR, SORT_NUMERIC etc.
     * @return  self
     */
    public function sortBy()
    {

        $args       = func_get_args();
        $collection = clone $this;
        $array      = $collection->data;
        $params     = array();

        if (empty($array) === true) {
            return $collection;
        }

        foreach ($args as $i => $param) {
            if (is_string($param) === true) {
                if (strtolower($param) === 'desc') {
                    ${"param_$i"} = SORT_DESC;
                } elseif(strtolower($param) === 'asc') {
                    ${"param_$i"} = SORT_ASC;
                } else {
                    ${"param_$i"} = [];
                    foreach ($array as $index => $row) {
                        ${"param_$i"}[$index] = is_array($row) ? Str::lower($row[$param]) : Str::lower($row->$param());
                    }
                }
            } else {
                ${"param_$i"} = $args[$i];
            }
            $params[] = &${"param_$i"};
        }

        $params[] = &$array;

        call_user_func_array('array_multisort', $params);

        $collection->data = $array;

        return $collection;

    }

    /**
     * Converts the current object into an array
     *
     * @return array
     */
    public function toArray(Closure $map = null): array
    {
        if ($map !== null) {
            return array_map($map, $this->data);
        }

        return $this->data;
    }

    /**
     * Converts the current object into a json string
     *
     * @return string
     */
    public function toJson(): string
    {
        return json_encode($this->toArray());
    }

    /**
     * Convertes the collection to a string
     *
     * @return string
     */
    public function toString(): string
    {
        return implode('<br />', $this->keys());
    }

}