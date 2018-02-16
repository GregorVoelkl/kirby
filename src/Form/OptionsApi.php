<?php

namespace Kirby\Form;

use Exception;
use Kirby\Cms\Nest;
use Kirby\Cms\Query;
use Kirby\Cms\Structure;
use Kirby\Cms\Tempura;
use Kirby\Util\Properties;

class OptionsApi
{

    use Properties;

    protected $data;
    protected $fetch;
    protected $options;
    protected $text = '{{ item.value }}';
    protected $url;
    protected $value = '{{ item.key }}';

    public function __construct(array $props)
    {
        $this->setProperties($props);
    }

    public function data(): array
    {
        return $this->data;
    }

    public function fetch()
    {
        return $this->fetch;
    }

    protected function field(string $field, array $data)
    {
        $value = $this->$field();
        return (new Tempura($value, $data))->render();
    }

    public function options(): array
    {
        if (is_array($this->options) === true) {
            return $this->options;
        }

        $content = file_get_contents($this->url());

        if (empty($content) === true) {
            throw new Exception('The options could not be fetched');
        }

        $data = json_decode($content, true);

        if (is_array($data) === false) {
            throw new Exception('Invalid options format');
        }

        $result  = (new Query($this->fetch(), Nest::create($data)))->result();
        $options = [];

        foreach ($result as $item) {

            $data = array_merge($this->data(), ['item' => $item]);

            $options[] = [
                'text'  => $this->field('text', $data),
                'value' => $this->field('value', $data),
            ];
        }

        return $options;

    }

    protected function setData(array $data)
    {
        $this->data = $data;
        return $this;
    }

    protected function setFetch(string $fetch = null)
    {
        $this->fetch = $fetch;
        return $this;
    }

    protected function setText($text = null)
    {
        $this->text = $text;
        return $this;
    }

    protected function setUrl($url)
    {
        $this->url = $url;
        return $this;
    }

    protected function setValue($value = null)
    {
        $this->value = $value;
        return $this;
    }

    public function text()
    {
        return $this->text;
    }

    public function toArray(): array
    {
        return $this->options();
    }

    public function url(): string
    {
        return (new Tempura($this->url, $this->data()))->render();
    }

    public function value()
    {
        return $this->value;
    }

}