<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PagesController extends Controller
{
    
    final public static function app()
    {
        return view('pages.app');
    }

}
