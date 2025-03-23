<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Reservation;
use Inertia\Inertia;

class ReservationController extends Controller {

    // Store a new reservation
    public function store(Request $request)
    {
        $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'phone' => 'required|string|max:20',
            'email' => 'required|email|max:255',
            'guests' => 'required|integer|min:1',
            'date' => 'required|date',
            'time' => 'required',
            'reservation_type' => 'nullable|string',
            'special_request' => 'nullable|string',
            'text_updates' => 'boolean',
        ]);

        // Create reservation
        Reservation::create($request->all());

        // Redirect to the reservation confirmation page
        return redirect()->back()->with('success', 'Reservation confirmed!');
    }

    // Show all reservations in the admin panel
    public function adminIndex()
    {
        // Fetch all reservations (or you can paginate if needed)
        $reservations = Reservation::latest()->get();

        // Return Inertia response to render the dashboard component
        return Inertia::render('Admin/Dashboard', [
            'reservations' => $reservations,
        ]);
    }

}
