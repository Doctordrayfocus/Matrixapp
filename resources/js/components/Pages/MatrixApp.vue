<template>
<div class="fixed-layout">
 
 <!-- fixed loader -->
 <div class="loader" v-if="this.$root.routeIsLoading" style="background:#F5F5FB;position:fixed; top:0%;z-index:999999999999999;">
  <div class="bar"></div>
</div>
 <!-- ends -->

   <div  class="fixed-layout">

    
       
      <!-- entry point for vue router -->
       <router-view></router-view>
      <!-- ends -->
   

     
   </div>

</div>
  
</template>

<script>
 export default {
    data () {
      return {
       
      }
    },
  }
</script>
<style scoped>
  .fixed-layout{
    position: fixed;
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
  }
  

</style>
