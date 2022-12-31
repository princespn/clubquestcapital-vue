<template>
  <div v-if="token">
     <div id="main-wrapper">
        
         <Navbar v-if="!currentRouteName"></Navbar>
         <router-view></router-view>
         <Footer v-if="!currentRouteName"></Footer>  
     </div>
   </div>
 
    <div id="main-wrapper" v-else>
     <router-view></router-view>
   </div>
 </template>
<script>
  import { domainReferralLink } from "../user_config.js";
  import Navbar from "@/components/user/Navbar";
  import Footer from "@/components/user/Footer";
  
  export default {
    name: 'app',
      components: {
        Navbar,
        Footer
    },
    data() {
      return {
        token: "",
        isregister:false,
      
      };
    },
   computed: {
      currentRouteName() {
        if (this.$route.name == 'register' || this.$route.name == 'thankyou'|| this.$route.name == 'login' || this.$route.name == 'forgot-password' || this.$route.name == 'reset-password' ) {
          return true;
        }else{
         return false;
         
        }
          
      }
      
  },
    mounted() {
  
     
      this.token = localStorage.getItem("user-token"); 
        // var path = this.$router.options.routes;
   
       // var path = this.$router.name;
       
    this.dash();
        
    },
  
    methods: {
      dash(){
       if (this.token == null && location.href == domainReferralLink+'dashboard' || this.token == null && location.href == domainReferralLink+'profile')
        {           
          this.$router.push({name: "login"});
        } 
      }
      },
   
  };
  </script>
