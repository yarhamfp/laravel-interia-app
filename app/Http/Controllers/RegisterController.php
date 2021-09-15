<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
    public function create()
    {
        return inertia('Auth/Register');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'username' => 'required|unique:users,username',
            'email' => 'email|required|unique:users',
            'password' => 'required|min:8|confirmed'
        ]);
        
        $data = $request->all();
        $data['password'] = Hash::make($request->password);
        User::create($data);
        // loginkan user
        Auth::attempt($request->only('email', 'password'));
        return redirect('/')->with([
            'type' => 'success',
            'message' => "You are logged in"
        ]);
    }
}
