import Vuex from 'vuex'
import { mapGetters } from 'vuex'

Vue.use(Vuex)


axios.defaults.baseURL = '/api'


const store = new Vuex.Store({
  state: {
    user: null,
  },

  mutations: {
    
    setUserData (state, userData) {
      state.user = userData.user
      localStorage.setItem('user_new', JSON.stringify(userData))

      axios.defaults.headers.common.Authorization = `Bearer ${userData.token}`

        
    },

    clearUserData () {
      localStorage.removeItem('user_new')
    
      location.reload();
    }
  },

  actions: {
    login ({ commit }, credentials) {
      return axios
        .post('/login', credentials)
        .then(response =>{

          
           
           if(response.status == 200){
            
           // do something after login


           window.userRootState.$root.authUserData = response.data.user;

           routerData.push({ path: '/' });

         

           }
           

          commit('setUserData', response.data)
        })
    },
    logout ({ commit }) {
      commit('clearUserData')
    }
  },

  getters : {
    isLogged: state => !!state.user
  }
});


import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 1. Define route components.
// These can be imported from other files

// dashboard routes
const Home = () => import(/* webpackChunkName: "Home" */ '../components/Pages/Home.vue');

// Login and Signup routes
const Login = () => import(/* webpackChunkName: "AuthLogin" */ '../components/Auth/login.vue');
const Signup = () => import(/* webpackChunkName: "AuthSignup" */ '../components/Auth/signup.vue');

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.

const routes = [
  {
    path:'/',
    component: Home
  },
  {
    path:'/login',
    name:'login',
    component: Login
  },
  {
    path:'/signup',
    name:'signup',
    component: Signup
  },
  
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.

const router = new VueRouter({
  routes 
})

router.beforeEach((to, from, next) => {
  // If this isn't an initial page load.

      // Start the route progress bar.
      if(window.userRootState){
        userRootState.routeIsLoading = true;
      }

  next()
})

router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
  if(window.userRootState){
    userRootState.routeIsLoading = false;
  }
})


const app = new Vue({  
   router,
   store,
    el: '#app',
    data:{
        routeIsLoading:false,
        authUserData:[],
        firstMatrix:[[2,3],[3,5]],
        secondMatrix:[[2,3],[3,5]]
    },
    mounted: function () {

    // get user info from local storage if logged in
    const userInfo = localStorage.getItem('user_new')
    if (userInfo) {
      const userData = JSON.parse(userInfo)

        this.authUserData = userData.user;
        this.$store.commit('setUserData', userData)


    }

    },
    computed: {
      ...mapGetters([
        'isLogged'
      ]),
    },
    created(){
   
     window.userRootState = this;

      window.routerData = this.$router;
      
    
    },
   
  methods:{
    checkIfLoggedin:function(){

       if(!this.isLogged){

         this.$router.push({ path: '/signup' })

       }

    }
  }
    
});