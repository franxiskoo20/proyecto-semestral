<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductoController;
use App\Http\Controllers\CargamentoController;
use App\Http\Controllers\BodegaController;
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


// Rutas para productos
Route::group(['prefix' => 'productos'], function () {
    Route::get('/', [ProductoController::class, 'index']);
    Route::get('/{id}', [ProductoController::class, 'show']);
    Route::post('/', [ProductoController::class, 'store']);
    Route::put('/{id}', [ProductoController::class, 'update']);
    Route::delete('/{id}', [ProductoController::class, 'destroy']);
    Route::put('/restore/{id}', [ProductoController::class, 'restore']);
});

/* 
GET /productos: Obtener todos los productos.
GET /productos/{id}: Obtener un producto específico.
POST /productos: Crear un nuevo producto.
PUT /productos/{id}: Actualizar un producto.
DELETE /productos/{id}: Eliminar un producto.
PUT /productos/restore/{id}: Restaurar un producto eliminado. 
*/

Route::group(['prefix' => 'cargamentos'], function(){
    Route::get('/', [CargamentoController::class, 'index']);
    Route::post('/', [CargamentoController::class, 'crear']);
});

/* 
GET /cargamentos: Obtener todos los cargamentos.
POST /cargamentos: Crear un nuevo cargamento. 
*/

Route::group(['prefix' => 'bodegas'], function(){
    Route::get('/', [BodegaController::class, 'index']);
    Route::post('/', [BodegaController::class, 'crear']);
});

/*
GET /bodegas: Obtener todas las bodegas.
POST /bodegas: Crear una nueva bodega. 
*/