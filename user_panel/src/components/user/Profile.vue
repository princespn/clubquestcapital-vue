<template>
    <Navbar />

    <main class="content-wrapper-section">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="comn-title">
                        <h2 class="f-size-22">Profile</h2>
                    </div>
                </div>
                <div class="col-12">
                    <div class="profile-bg">
                        <div class="profile-content">
                            <div class="invite-btn text-right mr-3">
                                <!-- <a href="#" type="button" class="btn white-btn">Edit Cover</a> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-12 col-md-5 col-xl-4 ml-xl-4">
                    <div class="profile-sec text-center margin-top">
                        <img src="user-assets/images/profile-img.png" />
                        <h4>John Deo</h4>
                        <h5>Phonix Mc.huhj ,hu gobant .</h5>
                        <div class="profile-graph text-center">
                            <h6>Earnings</h6>
                            <img src="user-assets/images/profile-graph.png" />
                            <div>
                                <button class="graph-btn">$867.67</button>
                            </div>
                        </div>
                        <div class="edit">
                            <button class="login-blue-btn">Edit</button>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-7 col-xl-7 mt-4">
                    <!-- edit profile -->
                    <div class="white-box-form mb-4">
                        <div class="d-flex align-items-center justify-content-between">
                            <h4 class="form-title">Edit Profile</h4>
                            
                            <!-- <div class="col-md-12 mt-5 mb-4 text-center">
                      <button
                        class="btn btn-primary"
                        @click.prevent="sendOTP('profile')"
                        :disabled="
                          !isCompleteProfile ||
                          nameErr !== '' ||
                          emaiErr !== '' ||
                          errormobile !== ''
                        "
                        v-if="objProSettings.profile_update_status == 1"
                        type="button"
                      >
                        Update Changes
                      </button>
                      <button
                        class="btn btn-primary"
                        v-else
                        :disabled="
                          !isCompleteProfile ||
                          nameErr !== '' ||
                          emaiErr !== '' ||
                          errormobile !== ''
                        "
                        @click.prevent="checkOtp('profile')"
                      >
                        Update Changes
                      </button>
                    </div> -->



                            <button class="blue-btn-profile" @click.prevent="sendOTP('profile')"
                        :disabled="
                          !isCompleteProfile ||
                          nameErr !== '' ||
                          emaiErr !== '' ||
                          errormobile !== ''
                        "
                        v-if="objProSettings.profile_update_status == 1"
                        type="button">Update Profile</button>
                        <button
                        class="blue-btn-profile"
                        v-else
                        :disabled="
                          !isCompleteProfile ||
                          nameErr !== '' ||
                          emaiErr !== '' ||
                          errormobile !== ''
                        "
                        @click.prevent="checkOtp('profile')"
                      >
                        Update Changes
                      </button>
                        </div>
                        <div class="profile-sec-form mt-4">
                            <form>
                                <div class="form-group">
                                    <label class="form-lable">Name</label>
                                    <input type="text" class="form-control input-profile-form-blue"
                                    placeholder="Enter Full Name"
                                    v-on:keypress="isLetter($event)" name="fullname"
                                    v-model="profile.fullname"
                                    @blur="NameValidation($event)"
                                    maxlength="30"
                                    />
                         
                                <div v-if="nameErr !== ''" class="tooltip2">
                                    <span class="error-msg-size tooltip-inner text-danger">
                                    {{ this.nameErr }}</span
                                    >
                                </div>
                                    

                                </div>
                                <div class="form-group">
                                    <label class="form-lable">Email</label>
                                    
                                    <input type="text" class="form-control input-profile-form"
                                    placeholder="Enter Email ID"
                                    name="email" v-model="profile.email"
                                    @blur="EmaiValidation($event)"
                                    />
                      
                                    <div v-if="emaiErr !== ''" class="tooltip2">
                                        <span class="error-msg-size tooltip-inner text-danger">
                                        {{ this.emaiErr }}</span
                                        >
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="form-lable">Mobile</label>
                                    <input type="number" class="form-control input-profile-form"
                                    id="mobile"
                                    name="mobile"
                                    placeholder="Enter Mobile Number"
                                    data-vv-as="mobile"
                                    v-model="profile.mobile"
                                    onkeypress="return event.charCode >= 48 && event.charCode <= 57"
                                    @blur="MobileValidation($event)"
                                    maxlength="20"/>
                         
                      <div v-if="errormobile !== ''" class="tooltip2">
                        <span class="error-msg-size tooltip-inner text-danger">
                          {{ this.errormobile }}</span
                        >
                      </div>    
                                </div>
                                <div class="form-group">
                                    <label class="form-lable">Country</label>
                                    <div class="input-profile-form d-flex px-2 py-1">

                                    <select v-model="profile.country" class="custom_select">
                                    <option
                                    v-for="cur in get_country"
                                    :value="cur.iso_code"
                                    :key="cur.iso_code"
                                    >
                                    {{ cur.country }}
                                    </option>
                                    </select>
                                        <!-- <select class="custom_select">
                                            <option selected value="default">
                                                💶 </option>
                                            <option value="Paris">Paris</option>
                                            <option value="Rome">Rome</option>
                                            <option value="Madrid">Madrid</option>
                                        </select>
                                        <input placeholder="U. S. A." class="select-with-input" /> -->
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>

                    <!-- currency address -->
                    <div class="white-box-form mb-4">
                        <div class="d-flex align-items-center justify-content-between">
                            <h4 class="form-title">Currency Address</h4>
                            <button class="blue-btn-profile">Update Address</button>
                        </div>
                        <div class="profile-sec-form mt-4">
                            <form>
                                <div class="form-group">
                                    <label class="form-lable">Bitcoin</label>
                                    <div class="input-group mb-3 input-profile-form align-items-center">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text custome-input-group" id="basic-addon1"><img
                                                    src="user-assets/images/Bitcoin.png" /></span>
                                        </div>
                                        <input type="text" class="form-control currentry-input"
                                        id="btc_add" placeholder="BTC Address"
                                        v-model="profile.btc_address"
                                        name="btc_address"
                                        maxlength="42" 
                                        v-on:input="checkaddress"
                                        onkeypress="return (event.charCode >= 48 && event.charCode <= 57)||(event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)"
                                        />

                                            <!-- <input
                          type="text"
                          id="btc_add"
                          class="form-control"
                          placeholder="BTC Address"
                          v-model="profile.btc_address"
                          name="btc_address"
                          maxlength="42" 
                          v-on:input="checkaddress"
                          onkeypress="return (event.charCode >= 48 && event.charCode <= 57)||(event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)"
                        /> -->
                              </div>
                              <div v-if="!btcactive" class="tooltip2">
                          <span
                            class="error-msg-size tooltip-inner text-danger"
                            >{{ this.btcmsg }}</span
                          >
                        </div>
                                </div>
                                <div class="form-group">
                                    <label class="form-lable">Tron</label>
                                    <div class="input-group mb-3 input-profile-form align-items-center">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text custome-input-group" id="basic-addon1"><img
                                                    src="user-assets/images/Tron.png" /></span>
                                        </div>
                                        <input type="text" class="form-control  currentry-input"
                                        id="trx_add" placeholder="TRON Address"
                          v-model="profile.trn_address"
                          name="trx_address"
                          maxlength="42" 
                          v-on:input="checkTRXAddress(1)"
                          onkeypress="return (event.charCode >= 48 && event.charCode <= 57)||(event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)"
                        />    
