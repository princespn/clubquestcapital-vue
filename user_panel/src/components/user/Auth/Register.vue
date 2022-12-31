<template>
  <div class="container-fluid registor-background-img h-100">
    <div class="row h-100">
      <div class="col-12 col-md-5 col-lg-6 col-xl-6">
        <div class="admin-logo mt-5 text-left">
          <img src="user-assets/images/login-logo.svg" />
        </div>
      </div>
      <div class="col-12 col-md-7 col-lg-6 col-xl-6 align-items-center d-flex justify-content-center">
        <div class="register-white-box text-left">
          <h4>Register</h4>
          <p>Welcome to the Club Quest Capital , it takes <br /> less than a minute</p>
          <form class="mt-5 login-form" @submit.prevent="registerUser" data-vv-scope="registerform">
            <div class="row">
              <div class="col-12 col-sm-6">
                <div class="form-group">
                  <input type="text" placeholder="User Id" class="form-control form-input" v-model="register.user_id"
                    data-vv-as="user_id" maxlength="8" readonly="" />
                </div>
              </div>

              <div class="col-12 col-sm-6">
                <div class="form-group">
                  <!--<input type="email" class="form-control form-input" placeholder="Enter email">-->
                  <input type="text" class="form-control form-input" placeholder="Enter Full Name"
                    v-model="register.fullname" data-vv-as="fullname" v-on:keypress="isLetter($event)"
                    v-on:input="NameValidation($event)" maxlength="30" />
                  <div v-if="nameErr !== ''" class="tooltip2">
                    <span class="text-danger">{{ this.nameErr }}</span>
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-6">
                <div class="form-group">
                  <select v-model="country" v-on:input="CountryValidation($event)"
                    class="form-control form-input-select">
                    <option value="" selected>Select Country</option>
                    <option v-for="con in countries" v-bind:key="con.id" :value="con.iso_code">{{con.country}}</option>
                  </select>
                  <div v-if="countryerr !== ''" class="tooltip2">
                    <span class=" text-danger">
                      {{ this.countryerr }}</span>
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-6">
                <div class="form-group">
                  <input type="text" class="form-control form-input" placeholder="Enter Email ID"
                    v-model="register.email" data-vv-as="email" data-vv-validate-on="change|blur"
                    v-on:input="EmaiValidation($event)" />
                  <div v-if="emaiErr !== ''" class="tooltip2">
                    <span class="text-danger">{{ this.emaiErr }}</span>
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-6">
                <div class="form-group">
                  <input type="text" class="form-control form-input" placeholder="Enter Mobile Number"
                    v-model="register.mobile" data-vv-as="mobile" name="mobile" onpaste="return false"
                    autocomplete="off" maxlength="22"
                    onkeypress="return (event.charCode == 8 || event.charCode == 0 || event.charCode == 13) ? null : event.charCode >= 48 && event.charCode <= 57"
                    id="mobile" v-on:input="MobileValidation($event)" />
                  <div v-if="mobile_data !== ''" class="tooltip2">
                    <span class="  text-danger">{{ this.mobile_data }}</span>
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-6">
                <div class="form-group">
                  <input type="text" maxlength="8" class="form-control form-input" placeholder="Enter Sponsor ID"
                    v-model="register.referral_id"
                    onkeypress="return (event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123) ||  (event.charCode >= 48 && event.charCode <= 57)"
                    @input="SponsorValidation" v-on:keyup="checkuserexist(2)" id="referral_id"
                    data-vv-as="referral id" />
                  <div v-if="usermsg !== ''" class="tooltip2">
                    <span class="text-danger ">{{ this.usermsg }}</span>
                  </div>
                </div>
              </div>

              <div class="col-12 col-sm-6">
                <div class="form-group active position-relative">
                  <input type="password" maxlength="30" id="password" class="form-control form-input"  placeholder=" Password" v-model="register.password"
                                       v-on:input="PasswordValidation($event)"  data-vv-as="password"/>
                  <!-- <span toggle="#password-field" ></span> this one is open eye -->
                  <span toggle="#password" class="fa fa-eye-slash field-icon" @click="showPass" :class="eye" ></span> <!-- this one is close eye -->
                  <div v-if="errorpwd !== ''" class="tooltip2">
                    <span class=" text-danger"> {{ this.errorpwd }}</span>
                  </div>
                  <!-- <div class="pass-show-hide"
                                        onclick="if (password.type == 'text') password.type = 'password'; else password.type = 'text';">
                                        <img src="user-assets/images/eye-icon.svg" class="pass-close-image" alt="" />
                                        <img src="user-assets/images/eye-icon.svg" class="pass-show-image" alt="" />
                                    </div> -->
                </div>
              </div>
              <div class="col-12 col-sm-6">
                <div class="form-group active position-relative">
                  <input type="password" maxlength="30" id="confirm_password" class="form-control form-input"
                    placeholder=" Confirm Password" v-model="register.confirm_password"
                    v-on:input="ChangeConfirmPasswordValidation($event)" data-vv-as="confirm_password" />
                   <!-- <span toggle="#password-field" class="fa fa-eye field-icon"></span> this one is open eye -->
                  <span toggle="#confirm_password" class="fa fa-eye-slash field-icon"  @click="showPass2" :class="eye2"></span> <!-- this one is close eye -->
                  <div v-if="errorcpwd !== ''" class="tooltip2">
                    <span class=" text-danger">{{ this.errorcpwd }}</span>
                  </div>

                  <!-- <div class="pass-show-hide"
                    onclick="if (confirm_password.type == 'text') confirm_password.type = 'password'; else confirm_password.type = 'text';">
                    <img src="user-assets/images/eye-icon.svg" class="pass-close-image" alt="" />
                    <img src="user-assets/images/eye-icon.svg" class="pass-show-image" alt="" />
                  </div> -->
                </div>
              </div>
              <div class="col-12 col-sm-12">
                <div class="form-group">
                  <!-- <label class="form-lable">Select Package</label> -->
                  <select class="form-control form-input-select" id="s_id" v-model="register.position"
                    v-on:input="PositionValidation($event)">
                    <option value="" selected>Position</option>
                    <option value="1">Left</option>
                    <option value="2">Right</option>
                  </select>
                  <div v-if="positionErr !== ''" class="tooltip2">
                    <span class=" text-danger">{{ this.positionErr }}</span>
                                   
                   </div>
                </div>

                <!-- <div class="form-group">
                                   <select  class="form-select form-input"  id="s_id" v-model="register.position" v-on:input="PositionValidation($event)">                                 
                                      <option value="" selected>Position</option>
                                        <option value="1">Left</option>
                                        <option value="2">Right</option>
                                     </select>
                                    <div v-if="positionErr !== ''" class="tooltip2">
                                        <span class=" text-danger">{{ this.positionErr }}</span>
                                    </div>
                                </div>-->
              </div>
            </div>

            <div class="prove-human prove-human-registor">
              <div>
                <h5>Prove you are the Human</h5>
              </div>
              <div class="cust-checkbox-new">
                <label class="cust-chk-bx">
                  <input v-model="terms" class="cust-chkmark" type="checkbox" id="terms" name="terms"
                    data-vv-as="recaptcha" tabindex="3" aria-required="true" aria-invalid="false">
                  <!--<input type="checkbox">-->
                  <span class="cust-chkmark"></span>
                </label>
              </div>

            </div>
            <div class="form-group">
              <p>
                Note:- Password must be at least 8 characters. It should contain
                uppercase, lowercase, numerical and special characters.
              </p>
            </div>
            <div class=" text-center">
              <button type="submit" value="Register"
                :disabled="  !isCompleteRegister || isActiveBtn == false || errorcpwd !== '' || errorpwd !== '' || nameErr !== '' || emaiErr !== '' || positionErr !== '' || countryerr !== '' || mobile_data !== '' || usermsg !== '' || snameErr !== '' || !terms"
                class="btn login-blue-btn">Register</button>
            </div>
            <div class="frt-link">
              <p>Already have an Account?</p>
              <router-link to="/" class="text-primary" @click="moveTop">Sign In</router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {
    REGISTER,
    REG_OTP_VERIFY,
    COUNTRY,
    CHECKUSEREXIST
  } from "@/store/actions.type";
  import ValidatioMixin from "@/mixins/ValidatioMixin";
  import {
    domain
  } from '../../../../user_config';
  import $ from "jquery";
  // import 'bootstrap';

  export default {
    name: "app",
    mixins: [ValidatioMixin],
    data() {
      return {
        nameErr: "",
        emaiErr: "",
        mobile_data: "",
        positionErr: "",
        countryerr: "",
        snameErr: "",
        errorpwd: "",
        errorcpwd: "",
        password_validation_msg: true,
        usermsg: "",
        usermsg1: "",
        email_otp: "",
        weburl: "",
        useractive: true,
        useractive1: false,
        otpSent: false,
        otp: "",
        otpVerified: false,
        isVerifyOtp: "",
        whatsapp_no: "",
        register: {
          user_id: "",
          fullname: "",
          email: "",
          referral_id: "",
          mobile: "",
          //btc_address: "",
          password: "",
          confirm_password: "",
          position: "",
          country: "",
          //secret_question:'',
          // secret_ans:'',
        },
        countries: {
          iso_code: "",
          country: "",
        },
        flag_for_hide_validation_messege: "",
        icon: "../public/user_files/assets/img/icon-mlm.png",
        logo: "../public/user_files/assets/img/logo.png",
        hostName: window.location.origin,
        checkMobileValid: true,
        getcountry: "",
        getMobile: "",
        temp: "",
        selected: true,
        isActiveBtn: true,
        queArr: "",
        terms: false,
        agree: "",
        rand_no: "",
        captcha: "",
        captchamatch: false,
        captchamatcherror: "",
        btc_error: "",
        typingTimer: "",
        country: "",
        doneTypingInterval: 500,
        showpassword: 0,
        showpassword2: 0,
        alreadyref: 0,
        is_referral: "",
        eye: "bi bi-eye-slash fs-2",
        eye2: "bi bi-eye-slash fs-2",
      };
    },
    computed: {

      isCompleteRegister() {
        return (
          this.register.user_id &&
          this.country &&
          // && !this.btc_error
          this.register.email &&
          this.register.referral_id &&
          /*  this.register.position &&*/
          this.register.fullname &&
          // this.register.mobile /*&& this.register.position*/ &&
          this.selected &&
          this.register.position &&
          this.register.password &&
          this.register.confirm_password && //&&
          //this.register.btc_address &&
          // this.checkMobileValid&&
          this.register.mobile
          // this.register.eth_address
        );
      },
    },
    mounted() {

      //this.getUser_ID();
      this.weburl = domain;
      this.register.user_id =
        "CQC" + parseInt(Math.floor(Math.random() * 90000) + 10000);

      // alert(this.register.user_id);
      // alert(this.weburl);
      this.getCountry();
      /*this.getQuestions();*/
      /*this.getRandomNo();*/
      (this.one_letter = "invalid"),
      (this.greater_than_8 = "invalid"),
      (this.one_capital_letter = "invalid"),
      (this.special_char = "invalid"),
      (this.one_number = "invalid"),
      (this.starting_with_letter = "invalid"),
      (this.flag_for_hide_validation_messege = false);
      if (this.$route.query.ref_id != undefined && this.$route.query.ref_id != "") {
        this.register.referral_id = this.$route.query.ref_id;
        var uniqueid = this.$route.query.ref_id;
        this.register.position = this.$route.query.position;
        this.getUserId_ref(uniqueid);
        // this.checkuserexist();
        this.alreadyref = 1;
        // this.otpbox();


      }
    },
    methods: {
      moveTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;

      },
      PositionValidation(e) {
        const position = e.target.value;
        if (position == "") {
          this.positionErr = "Please select position";
        } else {
          this.positionErr = "";
        }
      },
      CountryValidation(e) {
        const country = e.target.value;
        if (country == "") {
          this.countryerr = "Please select country";
        } else {
          this.countryerr = "";
        }
      },
      SponsorValidation() {
        if (this.register.referral_id == '') {
          this.usermsg = "Sponsor Id required";
        }else{
          this.usermsg = "";
        }
      },
      onChange(event) {
        this.country = event.target.value;

      },

      closeModal() {
        $("#enterOTP").modal("hide");
      },

      registerUser() {
        if (this.register.fullname !== '' && this.country !== '' && this.register.mobile !== '' && this.register
          .referral_id !== '' && this.register.password !== '' && this.register.confirm_password !== '' && this.register
          .position !== '' && this.register.email !== '' && this.errorcpwd == '' &&
          this.errorpwd == '' &&
          this.nameErr == '' &&
          this.emaiErr == '' &&
          this.positionErr == '' &&
          this.mobile_data == '' &&
          this.usermsg == '' &&
          this.snameErr == '') {
          
            alert(this.terms);
            if (this.terms == false) {
            this.$toast.error('Press ALLOW to verify that you are not a Robot');
             return false;
         }

          if (this.register.password !== this.register.confirm_password) {
            return this.$toast.error(
              "Password and Confirm Password are not match"
            );
          }

          // var type = "email";

          $("#resend_otp").hide();
          var data = {
            //   type: type,
            user_id: this.register.user_id,
            email: this.register.email,
            mobile: this.register.mobile,
            fullname: this.register.fullname,
            country: this.country,
            ref_user_id: this.register.referral_id,
            password: this.register.password,
            password_confirmation: this.register.confirm_password,
            position: this.register.position,
            //user_id: this.user_id,
          }
          this.$store
            .dispatch(REGISTER, data)
            .then((response) => {


              if (response.code == 200) {
                // this.$toast.success(response.message);
                this.$toast.success("User Registered Successfully");
                // this.registerUser();
                this.$router.push({
                  name: "thankyou",
                  params: {
                    user_id: response.data.userid,
                    password: response.data.password,
                  },
                });


              } else {
                this.$toast.error(response.message);
              }
            })
            .catch((error) => {
              this.$toast.error(error);
              this.message = "";
            });
        } else {
          return this.$toast.error(
            "Please enter valid data"
          );
        }
      },
      isLetter(e) {
        let char = String.fromCharCode(e.keyCode); // Get the character
        if (/^[A-Za-z ]+$/.test(char)) return true;
        // Match with regex
        else e.preventDefault(); // If not match, don't add to input text
      },
      verify_email_otp() {
        var type = "email";

        var data = {
          email: this.register.email,
          type: type,
          email_otp: this.otp,
          user_id: this.register.user_id,
          mobile: this.register.mobile,
          fullname: this.register.fullname,
          country: this.country,
          ref_user_id: this.register.referral_id,
          password: this.register.password,
          password_confirmation: this.register.confirm_password,
          position: this.register.position,
          /*RegisterData: this.register*/
        }



        this.$store
          .dispatch(REG_OTP_VERIFY, data)
          .then((response) => {
            if (response.code == 200) {
              var check_status = response.data.status;
              //alert(check_status);
              if (check_status == "email") {
                $("#enterOTP").modal("hide");
                this.otpVerified = true;
                this.otpSent = true;
                this.optVerified = true;

                this.otp = '';
                // this.$toast.success(response.message);
                this.$toast.success("User Registered Successfully");
                // this.registerUser();
                this.$router.push({
                  name: "thankyou",
                  params: {
                    user_id: response.data.userid,
                    password: response.data.password,
                  },
                });
                // this.registerUser();
                // this.$toast.success(response.message);
              } else if (check_status == "mobile") {
                this.otpVerified = true;
                this.$toast.success(response.message);
                this.otpSent = true;
                this.optVerified = true;
                // this.registerUser();
                // this.step1=false;
                // this.step2=false;
                // this.step3=true;
                this.$toast.success(response.message);
                if (this.fromLog == false) {
                  this.$router.push({
                    name: "thankyou",
                    params: {
                      user_id: response.data.userid,
                      password: this.password,
                    },
                  });
                } else {
                  this.$router.push({
                    name: "login",
                    params: {}
                  });
                }
                // this.updatemobile();
                // this.registerUser();
              }
            } else {
              this.otp = '';
              this.$toast.error(response.message);
            }
          })
          .catch((error) => {
            this.$toast.error(error);
            this.message = "";
          });

      },

      getCountry() {
        this.$store
          .dispatch(COUNTRY, {})
          .then((response) => {
            this.countries = response.data;
          })
          .catch();
      },
      check() {
        if ($("#agree").prop("checked") == true) {
          this.agree = 1;
        } else {
          this.agree = 0;
        }
      },

      checkuserexist(para) {
       
        if (this.register.referral_id == '') {
          this.usermsg = "Sponsor Id required";
        } else {
          this.usermsg = "";
          if (para == 1) {
            var user = this.register.user_id;
          } else {
            user = this.register.referral_id;
          }

          var data = {
            user_id: user,
          };

          this.$store
            .dispatch(CHECKUSEREXIST, data)
            .then((response) => {
              if (response.code == 200) {
                if (para == 1) {
                  this.useractive1 = true;
                  this.usermsg1 = "user Already exist with this id";
                  this.isActiveBtn = false;
                } else {
                  this.useractive = true;
                  if (this.useractive1 == false) {
                    this.isActiveBtn = true;
                  }
                }
              } else {
                if (para == 1) {
                  this.useractive1 = false;
                  if (this.useractive == true) {
                    this.isActiveBtn = true;
                  }

                  //this.isActiveBtn = true;
                  this.usermsg1 = response.message;
                } else {
                  this.useractive = false;
                  this.isActiveBtn = false;
                  this.usermsg = "Invalid Sponsor Id";
                }
              }
            })
            .catch();
        }
      },


      getUserId_ref() {
        var data = {
          user_id: this.$route.query.ref_id,
        };

        this.$store
          .dispatch(CHECKUSEREXIST, data)
          .then((response) => {
            if (response.code == 200) {
              // this.register.referral_id = response.data;
              $("#referral_id").prop("readonly", true);
              $("#s_id").attr("disabled", "disabled");
              this.useractive = true;
            } else {
              this.useractive = false;
              this.isActiveBtn = false;
              this.usermsg = response.message;
            }
          })
          .catch();

      },
      matchCaptcha() {
        if (parseInt(this.captcha) != parseInt(this.rand_no)) {
          /*this.errors.add({
                          field: 'captcha',
                          msg: 'Captcha not match'
                          });*/
          // alert();
          this.captchamatch = false;
          this.captchamatcherror = "captcha not match";
          // return false;
        } else {
          // alert();
          this.captchamatcherror = "";
          this.captchamatch = true;
          /*this.errors.remove({
                          field: 'captcha',
                          
                          });*/
          // return true;
        }
      },


      reset() {
        this.user.user_id = "";
        this.user.password = "";
      },
      getReferralId() {
        $("#referral_id").val("Williamson");
      },
      matchpassword() {
        if (this.register.password != this.register.confirm_password) {
          /*this.errors.add('this.password_confirmation', 'not match')*/
          this.errors.add({
            field: "confirm_password",
            msg: "password does not match",
          });
          // this.password_validation_msg = true;
        } else {
          // this.password_validation_msg = false;
        }
      },
      /* check($event){
        if($("#agree").prop('checked') == true){
          this.terms = 1;
        }else{
          this.terms = 0;
        } 
      },*/
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

      showPass2() {
        if (this.showpassword2 == 0) {
          document.getElementById("confirm_password").type = "text";
          this.eye2 = "fa fa-eye field-icon";
          this.showpassword2 = 1;
        } else if (this.showpassword2 == 1) {
          document.getElementById("confirm_password").type = "password";
          this.showpassword2 = 0;
          this.eye2 = "fa fa-eye-slash field-icon";
        }
         else {
          document.getElementById("confirm_password").type = "text";
          this.eye2 = "fa fa-eye field-icon";



          }
      },

         ChangeConfirmPasswordValidation(e) {
         
         const cpwd = e.target.value;
         var pwd = this.register.password;
           if(cpwd != "" && pwd != ""){
         if (cpwd == "") {
             this.errorcpwd = "Retype should not be blank.";
         }else if (cpwd != pwd) {
           if(cpwd != "" && pwd != ""){
             this.errorcpwd = "Password not Matched.";
           }else{
             this.errorcpwd = "";
           }
         } else {
             this.errorcpwd = "";
         }
       }
     },
      NewPasswordValidation(e) {
            const pwd = e.target.value;
            var pwdpattern = new RegExp("^(?=.*[!@#$%^&/*])");
            var cpwd = this.register.confirm_password;
        

            if (pwd == "") {
                this.errorpwd = " Password should not be blank.";
            } else if (pwd.length < 8) {
                this.errorpwd = "Invalid, Enter minimum 8 character";
            } else if (pwd.length > 30) {
                this.errorpwd = "Invalid, Enter maximum 30 character";
            } else if (!/[a-z]/.test(pwd)) {
                this.errorpwd =
                    "Password must contain atleast one lowercase character.";
            } else if (!/[A-Z]/.test(pwd)) {
                this.errorpwd =
                    "Password must contain atleast one Uppercase character.";
            } else if (!/[0-9]/.test(pwd)) {
                this.errorpwd = "Password must contain atleast one Digit.";
            } else if (!pwdpattern.test(pwd)) {
                this.errorpwd = "Password must contain atleast one Special Character.";
            } 
            else if(cpwd != pwd){
              if(cpwd != "" && pwd != ""){
                this.errorcpwd = "Password not Matched.";
              }else{
                this.errorcpwd = "";
              }
            }
            else {
                this.errorpwd = "";
                this.errorcpwd = "";
                
            }
          
        },


      check1() {
        if (this.is_referral == true) {
          this.register.referral_id = "Williamson";
          this.checkuserexist();
        } else {
          this.register.referral_id = "";
          this.sponsor_name = "";
        }
      },
    },
  };
</script>