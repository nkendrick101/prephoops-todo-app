<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\PlayerController;
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

    Route::get('/tasks', 'TaskController@index')->name('tasks')->middleware('auth:sanctum');
    Route::post('/tasks', 'TaskController@store')->name('tasks.store')->middleware('auth:sanctum');
    Route::get('/tasks/{id}', 'TaskController@show')->name('tasks.show')->middleware('auth:sanctum');
    Route::put('/tasks/{id}', 'TaskController@update')->name('tasks.update')->middleware('auth:sanctum');
    Route::delete('/tasks/{id}', 'TaskController@index')->name('tasks.delete')->middleware('auth:sanctum');


Route::prefix('players')->group(function () {
    Route::get('/', 'PlayerController@index')->middleware('auth:sanctum');
Route::get('/{id}', 'PlayerController@show')->middleware('auth:sanctum');
Route::post('/', 'PlayerController@store')->middleware('auth:sanctum');
Route::post('/{id}/answers', 'PlayerController@answer')->middleware('auth:sanctum');
Route::delete('/{id}', 'PlayerController@delete')->middleware('auth:sanctum');
Route::delete('/{id}/answers', 'PlayerController@resetAnswers')->middleware('auth:sanctum');

});
