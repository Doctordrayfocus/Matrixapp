<template>
    <div style="background: #d8e2dc;position:fixed; width: 100%; height: 100%; top: 0; left: 0; overflow-y: auto;">

       <div class="offset-lg-2 pr-3 pt-md-4  px-2 d-md-block d-none">
         <h3>Matrix App</h3>
      </div>

      <div class="text-center pt-3 d-md-none d-block">
         <h3>Matrix App</h3>
      </div>

      <div class="col-lg-4 offset-lg-4 col-md-8 offset-md-2 d-flex flex-row text-center" style="align-items:center;">

        <div class="card text-left px-2  d-flex flex-row flex-wrap pb-4  pt-3" style="height:auto; width: 100%; margin-top: 50px;align-items: center;">

          <div class="col-12 mt-2 px-1 px-md-2 text-center">
             <h4>Sign In</h4>
          </div>

          <div class="col-12 px-1 px-md-2 d-flex py-1  mt-3 flex-row flex-wrap" style="align-items: center;">

               
               <div style="width:100%;">
                   <div style="font-size:14px;font-family:MediumFont;" class="mb-2">Username</div>
               </div>

             <div class="d-flex flex-row" style="align-items:center; width: 100%;">
                 
              <div class="mr-2">
                <i class="las la-user" style="font-size:29px;color: #264653;"></i>
             </div>

              <div style="width: 100%;">
                  
                   <input required="required" v-model="username" class="inputStyle py-2 px-2" type="text" placeholder="Elon"  >
             </div>

               </div>
           
             
          </div>

            <div class="col-12 px-1 px-md-2 d-flex py-1  mt-3 flex-row flex-wrap" style="align-items: center;">

               
               <div style="width:100%;">
                   <div style="font-size:14px;font-family:MediumFont;" class="mb-2">Password</div>
               </div>

             <div class="d-flex flex-row" style="align-items:center; width: 100%;">
                 
              <div class="mr-2">
                <i class="las la-lock" style="font-size:29px;color: #264653;"></i>
             </div>

              <div style="width: 100%;">
                  
                   <input required="required" v-model="password" class="inputStyle py-2 px-2" type="password" placeholder="password"  >
             </div>

               </div>
           
             
          </div>


          <div class="col-12 text-center mt-4">
                 
                 <button style="font-size:13px; color: white; background:#264653;" @click="login" class="btn btn-sm btn-round">
                    Login
                 </button>

          </div>

            <div class="col-12 text-center mt-2">
                 
                <span style="font-size:13px;">Don't have an account? <router-link to="/signup">Create</router-link></span>

          </div>

            <div class="col-12 text-center text-danger" v-if="errorInfo">

               <span style="font-size: 14px;">{{ errorInfo }}</span>
              
            </div>


          
        </div>
        
      </div>
    </div>
</template>

<script>
 export default {
    data () {
      return {
       username:'',
       password:'',
       loading:false,
       errorInfo:''
      }
    },
    methods:{
      login: function(){
         if(this.password != '' && this.username != ''){
       
        this.errorInfo = ''
        
        this.$root.routeIsLoading = true;
    
        this.$store
        .dispatch('login', {
          username: this.username,
          password: this.password,
        })
        .then(() => {
         
         
         
        })
        .catch(err => {

           this.errorInfo = err.response.data.message;
          this.$root.routeIsLoading = false;
            
           
        })

      }
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
