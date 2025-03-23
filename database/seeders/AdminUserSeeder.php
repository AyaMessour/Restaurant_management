<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class AdminUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
 
    public function run()
    {
        User::create([
            'name' => 'Admin',
            'email' => 'ayaAdmin@gmail.com',
            'password' => bcrypt('12345678'),  // Hash the password
            'is_admin' => true,  // Set this user as admin
        ]);
    }
    
}
