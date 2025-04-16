<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CartController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\DashboardController;
use Inertia\Inertia;
use App\Models\Product;
use App\Models\Cart;

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

Route::get('/', function () {
    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

use App\Http\Controllers\AdminController;

// Admin routes
Route::middleware(['auth', 'admin'])->group(function () {
    Route::get('/admin/dashboard', [AdminController::class, 'index'])->name('admin.dashboard');
    // Other admin routes...
});

// Admin Dashboard Route


Route::get('/Contact', function () {
    return Inertia::render('Contact');
});

Route::get('/Menu', function () {
    return Inertia::render('Menu');
});

Route::get('/Offres', function () {
    return Inertia::render('Offres');
});


Route::get('/BookingTable', function () {
    return Inertia::render('BookingTable');
});
use App\Http\Controllers\ReservationController;

Route::middleware(['auth', 'admin'])->group(function () {
    Route::get('/admin/dashboard', [AdminController::class, 'index'])->name('admin.dashboard');
    Route::get('/admin/reservations', [ReservationController::class, 'adminIndex'])->name('admin.reservations');
    Route::get('/admin/reservations/{id}/edit', [ReservationController::class, 'edit'])->name('reservations.edit');
    Route::put('/admin/reservations/{id}', [ReservationController::class, 'update'])->name('reservations.update');
    Route::delete('/admin/reservations/{id}', [ReservationController::class, 'destroy'])->name('reservations.destroy');

  
});

// Admin routes protected by admin middleware
Route::middleware(['auth', 'admin'])->group(function () {
    // Dashboard route for admin
    Route::get('/admin/dashboard', [ReservationController::class, 'adminIndex'])->name('admin.dashboard');
});
Route::post('/reservations', [ReservationController::class, 'store'])->name('reservations.store');


Route::middleware('auth')->group(function () {
    // Display the cart
    Route::get('/cart', [CartController::class, 'index'])->name('cart.index');

    // Add an item to the cart
    Route::post('/cart/add', [CartController::class, 'addToCart'])->name('cart.add');

    // Remove an item from the cart
    Route::delete('/cart/{id}', [CartController::class, 'removeFromCart'])->name('cart.remove');
    
    
});


Route::middleware('auth')->get('/checkout', [CartController::class, 'checkout'])->name('checkout');   
Route::middleware('auth')->post('/order', [CartController::class, 'placeOrder'])->name('order.place');

// You can also add:

Route::get('/order-confirmation', [CartController::class, 'orderConfirmation'])->name('orders.confirmation');
Route::get('/order/confirmation', [CartController::class, 'orderConfirmation'])->name('order.confirmation');
Route::patch('/cart/increase/{id}', [CartController::class, 'increaseQuantity']);
Route::patch('/cart/decrease/{id}', [CartController::class, 'decreaseQuantity']);




require __DIR__.'/auth.php';