// import tokenService from '@/common/accessToken.service'
import ApiService from '@/common/api.service'
import { SET_ERROR, SET_AUTH } from './mutations.type' 
import { TRANSFERREWARD,TRANSFERCOMP,FUNDREQUEST,TRANSFERROI,GETADDRESS,TRANSFERWORKING,TRANSFERFUND,GETWORKINGBALANCE,WITHDRAWROIWALLET,GETROIBALANCE,VERIFYUSEROTP,GETWORKINGWITHDRAWALDEDUCTION,WITHDRAWINCOME,PURCHASEPACKAGE,UPDATEUSERS,CHECKADDRESS,CHANGEADDRESS,CHECKOTP,REGISTER,GENERATERANDNO,ADD_TRANSFER_REQUEST,CASHTOCASH,SENDOTP,GET_PROJECT_SETTING,GETTOPUPBALANCE,GETALLCURRENCY,GETDASHBOARDDETAILS,LOGIN,PURCHASEFUND,GETINVOICEDETAILS,CHECKUSEREXIST,CHECKDOWNLINE,GETPACKAGES,SELFTOPUP,REG_OTP,REG_OTP_VERIFY,COUNTRY,GET_USERID,FORGOT_PASSWORD,FORGOT_PASSWORD_OTP,FORGOT_PASSWORD_OTP_CHECK,RESET_PASSWORD,CHANGPASSWORD,GETTOPUPDATA,GETPROFILEINFO,GETPROFILEUPDATEINFO,CRYPTOCURRENCYVALIDATION,UPDATEUSER,UPDATEUSERPARENTID} from './actions.type'
import { CHECKUSEREXISTED,ADMIN_PRODUCTBASE,UPDATEUSERDATA} from './actions.type' 
// import { TRANSFERREWARD,TRANSFERCOMP,FUNDREQUEST,TRANSFERROI,GETADDRESS,TRANSFERWORKING,TRANSFERFUND,GETWORKINGBALANCE,WITHDRAWROIWALLET,GETROIBALANCE,VERIFYUSEROTP,GETWORKINGWITHDRAWALDEDUCTION,WITHDRAWINCOME,PURCHASEPACKAGE,UPDATEUSERS,CHECKADDRESS,CHANGEADDRESS,CHECKOTP,REGISTER,GENERATERANDNO,ADD_TRANSFER_REQUEST,CASHTOCASH,SENDOTP,GET_PROJECT_SETTING,GETTOPUPBALANCE,GETALLCURRENCY,GETDASHBOARDDETAILS,LOGIN,PURCHASEFUND,GETINVOICEDETAILS,CHECKUSEREXIST,CHECKDOWNLINE,GETPACKAGES,SELFTOPUP,REG_OTP,REG_OTP_VERIFY,COUNTRY,GET_USERID,FORGOT_PASSWORD,FORGOT_PASSWORD_OTP,FORGOT_PASSWORD_OTP_CHECK,RESET_PASSWORD,CHANGPASSWORD,GETTOPUPDATA,GETPROFILEINFO,GETPROFILEUPDATEINFO,CRYPTOCURRENCYVALIDATION,UPDATEUSER,UPDATEUSERPARENTID} from './actions.type'
// import { CHECKUSEREXISTED,ADMIN_PRODUCTBASE} from './actions.type' 

