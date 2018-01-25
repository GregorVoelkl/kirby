<?php

namespace Kirby\Cms;

use Exception;
use ReflectionMethod;

abstract class Object
{

    /**
     * Properties that should be converted to array
     *
     * @var array
     */
    protected static $toArray = [];

    /**
     * Optional property setter.
     * This is mostly used in constructors
     *
     * @param array $props
     * @param array $keys
     * @return self
     */
    protected function setOptionalProperties(array $props, array $keys)
    {
        foreach ($keys as $key) {
            if (isset($props[$key]) === true) {
                $this->{'set' . $key}($props[$key]);
            }
        }
        return $this;
    }

    /**
     * Required property setter.
     * This is mostly used in constructors
     *
     * @param array $props
     * @param array $keys
     * @return self
     */
    protected function setRequiredProperties(array $props, array $keys)
    {
        foreach ($keys as $key) {
            if (isset($props[$key]) === false) {
                throw new Exception(sprintf('Missing "%s" property', $key));
            }

            $this->{'set' . $key}($props[$key]);
        }
        return $this;
    }

    /**
     * Converts the object to json
     * by using the toArray method first.
     *
     * @param boolean $pretty Enable/disable pretty printing the json output
     * @return string
     */
    public function toJson(bool $pretty = false): string
    {
        return json_encode($this->toArray(), $pretty ? JSON_PRETTY_PRINT : null);
    }

    /**
     * Creates an array of all values of public
     * getters that return a non-object value
     *
     * @return array
     */
    public function toArray(): array
    {
        $array = [];

        foreach (static::$toArray as $propertyName) {

            $getterName    = $propertyName;
            $converterName = 'convert' . $propertyName . 'toArray';

            try {

                // add the getter result to the array
                if (method_exists($this, $converterName)) {
                    $value = $this->$converterName();
                } else {

                    $method = new ReflectionMethod($this, $getterName);

                    if ($method->isStatic() === true || $method->getNumberOfRequiredParameters() > 0) {
                        throw new Exception('Invalid getter');
                    }

                    $value = $this->$getterName();

                }

                // don't add object if it doesn't have its own toArray method
                if (is_object($value) === false) {
                    $array[$propertyName] = $value;
                }

            } catch (Exception $e) {
                $array[$propertyName] = [
                    'error' => sprintf('%s in file %s on line %s', $e->getMessage(), $e->getFile(), $e->getLine())
                ];
            }

        }

        ksort($array);
        return $array;
    }

}
