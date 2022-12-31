<template>
  <div class="container-fluid recover-background-img">
    <div class="row h-100     align-items-baseline">
      <div class="col-12 col-md-5 col-lg-6 col-xl-7">
        <div class="admin-logo mt-5 text-left">
          <img src="user-assets/images/login-logo.svg" />
        </div>

      </div>
      <div class=" col-12 col-md-7 col-lg-6 col-xl-5  align-items-center d-flex  justify-content-center">
        <div class="login-white-box text-left">
          <h4>Forgot Password ?</h4>
          <p>Don't worry, you can't lose your data.</p>
          <form class="mt-5 login-form">
            <div class="form-group">
              <!-- <input type="email" class="form-control form-input" placeholder="Enter Address"> -->
              <input maxlength="8" type="text" class="form-control form-input" autofocus="" v-model="user_id"
                onkeypress="return (event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123) ||  (event.charCode >= 48 && event.charCode <= 57) "
                v-on:keyup="checkuserexist(1)" placeholder="Enter User ID" required />
            </div>
            <div v-if="!useractive" class="text-danger">
              <p>{{ this.usermsg }}</p>
            </div>
            <!--
            <div v-if="!useractive" class="input-error-show">
              <p>{{ this.usermsg }}</p>
            </div>-->

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
            <div class="text-center">
              <!-- <button type="submit" class="login-blue-btn">Recover</button> -->
              <button class="login-blue-btn" type="button"
                @click="sendOTP" :disabled="!isSubmit || !isActiveBtn || !useractive ||  !terms"> Submit </button>
            </div>
            <div class="frt-link">
              <p>Don't have an account?</p>
              <router-link to="/">Login</router-link>
            </div>
          </form>
        </div>
      </div>

      <div class="modal-demo">
          <div class="modal fade dashboard-modal"  id="verification-code-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"  aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg"   role="document">
              <div class="modal-content verifi-modal-dialog position-relative">
                <div class="modal-header border-0 px-0">
                  <h5 class="modal-title verifi-title">     Enter Verification Code...…..              </h5>
                  <button type="button" @click="CloseModal()" class="close" data-bs-dismiss="modal" aria-label="Close">
                    <img src="user-assets/images/veri-close-icon.svg" />
                  </button>
                </div>

                <div class="modal-body p-0">
                  <div class="row">
                    <div class="col-12 col-lg-6">
                      <div class="verifi-content">
                        <p>
                          <!-- We have just sent a verification code to User {{user_id}} ,
                          and their mail also -->
                          We have sent a verification code on your registered mail id
                        </p>
                        <div class="input-code d-flex"  id="otpJump">
                          <input   type="text"   onkeypress="return (event.charCode == 8 || event.charCode == 0 || event.charCode == 13) ? null : event.charCode >= 48 && event.charCode <= 57"
                            @paste="onPaste"  v-on:input="digitValidate($event)"         class="form-control" id="first"  maxlength="1"/>
                          <input
                            type="text"
                            v-on:input="digitValidate($event)"
                            
                            class="form-control"
                            id="second"
                            maxlength="1"
                            onkeypress="return (event.charCode == 8 || event.charCode == 0 || event.charCode == 13) ? null : event.charCode >= 48 && event.charCode <= 57"
                          />
                          <input
                            type="text"
                            v-on:input="digitValidate($event)"
                            
                            class="form-control"
                            id="third"
                            maxlength="1"
                            onkeypress="return (event.charCode == 8 || event.charCode == 0 || event.charCode == 13) ? null : event.charCode >= 48 && event.charCode <= 57"
                          />
                          <input
                            type="text"
                            v-on:input="digitValidate($event)"
                            
                            class="form-control"
                            id="fourth"
                            maxlength="1"
                            onkeypress="return (event.charCode == 8 || event.charCode == 0 || event.charCode == 13) ? null : event.charCode >= 48 && event.charCode <= 57"
                          />
                          <input
                            type="text"
                            v-on:input="digitValidate($event)"
                            
                            class="form-control"
                            id="fifth"
                            maxlength="1"
                            onkeypress="return (event.charCode == 8 || event.charCode == 0 || event.charCode == 13) ? null : event.charCode >= 48 && event.charCode <= 57"
                          />
                          <input
                            type="text"
                            v-on:input="digitValidate($event)"
                            
                            class="form-control"
                            id="sixth"
                            maxlength="1"
                            onkeypress="return (event.charCode == 8 || event.charCode == 0 || event.charCode == 13) ? null : event.charCode >= 48 && event.charCode <= 57"
                          />
                        </div>
                        <!--<div class="send-code mt-4">
                          <h5>Sent the code again</h5>
                          <h5>Change the mail Id</h5>
                        </div>-->

                        <button
                          type="button"
                          @click="checkOtp()"
                          class="blue-btn mt-4">
                          Verify
                        </button>
                      </div>
                    </div>
                    <div class="col-12 col-lg-6">
                      <div class="verifi-img">
                        <img src="user-assets/images/verifi-code-img.png" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      <!-- <div class="modal-demo">
        <button
          class="blue-btn"
          data-toggle="modal"
          data-target="#verification-code-modal"
        >
          verification code
        </button>
        <div
          class="modal fade dashboard-modal"
          id="verification-code-modal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div
            class="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div class="modal-content verifi-modal-dialog position-relative">
              <div class="modal-header border-0 px-0">
                <h5 class="modal-title verifi-title">
                  Enter Verification Code...…..
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <img src="user-assets/images/veri-close-icon.svg" />
                </button>
              </div>

              <div class="modal-body p-0">
                <div class="row">
                  <div class="col-12 col-lg-6">
                    <div class="verifi-content">
                      <p>
                        We have just sent a verification code to User 6427715 ,
                        and their mail also
                      </p>
                      <div class="input-code d-flex">
                        <input type="number" class="form-control" />
                        <input type="number" class="form-control" />
                        <input type="number" class="form-control" />
                        <input type="number" class="form-control" />
                        <input type="number" class="form-control" />
                      </div>
                      <div class="send-code mt-4">
                        <h5>Sent the code again</h5>
                        <h5>Change the mail Id</h5>
                      </div>
                      <button type="button" class="blue-btn mt-4">
                        Verify
                      </button>
                    </div>
                  </div>
                  <div class="col-12 col-lg-6">
                    <div class="verifi-img">
                      <img src="user-assets/images/verifi-code-img.png" />
                    </div>
                  </div>
                </div>
              </div>
            
            </div>
          </div>
        </div>

      </div> -->
    </div>
  </div>
