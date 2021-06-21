<template>
    <div style="background: #d8e2dc;position:fixed; width: 100%; height: 100%; top: 0; left: 0; overflow-y: auto;">

      <div class="offset-lg-2 pr-3 px-2 pt-md-4 d-md-block d-none">
         <h3>Matrix App</h3>
      </div>

      <div class="text-center pt-3 d-md-none d-block">
         <h3>Matrix App</h3>
      </div>

      <div class="col-lg-8 offset-lg-2 col-md-10 offset-md-1 d-flex flex-row text-center" style="align-items:center;">

        <div class="card text-left px-2  d-flex flex-row flex-wrap pb-4  pt-3" style="height:auto; width: 100%; margin-top: 50px;align-items: center;">

          <div class="col-12 mt-2 px-1 px-md-2 text-center">
             <h4>Multiply Matrices</h4>
          </div>

          <div class="col-12 d-flex flex-row flex-wrap mt-3" >

            <div class="col-md-4 px-0 py-md-0 py-2 " style="align-items:center;justify-content: center;">
           
             <matrix-creator :matrix="that.$root.firstMatrix" :disabled="false"></matrix-creator>
              
            </div>

             <div class="col-md-4 px-0 py-md-0 py-2 d-flex flex-row" style="align-items: center;justify-content: center;">
                 <div>
                    <i class="las la-times" style="font-size: 30px; color: #264653;"></i>
                 </div>
            </div>

             <div  class="col-md-4 px-0 py-md-0 py-2" style="align-items:center;justify-content: center;" >
                 <matrix-creator :matrix="that.$root.secondMatrix" :disabled="false"></matrix-creator>
            </div>

             
            
            
          </div>

           <div class=" col-12 px-0 text-center  my-4" >
                 <button style="font-size:13px; color: white; background:#264653;border-radius: 8px;" class="btn btn-sm " @click="multiplyMatrices">
                    Multiply
                 </button>
            </div>


           
           <template v-if="!loading && result.number">

            <div class="d-flex col-12 px-2 text-center " >
             <h5>Result</h5>
            </div>
         
         
           <div class="d-flex flex-row col-12 flex-wrap mt-3 " >


             <div class="col-md-6  d-flex flex-row flex-wrap" style="align-items: center;">
                  
                  <div class="" style="width: 100%;">
                     <h6>In Number</h6>
                  </div>

                  <div class="mt-3" style="width: 100%;">
                      
                      <matrix-creator :matrix="result.number" :disabled="true"></matrix-creator>            
        
                  </div>
                
             </div>


             <div class="col-md-6  d-flex flex-row flex-wrap" style="align-items: center;">
                  
                  <div class="" style="width: 100%;">
                     <h6>In Alphabeth</h6>
                  </div>

                   <div class="mt-3" style="width: 100%;">
                     
                      <matrix-creator :matrix="result.alpha" :disabled="true"></matrix-creator>   

                  </div>
                
             </div>


             
           </div>

             
           </template>

           <template v-else> 

            <div class="col-12 text-center text-danger">

               <span style="font-size: 14px;">{{ errorInfo }}</span>
              
            </div>
             
           </template>
           
         
          


          
        </div>
        
      </div>
    </div>
</template>

<script>

  const MatrixCreator= () => import(
   /* webpackChunkName: "MatrixCreator" */ './MatrixCreator.vue'
  );


 export default {
    data () {
      return {
       that:this,
       loading:false,
       result:[],
       errorInfo:''
      }
    },
    mounted(){
      this.$root.checkIfLoggedin();
    },
    components:{
      MatrixCreator
    },
    methods:{
      multiplyMatrices:function(){

         this.$root.routeIsLoading = true;
         
          this.errorInfo = ''
          this.result = [];

         axios.post('/multiply_matrices',{
           first_matrix: this.$root.firstMatrix,
           second_matrix: this.$root.secondMatrix
              })
      .then(response => {
        
       if (response.status == 200) {    

          this.result = response.data;
           this.$root.routeIsLoading = false;
        }


      })
      .catch(error => {

          this.errorInfo = error.response.data.status;

           this.$root.routeIsLoading = false;
        
      })

      }
    }
  }
</script>
<style scoped>
 .inputStyle{
  border:1px solid #264653;
  width:100%;
  background: whitesmoke;
  border-radius:3px; 
  font-family:BodyFont; 
  font-size:13px;
 }  

</style>
