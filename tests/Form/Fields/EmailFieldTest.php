<?php

namespace Kirby\Form\Fields;

use Kirby\Form\Field;

class EmailFieldTest extends TestCase
{

    public function testDefaultProps()
    {
        $field = new Field('email');

        $this->assertEquals('email', $field->type());
        $this->assertEquals('email', $field->name());
        $this->assertEquals(null, $field->value());
        $this->assertEquals('email', $field->icon());
        $this->assertEquals('mail@example.com', $field->placeholder());
        $this->assertEquals(null, $field->counter());
        $this->assertEquals('email', $field->autocomplete());
        $this->assertTrue($field->save());
    }

    public function testEmailValidation()
    {

        $field = new Field('email', [
            'value' => 'mail@getkirby.com'
        ]);

        $this->assertTrue($field->isValid());

        $field = new Field('email', [
            'value' => 'mail[at]getkirby.com'
        ]);

        $this->assertFalse($field->isValid());

    }

}
