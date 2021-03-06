<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Auth Routes
Route::post('/register','Auth\RegisterController@create');
Route::post('/login','Auth\LoginController@login');
Route::post('/logout','Auth\LoginController@logout');

// matrices multiplier routes
Route::post('/multiply_matrices','AppController@multipleMatrix');
