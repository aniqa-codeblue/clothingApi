<?php

namespace App\Http\Middleware;
use Closure;

class Cors
{
    public function handle($request, Closure $next)
    {
        $response = $next($request);
        $response->header('Access-Control-Allow-Origin', '*'); // Replace * with your frontend domain
        $response->header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        $response->header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

        return $response;
    }
}