</template>
<script>
  import {
    FORGOT_PASSWORD_OTP,
    FORGOT_PASSWORD_OTP_CHECK,
    CHECKUSEREXIST,
  } from "@/store/actions.type";
  import $ from "jquery";

  export default {
    name: "app",
    data() {
      return {
        weburl: "",
        usermsg: "",
        useractive: true,
        terms: "",
        user_id: "",
        email: "",
        otp: "",
        otpstatus: "",
        icon: "../public/user_files/assets/img/icon-mlm.png",
        logo: "../public/user_files/assets/img/logo.png",
        hostName: window.location.origin,
        isActiveBtn: true,
      };
    },
    computed: {
      isSubmit() {
        return this.user_id;
      },
    },
    methods: {
      CloseModal() {
      window.$("#verification-code-modal").modal("hide");
      location.reload();
    },

    onPaste(evt) {
      var otpnumber = evt.clipboardData.getData("Text");

      var output = [];

      for (var i = 0, len = otpnumber.length; i < len; i += 1) {
        output.push(+otpnumber.charAt(i));
      }
      document.getElementById("first").value = output[0];
      document.getElementById("second").value = output[1];
      document.getElementById("third").value = output[2];
      document.getElementById("fourth").value = output[3];
      document.getElementById("fifth").value = output[4];
      document.getElementById("sixth").value = output[5];
    },
    digitValidate(ele) {
      ele.value = ele.value.replace(/[^0-9]/g, "");
    },
    tabChange(val) {
      let ele = document.getElementById("otp").getElementsByTagName("input");
      if (ele[val - 1].value != "") {
        ele[val].focus();
      } else if (ele[val - 1].value == "") {
        ele[val - 2].focus();
      }
    },
      checkuserexist() {
        var data = {
          user_id: this.user_id,
          para: 2,
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
              //this.usermsg = "User ID Required";
               this.usermsg = response.message;
            }
          })
          .catch();
      },

      sendOTP() {
        var terms = document.getElementById("terms");
        document.getElementById("first").value = "";
        document.getElementById("second").value = "";
        document.getElementById("third").value = "";
        document.getElementById("fourth").value = "";
        document.getElementById("fifth").value = "";
        document.getElementById("sixth").value = "";

        if (this.user_id !== "") {
          if (this.useractive == false) {
            return this.$toast.error("Please Enter Valid User ID");
          }

          if (terms.checked == false) {
            return this.$toast.error("Prove you are the Human field is required");
          }
          var data = {
            user_id: this.user_id,
          };

          this.$store
            .dispatch(FORGOT_PASSWORD_OTP, data)
            .then((response) => {
              if (response.code == 200) {
               $("#verification-code-modal").modal("show");
                //console.log(response);
                this.$toast.success(response.message);
                //this.statedata=response.data.message;
              } else {
                //  $("#enterOTP").hide();
              //  window.$("#enterOTP").modal("hide");
                this.$toast.error(response.message);
              }
            })
            .catch();
        } else {
          return this.$toast.error("Please Enter Valid Data");
        }
      },

      checkOtp() {
        var p1 = document.getElementById("first").value;
        var p2 = document.getElementById("second").value;
        var p3 = document.getElementById("third").value;
        var p4 = document.getElementById("fourth").value;
        var p5 = document.getElementById("fifth").value;
        var p6 = document.getElementById("sixth").value;
        this.otp = p1 + p2 + p3 + p4 + p5 + p6;
        var data = {
          otp: this.otp,
          user_id: this.user_id,
        };

        this.$store
          .dispatch(FORGOT_PASSWORD_OTP_CHECK, data)
          .then((response) => {
            if (response.code == 200) {
              // this.statedata=response.data;
              // this.otp = '';
              //  $('#forgotMe').trigger('click');
             // window.$("#enterOTP").modal("hide");
             // document.getElementById("enterOTP").style.display = "none";

              //  $('#editBankDetailsmodal').modal('hide');
              //this.otpstatus = true;
              window.location.href = response.data;
              /*$('#editBankDetails1').modal('show');*/
              this.$toast.success(response.message);
             // this.CloseModal();
            } else {
              this.otp = "";
              document.getElementById("first").value = "";
              document.getElementById("second").value = "";
              document.getElementById("third").value = "";
              document.getElementById("fourth").value = "";
              document.getElementById("fifth").value = "";
              document.getElementById("sixth").value = "";
              this.$toast.error(response.message);
            }
          })
          .catch();
      },
    },
  };
</script>