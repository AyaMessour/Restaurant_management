<?php



namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Reservation; // Assuming you have a Reservation model

class DashboardController extends Controller
{
    public function index()
    {
        // Fetch reservations from the database
        $reservations = Reservation::all(); // Adjust the query as needed

        // Pass reservations to the React component
        return Inertia::render('Dashboard', [
            'reservations' => $reservations,
           
        ]);
    }
 
}