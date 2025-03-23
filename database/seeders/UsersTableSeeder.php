<?php



namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;

class UsersTableSeeder extends Seeder
{
    public function run()
    {
        // Insert an admin user
        DB::table('users')->insert([
            'name' => 'Admin User',
            'email' => 'admin@example.com', // Change to your admin email
            'password' => Hash::make('password123'), // Change to your desired password
            'is_admin' => true, // Make this user an admin
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}

