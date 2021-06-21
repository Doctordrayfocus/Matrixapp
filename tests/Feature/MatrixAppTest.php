<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class MatrixAppTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    
    use RefreshDatabase;

     //Create user and authenticate the user
    protected function authenticate()
    {

        $user = User::create([
            'username' => 'test',
            'password' => Hash::make('password1234'),
        ]);
      
        $token = $user->createToken('my-app-token')->plainTextToken;

        return $token;
    }


   /** @test */

    public function multiply_matrices_with_auth()
    {

      
        
        $first_matrix = [
         [0,2,4]
        ];

        $second_matrix = [
         [0,35,3,4],
         [5,6,2,7],
         [3,5,7,2]
        ];

        //Get token
        $token = $this->authenticate();



        $response = $this->withHeaders([
            'Authorization' => 'Bearer '. $token,
        ])->json('POST','/api/multiply_matrices',[
            'first_matrix' => $first_matrix,
            'second_matrix' => $second_matrix
        ]);

        $response->assertStatus(200);

      

    }


     /** @test */

    public function multiply_matrices_without_auth()
    {
        

        $first_matrix = [
         [0,2,4]
        ];

        $second_matrix = [
         [0,35,3,4],
         [5,6,2,7],
         [3,5,7,2]
        ];

     
        $response = $this->post('/api/multiply_matrices',[
          'first_matrix' => $first_matrix,
          'second_matrix' => $second_matrix
        ]);


        $response->assertStatus(401);

    }

     /** @test */

    public function multiply_matrices_with_none_array()
    {
        
     

        $first_matrix = [
         [0,2,4]
        ];

        $second_matrix = 987;

        //Get token
        $token = $this->authenticate();

        $response = $this->withHeaders([
            'Authorization' => 'Bearer '. $token,
        ])->json('POST','/api/multiply_matrices',[
            'first_matrix' => $first_matrix,
            'second_matrix' => $second_matrix
        ]);

        $response->assertStatus(422);

      

    }

     /** @test */

    public function multiply_matrices_without_matching_row_and_column()
    {
    
        
        $first_matrix = [
         [0,2,4,5,5]
        ];

        $second_matrix = [
         [0,35,3,4],
         [5,6,2,7],
         [3,5,7,2]
        ];

     
         //Get token

        $token = $this->authenticate();

        $response = $this->withHeaders([
            'Authorization' => 'Bearer '. $token,
        ])->json('POST','/api/multiply_matrices',[
            'first_matrix' => $first_matrix,
            'second_matrix' => $second_matrix
        ]);

        $response->assertStatus(500)
                 ->assertJson([
                  "status" => "Matrices can't be multiplied"
                 ]);

    }
}
