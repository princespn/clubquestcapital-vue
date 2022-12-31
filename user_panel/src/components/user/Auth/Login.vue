<template>
    <div class="container-fluid login-background-img ">
        <div class="row h-100 align-items-baseline">
            <div class="col-12 col-md-5 col-lg-6 col-xl-7">
                <div class="admin-logo mt-5 text-left">
                    <img src="user-assets/images/login-logo.svg" />
                </div>
            </div>
            <div class="col-12 col-md-7 col-lg-6 col-xl-5 align-items-center d-flex justify-content-center">
                <div class="login-white-box text-left">
                    <h4>Login</h4>
                    <p>Please login to your account</p>
                    <form class="mt-5 login-form position-relative" action="" @submit.prevent="login">
                        <div class="form-group">
                            <input type="text" class="form-control form-input" placeholder="User ID"
                            v-on:input="checkuserexist(1)" onkeypress="return (event.charCode >= 48 && event.charCode <= 57)||(event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)"  name="user_id" maxlength="8"  id="user_id" 
                                v-model="user.user_id">
                             <div v-if="!useractive" class="text-danger">
                                <p>{{ this.usermsg }}</p>
                            </div>
                        </div>
                        <div class="form-group active position-relative">
                            <input type="password" class="form-control form-input" placeholder="Password"
                                name="password" id="password" v-on:input="PasswordValidation($event)" maxlength="30" v-model="user.password">
                            <!-- <span toggle="#password-field" class="fa fa-eye field-icon"></span> this one is open eye -->
                            <span toggle="#password-field" class="fa fa-eye-slash field-icon" @click="showPass" :class="eye" ></span>  <!-- this one is close eye -->
                            <!-- this one is close eye -->
                            <div v-if="errorpwd !== ''" class="tooltip2">
                                <span class=" text-danger"> {{ this.errorpwd }}</span>
                            </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-between checkbox-login"> 
                            <div class="cust-checkbox-new">
                                <!--<label class="cust-chk-bx d-flex align-items-center">
                                    <input type="checkbox">
                                    <span class="cust-chkmark-login"></span>
                                    <span class="ml-2 checkbox-span">Remember me</span>
                                </label>-->
                            </div>
                            <div class="recover-password">
                                <router-link onclick="window.scrollTo(0, 0);" to="/forgot-password">
                                    <span class="menu-title">Forgot Password </span>
                                </router-link>

                            </div>
                        </div>
                        <div class="prove-human mb-3">
                            <div>
                                <h5>Prove you are the Human</h5>
                            </div>
                            <div class="cust-checkbox-new">
                                <label class="cust-chk-bx">
                                    <input v-model="terms" class="custom-switch-input" type="checkbox" id="terms"
                                        name="terms" data-vv-as="recaptcha" tabindex="3" aria-required="true"
                                        aria-invalid="false">
                                    <span class="cust-chkmark"></span>
                                </label>
                            </div>

                        </div>
                        <div class="position-checkbox">
                            <div class="checkbox-popop mb-4" id="txtAge">
                                <h5>Prove you are the Human</h5>
                                <p>Who Wants Water...……?</p>
                                <div class="captcha mt-3 position-relative">
                                    <div class="blue-box-captcha"></div>
                                    <img src="user-assets/images/water-tap.png" alt="" class="water-tap">
                                    <img src="user-assets/images/water-path.svg" alt="" class="water-path" />
                                    <img src="user-assets/images/tree-img.svg" alt="" class="captcha-tree" />
                                    <img src="user-assets/images/dirty-car.png" alt="" class="dirty-car" />
                                </div>
                            </div>
                        </div>
                        <div class=" text-center">
                            <button type="submit" :disabled="!loginComplete || !terms"
                                class="login-blue-btn">Login</button>
                        </div>
                        <div class="frt-link">
                            <p>Don't have an account?</p> 
                            <router-link to="/register" class="text-primary" @click="moveTop">Register</router-link>
                        </div>

                    </form>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
