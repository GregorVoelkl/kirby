<?php

namespace Kirby\Http;

use PHPUnit\Framework\TestCase;

use Kirby\Http\Request\Query;
use Kirby\Http\Request\Body;
use Kirby\Http\Request\Files;

class RequestTest extends TestCase
{

    public function testCustomProps()
    {
        $file = [
            'name'     => 'test.txt',
            'tmp_name' => '/tmp/abc',
            'size'     => 123,
            'error'    => 0
        ];

        $request = new Request([
            'method' => 'POST',
            'body'   => ['a' => 'a'],
            'query'  => ['b' => 'b'],
            'files'  => ['upload' => $file]
        ]);

        $this->assertTrue($request->is('POST'));
        $this->assertEquals('a', $request->body()->get('a'));
        $this->assertEquals('b', $request->query()->get('b'));
        $this->assertEquals($file, $request->file('upload'));
    }

    public function testData()
    {
        $request = new Request([
            'method' => 'POST',
            'body'   => ['a' => 'a'],
            'query'  => ['b' => 'b'],
        ]);

        $this->assertEquals(['a' => 'a'], $request->data());
        $this->assertEquals('a', $request->get('a'));
        $this->assertEquals(null, $request->get('b'));

        $request = new Request([
            'method' => 'GET',
            'body'   => ['a' => 'a'],
            'query'  => ['b' => 'b'],
        ]);

        $this->assertEquals(['b' => 'b'], $request->data());
        $this->assertEquals(null, $request->get('a'));
        $this->assertEquals('b', $request->get('b'));
    }

    public function test__debuginfo()
    {
        $request = new Request();
        $info    = $request->__debuginfo();

        $this->assertArrayHasKey('body', $info);
        $this->assertArrayHasKey('query', $info);
        $this->assertArrayHasKey('files', $info);
        $this->assertArrayHasKey('method', $info);
        $this->assertArrayHasKey('url', $info);
    }

    public function testMethod()
    {
        $request = new Request();

        $this->assertInstanceOf(Query::class, $request->query());
        $this->assertInstanceOf(Body::class, $request->body());
        $this->assertInstanceOf(Files::class, $request->files());
    }

    public function testQuery()
    {
        $request = new Request();
        $this->assertInstanceOf('Kirby\Http\Request\Query', $request->query());
    }

    public function testBody()
    {
        $request = new Request();
        $this->assertInstanceOf('Kirby\Http\Request\Body', $request->body());
    }

    public function testFiles()
    {
        $request = new Request();
        $this->assertInstanceOf('Kirby\Http\Request\Files', $request->files());
    }

    public function testFile()
    {
        $request = new Request();
        $this->assertNull($request->file('test'));
    }

    public function testIs()
    {
        $request = new Request();
        $this->assertTrue($request->is('GET'));
    }
}
