<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
     protected $username;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');

        $this->username = 'username';
    }

     public function login(Request $request)
    {


        $user = User::where('username',$request->get('username'))->first();

        // check if user password is correct
        
        if (!$user || !Hash::check($request->get('password'), $user->password)) {

             $response = [
                'status' => 'invalid credentials',
              ];

            return response($response, 500);
        }
        
        $token = $user->createToken('my-app-token')->plainTextToken;
      

        // return user data and token

        $response = [
            'user' => $user,
            'token' => $token
        ];

        return response($response, 200);
    }
}