<!-- 
                                            <input
                          type="text"
                          id="trx_add"
                          class="form-control"
                          placeholder="TRON Address"
                          v-model="profile.trn_address"
                          name="trx_address"
                          maxlength="42" 
                          v-on:input="checkTRXAddress(1)"
                          onkeypress="return (event.charCode >= 48 && event.charCode <= 57)||(event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)"
                        />     -->
                                    </div>
                                    <div v-if="!trxactive" class="tooltip2">
                                    <span
                                        class="error-msg-size tooltip-inner text-danger"
                                        >{{ this.trxmsg }}</span
                                    >
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="form-lable">Ethereum</label>
                                    <div class="input-group mb-3 input-profile-form align-items-center">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text custome-input-group" id="basic-addon1"><img
                                                    src="user-assets/images/Ethereum.png" /></span>
                                        </div>
                                        <input type="text" class="form-control currentry-input"
                                        name="ethereum" placeholder="ETH address"
                                        v-model="profile.ethereum"
                                        v-on:input="checkEthAddress()"
                                        maxlength="42" 
                                        onkeypress="return (event.charCode >= 48 && event.charCode <= 57)||(event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)"
                                        />
<!-- 
                                            <input
                          type="text"
                          name="ethereum"
                          class="form-control"
                          placeholder="ETH address"
                          v-model="profile.ethereum"
                          v-on:input="checkEthAddress()"
                          maxlength="42" 
                          onkeypress="return (event.charCode >= 48 && event.charCode <= 57)||(event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)"
                        /> -->
                                    </div>
                                    <div v-if="!ethactive" class="tooltip2">
                                    <span
                                        class="error-msg-size tooltip-inner text-danger"
                                        >{{ this.ethmsg }}</span
                                    >
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="form-lable">Litecoin</label>
                                    <div class="input-group mb-3 input-profile-form align-items-center">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text custome-input-group" id="basic-addon1"><img
                                                    src="user-assets/images/Litecoin.png" /></span>
                                        </div>
                                        <input type="text" id="lte_address" class="form-control  currentry-input"
                                            placeholder="LTE Address" v-model="profile.usdt_trc20"
                          name="lte_address"
                          maxlength="42" 
                          v-on:input="checkTRXAddress(2)"
                          onkeypress="return (event.charCode >= 48 && event.charCode <= 57)||(event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)"
                        />/>

                                            <!-- <input
                          type="text"
                          id="bnb_address"
                          class="form-control"
                          placeholder="Tether (USDT.TRC20) Address"
                          v-model="profile.usdt_trc20"
                          name="bnb_address"
                          maxlength="42" 
                          v-on:input="checkTRXAddress(2)"
                          onkeypress="return (event.charCode >= 48 && event.charCode <= 57)||(event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)"
                        /> -->

                                    </div>
                                <div v-if="!usdttrxactive" class="tooltip2">
                                <span
                                    class="error-msg-size tooltip-inner text-danger"
                                    >{{ this.usdttrxmsg }}</span
                                >
                                </div>
                                </div>

                            </form>
                        </div>
                    </div>

                    <!-- change password -->
                    <div class="white-box-form mb-4">
                        <div class="d-flex align-items-center justify-content-between">
                            <h4 class="form-title">Change Password</h4>
                            <button class="blue-btn-profile">Update Password</button>
                        </div>
                        <div class="profile-sec-form mt-4">
                            <form>
                                <div class="form-group active position-relative">
                                    <label class="form-lable">Old Password</label>
                                    <input type="password" class="form-control input-profile-form" id="loginpassword"
                                        value="123456" />
                                    <!-- <span toggle="#password-field" class="fa fa-eye field-icon"></span> this one is open eye -->
                                    <span toggle="#password-field" class="fa fa-eye-slash field-icon"></span> <!-- this one is close eye -->
                                    <!-- <div class="pass-show-hide-profile"
                                        onclick="if (loginpassword.type == 'text') loginpassword.type = 'password'; else loginpassword.type = 'text';">
                                        <img src="user-assets/images/eye-icon.svg" class="pass-close-image" alt="" />
                                        <img src="user-assets/images/eye-icon.svg" class="pass-show-image" alt="" />
                                    </div> -->
                                </div>

                                <div class="form-group active position-relative">
                                    <label class="form-lable">New Password</label>
                                    <input type="password" class="form-control input-profile-form" id="loginpassword"
                                        value="123456" />
                                    <!-- <span toggle="#password-field" class="fa fa-eye field-icon"></span> this one is open eye -->
                                    <span toggle="#password-field" class="fa fa-eye-slash field-icon"></span> <!-- this one is close eye -->
                                    <!-- <div class="pass-show-hide-profile"
                                        onclick="if (loginpassword.type == 'text') loginpassword.type = 'password'; else loginpassword.type = 'text';">
                                        <img src="user-assets/images/eye-icon.svg" class="pass-close-image" alt="" />
                                        <img src="user-assets/images/eye-icon.svg" class="pass-show-image" alt="" />
                                    </div> -->
                                </div>

                                <div class="form-group active position-relative">
                                    <label class="form-lable">Retype Password111</label>
                                    <input type="password" class="form-control input-profile-form" id="loginpassword"
                                        value="123456" />
                                    <!-- <span toggle="#password-field" class="fa fa-eye field-icon"></span> this one is open eye -->
                                    <span toggle="#password-field" class="fa fa-eye-slash field-icon"></span> <!-- this one is close eye -->
                                    <!-- <div class="pass-show-hide-profile"
                                        onclick="if (loginpassword.type == 'text') loginpassword.type = 'password'; else loginpassword.type = 'text';">
                                        <img src="user-assets/images/eye-icon.svg" class="pass-close-image" alt="" />
                                        <img src="user-assets/images/eye-icon.svg" class="pass-show-image" alt="" />
                                    </div> -->
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="overlay toggle-icon-main"></div>
    </main>
