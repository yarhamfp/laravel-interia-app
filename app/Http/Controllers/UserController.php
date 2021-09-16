<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return inertia('Users/Index', [
            'users' => User::latest()->paginate(10),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // dd($request->all());
        $request->validate([
            'name' => 'required|min:3',
            'username' => 'required|unique:users,username',
            'email' => 'required|email|unique:users',
            'location' => 'required',
        ]);

        $data = $request->all();
        $data['password'] = Hash::make('password');
        User::create($data);
        return back()->with([
            'type' => 'success',
            'message' => 'Data user has been created.'
        ]);
    }



    /**
     * Display the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function edit(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {
        // dd($request->all());
        $request->validate([
            'name' =>  ['required','min:3'],
            'username' => ['required','unique:users,username,'.$user->id],
            'email' =>  ['required','email','unique:users,email,'.$user->id],
            'location' =>  ['required'],
        ]);

        $data = $request->all();
        // dd($data);
        $user->update($data);
        return back()->with([
            'type' => 'success',
            'message' => 'Data user has been updated.'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        $user->delete();
        return back()->with([
            'type' => 'success',
            'message' => 'Data user has been deleted.'
        ]);
    }
}
