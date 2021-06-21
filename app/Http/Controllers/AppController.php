<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AppController extends Controller
{

    
    private $letters = array(
        1 => "A", 
        2 => "B", 
        3=> "C", 
        4 => "D", 
        5 => "E", 
        6 => "F", 
        7 => "G", 
        8=> "H", 
        9=> "I", 
        10 => "J", 
        11 =>"K", 
        12 => "L", 
        13 => "M", 
        14 => "N", 
        15=> "O", 
        16 => "P", 
        17 => "Q", 
        18 => "R", 
        19 => "S", 
        20 => "T", 
        21 => "U", 
        22 => "V", 
        23 => "W", 
        24 => "X", 
        25 => "Y", 
        26 => "Z"
    );
    
  private function convertNumberToAlpha(int $number)
    {

        $alpha = "";

        if (is_numeric($number) and $number > 0 and $number < 16385) {

            if ($number < 27) {

                $alpha = $this->letters[$number];
            }
            elseif ($number < 703) {

                if ($number % 26 === 0) {

                    $first = floor($number / 26) - 1;

                    $second = 26;
                }
                else {

                    $first = floor($number / 26);

                    $second = $number % 26;
                }

                $alpha = $this->letters[$first] . $this->letters[$second];
            }
            else {

                if ($number % 676 < 27) {

                    $compensation = floor($number / 26) - 26;

                    $alpha = $this->letters[floor($number / 702)] . 
                    $this->convertNumberToAlpha(
                        $number % 702 + ($compensation % 26 === 0 ? $compensation : $compensation - 1)
                    );

                }
                else {
                    
                    $alpha = $this->letters[floor($number / 676)] . $this->convertNumberToAlpha($number % 676);
                }   
            }
        }


        return $alpha;
    }


    public function handleMultiplication(
     Array $first_matrix,
     Array $second_matrix
    ) {

        $finalResult = [];

        $finalResultNum = [];

        $first_matrix_colunms = count($first_matrix[0]);

        $second_matrix_colunms = count($second_matrix[0]); 

        $first_matrix_rows = count($first_matrix);



        foreach (range(0, $first_matrix_rows - 1) as $row_first) {
        
            $newArray = [];

            $newArrayNum = [];

            foreach (range(0, $second_matrix_colunms -1) as $column_second) {

                $dot_product = 0;
                
                 foreach (range(0, $first_matrix_colunms - 1) as $column_first) {
                     
                    $dot_product += (
                        $first_matrix[$row_first][$column_first] * $second_matrix[$column_first][$column_second]
                      );

                 }

              $product_to_alpha = $this->convertNumberToAlpha($dot_product);

              array_push($newArrayNum,$dot_product);

              array_push($newArray,$product_to_alpha);

            }

          array_push($finalResult, $newArray);

          array_push($finalResultNum,$newArrayNum);

        }

        return [
         "alpha_result"=> $finalResult,
         "num_result"=>$finalResultNum
        ];
    }

   public function multipleMatrix(Request $request)
    {

        // check for authorization

        $request->validate([
           'first_matrix' => ['required','array'],
           'second_matrix' => ['required','array']
        ]);

        if (!auth('sanctum')->check()) {
          
          return response('unauthorized', 401);

        }

        // get data from request

        $first_matrix = $request->get('first_matrix');
        $second_matrix = $request->get('second_matrix');

        // check for if matrices can be multiplied

        $first_matrix_colunms = count($first_matrix[0]);
        $second_matrix_rows = count($second_matrix);

        if ($first_matrix_colunms != $second_matrix_rows) {

            $response = [
             "status" => "Matrices can't be multiplied"
            ];
           
           return response($response, 500);
        }
       

        // multiply matrices
         
        $result = $this->handleMultiplication(
         $first_matrix,
         $second_matrix
        );

        $response = [
          "alpha" => $result["alpha_result"],
          "number"=> $result["num_result"]
        ];

        return $response;

    }
}
