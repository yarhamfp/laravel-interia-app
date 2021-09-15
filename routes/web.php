<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\{HomeController, DashboardController, LoginController, RegisterController, UserController};



Route::get('/', HomeController::class)->name('home');
Route::middleware(['auth'])->group(function () {
    Route::get('/dashboard', DashboardController::class)->name('dashboard');
    Route::resource('users', UserController::class);
    // logout
    Route::post('/logout', [LoginController::class, 'destroy'])->name('logout');
});

Route::middleware(['guest'])->group(function () {
    Route::get('/login', [LoginController::class, 'create'])->name('login');
    Route::post('/login', [LoginController::class, 'store']);
    Route::get('/register', [RegisterController::class, 'create'])->name('register');
    Route::post('/register', [RegisterController::class, 'store']);
});