const actions = {
  [TRANSFERREWARD](context, data) {
    return new Promise(resolve => {
      let datas = data;
      ApiService.post('reward-to-purchase-self-transfer', datas)
        .then(({ data }) => {
          // console.log(data,'datadata')
          context.commit(SET_AUTH, data.user)
          resolve(data)
        })
        .catch(({ response }) => {
          console.log(SET_ERROR, 'response')
          context.commit(SET_ERROR, response.data.errors)
        })
    })
  },[TRANSFERCOMP](context, data) {
    return new Promise(resolve => {
      let datas = data;
      ApiService.post('compound-to-purchase-self-transfer', datas)
        .then(({ data }) => {
          // console.log(data,'datadata')
          context.commit(SET_AUTH, data.user)
          resolve(data)
        })
        .catch(({ response }) => {
          console.log(SET_ERROR, 'response')
          context.commit(SET_ERROR, response.data.errors)
        })
    })
  },
  [GETADDRESS](context) {
    return new Promise(resolve => {
      ApiService.get('getaddress')
        .then(({ data }) => {
          // console.log(data,'datadata')
          context.commit(SET_AUTH, data.user)
          resolve(data)
        })
        .catch(({ response }) => {
          console.log(SET_ERROR, 'response')
          context.commit(SET_ERROR, response.data.errors)
        })
    })
  },
  [FUNDREQUEST](context, data) {
    return new Promise(resolve => {
      let datas = data;
      ApiService.post('fund-request', datas)
        .then(({ data }) => {
          // console.log(data,'datadata')
          context.commit(SET_AUTH, data.user)
          resolve(data)
        })
        .catch(({ response }) => {
          console.log(SET_ERROR, 'response')
          context.commit(SET_ERROR, response.data.errors)
        })
    })
   
  },
  [TRANSFERROI](context, data) {
    return new Promise(resolve => {
      let datas = data;
      ApiService.post('roi-to-purchase-self-transfer', datas)
        .then(({ data }) => {
          // console.log(data,'datadata')
          context.commit(SET_AUTH, data.user)
          resolve(data)
        })
        .catch(({ response }) => {
          console.log(SET_ERROR, 'response')
          context.commit(SET_ERROR, response.data.errors)
        })
    })
  },
  [TRANSFERWORKING](context, data) {
    return new Promise(resolve => {
      let datas = data;
      ApiService.post('working-to-purchase-self-transfer', datas)
        .then(({ data }) => {
          // console.log(data,'datadata')
          context.commit(SET_AUTH, data.user)
          resolve(data)
        })
        .catch(({ response }) => {
          console.log(SET_ERROR, 'response')
          context.commit(SET_ERROR, response.data.errors)
        })
    })
  },
  [TRANSFERFUND](context, data) {
    return new Promise(resolve => {
      let datas = data;
      ApiService.post('fund-transfer', datas)
        .then(({ data }) => {
          // console.log(data,'datadata')
          context.commit(SET_AUTH, data.user)
          resolve(data)
        })
        .catch(({ response }) => {
          console.log(SET_ERROR, 'response')
          context.commit(SET_ERROR, response.data.errors)
        })
    })
  },
  [GETWORKINGBALANCE](context, data) {
    return new Promise(resolve => {
      let datas = data;
      ApiService.post('get-working-balance', datas)
        .then(({ data }) => {
          // console.log(data,'datadata')
          context.commit(SET_AUTH, data.user)
          resolve(data)
        })
        .catch(({ response }) => {
          console.log(SET_ERROR, 'response')
          context.commit(SET_ERROR, response.data.errors)
        })
    })
  },
  [WITHDRAWROIWALLET](context, data) {
    return new Promise(resolve => {
      let datas = data;
      ApiService.post('withdraw-roi-wallet', datas)
        .then(({ data }) => {
          // console.log(data,'datadata')
          context.commit(SET_AUTH, data.user)
          resolve(data)
        })
        .catch(({ response }) => {
          console.log(SET_ERROR, 'response')
          context.commit(SET_ERROR, response.data.errors)
        })
    })
  },
  [GETROIBALANCE](context, data) {
    return new Promise(resolve => {
      let datas = data;
      ApiService.post('get-roi-balance', datas)
        .then(({ data }) => {
          // console.log(data,'datadata')
          context.commit(SET_AUTH, data.user)
          resolve(data)
        })
        .catch(({ response }) => {
          console.log(SET_ERROR, 'response')
          context.commit(SET_ERROR, response.data.errors)
        })
    })
  },
  [VERIFYUSEROTP](context, data) {
    return new Promise(resolve => {
      let datas = data;
      ApiService.post('verify-user-otp', datas)
        .then(({ data }) => {
          // console.log(data,'datadata')
          context.commit(SET_AUTH, data.user)
          resolve(data)
        })
        .catch(({ response }) => {
          console.log(SET_ERROR, 'response')
          context.commit(SET_ERROR, response.data.errors)
        })
    })
  },
  [GETWORKINGWITHDRAWALDEDUCTION](context, data) {
    return new Promise(resolve => {
      let datas = data;
      ApiService.post('get-working-withdrawal-deduction', datas)
        .then(({ data }) => {
          // console.log(data,'datadata')
          context.commit(SET_AUTH, data.user)
          resolve(data)
        })
        .catch(({ response }) => {
          console.log(SET_ERROR, 'response')
          context.commit(SET_ERROR, response.data.errors)
        })
    })
  },
  [WITHDRAWINCOME](context, data) {
    return new Promise(resolve => {
      let datas = data;
      ApiService.post('withdraw-income', datas)
        .then(({ data }) => {
          // console.log(data,'datadata')
          context.commit(SET_AUTH, data.user)
          resolve(data)
        })
        .catch(({ response }) => {
          console.log(SET_ERROR, 'response')
          context.commit(SET_ERROR, response.data.errors)
        })
    })
  },

  [UPDATEUSERS](context, data) {
    return new Promise(resolve => {
      let datas = data;
      ApiService.post('user-update', datas)
        .then(({ data }) => {
          // console.log(data,'datadata')
          context.commit(SET_AUTH, data.user)
          resolve(data)
        })
        .catch(({ response }) => {
          console.log(SET_ERROR, 'response')
          context.commit(SET_ERROR, response.data.errors)
        })
    })
  },
  [PURCHASEPACKAGE](context, data) {
    return new Promise(resolve => {
      let datas = data;
      ApiService.post('purchase-package', datas)
        .then(({ data }) => {
          // console.log(data,'datadata')
          context.commit(SET_AUTH, data.user)
          resolve(data)
        })
        .catch(({ response }) => {
          console.log(SET_ERROR, 'response')
          context.commit(SET_ERROR, response.data.errors)
        })
    })
  },
  [CHANGEADDRESS](context, data) {
    return new Promise(resolve => {
      let datas = data;
      ApiService.post('change-address', datas)
        .then(({ data }) => {
          // console.log(data,'datadata')
          context.commit(SET_AUTH, data.user)
          resolve(data)
        })
        .catch(({ response }) => {
          console.log(SET_ERROR, 'response')
          context.commit(SET_ERROR, response.data.errors)
        })
    })
  },
  [CHECKADDRESS](context, data) {
    return new Promise(resolve => {
      let datas = data;
      ApiService.post('check_address', datas)
        .then(({ data }) => {
          // console.log(data,'datadata')
          context.commit(SET_AUTH, data.user)
          resolve(data)
        })
        .catch(({ response }) => {
          console.log(SET_ERROR, 'response')
          context.commit(SET_ERROR, response.data.errors)
        })
    })
  },
  [CHECKOTP](context, data) {
    return new Promise(resolve => {
      let datas = data;
      ApiService.post('checkotp1', datas)
        .then(({ data }) => {
          // console.log(data,'datadata')
          context.commit(SET_AUTH, data.user)
          resolve(data)
        })
        .catch(({ response }) => {
          console.log(SET_ERROR, 'response')
          context.commit(SET_ERROR, response.data.errors)
        })
    })
  },
  [CASHTOCASH](context, data) {
    return new Promise(resolve => {
      let datas = data;
      ApiService.post('transfer-topup-to-topup', datas)
        .then(({ data }) => {
          // console.log(data,'datadata')
          context.commit(SET_AUTH, data.user)
          resolve(data)
        })
        .catch(({ response }) => {
          console.log(SET_ERROR, 'response')
          context.commit(SET_ERROR, response.data.errors)
        })
    })
  },
  [ADD_TRANSFER_REQUEST](context, data) {
    return new Promise(resolve => {
      let datas = data;
      ApiService.post('add-transfer-request', datas)
        .then(({ data }) => {
          // console.log(data,'datadata')
          context.commit(SET_AUTH, data.user)
          resolve(data)
        })
        .catch(({ response }) => {
          console.log(SET_ERROR, 'response')
          context.commit(SET_ERROR, response.data.errors)
        })
    })
  },
  [REGISTER](context, data) {
    return new Promise(resolve => {
      let datas = data;
      ApiService.post('register', datas)
        .then(({ data }) => {
          // console.log(data,'datadata')
          context.commit(SET_AUTH, data.user)
          resolve(data)
        })
        .catch(({ response }) => {
          console.log(SET_ERROR, 'response')
          context.commit(SET_ERROR, response.data.errors)
        })
    })
  },
  [GETPACKAGES](context, data) {
    return new Promise(resolve => {
      let datas = data;
      ApiService.post('get-packages', datas)
        .then(({ data }) => {
          // console.log(data,'datadata')
          context.commit(SET_AUTH, data.user)
          resolve(data)
        })
        .catch(({ response }) => {
          console.log(SET_ERROR, 'response')
          context.commit(SET_ERROR, response.data.errors)
        })
    })
  },
  [GENERATERANDNO](context, data) {
    return new Promise(resolve => {
      let datas = data;
      ApiService.post('generate-random-no', datas)
        .then(({ data }) => {
          // console.log(data,'datadata')
          context.commit(SET_AUTH, data.user)
          resolve(data)
        })
        .catch(({ response }) => {
          console.log(SET_ERROR, 'response')
          context.commit(SET_ERROR, response.data.errors)
        })
    })
  },
  [UPDATEUSERPARENTID](context, data) {
    return new Promise(resolve => {
      let datas = data;
      ApiService.post('update-user-parent_id', datas)
        .then(({ data }) => {
          // console.log(data,'datadata')
          context.commit(SET_AUTH, data.user)
          resolve(data)
        })
        .catch(({ response }) => {
          console.log(SET_ERROR, 'response')
          context.commit(SET_ERROR, response.data.errors)
        })
    })
  },
  [CRYPTOCURRENCYVALIDATION](context, data) {
    return new Promise(resolve => {
      let datas = data;
      ApiService.post('cryptoCurrency/validation', datas)
        .then(({ data }) => {
          // console.log(data,'datadata')
          context.commit(SET_AUTH, data.user)
          resolve(data)
        })
        .catch(({ response }) => {
          console.log(SET_ERROR, 'response')
          context.commit(SET_ERROR, response.data.errors)
        })
    })
  },
  [GETPROFILEUPDATEINFO](context, data) {
    return new Promise(resolve => {
      let datas = data;
      ApiService.post('get-profile-update-info', datas)
        .then(({ data }) => {
          // console.log(data,'datadata')
          context.commit(SET_AUTH, data.user)
          resolve(data)
        })
        .catch(({ response }) => {
          console.log(SET_ERROR, 'response')
          context.commit(SET_ERROR, response.data.errors)
        })
    })
  },
  [GETPROFILEINFO](context, data) {
    return new Promise(resolve => {
      let datas = data;
      ApiService.post('get-profile-info', datas)
        .then(({ data }) => {
          // console.log(data,'datadata')
          context.commit(SET_AUTH, data.user)
          resolve(data)
        })
        .catch(({ response }) => {
          console.log(SET_ERROR, 'response')
          context.commit(SET_ERROR, response.data.errors)
        })
    })
  },
  [GETTOPUPDATA](context, data) {
    return new Promise(resolve => {
      let datas = data;
      ApiService.post('gettopupdata', datas)
        .then(({ data }) => {
          // console.log(data,'datadata')
          context.commit(SET_AUTH, data.user)
          resolve(data)
        })
        .catch(({ response }) => {
          console.log(SET_ERROR, 'response')
          context.commit(SET_ERROR, response.data.errors)
        })
    })
  },
  [SENDOTP](context, data) {
    return new Promise(resolve => {
      let datas = data;
      ApiService.post('sendOtp-update-user-profile', datas)
        .then(({ data }) => {
          // console.log(data,'datadata')
          context.commit(SET_AUTH, data.user)
          resolve(data)
        })
        .catch(({ response }) => {
          console.log(SET_ERROR, 'response')
          context.commit(SET_ERROR, response.data.errors)
        })
    })
  },
  [GET_PROJECT_SETTING](context) {
    return new Promise(resolve => {
      ApiService.get('getprojectsettings')
        .then(({ data }) => {
          // console.log(data,'datadata')
          context.commit(SET_AUTH, data.user)
          resolve(data)
        })
        .catch(({ response }) => {
          console.log(SET_ERROR, 'response')
          context.commit(SET_ERROR, response.data.errors)
        })
    })
  },
  [GETALLCURRENCY](context, data) {
    return new Promise(resolve => {
      let datas = data;
      ApiService.post('getall-currency', datas)
        .then(({ data }) => {
          // console.log(data,'datadata')
          context.commit(SET_AUTH, data.user)
          resolve(data)
        })
        .catch(({ response }) => {
          console.log(SET_ERROR, 'response')
          context.commit(SET_ERROR, response.data.errors)
        })
    })
  },
  [GETTOPUPBALANCE](context, data) {
    return new Promise(resolve => {
      let datas = data;
      ApiService.post('get-topup-balance', datas)
        .then(({ data }) => {
          // console.log(data,'datadata')
          context.commit(SET_AUTH, data.user)
          resolve(data)
        })
        .catch(({ response }) => {
          console.log(SET_ERROR, 'response')
          context.commit(SET_ERROR, response.data.errors)
        })
    })
  },
  [GETDASHBOARDDETAILS](context, data) {
    return new Promise(resolve => {
      let datas = data;
      ApiService.post('get-user-dashboard', datas)
        .then(({ data }) => {
          // console.log(data,'datadata')
          context.commit(SET_AUTH, data.user)
          resolve(data)
        })
        .catch(({ response }) => {
          console.log(SET_ERROR, 'response')
          context.commit(SET_ERROR, response.data.errors)
        })
    })
  },
  [SELFTOPUP](context, data) {
    return new Promise(resolve => {
      let datas = data;
      ApiService.post('self-topup', datas)
        .then(({ data }) => {
          console.log(data,'datadata')
          context.commit(SET_AUTH, data.user)
          resolve(data)
        })
        .catch(({ response }) => {
          console.log(SET_ERROR, 'response')
          context.commit(SET_ERROR, response.data.errors)
        })
    })
  },
  [CHECKUSEREXIST](context, data) {
    return new Promise(resolve => {
      let datas = data;
      ApiService.post('checkuserexist', datas)
        .then(({ data }) => {
          // console.log(data,'datadata')
          context.commit(SET_AUTH, data.user)
          resolve(data)
        })
        .catch(({ response }) => {
          console.log(SET_ERROR, 'response')
          context.commit(SET_ERROR, response.data.errors)
        })
    })
  },
  [CHECKDOWNLINE](context, data) {
    return new Promise(resolve => {
      let datas = data;
      ApiService.post('check-downline', datas)
        .then(({ data }) => {
          // console.log(data,'datadata')
          context.commit(SET_AUTH, data.user)
          resolve(data)
        })
        .catch(({ response }) => {
          console.log(SET_ERROR, 'response')
          context.commit(SET_ERROR, response.data.errors)
        })
    })
  },
  [LOGIN](context, data) {
    return new Promise(resolve => {
      let datas = data;
      ApiService.post('login', datas)
        .then(({ data }) => {
          // console.log(data,'datadata')
          context.commit(SET_AUTH, data.user)
          resolve(data)
        })
        .catch(({ response }) => {
          console.log(SET_ERROR, 'response')
          context.commit(SET_ERROR, response.data.errors)
        })
    })
  }, 
  [PURCHASEFUND](context, data) {
    return new Promise(resolve => {
      let datas = data;
      ApiService.post('purchase-fund', datas)
        .then(({ data }) => {
          // console.log(data,'datadata')
          context.commit(SET_AUTH, data.user)
          resolve(data)
        })
        .catch(({ response }) => {
          console.log(SET_ERROR, 'response')
          context.commit(SET_ERROR, response.data.errors)
        })
    })
  },
  [GETINVOICEDETAILS](context, data) {
    return new Promise(resolve => {
      let datas = data;
      ApiService.post('get-fund-invoice', datas)
        .then(({ data }) => { 
            context.commit(SET_AUTH, data.user)
            resolve(data)
          })
          .catch(({ response }) => {
            console.log(SET_ERROR, 'response')
            context.commit(SET_ERROR, response.data.errors)
          })
      })
    }, 
  [CHECKUSEREXISTED](context, data) {
    return new Promise(resolve => {
      let datas = data;
      console.log(data)
      ApiService.post('checkuserexist', datas)
        .then(({ data }) => { 
          context.commit(SET_AUTH, data.user)
          resolve(data)
        })
        .catch(({ response }) => {
          console.log(SET_ERROR, 'response')
          context.commit(SET_ERROR, response.data.errors)
        })
    })
  }, 
[ADMIN_PRODUCTBASE](context, data) {
  return new Promise(resolve => {
    let datas = data;
    ApiService.post('getlevelviewtree/productbase', datas)
      .then(({ data }) => {
        // console.log(data,'datadata')
        context.commit(SET_AUTH, data.user)
        resolve(data)
      })
      .catch(({ response }) => {
        console.log(SET_ERROR, 'response')
        context.commit(SET_ERROR, response.data.errors)
      })
  })
 
},
[COUNTRY](context) {
  return new Promise(resolve => {
    ApiService.get('country')
      .then(({ data }) => {
        // console.log(data,'datadata')
        context.commit(SET_AUTH, data.user)
        resolve(data)
      })
      .catch(({ response }) => {
        console.log(SET_ERROR, 'response')
        context.commit(SET_ERROR, response.data.errors)
      })
  })
},
[REG_OTP](context, data) {
  return new Promise(resolve => {
    let datas = data;
    ApiService.post('send-registration-otp', datas)
      .then(({ data }) => {
        // console.log(data,'datadata')
        context.commit(SET_AUTH, data.user)
        resolve(data)
      })
      .catch(({ response }) => {
        console.log(SET_ERROR, 'response')
        context.commit(SET_ERROR, response.data.errors)
      })
  })
 
},
[REG_OTP_VERIFY](context, data) {
  return new Promise(resolve => {
    let datas = data;
    ApiService.post('verify-registration-otp', datas)
      .then(({ data }) => {
        // console.log(data,'datadata')
        context.commit(SET_AUTH, data.user)
        resolve(data)
      })
      .catch(({ response }) => {
        console.log(SET_ERROR, 'response')
        context.commit(SET_ERROR, response.data.errors)
      })
  })
 
},
[GET_USERID](context, data) {
  return new Promise(resolve => {
    let datas = data;
    ApiService.post('get-user-id', datas)
      .then(({ data }) => {
        // console.log(data,'datadata')
        context.commit(SET_AUTH, data.user)
        resolve(data)
      })
      .catch(({ response }) => {
        console.log(SET_ERROR, 'response')
        context.commit(SET_ERROR, response.data.errors)
      })
  })
 
},
[FORGOT_PASSWORD](context, data) {
  return new Promise(resolve => {
    let datas = data;
    ApiService.post('reset-passwordlink', datas)
      .then(({ data }) => {
        // console.log(data,'datadata')
        context.commit(SET_AUTH, data.user)
        resolve(data)
      })
      .catch(({ response }) => {
        console.log(SET_ERROR, 'response')
        context.commit(SET_ERROR, response.data.errors)
      })
  })
 
},
[FORGOT_PASSWORD_OTP](context, data) {
  return new Promise(resolve => {
    let datas = data;
    ApiService.post('sendOtp-update-user-profile1', datas)
      .then(({ data }) => {
        // console.log(data,'datadata')
        context.commit(SET_AUTH, data.user)
        resolve(data)
      })
      .catch(({ response }) => {
        console.log(SET_ERROR, 'response')
        context.commit(SET_ERROR, response.data.errors)
      })
  })
 
},
[UPDATEUSER](context, data) {
  return new Promise(resolve => {
    let datas = data;
    ApiService.post('update-user', datas)
      .then(({ data }) => {
        // console.log(data,'datadata')
        context.commit(SET_AUTH, data.user)
        resolve(data)
      })
      .catch(({ response }) => {
        console.log(SET_ERROR, 'response')
        context.commit(SET_ERROR, response.data.errors)
      })
  })
 
},
[FORGOT_PASSWORD_OTP_CHECK](context, data) {
  return new Promise(resolve => {
    let datas = data;
    ApiService.post('checkotp2', datas)
      .then(({ data }) => {
        // console.log(data,'datadata')
        context.commit(SET_AUTH, data.user)
        resolve(data)
      })
      .catch(({ response }) => {
        console.log(SET_ERROR, 'response')
        context.commit(SET_ERROR, response.data.errors)
      })
  })
 
},
[RESET_PASSWORD](context, data) {
  return new Promise(resolve => {
    let datas = data;
    ApiService.post('reset-password', datas)
      .then(({ data }) => {
        // console.log(data,'datadata')
        context.commit(SET_AUTH, data.user)
        resolve(data)
      })
      .catch(({ response }) => {
        console.log(SET_ERROR, 'response')
        context.commit(SET_ERROR, response.data.errors)
      })
  })
 
},
[CHANGPASSWORD](context, data) {
  return new Promise(resolve => {
    let datas = data;
    ApiService.post('change-password', datas)
      .then(({ data }) => {
        // console.log(data,'datadata')
        context.commit(SET_AUTH, data.user)
        resolve(data)
      })
      .catch(({ response }) => {
        console.log(SET_ERROR, 'response')
        context.commit(SET_ERROR, response.data.errors)
      })
  })
 
},
[CHANGEADDRESS](context, data) {
  return new Promise(resolve => {
    let datas = data;
    ApiService.post('change-address', datas)
      .then(({ data }) => {
        // console.log(data,'datadata')
        context.commit(SET_AUTH, data.user)
        resolve(data)
      })
      .catch(({ response }) => {
        console.log(SET_ERROR, 'response')
        context.commit(SET_ERROR, response.data.errors)
      })
  })
 
},
[UPDATEUSERDATA](context, data) {
  return new Promise(resolve => {
    let datas = data;
    ApiService.post('update-user-deatils', datas)
      .then(({ data }) => {
        // console.log(data,'datadata')
        context.commit(SET_AUTH, data.user)
        resolve(data)
      })
      .catch(({ response }) => {
        console.log(SET_ERROR, 'response')
        context.commit(SET_ERROR, response.data.errors)
      })
  })
 
},

}

export default {
  actions
}