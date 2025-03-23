<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reservation extends Model {
    use HasFactory;

    protected $fillable = [
        'first_name', 'last_name', 'phone', 'email', 'guests',
        'date', 'time', 'reservation_type', 'special_request', 'text_updates'
    ];
}

