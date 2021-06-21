<!doctype html>
<html lang="{{ app()->getLocale() }}" >
    <head>
    @yield('title')

        @include('shared.meta')
        @yield('meta')
       
        @include('shared.styles')

        @yield('css')
    </head>
    <body class="body" >
    
     
     @yield('content')

   
     @include('shared.scripts')
    
     @yield('scripts')
      
 
    </body>
</html>
