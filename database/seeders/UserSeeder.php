<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run():void
    {
        $userData =[];
        for ($i=0; $i < 350000; $i++) {
            $userData[] = [
                'name' => 'Bakemono',
                'username' => 'bakemono',
                'email' => 'bakemono@gmail.com',
                'location' => 'Indonesia',
                'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
                'created_at' => '2021-09-15 16:44:33',
                'updated_at' => '2021-09-15 16:44:33',
            ];
        }


        $chunks = array_chunk($userData, 5000);

        foreach ($chunks as $chunk) {
            User::insert($chunk);
        }
    }
}
