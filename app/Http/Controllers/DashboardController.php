<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Reservation;
use App\Models\Order;

class DashboardController extends Controller
{
    public function index()
{
    return Inertia::render('Dashboard', [
        'reservations' => Reservation::all(),
        'orders' => Order::select([
            'id',
            'user_id',
            'total_price',
           
            'created_at'
        ])->with(['user' => function($query) {
            $query->select('id', 'first_name', 'last_name', 'email');
        }])->get()
    ]);
}
}