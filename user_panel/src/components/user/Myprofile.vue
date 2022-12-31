<template>
  <div>
    <Navbar />

    <main ref="art1" class="content-wrapper-section">
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

        <!-- 
            <div class="row">
        <div class="col-md-12">
          <div class="PhotoUploadBack">
            <div class="row align-items-center">
              <div class="col-md-4">
                <div class="profileupflex">
                  <div class="profileImgRound">
                    <img
                      v-bind:src="profile.user_image"
                    />
                    
                    <div class="uploadButton-pro">
                      uplosds
                      <i
                        class="fa-solid fa-camera"
                        for="account-upload"
                        @click="showFileChooser()"
                        v-show="avatar == null"
                      ></i>
                    </div>
                  </div>
                  <div class="profile-page-info">
                    <input
                      hidden
                      class="form-control"
                      id="account-upload"
                      ref="input"
                      type="file"
                      name="image"
                      accept="image/*"
                      @change="setImage"
                      enctype="multipart/form-data"
                    />
                    <vue-cropper
                      style="width: 280px; height: 200px"
                      v-show="avatar !== null"
                      class="cropper"
                      id="data-image"
                      ref="cropper"
                      :aspect-ratio="10 / 12"
                      :src="avatar"
                    />

                    <button
                      v-show="avatar !== null"
                      type="button"
                      name="save"
                      id="uploadPhoto"
                      :disabled="!disable_Profbtn == true"
                      @click.prevent="cropImage"
                      class="btn btn-dark m-1"
                    >
                      Save
                    </button>
                    <button
                      v-show="avatar !== null"
                      type="button"
                      class="btn btn-dark m-1"
                      name="cancel"
                      value="cancel"
                      id="cancelPhoto"
                      @click="cancelImage()"
                    >
                      cancel
                    </button>
                  </div>
                  <div class="profile-page-info">
                    <h4>{{ profile.fullname }}</h4>
                    <p>
                      {{ profile.user_id }} <br />
                      {{ profile.email }}
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-8 text-end">
                <button class="btn loGbtn">View Status</button>
              </div>
            </div>
          </div>
        </div>
      </div> -->

        <div class="row">
          <div class="col-12 col-md-5 col-xl-4 ml-xl-4">
            <div class="profile-sec text-center margin-top">
              <!---<img src="user-assets/images/profile-img.png" />-->
              <img  v-if="profile.user_image" v-bind:src="profile.user_image">
                  <img   v-else src="user-assets/images/profile-img.png">

              <h4>{{profile.fullname}}</h4>
              <!-- <h5>Phonix Mc.huhj ,hu gobant .</h5> -->
             <!-- <div class="profile-graph text-center">
                <h6>Earnings</h6>
                <img src="user-assets/images/profile-graph.png" />

                 <div>
                                <button class="graph-btn">$867.67</button>
                            </div> 
              </div>-->
              <div class="edit">
                <button for="account-upload" @click="showFileChooser()" v-show="avatar == null"
                  class="login-blue-btn">Edit</button>
                <input hidden class="form-control" id="account-upload" ref="input" type="file" name="image"
                  accept="image/*" @change="setImage" enctype="multipart/form-data" />
                <vue-cropper style="width: 180px; height: 100px" v-show="avatar !== null" class="cropper"
                  id="data-image" ref="cropper" :aspect-ratio="4/6" :src="avatar" />

                <button v-show="avatar !== null" type="button" name="save" id="uploadPhoto"
                  :disabled="!disable_Profbtn == true" @click="cropImage" class="btn btn-dark m-1">Save
                </button>
                <button v-show="avatar !== null" type="button" class="btn btn-dark m-1" name="cancel" value="cancel"
                  id="cancelPhoto" @click="cancelImage()">cancel</button>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-7 col-xl-7 mt-4">
            <!-- edit profile -->
            <div class="white-box-form mb-4">
              <div class="d-flex align-items-center justify-content-between">
                <h4 class="form-title">Edit Profile</h4>




                <!-- :disabled="
                          !isCompleteProfile ||
                          nameErr !== '' ||
                          emaiErr !== '' ||
                          errormobile !== ''" -->
                <!-- v-if="objProSettings.profile_update_status == 1" -->
                <button type="button" class="blue-btn-profile" :disabled="
                          !isCompleteProfile ||
                          nameErr !== '' ||
                          emaiErr !== '' ||
                          mobile_data !== ''" @click.prevent="sendOTP('profile')">Update Profile</button>
                <!-- <button type="button"
                        class="blue-btn-profile"
                        v-else
                        
                        @click.prevent="checkOtp('profile')"
                      >
                        Update Changes
                      </button> -->
                <!-- :disabled="
                          !isCompleteProfile ||
                          nameErr !== '' ||
                          emaiErr !== '' ||
                          errormobile !== ''
                        " readonly -->
              </div>
              <div class="profile-sec-form mt-4">
                <form>
                  <div class="form-group">
                    <label class="form-lable">Full Name</label>
                    <input type="text" class="form-control input-profile-form" placeholder="Enter Full Name"
                      v-on:keypress="isLetter($event)" name="fullname" v-model="profile.fullname"
                      v-on:keyup="NameValidation($event)" maxlength="30"/>

                    <div v-if="nameErr !== ''" class="tooltip2">
                      <span class="text-danger error-msg-size">
                        {{ this.nameErr }}</span>
                    </div>


                  </div>
                  <div class="form-group">
                    <label class="form-lable">Email</label>

                    <input type="text" class="form-control input-profile-form" placeholder="Enter Email ID" name="email"
                      v-model="profile.email" v-on:keyup="EmaiValidation($event)" />

                    <div v-if="emaiErr !== ''" class="tooltip2">
                      <span class="text-danger error-msg-size">
                        {{ this.emaiErr }}</span>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="form-lable">Mobile</label>

                    <input type="text" class="form-control input-profile-form" placeholder="Enter Mobile Number"
                      id="mobile" name="mobile" defaultCountry="VG" data-vv-as="mobile" v-model="profile.mobile"
                      onpaste="return false;" maxlength="22"
                      onkeypress="return event.charCode >= 48 && event.charCode <= 57" v-on:keyup="MobileValidation($event)">


                    <div v-if="mobile_data !== ''" class="tooltip2">
                      <span class="text-danger error-msg-size">
                        {{ this.mobile_data }}</span>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="form-lable">Country</label>
                    <div class="input-profile-form d-flex px-2 py-1">

                      <select v-model="profile.country" class="custom_select custom_select_country">
                        <option v-for="cur in get_country" :value="cur.iso_code" :key="cur.iso_code">
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
                <button type="button" class="blue-btn-profile"
                  :disabled="!isCompleteAddress || !btcactive ||  !trxactive || !ethactive || !ltcactive "
                  @click.prevent="sendOTP('address')">Update Address</button>
                <!-- <button type="button" class="btn btn-custom"  :disabled="!isCompleteAddress || !trxactive || !btcactive || !dogeactive || !ltcactive || !ethactive || !usdttrxactive ||!solactive" @click.prevent="sendOTP('address')" >Save Changes</button> -->
              </div>
              <div class="profile-sec-form mt-4">
                <form>
                  <div class="form-group">
                    <label class="form-lable">Bitcoin Address</label>
                    <div class="input-group mb-3 input-profile-form align-items-center">
                      <div class="input-group-prepend">
                        <span class="input-group-text custome-input-group" id="basic-addon1"><img
                            src="user-assets/images/Bitcoin.png" ></span>
                      </div>
                      <input type="text"  class="form-control currentry-input" id="btc_add" placeholder="BTC Address"
                        v-model="profile.btc_address" name="btc_address" maxlength="42" v-on:input="checkaddress"
                        onkeypress="return (event.charCode >= 48 && event.charCode <= 57)||(event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)" />

                    </div>
                    <div v-if="!btcactive" class="tooltip2">
                      <span class="text-danger error-msg-size">{{ this.btcmsg }}</span>
                    </div>
                  </div>
                 <!--  <div class="form-group">
                    <label class="form-lable">Tron Address</label>
                    <div class="input-group mb-3 input-profile-form align-items-center">
                      <div class="input-group-prepend">
                        <span class="input-group-text custome-input-group" id="basic-addon1"><img
                            src="user-assets/images/Tron.png" /></span>
                      </div>
                      <input type="text" class="form-control  currentry-input" id="trx_address"
                        placeholder="TRON Address" v-model="profile.trx_address" name="trx_address" maxlength="42"
                        v-on:input="checkTRXAddress(1)"
                        onkeypress="return (event.charCode >= 48 && event.charCode <= 57)||(event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)" />
                    </div>
                    <div v-if="!trxactive" class="tooltip2">
                      <span class="text-danger error-msg-size">{{ this.trxmsg }}</span>
                    </div>
                  </div> -->

                  <!-- <div class="form-group">
                    <label class="form-lable">Ethereum Address</label>
                    <div class="input-group mb-3 input-profile-form align-items-center">
                      <div class="input-group-prepend">
                        <span class="input-group-text custome-input-group" id="basic-addon1"><img
                            src="user-assets/images/Ethereum.png" /></span>
                      </div>
                                            <input type="text" name="ethereum" class="form-control currentry-input" placeholder="ETH address"
                        v-model="profile.ethereum" v-on:input="checkEthAddress()" maxlength="42"
                        onkeypress="return (event.charCode >= 48 && event.charCode <= 57)||(event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)" />
                    </div>
                    <div v-if="!ethactive" class="tooltip2">
                      <span class="text-danger error-msg-size">{{ this.ethmsg }}</span>
                    </div>
                  </div> -->

                  <!-- <div class="form-group">
                    <label class="form-lable">Dogecoin Address</label>
                    <div class="input-group mb-3 input-profile-form align-items-center">
                      <div class="input-group-prepend">
                        <span class="input-group-text custome-input-group" id="basic-addon1"><img
                            src="user-assets/images/Dogecoin.png" /></span>
                      </div>
                      <input type="text" maxlength="42" id="doge_address" class="form-control  currentry-input" required
                        placeholder="Dogecoin Address"   v-on:input="checkDOGEAddress" @keydown.space.prevent
                      onkeypress="return ((event.charCode > 64 && event.charCode < 91) || (event.charCode > 96
                          && event.charCode < 123) || event.charCode == 8 || event.charCode == 32 || (event.charCode >= 48 && event.charCode <= 57))" v-model="profile.doge_address" name="doge_address"/>

                    </div>
                    <div v-if="!dogeactive" class="tooltip2">
                      <span class="text-danger error-msg-size">{{ this.dogemsg }}</span>
                    </div>
                  </div> -->
                  <!-- <div class="form-group">
                    <label class="form-lable">USDT-TRC20 Address</label>
                    <div class="input-group mb-3 input-profile-form align-items-center">
                      <div class="input-group-prepend">
                        <span class="input-group-text custome-input-group" id="basic-addon1"><img
                            src="user-assets/images/Tether.png" /></span>
                      </div>
                      <input type="text" maxlength="42" name="usdt_trc20" class="form-control currentry-input" placeholder="USDT-TRC20 Address"
                        v-model="profile.usdt_trc20"   v-on:input="checkTRXAddress(2)" @keydown.space.prevent
                      onkeypress="return ((event.charCode > 64 && event.charCode < 91) || (event.charCode > 96
                      && event.charCode < 123) || event.charCode == 8 || event.charCode == 32 || (event.charCode >= 48 && event.charCode <= 57));" onpaste="return false;"/>
                    </div>
                    <div v-if="!usdttrxactive" class="tooltip2">
                      <span class="text-danger error-msg-size">{{ this.usdttrxmsg }}</span>
                    </div>
                  </div> -->
                  <!-- <div class="form-group">
                    <label class="form-lable">Solona Address</label>
                    <div class="input-group mb-3 input-profile-form align-items-center">
                      <div class="input-group-prepend">
                        <span class="input-group-text custome-input-group" id="basic-addon1"><img
                            src="user-assets/images/Solana.png" /></span>
                      </div>
                      <input type="text" name="sol_address" class="form-control currentry-input" placeholder="Solona Address"
                        v-model="profile.sol_address" v-on:input="checkSOLaddress()" maxlength="42"
                        onkeypress="return (event.charCode >= 48 && event.charCode <= 57)||(event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)" />
                    </div>
                    <div v-if="!solactive" class="tooltip2">
                      <span class="text-danger error-msg-size">{{ this.solmsg }}</span>
                    </div>
                  </div> -->

                </form>
              </div>
            </div>

            <!-- change password -->
            <div class="white-box-form mb-4">
              <div class="d-flex align-items-center justify-content-between">
                <h4 class="form-title">Change Password</h4>
                <button type="button" class="blue-btn-profile" :disabled="!isCompletePassword || errorpwdold !== '' || errorpwd !== '' || errorcpwd !== ''"
                  @click.prevent="sendOTP('password')">Update Password</button>
              </div>
              <div class="profile-sec-form mt-4">
                <form>
                  <div class="form-group active position-relative">
                    <label class="form-lable">Old Password</label>
                    <!-- <input type="password" class="form-control input-profile-form" id="loginpassword"
                                        value="123426" /> -->
                    <input type="password"  maxlength="30" class="form-control input-profile-form" id="old_password" name="old_password"
                      placeholder="Old Password"   v-on:keyup="ProfileOldPasswordValidation()" @blur="ProfileOldPasswordValidation()" v-on:input="ProfileOldPasswordValidation()"  v-model="updatepassword.old_password" data-vv-as="old password" />
                    <!-- <span toggle="#password-field" class="fa fa-eye field-icon"></span> this one is open eye -->
                    <span toggle="#password-field" class="fa fa-eye-slash field-icon"  @click="showPass3" :class="eye3"></span> <!-- this one is close eye -->
                    <!-- <div class="pass-show-hide-profile">
                      <span><img src="user-assets/images/eye-icon.svg" id="opass" @click="showPass3" /></span>
                    </div> -->
                  </div>
                  <div v-if="errorpwdold !== ''" class="tooltip2">
                    <span class="text-danger error-msg-size">
                      {{ this.errorpwdold }}</span>
                  </div>
                  <div class="form-group active position-relative">
                    <label class="form-lable">New Password</label>
                    <!-- <input type="password" class="form-control input-profile-form" id="loginpassword" 
                                        value="123426" />-->
                    <input ref="new_password" maxlength="30" type="password" class="form-control input-profile-form" id="new_password"
                      name="new_password" placeholder="New Password" v-model="updatepassword.new_password"
