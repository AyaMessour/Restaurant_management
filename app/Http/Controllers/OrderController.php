<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

use App\Models\Order;
class OrderController extends Controller
{
  
    
    public function index()
    {
        $orders = Order::all();
    
        return Inertia::render('Dashboard', [
            'orders' => $orders->toArray() // Assure que les données sont bien envoyées
        ]);
    }
    
    
}
