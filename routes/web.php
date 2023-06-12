<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\UserAdminController;
use App\Http\Controllers\MainController;
use App\Http\Controllers\GlobalController;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::middleware(['auth'])->group(function () {
    
    Route::get('dashboard', [DashboardController::class, 'dashboardView'])->name('dashboard.index');
    Route::get('data/dashboard', [DashboardController::class, 'data'])->name('dashboard.data');

    Route::prefix('user_admin')->group(function () {
        Route::get('/', [UserAdminController::class, 'userAdmin'])->name('user.index');
        Route::post('get_data_user', [UserAdminController::class, 'getDataUser'])->name('get_data_user');
    });

    // CRUD MAIN
    Route::prefix('main')->group(function () {
        Route::get('index', [MainController::class, 'index'])->name('main.index');
        Route::get('data', [MainController::class, 'data'])->name('main.data');
        Route::post('edit', [MainController::class, 'edit'])->name('main.edit');
        Route::post('store', [MainController::class, 'store'])->name('main.store');
        Route::post('store/custom', [MainController::class, 'storeCustom'])->name('main.storeCustom');
        Route::post('active', [MainController::class, 'setActive'])->name('main.setActive');
        Route::post('hapus', [MainController::class, 'hapus'])->name('main.hapus');
        Route::post('import_xls', [MainController::class, 'import_xls'])->name('main.import.xls');
        Route::get('exportData', [MainController::class, 'exportData'])->name('main.exportData');
    });
    // CRUD MAIN

    // GLOBAL
    Route::get('logoutAct', [LoginController::class, 'logout'])->name('logoutAct');
    Route::get('globalMainActionGet/logoutGet', [GlobalController::class, 'logoutGet'])->name('logoutGet');
    Route::post('sessionTheme', [GlobalController::class, 'sessionTheme'])->name('set.theme');
    Route::post('globalMain/{any}', [GlobalController::class, 'mainRef'])->name('global.mainRef');
    Route::post('globalMainAction/{any}', [GlobalController::class, 'mainAction'])->name('global.mainAction');
});


Route::get('/', [LoginController::class, 'loginView'])->name('admin.viewlogin');
Route::get('/login', [LoginController::class, 'loginView'])->name('login');
Route::post('/login_action', [LoginController::class, 'authenticate'])->name('login.action');
