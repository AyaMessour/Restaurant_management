<?php

namespace App\Http\Controllers;
use App\Models\Reservation;
use App\Models\Order;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function index()
{
    // Fetch the data (e.g., reservations) from the database
    $reservations = \App\Models\Reservation::all();
   $orders=\App\Models\Order::all();
    return Inertia::render('Admin/Dashboard', [
        'message' => 'Welcome to the Admin Dashboard',
        'reservations' => $reservations,
        'orders'=>$orders,
    ]);
}

}