</template>

<!-- <script>
import Navbar from "../../components/user/Navbar.vue";
export default {
    name: "app",
    components: { Navbar },

};
</script> -->
<script>
    import {
      GETPROFILEINFO,
      GET_PROJECT_SETTING,
      SENDOTP,
      UPDATEUSERS,
      CHANGPASSWORD,
      CHANGEADDRESS,
      COUNTRY,
    } from "@/store/actions.type";
    import currencyValidationMixin from "@/mixins/currencyValidationMixin";
    import ValidatioMixin from "@/mixins/ValidatioMixin";
    import "bootstrap";
    import $ from "jquery";
    export default {
      name: "app",
      mixins: [ValidatioMixin, currencyValidationMixin],
      components: {},
      data() {
        return {
          avatar: null,
          image: null,
          objProSettings: {},
          nameErr: "",
          emaiErr: "",
          showpassword: 0,
          showpassword2: 0,
          showpassword3: 0,
          eye: "fa-solid fa-eye-slash",
          eye2: "fa-solid fa-eye-slash",
          eye3: "fa-solid fa-eye-slash",
          errorcpwd: "",
          errorpwd: "",
          errormobile: "",
          otpSent: false,
          otp: "",
          profile_name: "",
          otpVerified: false,
          profile: {
            rank: "",
            user_image: "",
            user_id: "",
            fullname: "",
            email: "",
            mobile: "",
            btc_address: "",
            ethereum: "",
            usdt_trc20:"",
            bnb_address: "",
            trn_address:"",
          },
          typeForUpdate: "",
          btcactive: true,
          btcmsg: "",
          ethactive: true,
          ethmsg: "",
          trxactive: true,
          trxmsg: "",
          usdttrxactive:true,
          usdttrxmsg:"",
          get_country: {},
    
          updatepassword: {
            old_password: "",
            new_password: "",
            retype_password: "",
          },
    
          isDisableBtn: true,
          disable_Profbtn: false,
          type_otp:'',
        };
      },
      computed: {
        isParentCompleteProfile() {
          return this.parent_id;
        },
        isCompleteProfile() {
          return (
            this.profile.fullname &&
            this.profile.email &&
            this.profile.mobile &&
            this.profile.country
          );
        },
        isCompleteAddress() {
          return (
            this.profile.btc_address || this.profile.trn_address || this.profile.ethereum || this.profile.usdt_trc20
          );
        },
        isCompletePassword() {
          return (
            this.updatepassword.old_password &&
            this.updatepassword.new_password &&
            this.updatepassword.retype_password
          );
        },
      },
    
      mounted() {
        this.readProfile();
        this.getProSettings();
        this.getCountry();
      },
      methods: {
        getCountry() {
          this.$store
            .dispatch(COUNTRY, {})
            .then((response) => {
              this.get_country = response.data;
            })
            .catch(() => {});
        },
        onChange(event) {
          this.profile.country = event.target.value;
        },
    
        isLetter(e) {
          let char = String.fromCharCode(e.keyCode); // Get the character
          if (/^[A-Za-z ]+$/.test(char)) return true;
          // Match with regex
          else e.preventDefault(); // If not match, don't add to input text
        },
        NameValidation(e) {
          const fullname = e.target.value;
          var fullnamel = fullname.replace(/ /g, "");
          if (fullname == "") {
            this.nameErr = "fullname should not be blank.";
          } else if (!fullname.match(/^[a-zA-Z ]+$/)) {
            this.nameErr = "Please enter alphabets only";
          } else if (fullnamel.length < 2) {
            this.nameErr = " Enter minimum 2 character";
          } else if (fullnamel.length > 30) {
            this.nameErr = "Enter maximum 30 character";
          } else {
            this.nameErr = "";
          }
        },
        EmaiValidation(e) {
          const email = e.target.value;
          if (email == "") {
            this.emaiErr = "Email should not be blank.";
          } else if (
            !email.match(
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/
            )
          ) {
            this.emaiErr = "Please enter email in correct format";
          } else {
            this.emaiErr = "";
          }
        },
        MobileValidation(e) {
          const mobile = e.target.value;
          if (mobile == "") {
            this.errormobile = "Mobile should not be blank.";
          } else if (mobile.length < 10) {
            this.errormobile = "Enter minimum 10 Digits";
          } else if (mobile.length > 20) {
            this.errormobile = "Enter maximum 20 Digits";
          } else {
            this.errormobile = "";
          }
        },
        getProSettings() {
          this.$store
            .dispatch(GET_PROJECT_SETTING, {})
            .then((resp) => {
              if (resp.code === 200) {
                this.objProSettings = resp.data;
              }
            })
            .catch();
        },
        readProfile() {
          // axios
          //   .post("get-profile-info", {})
          this.$store
            .dispatch(GETPROFILEINFO, {})
            .then((response) => {
              this.profile = response.data;
              this.parent_id = this.profile.parent_id;
              this.profile_name = this.profile.fullname;
              document.getElementById("closeBtn").click();
              // $("#editBankDetailsmodal").modal("hide");
              //alert(this.profile.btc_address);
              //this.profiledata = all_data;
              if (
                this.profile.btc_address == "" ||
                (this.profile.btc_address == null &&
                  this.profile.perfect_money_address == "") ||
                this.profile.perfect_money_address == null
              ) {
                //alert('hii');
                this.btc_preset = 1;
              } else {
                // alert('dfdsfdsf');
                this.btc_preset = 0;
              }
            })
            .catch({});
        },
        checkOtp(typeForUpdate) {
          var arr = {};
          if (typeForUpdate == "profile" || this.typeForUpdate == "profile") {
            arr = {
              otp: this.otp,
              fullname: this.profile.fullname,
              email: this.profile.email,
              mobile: this.profile.mobile,
              country: this.profile.country,
            };
          }
          if (typeForUpdate == "address" || this.typeForUpdate == "address") {
            arr = {
              otp: this.otp,
              btc: this.profile.btc_address,
              trn: this.profile.trn_address,
              eth: this.profile.ethereum,
              usdt_trc20: this.profile.usdt_trc20,
              // usdt_address: this.profile.usdt_address,
              // xrp_tag_address: this.profile.xrp_tag_address,
            };
          }
          if (typeForUpdate == "password" || this.typeForUpdate == "password") {
            arr = {
              otp: this.otp,
              current_password: this.updatepassword.old_password,
              new_password: this.updatepassword.new_password,
              confirm_password: this.updatepassword.retype_password,
            };
          }
    
          if (typeForUpdate == "profile") {
            this.$store
              .dispatch(UPDATEUSERS, arr)
              .then((response) => {
                if (response.code == 200) {
                  this.typeForUpdate = "";
                  this.typeForUpdate = "";
                  this.otpstatus = true;
                  this.$toast.success(response.message);
                  setTimeout(function () {
                    window.location.reload();
                  }, 2000);
                  this.readProfile();
                } else {
                  this.$toast.error(response.message);
                }
              })
              .catch({});
          }
          if (typeForUpdate == "address") {
            this.$store
              .dispatch(CHANGEADDRESS, arr)
              .then((response) => {
                if (response.code == 200) {
                  this.typeForUpdate = "";
                  this.typeForUpdate = "";
                  this.otpstatus = true;
                  this.$toast.success(response.message);
                  setTimeout(function () {
                    window.location.reload();
                  }, 2000);
                  this.readProfile();
                } else {
                  this.$toast.error(response.message);
                }
              })
              .catch({});
          } else if (typeForUpdate == "password") {
            this.$store.dispatch(CHANGPASSWORD, arr).then((response) => {
              if (response.code === 200) {
                this.$toast.success(response.message);
                setTimeout(function () {
                  location.reload();
                }, 1000);
              } else {
                this.$toast.error(response.message);
              }
              $("#update-user-password").trigger("reset");
            });
          }
        },
        sendOTP(typeForUpdate) {
          this.type_otp=typeForUpdate;
          var arr = {};
          if (typeForUpdate == "profile") {
            this.typeForUpdate = "profile";
            arr = {
              type: "profile",
              otp: this.otp,
              fullname: this.profile.fullname,
              email: this.profile.email,
              mobile: this.profile.mobile,
              country: this.profile.country,
            };
          }
          if (typeForUpdate == "address") {
            this.typeForUpdate = "address";
            arr = {
              type: "address",
              otp: this.otp,
              btc: this.profile.btc_address,
              trn_address: this.profile.trn_address,
              ethereum: this.profile.ethereum,
              bnb_address: this.profile.bnb_address,
              // xrp_address: this.profile.xrp_address,
              usdt_address: this.profile.usdt_address,
              xrp_tag_address: this.profile.xrp_tag_address,
            };
          }
          if (typeForUpdate == "password") {
            this.typeForUpdate = "password";
            arr = {};
          }
          this.$store
            .dispatch(SENDOTP, arr)
            .then((response) => {
              if (response.code == 200) {
                var modal = document.getElementById("enterOTPForEdit");
                modal.style.display = "block";
                this.$toast.success(response.message);
                this.otp = "";
              } else {
                this.$toast.error(response.message);
              }
            })
            .catch({});
        },
        checkaddress() {
          // this.btcactive = false;
          // this.btcmsg = "Bitcoin address is not valid";
          // let btc_address = "" + this.profile.btc_address + "";
    
          // if (
          //   btc_address.charAt(0) == "3" ||
          //   btc_address.charAt(0) == "1" ||
          //   btc_address.charAt(0) == "b" ||
          //   btc_address == ""
          // ) {
          //   if(btc_address.length == 0){
          //     this.btcactive = true;
          //     this.btcmsg = "";
          //   }else if(btc_address.length >= 26 && btc_address.length <= 42){
          //     this.btcactive = true;
          //     this.btcmsg = "";
          //   }else{
          //     this.btcactive = false;
          //     this.btcmsg = "Bitcoin Address Invalid";
          //   }
          // } else {
          //   this.btcactive = false;
          //   this.btcmsg = "Bitcoin Address should be start with '3 or 1 or b'";
          // }
    
                       this.btcactive = true;
                       this.btcmsg = "";  
    
                   let btc_address = ""+this.profile.btc_address+"";
                  
                   if(btc_address.charAt(0) == '3' || btc_address.charAt(0) == '1' || btc_address.charAt(0) == 'b' ||btc_address == ''){
                    
                                     if(btc_address)
                                     {
                                           if(btc_address.length< 26)
                                              {
                                                 this.btcactive = false;
                                                 this.btcmsg = "Bitcoin Address field must be at least 26 characters";  
                                              }
                                              else {
                                                 this.btcactive = true;
                                                 this.btcmsg = ""; 
                                              }
                                     }
                                     else{
                                         this.btcactive = false;
                                           this.btcmsg = "The Bitcoin Address Field is Requried";
                                     }
                      
                   } 
                   else{
                      this.btcactive = false;
                      this.btcmsg = "Bitcoin Address should be start with '3 or 1 or b'";
                   }
    
    
        },
        checkBNBAddress() {
          // var bnb_address = "";
          // bnb_address = "" + this.profile.bnb_address + "";
          // if (
          //   bnb_address.charAt(0) == "b" ||
          //   bnb_address.charAt(0) == "B" ||
          //   bnb_address == ""
          // ) {
          //   if(bnb_address.length == 0){
          //     this.bnbactive = true;
          //     this.bnbmsg = "";
          //   }else if(bnb_address.length >= 26 && bnb_address.length <= 42){
          //     this.bnbactive = true;
          //     this.bnbmsg = "";
          //   }else{
          //     this.bnbactive = false;
          //     this.bnbmsg = "BNB Address Invalid";
          //   }
          // } else {
          //   this.bnbactive = false;
          //   this.bnbmsg = "BNB Address should be start with 'B or b'";
          // }
    
                      this.bnbactive = true;
                      this.bnbmsg = "";
    
                    let bnb_bsc_address = ""+this.profile.bnb_address+"";
                  
                   if(bnb_bsc_address.charAt(0) == '0'|| bnb_bsc_address.charAt(0) == '1' || bnb_bsc_address == ''){
                    
                                     if(bnb_bsc_address)
                                     {
                                           if(bnb_bsc_address.length< 26)
                                              {
                                                 this.bnbactive = false;
                                                 this.bnbmsg = "The BNB address field must be at least 26 characters";  
                                              }
                                              else {
                                                 this.bnbactive = true;
                                                  this.bnbmsg = "";  
                                              }
                                     }
                                     else{
                                         this.bnbactive = false;
                                           this.bnbmsg = "The BNB Field Requried";
                                     }
                      
                   } 
                   else{
                      this.bnbactive = false;
                      this.bnbmsg = "BNB-BSC Address should be start with '0 or 1'";
                   }
        },
    
        checkTRXAddress(addFor) {
                var trx_address = "";
                   if(addFor == "1"){
                      trx_address = ""+this.profile.trn_address+"";
                   }else{
                      trx_address = ""+this.profile.usdt_trc20+"";
                   }
                  
                   if(trx_address.charAt(0) == 't'|| trx_address.charAt(0) == 'T' || trx_address == ''){
                    
                                     if(trx_address)
                                     {
                                           if(trx_address.length< 26)
                                              {
                                                 if(addFor == 1)
                                                 {
                                                          this.trxactive = false;
                                                           this.trxmsg = "The TRX address field must be at least 26 characters";
                                                 }
                                                 else
                                                 {
                                                            this.usdttrxactive = false;
                                                             this.usdttrxmsg = "The USDT-TRC20 address field must be at least 26 characters";
    
                                                 }
                                              }
                                              else {
    
                                                   if(addFor == 1)
                                                       {
                                                                this.trxactive = true;
                                                                this.trxmsg = "";
                                                       }
                                                       else
                                                       {
                                                                this.usdttrxactive = true;
                                                                   this.usdttrxmsg = "";
    
                                                       }
                                                }
                                     }
                                     else{
                                                 if(addFor == 1)
                                                       {
                                                                this.trxactive = false;
                                                                this.trxmsg = "The TRX address field is Requried";
                                                       }
                                                       else
                                                       {
                                                                this.usdttrxactive = false;
                                                                   this.usdttrxmsg = "The USDT-TRC20 address field is Requried";
    
                                                       }
                                     }
                      
                   } 
                   else{
    
                                                   if(addFor == 1)
                                                       {
                                                                this.trxactive = false;
                                                                this.trxmsg = "TRX Address should be start with 'T or t'";
                                                       }
                                                       else
                                                       {
                                                               this.usdttrxactive = false;
                                                                this.usdttrxmsg = "USDT-TRC20 Address should be start with 'T or t'";
    
                                                       }
                   }
        },
        checkEthAddress() {
          // var ethereum = "";
    
          // ethereum = "" + this.profile.ethereum + "";
          // if (
          //   (ethereum.charAt(0) == "0" && ethereum.charAt(1) == "x") ||
          //   ethereum == "" ||
          //   ethereum == null
          // ) {
          //   if(ethereum.length == 0){
          //     this.ethactive = true;
          //     this.ethmsg = "";
          //   }else if(ethereum.length >= 26 && ethereum.length <= 42){
          //     this.ethactive = true;
          //     this.ethmsg = "";
          //   }else{
          //     this.ethactive = false;
          //     this.ethmsg = "ETH Address Invalid";
          //   }
          // } else {
          //   this.ethactive = false;
          //   this.ethmsg = "Eth Address should be start with '0x'";
          // }
    
    // ssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
    this.ethactive = true;
                      this.ethmsg = "";
    
                    let ethereum = ""+this.profile.ethereum+"";
                  
                   if(ethereum.charAt(0) == '0'|| ethereum.charAt(0) == 'X' || ethereum == ''){
                    
                                     if(ethereum)
                                     {
                                           if(ethereum.length< 26)
                                              {
                                                 this.ethactive = false;
                                                 this.ethmsg = "The ETH Address field must be at least 26 characters";  
                                              }
                                              else {
                                                 this.ethactive = true;
                                                  this.ethmsg = "";  
                                              }
                                     }
                                     else{
                                         this.ethactive = false;
                                           this.ethmsg = "The ETH Field Requried";
                                     }
                      
                   } 
                   else{
                      this.ethactive = false;
                      this.ethmsg = "ETH Address should be start with '0x'";
                   }
    
    // sssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
    
        },
        PasswordValidations() {
            var cpwd = this.updatepassword.retype_password;
            var pwd = this.updatepassword.new_password;
            var pwdpattern = new RegExp("^(?=.*[!@#$%^&/*])");
    
            if (pwd == "") {
                this.errorpwd = "Password should not be blank.";
            } else if (pwd.length < 6) {
                this.errorpwd = "Invalid, Enter minimum 6 character";
            } else if (pwd.length > 30) {
                this.errorpwd = "Invalid, Enter maximum 30 character";
            } else if (!/[a-z]/.test(pwd)) {
                this.errorpwd =
                    "Password must contain at least one lowercase character.";
            } else if (!/[A-Z]/.test(pwd)) {
                this.errorpwd =
                    "Password must contain at least one Uppercase character.";
            } else if (!/[0-9]/.test(pwd)) {
                this.errorpwd = "Password must contain at least one Digit.";
            } else if (!pwdpattern.test(pwd)) {
                this.errorpwd = "Password must contain at least one Special Character.";
            } else {
                this.errorpwd = "";
            }
    
            if(cpwd != ''){
              this.ConfirmPasswordValidations();
            }
        },
        ConfirmPasswordValidations() {
            var cpwd = this.updatepassword.retype_password;
            var pwd = this.updatepassword.new_password;
            if (cpwd == "") {
                this.errorcpwd = "Confirm Password should not be blank.";
            } else if (cpwd.length != pwd.length) {
                this.errorcpwd = "Password Length not matched.";
            } else if (cpwd != pwd) {
                this.errorcpwd = "Password not Matched.";
            } else {
                this.errorcpwd = "";
            }
        },
        CloseModal(){
          document.getElementById("enterOTPForEdit").style.display = "none";
        },
        showPass() {
          if (this.showpassword == 0) {
            document.getElementById("new_password").type = "text";
            this.eye = "fa-solid fa-eye";
            this.showpassword = 1;
          } else if (this.showpassword == 1) {
            document.getElementById("new_password").type = "password";
            this.showpassword = 0;
            this.eye = "fa-solid fa-eye-slash";
          }
        },
        showPass2() {
          if (this.showpassword2 == 0) {
            document.getElementById("retype_password").type = "text";
            this.eye2 = "fa-solid fa-eye";
            this.showpassword2 = 1;
          } else if (this.showpassword2 == 1) {
            document.getElementById("retype_password").type = "password";
            this.showpassword2 = 0;
            this.eye2 = "fa-solid fa-eye-slash";
          }
        },
        showPass3() {
          if (this.showpassword3 == 0) {
            document.getElementById("old_password").type = "text";
            this.eye3 = "fa-solid fa-eye";
            this.showpassword3 = 1;
          } else if (this.showpassword3 == 1) {
            document.getElementById("old_password").type = "password";
            this.showpassword3 = 0;
            this.eye3 = "fa-solid fa-eye-slash";
          }
        },
      },
    };
    </script>
    
    