<<<<<<< HEAD
                      data-vv-as="new password"  v-on:input="ProfilePasswordValidation()"/>
=======
                      data-vv-as="new password"  v-on:keyup="ProfilePasswordValidation()"   v-on:input="ProfilePasswordValidation()"/>
>>>>>>> 9de4dfd0602c461aed50699fb9140252edcea5ac
                    <!-- <span toggle="#password-field" class="fa fa-eye field-icon"></span> this one is open eye -->
                    <span toggle="#password-field" class="fa fa-eye-slash field-icon" @click="showPass" :class="eye" ></span> <!-- this one is close eye -->
                      <!-- this one is close eye -->
                    <!-- <div class="pass-show-hide-profile">
                      <span><img src="user-assets/images/eye-icon.svg" id="npass" @click="showPass" /></span>
                      <img src="user-assets/images/eye-icon.svg" class="pass-close-image" alt="" />
                                        <img src="user-assets/images/eye-icon.svg" class="pass-show-image" alt="" />
                    </div> -->
                  </div>
                  <div v-if="errorpwd !== ''" class="tooltip1">
                    <span class="text-danger error-msg-size">
                      {{ this.errorpwd }}</span>
                  </div>

                  <div class="form-group active position-relative">
                    <label class="form-lable">Confirm New Password</label>
                    <!-- <input type="password" class="form-control input-profile-form" id="loginpassword"
                                        value="123426" /> -->
                    <input type="password" maxlength="30" class="form-control input-profile-form" id="retype_password"
                      name="retype_password" placeholder="Confirm New Password" v-model="updatepassword.retype_password"
                      data-vv-as="re-enter password"    v-on:keyup="ProfileConfirmPasswordValidation()"  v-on:input="ProfileConfirmPasswordValidation()" />
                    <!-- <span toggle="#password-field" class="fa fa-eye field-icon"></span> this one is open eye -->
                    <span toggle="#password-field" class="fa fa-eye-slash field-icon" @click="showPass2" :class="eye2" ></span> <!-- this one is close eye -->
                   <!-- this one is close eye -->
                    <!-- <div class="pass-show-hide-profile">
                      <span><img src="user-assets/images/eye-icon.svg" id="rpass" @click="showPass2" /></span>
                      <img src="user-assets/images/eye-icon.svg" class="pass-close-image" alt="" />
                                        <img src="user-assets/images/eye-icon.svg" class="pass-show-image" alt="" />
                    </div> -->
                  </div>
                  <div v-if="errorcpwd !== ''" class="tooltip-1">
                    <span class="text-danger error-msg-size">
                      {{ this.errorcpwd }}</span>
                  </div>
                </form>
              </div>
            </div>

          </div>

        </div>
      </div>
      <div class="overlay toggle-icon-main"></div>

    </main>
    <!----uma---->
    <!--</div>div added-->
    <!-- -------------------------------- verificationcode modal  ---------------------------------------- -->
    <div class="modal-demo">
      <div class="modal fade dashboard-modal" id="enterOTP" tabindex="-1" role="dialog"
        aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal" role="document">
          <div class="modal-content verifi-modal-dialog position-relative">
            <div class="modal-header border-0 px-0">
              <h5 class="modal-title verifi-title">
                Enter Verification Code...…..
              </h5>
              <button type="button" @click="CloseModal()" class="close" data-bs-dismiss="modal" aria-label="Close">
                <img src="user-assets/images/veri-close-icon.svg" />
              </button>
            </div>

            <div class="modal-body p-0">
              <div class="row">
                <div class="col-12 col-lg-6">
                  <div class="verifi-content">
                    <p>
                      <!-- We have just sent a verification code to User {{profile.fullname}} ,
                      and their mail also -->
                      We have sent a verification code on your registered mail id
                    </p>
                    <div class="input-code d-flex" id="otpJump">
                      <input type="text"
                        onkeypress="return (event.charCode == 8 || event.charCode == 0 || event.charCode == 13) ? null : event.charCode >= 48 && event.charCode <= 57"
                        @paste="onPaste" v-on:input="digitValidate($event)" class="form-control" id="first"
                        maxlength="1" />
                      <input type="text" v-on:input="digitValidate($event)" class="form-control" id="second"
                        maxlength="1"
                        onkeypress="return (event.charCode == 8 || event.charCode == 0 || event.charCode == 13) ? null : event.charCode >= 48 && event.charCode <= 57" />
                      <input type="text" v-on:input="digitValidate($event)" class="form-control" id="third"
                        maxlength="1"
                        onkeypress="return (event.charCode == 8 || event.charCode == 0 || event.charCode == 13) ? null : event.charCode >= 48 && event.charCode <= 57" />
                      <input type="text" v-on:input="digitValidate($event)" class="form-control" id="fourth"
                        maxlength="1"
                        onkeypress="return (event.charCode == 8 || event.charCode == 0 || event.charCode == 13) ? null : event.charCode >= 48 && event.charCode <= 57" />
                      <input type="text" v-on:input="digitValidate($event)" class="form-control" id="fifth"
                        maxlength="1"
                        onkeypress="return (event.charCode == 8 || event.charCode == 0 || event.charCode == 13) ? null : event.charCode >= 48 && event.charCode <= 57" />
                      <input type="text" v-on:input="digitValidate($event)" class="form-control" id="sixth"
                        maxlength="1"
                        onkeypress="return (event.charCode == 8 || event.charCode == 0 || event.charCode == 13) ? null : event.charCode >= 48 && event.charCode <= 57" />
                      <!-- <input class="form-control" type="text" id="o" maxlength="1" v-model="o" onkeypress="return event.charCode >= 48 && event.charCode <= 57" />
                        <input class="form-control" type="text" id="t" maxlength="1" v-model="t" onkeypress="return event.charCode >= 48 && event.charCode <= 57"  />
                        <input class="form-control" type="text" id="p" maxlength="1" v-model="p" onkeypress="return event.charCode >= 48 && event.charCode <= 57"/>
                        <input class="form-control" type="text" id="n" maxlength="1" v-model="n" onkeypress="return event.charCode >= 48 && event.charCode <= 57" />
                        <input class="form-control" type="text" id="u" maxlength="1" v-model="u" onkeypress="return event.charCode >= 48 && event.charCode <= 57"/>
                        <input class="form-control" type="text" id="m" maxlength="1" v-model="m" onkeypress="return event.charCode >= 48 && event.charCode <= 57"/> -->

                    </div>
                    <!--<div class="send-code mt-4">
                        <h5>Sent the code again</h5>
                        <h5>Change the mail Id</h5>
                      </div>-->

                    <button type="button" @click="checkOtp(typeForUpdate)" class="blue-btn mt-4">
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
  </div>
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
    UPDATEUSERDATA,
    CHANGPASSWORD,
    CHANGEADDRESS,
    COUNTRY,
  } from "@/store/actions.type";
  import currencyValidationMixin from "@/mixins/currencyValidationMixin";
  import Navbar from "../../components/user/Navbar.vue";
  import ValidatioMixin from "@/mixins/ValidatioMixin";
  import "bootstrap";
  import $ from "jquery";
  import VueCropper from "vue-cropperjs";
  import "cropperjs/dist/cropper.css";
  import axios from "axios";
  export default {
    name: "app",
    mixins: [ValidatioMixin, currencyValidationMixin],
    components: {
      VueCropper,
      Navbar
    },
    data() {
      return {
        avatar: null,
        image: null,
        objProSettings: {},
        nameErr: "",
        emaiErr: "",
        mobile_data: "",
        showpassword: 0,
        showpassword2: 0,
        showpassword3: 0,
        eye: "fa-solid fa-eye-slash",
        eye2: "fa-solid fa-eye-slash",
        eye3: "fa-solid fa-eye-slash",
        errorcpwd: "",
        errorpwd: "",
        erroropwd: "",
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
          usdt_trc20: "",
          ltc_address: "",
          bnb_address: "",
          trn_address: "",
          trx_address: "",
          sol_address:"",
        },
        typeForUpdate: "",
        btcactive: true,
        btcmsg: "",
        ltcactive: true,
        ltcmsg: "",
        ethactive: true,
        ethmsg: "",
        trxactive: true,
        trxmsg: "",  
        dogemsg: '',
        solmsg:'',
        usdttrxactive: true,
        usdttrxmsg: "",
        dogeactive: true,
        solactive:true,
        
        get_country: {},

        updatepassword: {
          old_password: "",
          new_password: "",
          retype_password: "",
        },

        isDisableBtn: true,
        disable_Profbtn: false,
        type_otp: '',
        errorpwdold:'',
       
      };
    },
    computed: {
      isParentCompleteProfile() {
        return this.parent_id;
      },
      isCompleteProfile() {
        // alert(this.profile.email);
        return (
          // this.profile.fullname &&
          this.profile.email &&
          this.profile.mobile &&
          this.profile.country
        );
      },
      isCompleteAddress() {
        // alert(this.profile.btc_address);
        // alert(this.profile.ltc_address);
        return (
          this.profile.btc_address || this.profile.ltc_address || this.profile.trx_address || this.profile.eth_address
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
      // window.$("#enterOTP").modal("show");
      this.readProfile();
      this.getProSettings();
      this.getCountry();
    },
    methods: {
      CloseModal() {
        window.$("#enterOTP").modal("hide");
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
      showFileChooser() {
        this.$refs.input.click();
      },
      setImage(e) {
        var image = e.target.files[0];
        //alert(file_selected);
        if ($("#account-upload")[0].files.length === 0) {
          this.disable_Profbtn = false;
        } else {
          this.disable_Profbtn = false;
          let type = image.type.substring(6);
          let result = image.name.split(".").pop();
          var size = e.target.files[0].size;
          var mbsize = size * 0.000001;
          //alert(mbsize);
          if (mbsize > 1.05) {
            this.avatar = null;
            this.image = null;
            $("#account-upload").val("");
            this.$toast.error("Upload Image Max Size is 1Mb");
          } else if (result !== "jpg" && result !== "png" && result !== "jpeg") {
            this.avatar = null;
            this.image = null;
            $("#account-upload").val("");
            this.$toast.error("Upload Image only jpg,png or jpeg format");
          } else if (type !== "jpg" && type !== "png" && type !== "jpeg") {
            this.avatar = null;
            this.image = null;
            $("#account-upload").val("");
            this.$toast.error("Upload Image only jpg,png or jpeg format");
          } else {
            this.read(image);
            this.disable_Profbtn = true;
          }
        }
      },
      cropImage() {
        // get image data for post processing, e.g. upload or setting image src
        this.image = this.$refs.cropper.getCroppedCanvas().toDataURL();
        this.onUploadDocuments("photo");
      },

      change({
        coordinates,
        canvas
      }) {
        this.coordinates = coordinates;

        var img = new Image();
        img.src = canvas.toDataURL();
        this.image = img.src;
      },
      read(image) {
        let reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = (e) => {
          this.avatar = e.target.result;
          this.$refs.cropper.replace(e.target.result);
        };
      },
      cancelImage() {
        this.avatar = null;
        this.image = null;
        $("#data-image").hide();
        $("#account-upload").val("");
        this.disable_Profbtn = false;
      },
      onUploadDocuments(upload_type) {
        /* Create FormData object */
        let formData = new FormData();
        /* 
                        Here we check file uploading type that is photo, pan card or address proof.
                        Append file upload to photo.
                    */
        if (upload_type == "photo") {
          if (
            this.$refs.input.files[0] == "" ||
            this.$refs.input.files[0] == undefined
          ) {
            this.avatar = null;
            this.$toast.error("Please Select Profile Image!");
            return false;
          } else {
            formData.append("photo", this.image);
          }
        }
        /*if(upload_type == 'pan'){
                        if(this.$refs.pan.files[0] != ''){
                            formData.append('photo', this.$refs.pan.files[0]);
                        }             
                    }
                    if(upload_type == 'address'){
                        if(this.$refs.address.files[0] != ''){
                            formData.append('photo', this.$refs.address.files[0]);
                        }
                    }*/
        /* Here we append file type that is photo, pan card or address proof. */
        formData.append("name", upload_type);
        axios
          .post("upload-photos", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((response) => {
            if (response.data.code == 200) {
              this.$toast.success(response.data.message);

              $("#update-user-documents").trigger("reset");
              this.avatar = null;
              this.image = null;
              $("#account-upload").val();
              location.reload();
              this.disable_Profbtn = false;
            } else {
              this.$toast.error(response.data.message);
              this.disablebtn = false;
              this.avatar = null;
              this.image = null;
              $("#account-upload").val();
              this.disable_Profbtn = false;
            }

            //this.readUserDocuments();
          });
      },
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
          this.nameErr = "Full Name should not be blank.";
        } else if (!fullname.match(/^[a-zA-Z ]+$/)) {
          this.nameErr = "Please enter alphabets only";
        } else if (fullnamel.length < 5) {
          this.nameErr = " Enter minimum 5 character";
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
      ProfileOldPasswordValidation() {
            //const pwd = e.target.value;
            const pwd = this.updatepassword.old_password;
            var pwdpattern = new RegExp("^(?=.*[!@#$%^&/*])");
            // alert(pwd.length);
            if (pwd == "") {
                this.errorpwdold = "Old Password should not be blank.";
              } else if (pwd.length < 7) {
                // alert(pwd.length);
                this.errorpwdold = "Old Password field must be minimum 8 characters";
            } else if (pwd.length > 30) {
                this.errorpwdold = "The Old password field must be maximum 30 characters";
            } else if (!/[a-z]/.test(pwd)) {
                this.errorpwdold =
                    "Old Password must contain at least one lowercase character.";
            } else if (!/[A-Z]/.test(pwd)) {
                this.errorpwdold =
                    "Old Password must contain at least one Uppercase character.";
            } else if (!/[0-9]/.test(pwd)) {
                this.errorpwdold = "Old Password must contain at least one Digit.";
            } else if (!pwdpattern.test(pwd)) {
                this.errorpwdold = "Old Password must contain at least one Special Character.";
            } else {
                this.errorpwdold = "";
            }
        },


        ProfilePasswordValidation() {
           // const pwd = e.target.value;
            const pwd = this.updatepassword.new_password;
            var pwdpattern = new RegExp("^(?=.*[!@#$%^&/*])");

        if (pwd == "") {
         this.errorpwd = "New Password should not be blank.";
           } else if (pwd.length < 8) {
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
        ProfileConfirmPasswordValidation() {
           // const cpwd = e.target.value;
            var cpwd = this.updatepassword.retype_password;
            var pwd = this.updatepassword.new_password;
         if (cpwd == "") {
              this.errorcpwd = "Confirm Password should not be blank.";
            } else if (cpwd.length != pwd.length) {
                this.errorcpwd = "Password does not Match.";
            } else if (cpwd != pwd) {
                this.errorcpwd = "Password does not Match.";
            } else {
                this.errorcpwd = "";
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
            // document.getElementById("closeBtn").click();
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

        var p1 = document.getElementById("first").value;
        var p2 = document.getElementById("second").value;
        var p3 = document.getElementById("third").value;
        var p4 = document.getElementById("fourth").value;
        var p5 = document.getElementById("fifth").value;
        var p6 = document.getElementById("sixth").value;
        this.otp = p1 + p2 + p3 + p4 + p5 + p6;
        // alert(this.otp);
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
            lth: this.profile.ltc_address,
             usdt_address: this.profile.usdt_address,
             sol: this.profile.sol_address,
          };
        }
        if (typeForUpdate == "password" || this.typeForUpdate == "password") {
          arr = {
            current_pwd: this.updatepassword.old_password,
            new_pwd: this.updatepassword.new_password,
            conf_pwd: this.updatepassword.retype_password,
            otp: this.otp,
          };
        }

        if (typeForUpdate == "profile") {
          this.$store
            .dispatch(UPDATEUSERDATA, arr)
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
        // alert("here");
        document.getElementById("first").value = "";
        document.getElementById("second").value = "";
        document.getElementById("third").value = "";
        document.getElementById("fourth").value = "";
        document.getElementById("fifth").value = "";
        document.getElementById("sixth").value = "";
        this.type_otp = typeForUpdate;
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
            eth: this.profile.ethereum,
            ltc_address: this.profile.ltc_address,
            // xrp_address: this.profile.xrp_address,
            // usdt_address: this.profile.usdt_address,
            // xrp_tag_address: this.profile.xrp_tag_address,
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
              // alert(response.code);
              //  /*$('#editBankDetails1').modal('show');*/
              // window.$("#enterOTP").modal("hide");
              window.$("#enterOTP").modal("show");
              // $("#enterOTPForEdit").modal("show");
              // document.getElementById("enterOTP").style.display = "none";

              // modal.style.display = "block";
              this.$toast.success(response.message);
              this.otp = "";
            } else {
              this.$toast.error(response.message);
            }
          })
          .catch({});
      },

      checkDOGEAddress() {
        let doge_address = "" + this.profile.doge_address + "";
        // console.log(ltc_address.substring(1,4));
        if (doge_address != "") {
          if (doge_address.charAt(0) == 'D' || doge_address == '') {
            if (doge_address.length >= 26 && doge_address.length <= 42) {
              this.dogeactive = true;
              this.dogemsg = "";
            } else {
              this.dogeactive = false;
              this.dogemsg = "Doge Address must have minimum 26 and maximum 42 characters";
            }
          } else {
            this.dogeactive = false;
            this.dogemsg = "Doge Address should be start with 'D'";
          }

        } else {
          this.dogeactive = true;
          this.dogemsg = "";
        }
      },
      checkaddress() {


        this.btcactive = true;
        this.btcmsg = "";

        let btc_address = "" + this.profile.btc_address + "";

        if (btc_address.charAt(0) == '3' || btc_address.charAt(0) == '1' || btc_address.charAt(0) == 'b' ||
          btc_address == '') {

          if (btc_address) {
            if (btc_address.length < 26) {
              this.btcactive = false;
              this.btcmsg = "Bitcoin Address field must have minimum 26 and maximum 42 characters";
            } else {
              this.btcactive = true;
              this.btcmsg = "";
            }
          } /*else {
            this.btcactive = false;
            this.btcmsg = "The Bitcoin Address Field is Requried";
          }*/

        } else {
          this.btcactive = false;
          this.btcmsg = "Bitcoin Address should be start with '3 or 1 or b'";
        }


      },
      checkLTCAddress() {
        let ltc_address = "" + this.profile.ltc_address + "";
        if (ltc_address != "") {
          if (ltc_address.charAt(0) == 'L' || ltc_address.charAt(0) == 'M' || ltc_address.charAt(0) == 'l' &&
            ltc_address.charAt(1) == 't' && ltc_address.charAt(2) == 'c' && ltc_address.charAt(3) == '1' ||
            ltc_address == '') {
            if (ltc_address.length >= 26 && ltc_address.length <= 42) {

              this.ltcactive = true;
              this.ltcmsg = "";
            } else {
              this.ltcactive = false;
              this.ltcmsg = "Litecoin Address must have minimum 26 and maximum 42 characters";
            }
          } else {
            this.ltcactive = false;
            this.ltcmsg = "Litecoin Address should be start with L or M or ltc1";
          }
        } else {
          this.ltcactive = true;
          this.ltcmsg = "";
        }
        console.log(ltc_address.substring(1, 4));
      },
      // checkLTCAddress(){
      //        let ltc_address = ""+this.profile.ltc_address+"";
      //        // console.log(ltc_address.substring(1,4));
      //        if(ltc_address.charAt(0) == '3' || ltc_address.charAt(0) == 'L' || ltc_address.charAt(0) == 'M' || ltc_address == ''){
      //           this.ltcactive = true;
      //           this.ltcmsg = "";
      //        }else{
      //           this.ltcactive = false;
      //           this.ltcmsg = "Litecoin Address should be start with '3 or L or M'";
      //        }
      //     },
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

        let bnb_bsc_address = "" + this.profile.bnb_address + "";

        if (bnb_bsc_address.charAt(0) == '0' || bnb_bsc_address.charAt(0) == '1' || bnb_bsc_address == '') {

          if (bnb_bsc_address) {
            if (bnb_bsc_address.length < 26) {
              this.bnbactive = false;
              this.bnbmsg = "The BNB address field must have minimum 26 and maximum 42 characters";
            } else {
              this.bnbactive = true;
              this.bnbmsg = "";
            }
          } /*else {
            this.bnbactive = false;
            this.bnbmsg = "The BNB Field Requried";
          }*/

        } else {
          this.bnbactive = false;
          this.bnbmsg = "BNB-BSC Address should be start with '0 or 1'";
        }
      },

      checkTRXAddress(addFor) {
        var trx_address = "";
        if (addFor == "1") {
          trx_address = "" + this.profile.trx_address + "";
        } else {
          trx_address = "" + this.profile.usdt_trc20 + "";
        }

        if (trx_address.charAt(0) == 't' || trx_address.charAt(0) == 'T' || trx_address == '') {

          if (trx_address) {
            if (trx_address.length < 26) {
              if (addFor == 1) {
                this.trxactive = false;
                this.trxmsg = "The TRX address field must have minimum 26 and maximum 42 characters";
              } else {
                this.usdttrxactive = false;
                this.usdttrxmsg = "The USDT-TRC20 address field must have minimum 26 and maximum 42 characters";

              }
            } else {

              if (addFor == 1) {
                this.trxactive = true;
                this.trxmsg = "";
              } else {
                this.usdttrxactive = true;
                this.usdttrxmsg = "";

              }
            }
          } /*else {
            if (addFor == 1) {
              this.trxactive = false;
              this.trxmsg = "The TRX address field is Requried";
            } else {
              this.usdttrxactive = false;
              this.usdttrxmsg = "The USDT-TRC20 address field is Requried";

            }
          }*/

        } else {

          if (addFor == 1) {
            this.trxactive = false;
            this.trxmsg = "TRX Address should be start with 'T or t'";
          } else {
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

        let ethereum = "" + this.profile.ethereum + "";

        if (ethereum.charAt(0) == '0' || ethereum.charAt(0) == 'X' || ethereum == '') {

          if(ethereum != ""){
            if(ethereum.length >= 26 && ethereum.length <= 42){
              this.ethactive = true;
              this.ethmsg = "";
             } else {
              this.ethactive = false;
              this.ethmsg = "The ETH Address field must have minimum 26 and maximum 45 characters";
           
           
            }
          } /*else {
            this.ethactive = false;
            this.ethmsg = "The ETH Field Requried";
          }*/

        } else {
          this.ethactive = false;
          this.ethmsg = "ETH Address should be start with '0x'";
        }

        // sssssssssssssssssssssssssssssssssssssssssssssssssssssssssss

      },


              checkSOLaddress(){
                let sol_address = ""+this.profile.sol_address+"";
                if(sol_address != ""){
                  if(sol_address.charAt(0) == 's' || sol_address == ''){
                  if(sol_address.length >= 26 && sol_address.length <= 42){

                     this.solactive = true;
                     this.solmsg = "";
                  }else{
                        this.solactive = false;
                        this.solmsg = "Solana Address must have minimum 26 and maximum 42 characters";
                     }
                  }else{
                     this.solactive = false;
                     this.solmsg = "Solana Address should be start with s";
                  }

                }else{
                     this.solactive = true;
                     this.solmsg = "";
                }
             },
      
      CloseModal1() {
        document.getElementById("enterOTPForEdit").style.display = "none";
      },
    
  

    showPass() {
        if (this.showpassword == 0) {
          document.getElementById("new_password").type = "text";
          this.eye = "fa fa-eye field-icon";
          this.showpassword = 1;
        } else if (this.showpassword == 1) {
          document.getElementById("new_password").type = "password";
          this.showpassword = 0;
          this.eye = "fa fa-eye-slash field-icon";
           }
          else
          {
          document.getElementById("new_password").type = "text";
          this.eye = "fa fa-eye field-icon";
          }
        
      },

      showPass2() {
        if (this.showpassword2 == 0) {
          document.getElementById("retype_password").type = "text";
          this.eye2 = "fa fa-eye field-icon";
          this.showpassword2 = 1;
        } else if (this.showpassword2 == 1) {
          document.getElementById("retype_password").type = "password";
          this.showpassword2 = 0;
          this.eye2 = "fa fa-eye-slash field-icon";
        }
         else
          {
          document.getElementById("retype_password").type = "text"; 
          this.eye2 = "fa fa-eye field-icon";

          }
      },
      showPass3() {
        if (this.showpassword3 == 0) {
          document.getElementById("old_password").type = "text";
          this.eye3 = "fa fa-eye field-icon";
          this.showpassword3 = 1;
        } else if (this.showpassword3 == 1) {
          document.getElementById("old_password").type = "password";
          this.showpassword3 = 0;
          this.eye3 = "fa fa-eye-slash field-icon";
        }
        else

          {
          document.getElementById("old_password").type = "text";
          this.eye3 = "fa fa-eye field-icon";

          }
      },
    }

  };
</script>