<link rel="stylesheet" href="{{ asset('css/bootstrap.min.css') }}">
<link rel="stylesheet" href="{{ asset('css/mdb.min.css') }}">

<style>

@font-face {font-family:BodyFont;
                   src:url( {{asset('fonts/Lato-Regular.ttf')}} );}

    @font-face {font-family:HeaderFont;
                   src:url( {{asset('fonts/Lato-Bold.ttf')}} );}

    @font-face {font-family:MediumFont;
                   src:url( {{asset('fonts/Lato-Bold.ttf')}} );}

    h1,h2,h3,h4,h5,h6 {
       font-family:HeaderFont;
       color:#264653;
    }

  body{
    font-family:BodyFont;
  }

.loader {
  height: 3px;
  width: 100%;
}
.loader .bar {
  width: 100%;
  position: fixed;
  top:0;
  z-index:9999999999999999;
  height: 3px;
  background-color: #264653;
  animation-name: loader-animation;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}

</style>