import $ from "jquery"
//import { domainReferralLink } from "../../../../user_config.js";
import { LOGIN, GENERATERANDNO,CHECKUSEREXIST} from "@/store/actions.type";
import ValidatioMixin from "@/mixins/ValidatioMixin";
import { domain } from '../../../../user_config';
export default {
    name: 'app',
    mixins: [ValidatioMixin],
    data() {
        return {
            nameErr: '',
            errorpwd: '',
            usermsg: "",
             useractive: true,  
              isActiveBtn: true,
            weburl: '',
            user: {
                user_id: '',
                password: ''
            },
            // icon: '../public/user_files/assets/img/icon-mlm.png',
            ///  logo: '../public/user_files/assets/img/logo.png',
            hostName: window.location.origin,
            verify2fa: '',
            googleotp: null,
            token: null,
            verifymailotp: null,
            otp: null,
            rand_no: '',
            captcha: '',
            captchamatch: false,
            terms: false,
            showpassword: 0,
            eye: "bi bi-eye-slash fs-2",
            captchamatcherror: '',
            /*lockout: true*/
        }
    },
    computed: {
        loginComplete() {
            return this.user.user_id && this.user.password;
        }
    },
    mounted() {
        this.weburl = domain;
        var user_id = this.$route.query.user_id;
        var password = this.$route.query.password;
        if (user_id !== undefined && password !== undefined && user_id !== '' && password !== '') {
            this.user.user_id = user_id;
            this.user.password = password;
            this.login();
        }
        this.getRandomNo();
    },
    methods: {
        NameValidation(e) {
            const fullname = e.target.value;
            var pwdpattern = new RegExp("^(?=.*[!@#$%^&/*])");
            if (fullname.match(pwdpattern)) {
                this.nameErr = "Please enter alphabets and digits only";
            } else {
                this.nameErr = "";
            }
        },
        
        showPass() {
        if (this.showpassword == 0) {
          document.getElementById("password").type = "text";
          this.eye = "fa fa-eye field-icon";
          this.showpassword = 1;
        } else if (this.showpassword == 1) {
          document.getElementById("password").type = "password";
          this.showpassword = 0;
          this.eye = "fa fa-eye-slash field-icon";
           }
          else
          {
          document.getElementById("password").type = "text";
          this.eye = "fa fa-eye field-icon";


          }
        
      },

        login() {
            // axios.post('login', {
            //     user_id: this.user.user_id,
            //     password: this.user.password,
            // })
            var data = {
                user_id: this.user.user_id,
                password: this.user.password,
            }
            this.$store
                .dispatch(LOGIN, data)
                .then(resp => {
                    let userinfo = resp.data;
                    if (resp.code === 200) {
                        const token = resp.data.access_token;
                        //this.$toast.success(resp.data.message) 
                        if (userinfo.google2faauth == "TRUE") {
                            //this.verify2Fa();
                            this.token = token;
                            this.verify2fa = true;
                        } else {
                            localStorage.setItem('user-token', token); // store the token in localstorage
                            localStorage.setItem('type', "user"); // store the token in localstorage
                            // this.getPackages();
                            this.$toast.success(resp.message);
                            //location.href = domainReferralLink+'dashboard';
                            //\ this.$router.push({name: 'dashboard'});
                            // .then(() => {
                            // window.location.reload()       
                            // window.scrollTo({ top: 0, behavior: 'smooth' });
                            // }); 

                            // setTimeout(function(){ location.reload('dashboard'); }, 2000); 

                            this.$router.push({ name: 'dashboard' });
                            setTimeout(function () {
                                location.reload();
                            }, 1500);
                        }

                    }/*else if (resp.data.code === 400) {
                              this.wrong_message = resp.data.message;
                              console.log(resp.data.data.time); 
                              let $time=resp.data.data.time;
                              this.lockout = false;
                              setTimeout(()=>{
                              this.lockout = true;
                              console.log('Button Activated')}, $time)  
                            }*/ else {
                        this.$toast.error(resp.message)
                    }
                }).catch(error => {
                    //localStorage.removeItem('user-token'); // if the request fails, remove any 
                    // location.reload();
                    this.$toast.error(error);
                })
        },
        checkuserexist() {
        var data = {
          user_id: this.user.user_id,
          para: 1,
        };

        this.$store
          .dispatch(CHECKUSEREXIST, data)
          .then((response) => {
            if (response.code == 200) {
              this.email = response.data.email;
              this.useractive = true;
              this.isActiveBtn = true;
            } else {
              this.useractive = false;
              this.isActiveBtn = false;
              this.usermsg = response.message;
            }
          })
          .catch();
      },

        reset() {
            this.user.user_id = '';
            this.user.password = '';
        },

        getRandomNo() {
            // axios
            //   .get("generate-random-no", {})
            this.$store
                .dispatch(GENERATERANDNO, {})
                .then(response => {
                    this.rand_no = response.data;
                })
                .catch(error => {
                    this.$toast.error(error)
                });
        },
        cheboxpopup() {
            // console.log($(this).prop('checked'), 'hiii');
            if ($('#terms').is(':checked')) {

                $("#txtAge").toggleClass('active');
            } else {
                $("#txtAge").removeClass('active');
            }
        },

    }
}

$('body').on('click', function (e) {
    if ($(e.target).find('.checkbox-popop.active').length != 0) {
        alert('kkkk');
        $('.checkbox-popop').removeClass('active');
    }
})


</script>
