import { createRouter, createWebHistory } from "vue-router";
import Guard from "@/core/middleware";
import Thanku from "@/components/user/Auth/Thanku";
import Login from "@/components/user/Auth/Login";
import Register from "@/components/user/Auth/Register";
import ForgotPassword from "@/components/user/Auth/ForgotPassword";
import Reset from "@/components/user/Auth/Reset";
import Dashboard from "@/components/user/Dashboard";
import TopUpReport from "@/components/user/TopUpReport";
import Myprofile from "@/components/user/Myprofile";
import Topup from "@/components/user/Topup";
import Addfund from "@/components/user/Addfund";
import Confirmfund from "@/components/user/Confirmfund";
import pendingFund from "@/components/user/pendingFund";

import Withdrawal from "@/components/user/Withdrawal";
import WithdrawalsReport from "@/components/user/WithdrawalsReport";

import DownlineTopupReport from "@/components/user/DownlineTopupReport";
import TreeView from "@/components/user/TreeView";
import DirectReport from "@/components/user/DirectReport";
import RoiReport from "@/components/user/RoiReport";
import BinaryReport from "@/components/user/BinaryReport";
import DirectMember from "@/components/user/DirectMember";
import TeamView from "@/components/user/TeamView";
import Banner from "@/components/user/Banner";
import Presenation from "@/components/user/Presenation";
import IWallettoPWalletTransfer from "@/components/user/IWallettoPWalletTransfer";
import CWallettoPWalletTransfer from "@/components/user/CWallettoPWalletTransfer";


const routes = [
   
    {
            path:'/',
            name:'login',
            component:Login
        },

        {
        path:'/thankyou',
        name:'thankyou',
        component:Thanku
         },
   
   
         {
        path:'/register',
        name:'register',
        component:Register
    },
    {
        path:'/forgot-password',
        name:'forgot-password',
        component:ForgotPassword
    },
    {
        path:'/reset-password',
        name:'reset-password',
        component:Reset
    },
    {
        path:'/dashboard',
        name:'dashboard',
        component:Dashboard,
        beforeEnter: Guard.auth
        //component: () =>
        //import( /* webpackChunkName: "about" */ "@/components/user/Dashboard"),
        // beforeEnter: Guard.auth,
       
    },
    {
        path:'/my-profile',
        name:'my-profile',
        component:Myprofile,
        beforeEnter: Guard.auth
    },
    {
        path:'/banner',
        name:'banner',
        component:Banner,
        beforeEnter: Guard.auth
    },
    {
        path:'/presenation',
        name:'presenation',
        component:Presenation,
        beforeEnter: Guard.auth
    },
      {
        path:'/add-fund',
        name:'add-fund',
        component:Addfund,
        beforeEnter: Guard.auth
    },
    {
        path:'/confirm-fund',
        name:'confirm-fund',
        component:Confirmfund,
        beforeEnter: Guard.auth
    },
    {
        path:'/pending-fund',
        name:'pending-fund',
        component:pendingFund,
        beforeEnter: Guard.auth
    },
    
     {
        path:'/topup-report',
        name:'topup-report',
        component:TopUpReport,
        beforeEnter: Guard.auth
    },
 

    {
        path:'/IWallettoPWalletTransfer',
        name:'IWallettoPWalletTransfer',
        component:IWallettoPWalletTransfer,
        beforeEnter: Guard.auth
        
    },
    {
        path:'/CWallettoPWalletTransfer',
        name:'CWallettoPWalletTransfer',
        component:CWallettoPWalletTransfer,
        beforeEnter: Guard.auth
        
    },
    {
        path:'/withdraw',
        name:'withdraw',
        component:Withdrawal,
        beforeEnter: Guard.auth
        
    },
    {
        path:'/withdrawals-income-report',
        name:'withdrawals-income-report',
        component:WithdrawalsReport,
        beforeEnter: Guard.auth
        
    },

     {
        path:'/direct-income',
        name:'direct-income',
        component:DirectReport,
        beforeEnter: Guard.auth
    },
     {
        path:'/roi-income',
        name:'roi-income',
        component:RoiReport,
        beforeEnter: Guard.auth
    },
     {
        path:'/binary-income',
        name:'binary-income',
        component:BinaryReport,     beforeEnter: Guard.auth

    },
    
     {
        path:'/self-topup',
        name:'self-topup',
        component:Topup,
        beforeEnter: Guard.auth
    },
    
  {
         path:'/downline-topup-report',
        name:'downline-topup-report',
        component:DownlineTopupReport,
        beforeEnter: Guard.auth
    },
     {
         path:'/tree-view',
         name:'tree-view',
         component:TreeView,
         beforeEnter: Guard.auth
     }, 
    {
        path:'/make-working-withdrawal',
        name:'make-working-withdrawal',
        component:Withdrawal,
        beforeEnter: Guard.auth
    },

  {
        path:'/team-view',
       name:'team-view',
        component:TeamView,
        beforeEnter: Guard.auth
    }, 
    {
        path:'/direct-user-list',
        name:'direct-user-list',
        component:DirectMember,
        beforeEnter: Guard.auth
     }, 
     
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
export default router;


