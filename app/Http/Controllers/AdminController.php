<?php

namespace App\Http\Controllers;
use App\Models\Reservation;
use App\Models\Order;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function index()
    {
        $reservations = Reservation::all();
        $orders = Order::all();
    
        \Log::info("Orders fetched: ", $orders->toArray()); // Debugging log
    
        return Inertia::render('Admin/Dashboard', [
            'reservations' => $reservations,
            'orders' => $orders,
        ]);
    }
    

}
