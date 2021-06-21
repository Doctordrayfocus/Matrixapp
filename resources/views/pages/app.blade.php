@extends('layout.app')
@section('title')

    <title>Matrix app</title>

 @endsection
 @section('meta') 

 <meta name="description" content="Matrix app for multipling matrices" />
 
 @endsection
 @section('css')

   <!-- Line awesome icon: -->
   <link rel="stylesheet" type="text/css" href="/css/line-awesome.min.css">
  <!-- ends -->

<style>

 </style>
  
 @endsection

 @section('content')
  
    <!-- vue main component is inserted here -->
    
    <div id="app">
    <matrix-app></matrix-app>
    </div>

    <!-- ends -->
 
 @endsection
 
 @section('scripts')

<!-- The main compiled script for this page  -->
 <script src="{{ asset('js/app.js?v=0.06') }}"></script>
 <!-- ends -->

     
 @endsection
