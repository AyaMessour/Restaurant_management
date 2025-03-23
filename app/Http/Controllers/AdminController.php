<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function index()
{
    // Fetch the data (e.g., reservations) from the database
    $reservations = \App\Models\Reservation::all();

    return Inertia::render('Admin/Dashboard', [
        'message' => 'Welcome to the Admin Dashboard',
        'reservations' => $reservations,
    ]);
}

}
