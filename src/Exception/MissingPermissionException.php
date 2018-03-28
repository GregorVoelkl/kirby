<?php

namespace Kirby\Exception;

class MissingPermissionException extends Exception
{

    protected static $defaultKeyPrefix = 'exception.permission';
    protected static $defaultKey = 'missing';
    protected static $defaultFallback = 'Missing required permission';
    protected static $defaultCode = 403;

}
