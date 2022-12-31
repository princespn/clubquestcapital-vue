<template>
  <div class="container-fluid recover-background-img">
    <div class="row h-100">
      <div class="col-12 col-md-5 col-lg-6 col-xl-7">
        <div class="admin-logo mt-5 text-left">
          <img src="user-assets/images/login-logo.svg" />
        </div>
        <!--<div class="data-checking">
          <p>Incorrect data please check & enter again</p>
        </div>-->
      </div>
      <div class="col-12 col-md-7 col-lg-6 col-xl-5 align-items-center px-5 d-flex justify-content-center">
        <div class="login-white-box text-left">
          <h4>Reset password</h4>
          <!-- <p>Don't worry, you can't loss your data.</p> -->
          <form class="mt-5 login-form" @submit.prevent="resetPassword">
            <div class="form-group">
              <!-- <input type="email" class="form-control form-input" placeholder="Enter Address"> -->

              <input type="password" maxlength="30" class="form-control form-input" placeholder="Enter New Password" name="password"
                id="password"  v-on:input="RPasswordValidation()"  v-model="register.password"   autofocus="" />
              <!-- <span toggle="#password-field" class="fa fa-eye field-icon"></span> this one is open eye -->
              <span toggle="#password-field" class="fa fa-eye-slash field-icon" @click="showPass" :class="eye" ></span>  <!-- this one is close eye -->
              <div v-if="errorpwd !== ''" class="tooltip2">
                    <span class=" text-danger">{{ this.errorpwd }}</span>
                  </div>
            </div>
         
            <!-- <div class="pass-show-hide"
              onclick="if (password.type == 'text') password.type = 'password'; else password.type = 'text';">
              <img src="user-assets/images/eye-icon.svg" class="pass-close-image" alt="" />
              <img src="user-assets/images/eye-icon.svg" class="pass-show-image" alt="" />
            </div> -->

            <div class="form-group">
              <!-- <input type="email" class="form-control form-input" placeholder="Enter Address"> -->

              <input type="password" maxlength="30" class="form-control form-input" placeholder=" Enter Confirm Password"
                name="confirmpassword" id="confirmpassword" v-model="register.confirmpassword" v-on:input="RConfirmPasswordValidation()" />
              <!-- <span toggle="#password-field" class="fa fa-eye field-icon"></span> this one is open eye -->
              <span toggle="#password-field" class="fa fa-eye-slash field-icon" @click="showPass2" :class="eye2" ></span> <!-- this one is close eye -->
              <div v-if="errorcpwd !== ''" class="tooltip2">
                    <span class=" text-danger">{{ this.errorcpwd }}</span>
                  </div>
            </div>
          
            <!-- <div class="pass-show-hide"
              onclick="if (confirmpassword.type == 'text') confirmpassword.type = 'password'; else confirmpassword.type = 'text';">
              <img src="user-assets/images/eye-icon.svg" class="pass-close-image" alt="" />
              <img src="user-assets/images/eye-icon.svg" class="pass-show-image" alt="" />
            </div> -->

            <!-- <div class="input-error-show">
              <p>Please Enter Valid User Name or Password</p>
            </div> -->

            <div class="prove-human prove-human-recover">
              <div>
                <h5>Prove you are the Human</h5>
              </div>
              <div class="cust-checkbox-new">
                <label class="cust-chk-bx">
                  <input type="checkbox" id="terms" v-model="terms" />
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
            <div class="text-center">
              <!-- <button type="submit" class="login-blue-btn">Recover</button> -->

              <button class="login-blue-btn" :disabled="
                  !isSubmit ||
                  errorcpwd !== '' ||
                  errorpwd !== '' ||
                  !isActiveBtn
                ">
                Password Update
              </button>
            </div>
            <div class="frt-link">
              <p>Don't have an account?</p>
              <!-- <a href="./Register">Register</a> -->
              <router-link to="/">Login</router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {
    RESET_PASSWORD
  } from "@/store/actions.type";
  import ValidatioMixin from "@/mixins/ValidatioMixin";
  export default {
    name: "app",
    mixins: [ValidatioMixin],
    data() {
      return {
        showpassword: 0,
        showpassword2: 0,
        eye: "fa fa-eye-slash",
        eye2: "fa fa-eye-slash",
        terms: "",
        resettoken: "",
        errorpwd: "",
        errorcpwd: "",
        register: {
          password: "",
          confirmpassword: "",
        },
        flag_for_hide_validation_messege: "",
        icon: "../public/user_files/assets/img/icon-mlm.png",
        logo: "../public/logos/Userpanellogo/",
        hostName: window.location.origin,
        isActiveBtn: true,
      };
    },
    computed: {
      isSubmit() {
        return this.register.password && this.register.confirmpassword;
      },
    },
    mounted() {
      this.getResetToken();
      (this.one_letter = "invalid"),
      (this.greater_than_6 = "invalid"),
      (this.one_capital_letter = "invalid"),
      (this.special_char = "invalid"),
      (this.one_number = "invalid"),
      (this.starting_with_letter = "invalid"),
      (this.flag_for_hide_validation_messege = false);
    },

    methods: {

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
          document.getElementById("confirmpassword").type = "text";
          this.eye2 = "fa fa-eye field-icon";
          this.showpassword2 = 1;
        } else if (this.showpassword2 == 1) {
          document.getElementById("confirmpassword").type = "password";
          this.showpassword2 = 0;
          this.eye2 = "fa fa-eye-slash field-icon";
        }
        else
          {
          document.getElementById("confirmpassword").type = "text";
          this.showpassword2 = 0;
          this.eye2 = "fa fa-eye field-icon";



          }
      },

      getResetToken() {
        var url = window.location.href;
        var hash = url.split("=");
        if (hash.length == 1) {
          this.$toast.error("Something Went Wrong...");
        } else {
          this.resettoken = hash[1];
        }
      },
      
      RPasswordValidation() {
           // const pwd = e.target.value;
            const pwd = this.register.password;
            var pwdpattern = new RegExp("^(?=.*[!@#$%^&/*])");

            //if (pwd == "") {
              if (pwd.length <= 1) {
                this.errorpwd = "New Password should not be blank.";
              } else if (pwd.length <= 2 && pwd.length >= 8) {
                this.errorpwd = "New Password field must be minimum 8 character";
            } else if (pwd.length > 30) {
                this.errorpwd = "The New password field must be maximum 30 characters";
            } else if (!/[a-z]/.test(pwd)) {
                this.errorpwd =
                    "New Password must contain at least one lowercase character.";
            } else if (!/[A-Z]/.test(pwd)) {
                this.errorpwd =
                    "New Password must contain at least one Uppercase character.";
            } else if (!/[0-9]/.test(pwd)) {
                this.errorpwd = "New Password must contain at least one Digit.";
            } else if (!pwdpattern.test(pwd)) {
                this.errorpwd = "New Password must contain at least one Special Character.";
            } else {
                this.errorpwd = "";
            }
        },
        RConfirmPasswordValidation() {
           // const cpwd = e.target.value;
            var cpwd = this.register.password;
            var pwd = this.register.confirmpassword;
          //  if (cpwd == "") {
            if (cpwd.length <= 1) {
                this.errorcpwd = "Confirm Password should not be blank.";
            } else if (cpwd.length != pwd.length) {
                this.errorcpwd = "Password does not Match.";
            } else if (cpwd != pwd) {
                this.errorcpwd = "Password does not Match.";
            } else {
                this.errorcpwd = "";
            }
        },

      resetPassword() {
        var terms = document.getElementById("terms");

        if (this.register.password != this.register.confirmpassword) {
          return this.$toast.error("Password not matched");
        }
        if (
          this.register.password !== "" &&
          this.register.confirmpassword != "" &&
          this.errorcpwd == "" &&
          this.errorpwd == ""
        ) {
          if (terms.checked == false) {
            return this.$toast.error("Please confirm you are not robot");
          }
          this.isActiveBtn = false;
          var data = {
            resettoken: this.resettoken,
            password: this.register.password,
            confirm_password: this.register.confirmpassword,
          };

          this.$store
            .dispatch(RESET_PASSWORD, data)
            .then((resp) => {
              if (resp.code == 200) {
                this.$toast.success(resp.message);
                this.$router.push({
                  name: "login"
                });
              } else {
                this.$toast.error(resp.message);
              }
              this.isActiveBtn = true;
            })
            .catch();
        } else {
          return this.$toast.error("Please Enter Valid Data");
        }
      },
    },
  };
</script>