<template>
  <Navbar />
  <main class="content-wrapper-section">
      <div class="container-fluid">
          <div class="row">
              <div class="col-12 mt-5">
                  <!-- Pills navs -->
                  <div class="withdraw-tabs">
                      <ul class="nav nav-pills text-center justify-content-center">
                          <li class="nav-item">
                              <a class="nav-link active" data-toggle="pill" href="#withdraw" role="tab"
                                  aria-controls="pills-withdraw" aria-selected="true">Working Withdrawal</a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link" data-toggle="pill" href="#roiwithdraw" role="tab"
                                  aria-controls="pills-roiwithdraw" aria-selected="false">ROI Withdrawal</a>
                          </li>

                      </ul>
                      <div class="tab-content mt-3">
                          <div class="tab-pane fade show active" id="withdraw" role="tabpanel"
                              aria-labelledby="withdraw-tab">
                              <div class="withdraw-tab-sec mt-5">
                                  <div class="row">
                                      <div class="col-12 col-md-6 col-xl-6 d-flex">
                                          <div class="blue-box card card-block">
                                              <h5>Working Withdrawal</h5>
                                              <div class="wht-box-inner text-center ">
                                                <img v-if="profile.user_image" v-bind:src="profile.user_image">
                                                <img v-else src="user-assets/images/profile-img.png">
                                                  <h4> {{profile.user_id}}</h4>
                                                  <p>{{profile.fullname}}</p>
                                                  <div class="total-wallet-amount">
                                                      <div class="bottom-content-wallet">
                                                          <p>Total Wallet Amount</p>
                                                          <h5>${{working_wallet}}</h5>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div class="col-12 col-md-6 col-xl-6 d-flex">
                                          <div class="wht-box-inner card card-block">
                                              <form action="">
                                                  <div class="form-group ">
                                                      <label class="form-lable-deposit">Enter Amount</label>
                                                      <div class="input-profile-form-deposit d-flex px-2 py-1">
                                                        <input type="text" maxlength="8" min="20" step="0" id="set-working-wallet" name="working_withdrawal_amount" v-model="set_working_wallet" class="select-with-input" formcontrolname="set-working-wallet" placeholder="Enter Amount" data-vv-as="Amount" v-on:input="AmountValidation($event)"   onkeypress="return (event.charCode == 8 || event.charCode == 0 || event.charCode == 13) ? null : event.charCode >= 48 && event.charCode <= 57" />
                                                          <select class="custom-select-deposit">
                                                              <option selected value="default">USD </option>
                                                              <!--<option value="Paris">Paris</option>
                                                              <option value="Rome">Rome</option>
                                                              <option value="Madrid">Madrid</option>-->
                                                          </select> 
                                                          
                                                        </div>
                                                        <div v-if='amountErr !=="" ' class="tooltip2 mb-5">
                                                          <span class="text-danger" style="float:left;"> {{ this.amountErr }}</span>
                                                        </div> 
                                                  </div>
                                                 <div class="form-group">
                                                      <div class="gradiant-box ">
                                                          <h4>Preview Amount</h4>
                                                          <div class="d-flex align-items-end">
                                                              <h5 class="font-black">{{set_working_wallet}}</h5>
                                                              <small class="ml-2 grey-font">USD</small>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div class="form-group">
                                                      <label class="form-lable-deposit">Deduction</label>
                                                      <input type="text" name="deduction" v-model="deduction" class="form-control input-profile-form-deposit" disabled readonly> 
                                                     

                                                  </div>
                                                  <div class="gradiant-box ">
                                                          <h4>Currency</h4>
                                                          <div class="d-flex align-items-center">
                                                            
                                                              <img src="user-assets/images/Bitcoin.png"
                                                                  class="mr-2" />
                                                              <h5>Bitcoin</h5>
                                                          </div>
                                                  </div>
                                                  <!--<div class="form-group">
                                                    <div class="d-flex justify-content-between">
                                                     <select v-model="Currency_type" class="input-profile-form-deposit">
                                                              <option selected value="">Select Currency</option>
                                                              <option
                                                                v-for="cur in currency_code"
                                                                v-bind:key="cur.currency_code"
                                                                :value="cur.currency_code">
                                                                {{ cur.currency_name }} (
                                                                {{ cur.currency_code }} )
                                                              </option>
                                                            </select>
                                                  
                                                  </div>
                                                   
                                                  </div>-->

                                                  <!--<div class="form-group">
                                                      <div class="gradiant-box ">
                                                          <h4>Market Rate</h4>
                                                          <div class="d-flex align-items-end">
                                                              <h5 class="font-black">$787,098</h5>
                                                              <small class="ml-2 grey-font">USD</small>
                                                          </div>
                                                      </div>
                                                  </div>-->
                                              </form>
                                             <!--<div class="logo-carasole">
                                                  <div
                                                      class="d-flex align-items-center justify-content-center flex-wrap">
                                                      <div class="bg-logo">
                                                          <img src="user-assets/images/Ethereum.png" />
                                                      </div>
                                                      <div class="bg-logo">
                                                          <img src="user-assets/images/Bitcoin.png" />
                                                      </div>
                                                      <div class="bg-logo">
                                                          <img src="user-assets/images/Tron.png" />
                                                      </div>
                                                      <div class="bg-logo">
                                                          <img src="user-assets/images/Dogecoin.png" />
                                                      </div>
                                                      <div class="bg-logo">
                                                          <img src="user-assets/images/Litecoin.png" />
                                                      </div>
                                                      <div class="bg-logo">
                                                          <img src="user-assets/images/Tether.png" />
                                                      </div>
                                                      <div class="bg-logo">
                                                          <img src="user-assets/images/Solana.png" />
                                                      </div>
                                                  </div>
                                              </div>-->

                                              <div class="text-center mt-4">
                                                <Button class="blue-add-fund" data-toggle="modal" data-target="#verification-code-modal" v-bind:key="withdrawBtn==true"  type="button" @click.prevent="sendOTP()" :disabled="!isCompleteWorkingWithdrawal || amountErr !== ''|| withdrawBtn==true">Withdrawal</Button>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="tab-pane fade" id="roiwithdraw" role="tabpanel" aria-labelledby="profile-tab">
                              <div class="withdraw-tab-sec mt-5">
                                  <div class="row">
                                      <div class="col-12 col-md-6 col-xl-6 d-flex">
                                          <div class="blue-box card card-block">
                                              <h5>ROI Withdrawal</h5>
                                              <div class="wht-box-inner text-center ">
                                                <img v-if="profile.user_image" v-bind:src="profile.user_image">
                                                <img v-else src="user-assets/images/profile-img.png">
                                                  <h4> {{profile.user_id}}</h4>
                                                  <p>{{profile.fullname}}</p>
                                                  <div class="total-wallet-amount">
                                                      <div class="bottom-content-wallet">
                                                          <p>Total Wallet Amount</p>
                                                          <h5>${{requite_wallet}}</h5>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div class="col-12 col-md-6 col-xl-6 d-flex">
                                          <div class="wht-box-inner card card-block">
                                              <form action="">
                                                  <div class="form-group">
                                                      <label class="form-lable-deposit">Enter Amount</label>
                                                      <div class="input-profile-form-deposit d-flex px-2 py-1">
                                                        <input type="text" maxlength="8" min="20" step="20" id="set_working_wallet1" name="roi_withdrawal_amount" v-model="set_working_wallet1" class="select-with-input" formcontrolname="set-working-wallet1" data-vv-as="Amount" placeholder="Enter Amount" v-on:input="RoiAmountValidation($event)"  onkeypress="return (event.charCode == 8 || event.charCode == 0 || event.charCode == 13) ? null : event.charCode >= 48 && event.charCode <= 57" />
                                                            
                                                          <select class="custom-select-deposit">
                                                              <option selected value="default"> USD </option>
                                                              <!---<option value="Paris">Paris</option>
                                                              <option value="Rome">Rome</option>
                                                              <option value="Madrid">Madrid</option>-->
                                                          </select>
                                                        </div>
                                                        <div v-if='ramountErr !=="" ' class="tooltip2 mb-5">
                                                            <span class="text-danger" style="float:left;"> {{ this.ramountErr }}</span>
                                                          </div>
                                                  </div>
                                                  <div class="form-group">
                                                      <div class="gradiant-box ">
                                                          <h4>Preview Amount</h4>
                                                          <div class="d-flex align-items-end">
                                                              <h5 class="font-black">{{set_working_wallet1}}</h5>
                                                              <small class="ml-2 grey-font">USD</small>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div class="form-group">
                                                      <label class="form-lable-deposit">Deduction</label>
                                                      <input type="text" name="deduction" v-model="deduction" class="form-control input-profile-form-deposit" disabled readonly>
                                                      

                                                  </div>
                                                  <!--<div class="form-group">
                                                    <div class="d-flex justify-content-between">
                                                     <select v-model="Currency_type1"  class="input-profile-form-deposit">
                                                              <option selected value="">Select Currency</option>
                                                              <option
                                                                v-for="cur in currency_code"
                                                                v-bind:key="cur.currency_code"
                                                                :value="cur.currency_code">
                                                                {{ cur.currency_name }} (
                                                                {{ cur.currency_code }} )
                                                              </option>
                                                            </select>
                                                  
                                                  </div>
                                                  </div>-->
                                                  <div class="gradiant-box ">
                                                          <h4>Currency</h4>
                                                          <div class="d-flex align-items-center">
                                                            
                                                              <img src="user-assets/images/Bitcoin.png"
                                                                  class="mr-2" />
                                                              <h5>Bitcoin</h5>
                                                          </div>
                                                  </div>

                                                 
                                              </form>
                                             <!---<div class="logo-carasole">
                                                  <div
                                                      class="d-flex align-items-center justify-content-center flex-wrap">
                                                      <div class="bg-logo">
                                                          <img src="user-assets/images/Ethereum.png" />
                                                      </div>
                                                      <div class="bg-logo">
                                                          <img src="user-assets/images/Bitcoin.png" />
                                                      </div>
                                                      <div class="bg-logo">
                                                          <img src="user-assets/images/Tron.png" />
                                                      </div>
                                                      <div class="bg-logo">
                                                          <img src="user-assets/images/Dogecoin.png" />
                                                      </div>
                                                      <div class="bg-logo">
                                                          <img src="user-assets/images/Litecoin.png" />
                                                      </div>
                                                      <div class="bg-logo">
                                                          <img src="user-assets/images/Tether.png" />
                                                      </div>
                                                      <div class="bg-logo">
                                                          <img src="user-assets/images/Solana.png" />
                                                      </div>
                                                  </div>
                                              </div>-->

                                              <div class="text-center mt-4">
                                                  <Button class="blue-add-fund" data-toggle="modal" data-target="#verification-code-modal1" v-bind:key="withdrawBtn==true"  type="button" @click.prevent="sendOTP1()" :disabled="!isCompleteWorkingWithdrawal1 || ramountErr !== ''|| withdrawBtn==true">Withdrawal</Button>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>

                      </div>
                      <!-- Pills content -->
                  </div>

              </div>
          </div>

      </div>
           <!-- -------------------------------- verificationcode modal  ---------------------------------------- -->
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
                          We have sent a verification 
                            code on your registered mail id
                          <!-- We have just sent a verification code to User {{profile.user_id}} ,
                          and their mail also -->
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
                          @click="verifyOtp()"
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
        <!-- <div class="overlay toggle-icon-main"></div> -->
   <!-- -------------------------------- end  modal  ---------------------------------------- -->

  <!-- -------------------------------- verificationcode modal  ---------------------------------------- -->
  <div class="modal-demo">
          <div class="modal fade dashboard-modal"  id="verification-code-modal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"  aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg"   role="document">
              <div class="modal-content verifi-modal-dialog position-relative">
                <div class="modal-header border-0 px-0">
                  <h5 class="modal-title verifi-title">     Enter Verification Code...…..              </h5>
                  <button type="button" @click="CloseModal1()" class="close" data-bs-dismiss="modal" aria-label="Close">
                    <img src="user-assets/images/veri-close-icon.svg" />
                  </button>
                </div>

                <div class="modal-body p-0">
                  <div class="row">
                    <div class="col-12 col-lg-6">
                      <div class="verifi-content">
                        <p>
                          We have sent a verification 
                            code on your registered mail id
                          <!-- We have just sent a verification code to User {{profile.user_id}} ,
                          and their mail also -->
                        </p>
                        <div class="input-code d-flex"  id="otpJump">
                          <input   type="text"   onkeypress="return (event.charCode == 8 || event.charCode == 0 || event.charCode == 13) ? null : event.charCode >= 48 && event.charCode <= 57"
                            @paste="onPaste1"  v-on:input="digitValidate($event)"         class="form-control" id="first1"  maxlength="1"/>
                          <input
                            type="text"
                            v-on:input="digitValidate($event)"
                            
                            class="form-control"
                            id="second1"
                            maxlength="1"
                            onkeypress="return (event.charCode == 8 || event.charCode == 0 || event.charCode == 13) ? null : event.charCode >= 48 && event.charCode <= 57"
                          />
                          <input
                            type="text"
                            v-on:input="digitValidate($event)"
                            
                            class="form-control"
                            id="third1"
                            maxlength="1"
                            onkeypress="return (event.charCode == 8 || event.charCode == 0 || event.charCode == 13) ? null : event.charCode >= 48 && event.charCode <= 57"
                          />
                          <input
                            type="text"
                            v-on:input="digitValidate($event)"
                            
                            class="form-control"
                            id="fourth1"
                            maxlength="1"
                            onkeypress="return (event.charCode == 8 || event.charCode == 0 || event.charCode == 13) ? null : event.charCode >= 48 && event.charCode <= 57"
                          />
                          <input
                            type="text"
                            v-on:input="digitValidate($event)"
                            
                            class="form-control"
                            id="fifth1"
                            maxlength="1"
                            onkeypress="return (event.charCode == 8 || event.charCode == 0 || event.charCode == 13) ? null : event.charCode >= 48 && event.charCode <= 57"
                          />
                          <input
                            type="text"
                            v-on:input="digitValidate($event)"
                            
                            class="form-control"
                            id="sixth1"
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
                          @click="verifyOtp1()"
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
        <!-- <div class="overlay toggle-icon-main"></div> -->
   <!-- -------------------------------- end  modal  ---------------------------------------- -->

      
  </main>

</template>
<script>
 // import jQuery from 'jquery'
 import {WITHDRAWINCOME,GETWORKINGWITHDRAWALDEDUCTION,GETALLCURRENCY, SENDOTP,GETROIBALANCE, WITHDRAWROIWALLET,GETWORKINGBALANCE} from "@/store/actions.type";
 //VERIFYUSEROTP
  import Navbar from '../../components/user/Navbar.vue'; 
  import axios from "axios";


  export default {
      name: "app",
      components: { Navbar },

    data() {
      return {
        working_wallet: 0,
        profile: {
                  fullname : '',
                  user_id : '',
                },

          userdata: {
          total_earnings:0,
          compounding_wallet:0,
          roi_income: 0,
          leveincome: 0,
          direct_income: 0,
          totawithdraw: 0,
          total_withdraw_amount: 0,
          top_up_Wallet_balance: 0,                 
          fund_Wallet_balance: 0,
        },
        
         amountErr:'',
        ramountErr:'',
        workingwithdrawal: {
          topup_wallet: 0,
          working_wallet: 0,
          working_wallet_withdraw: 0,
          working_Wallet_balance: 0,
          working_Wallet_balancenew: 0,
          btc_address: "",
        },
        working_balance: 0,
        requite_wallet: 0,
        Currency_type: '',
        Currency_type1: '',
  
        set_working_wallet: '',
        set_working_wallet1: '',
        addTopup: 0,
        mode: "withdraw",
        isValid: true,
        isValid1: true,
        usermsg: "",
        usermsg1: "",
        otp: "",
        withdrawBtn: false,
        currency_code: [],
        otpSent: false,
        optVerified: false,
        deduction: "",
       
      };
    },
    computed: {
  
       
   
      isCompleteWorkingWithdrawal() {
        return this.set_working_wallet;
      },
      isCompleteWorkingWithdrawal1() {
        return this.set_working_wallet1;
      }
    },
    mounted() {
      this.getAllCurrency();
      this.getWorkingWithdrawal();
      this.getRoiWithdrawal();
      this.getWorkingWithdrawalDeduction();
      this.getUserDetails();
      this.getreadProfile();
    },
    methods: {
       getUserDetails() {
        try {
          axios
            .get("get-user-dashboard", {})
            .then((response) => {
              this.userdata = response.data.data;
            })
            .catch({});
        } catch (err) {
          alert(err.message);
        }
      },

      getreadProfile() {
        try {
          axios
            .get("get-profile-info", {})
            .then((response) => {
              this.profile = response.data.data;
            })
            .catch({});
        } catch (err) {
          alert(err.message);
        }
      },
     
      CloseModal() {
      window.$("#verification-code-modal").modal("hide");
      document.getElementById('first').value='';
      document.getElementById('second').value='';
      document.getElementById('third').value='';
      document.getElementById('fourth').value='';
      document.getElementById('fifth').value='';
      document.getElementById('sixth').value='';
      location.reload();
  
    },

    CloseModal1() {
      window.$("#verification-code-modal1").modal("hide");
      document.getElementById('first1').value='';
      document.getElementById('second1').value='';
      document.getElementById('third1').value='';
      document.getElementById('fourth1').value='';
      document.getElementById('fifth1').value='';
      document.getElementById('sixth1').value='';
      location.reload();
  
    },
 
      getWorkingWithdrawal() {
          this.$store
          .dispatch(GETWORKINGBALANCE, {}) 
          .then((response) => {
            // console.log(response)
            if (response.code == 200) {
              this.working_wallet =
                typeof response.data == Object ? 0 : response.data;
            }
          })
          .catch((error) => {
           this.$toast.error(error);
  
          });
      },
      getRoiWithdrawal() {
          this.$store
          .dispatch(GETROIBALANCE, {}) 
        .then(response => {
          if (response.code == 200) {
            this.requite_wallet = 
              typeof response.data == Object ? 0 : response.data;
          }
        }).catch(error => {
         this.$toast.error(error);
  
        });
      },
      getWorkingWithdrawalDeduction() {
          this.$store
          .dispatch(GETWORKINGWITHDRAWALDEDUCTION, {}) 
          .then((response) => {
            // console.log(response)
            if (response.code == 200) {
              this.deduction =
                typeof response.data == Object ? 0 : response.data+"%";
            }
          })
          .catch((error) => {
          this.$toast.error(error);
  
          });
      },
    
      AmountValidation(e) {
        const amount = e.target.value;
        if (amount == "") {
          this.amountErr = "amount should not be blank."; 
        }else if (amount < 20) {
          this.amountErr = "The amount must be 20 or more.";
        }else {
          this.amountErr = "";
        }
          
      },
  
        RoiAmountValidation(e) {
        const amount = e.target.value;
        if (amount == "") {
          this.ramountErr = "amount should not be blank."; 
        }else if (amount < 20) {
          this.ramountErr = "The amount must be 20 or more.";
        }else {
          this.ramountErr = "";
        }
          
      },

      onPaste1(evt) {
      var otpnumber = evt.clipboardData.getData("Text");

      var output = [];

      for (var i = 0, len = otpnumber.length; i < len; i += 1) {
        output.push(+otpnumber.charAt(i));
      }
      document.getElementById("first1").value = output[0];
      document.getElementById("second1").value = output[1];
      document.getElementById("third1").value = output[2];
      document.getElementById("fourth1").value = output[3];
      document.getElementById("fifth1").value = output[4];
      document.getElementById("sixth1").value = output[5];
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
  
   
      getAllCurrency() {       
               var data= {
               withdrwal_status: 1,  
               }
  
             this.$store
            .dispatch(GETALLCURRENCY, data)   
          .then((response) => {
            this.currency_code = response.data;          
          })
          .catch();
         },
    
     /* withdrawsucess() {
         
        this.withdrawBtn = true;
  
        var data = {
            level_income_balance: 0,
            direct_income_balance: 0,
            roi_balance: 0,
            binary_income_balance: 0,
            topup_wallet: 0,
            addTopup: this.addTopup,
            transfer_wallet: 0,
            working_wallet: Number(this.set_working_wallet),
            mode: this.mode,
            Currency_type: this.Currency_type,
        }
  
             this.$store
            .dispatch(WITHDRAWINCOME, data) 
       
          .then((response) => {
            this.withdrawBtn = false;
            if (response.code == 200) {
          //   jQuery('#enterOTP').hide();
              this.$toast.success(response.message);
              location.reload();
  
              // this.$router.push({ path: "withdrawal" });
            }else if (response.code == 401) {
          //   jQuery('#enterOTP').hide();
              this.$toast.error(response.message);
              setTimeout(function(){ location.reload(); }, 400); 
            }
             else {
              this.$toast.error(response.message);
              this.otp = "";
            }
          });
      },
  
      withdrawsucessroi() {
        this.withdrawBtn=true;
        var data ={
            level_income_balance: 0,
          direct_income_balance: 0,
          roi_balance: 0,
          binary_income_balance: 0,
          topup_wallet: 0,
          addTopup: 0,
          transfer_wallet: 0,
          working_wallet: Number(this.set_working_wallet1),
          mode: "withdraw",
          Currency_type:this.Currency_type1,
         // remark:this.remark1,
          wallet_type:"Requite Wallet",
          otp:this.otp
        }
  
         this.$store
        .dispatch(WITHDRAWROIWALLET, data) 
        .then(response => {
          this.withdrawBtn=false;
          if (response.code == 200) {
            //jQuery('#enterOTP1').hide();
            this.$toast.success(response.message);
            // location.reload();
  
            this.$router.push({ path:'withdrawals-income-report'});
            this.otpbtn2=false;          
          } else if (response.code == 401) {
            //jQuery('#enterOTP1').hide();
            this.$toast.error(response.message);
            setTimeout(function(){ location.reload(); }, 400); 
          }
          else {
            this.$toast.error(response.message);
            this.otp = '';
            this.otpbtn2=false;
          }
        });
      },
      */
  
      sendOTP(){
           var data = {
              
                amount: this.set_working_wallet,
            }
           
            if(data.amount < 20){
              this.ramountErr = "The amount must be 20 or more";
              // setTimeout(function () { self.ramountErr =""; }, 2000);
            }  
           else{
            this.$store
            .dispatch(SENDOTP, data) .then(response=>{
  
              if(response.code == 200){
                this.$toast.success(response.message);
           
                this.otp='';
  
              }else{                 
                this.$toast.error(response.message);
              }
            })
  
              .catch((error) => {
                   this.$toast.error(error);
  
                  });
  
                 
                }                 
             
      },
  
        
      sendOTP1(){
    
            var data = {
              
                amount: this.set_working_wallet1,
            }
           
            if(data.amount < 20){
              this.ramountErr = "The amount must be 20 or more";
              // setTimeout(function () { self.ramountErr =""; }, 2000);
            }
             
           else
           {
            this.$store
            .dispatch(SENDOTP, data) .then(response=>{
  
              if(response.code == 200){
                this.$toast.success(response.message);              
                this.otp='';
  
              }else{                 
                this.$toast.error(response.message);
              }
            })
  
              .catch((error) => {
                   this.$toast.error(error);
  
                  });
  
                 
                }                 
             
      },
  

 verifyOtp(){


var p1 = document.getElementById("first").value;
var p2 = document.getElementById("second").value;
var p3 = document.getElementById("third").value;
var p4 = document.getElementById("fourth").value;
var p5 = document.getElementById("fifth").value;
var p6 = document.getElementById("sixth").value;
this.otp = p1 + p2 + p3 + p4 + p5 + p6;


  this.withdrawBtn=true;
  
  var data = {
            level_income_balance: 0,
            direct_income_balance: 0,
            roi_balance: 0,
            binary_income_balance: 0,
            topup_wallet: 0,
            addTopup: this.addTopup,
            transfer_wallet: 0,
            working_wallet: Number(this.set_working_wallet),
            mode: this.mode,
          ///  Currency_type: this.Currency_type,
            Currency_type: 'BTC',            
            otp: this.otp,
        }
  

          this.$store
          .dispatch(WITHDRAWINCOME, data)
        .then(response => {
            if (response.code == 200) {
              this.$toast.success(response.message); 
            this.$router.push({ path:'withdrawals-income-report'}); 
            //location.reload();      
            } else {
              this.$toast.error(response.message);
            
              location.reload();
            }
          }).catch(error => {
            this.$toast.error(error);
              this.message = "";
          });
        },

      
       verifyOtp1(){

      this.withdrawBtn = true;
      var p1 = document.getElementById("first1").value;
      var p2 = document.getElementById("second1").value;
      var p3 = document.getElementById("third1").value;
      var p4 = document.getElementById("fourth1").value;
      var p5 = document.getElementById("fifth1").value;
      var p6 = document.getElementById("sixth1").value;
      this.otp1 = p1 + p2 + p3 + p4 + p5 + p6;


      
        var data ={
           level_income_balance: 0,
          direct_income_balance: 0,
          roi_balance: 0,
          binary_income_balance: 0,
          topup_wallet: 0,
          addTopup: 0,
          transfer_wallet: 0,
          working_wallet: Number(this.set_working_wallet1),
          mode: "withdraw",
        //  Currency_type:this.Currency_type1,
          Currency_type: 'BTC',
         // remark:this.remark1,
          wallet_type:"Requite Wallet",
          otp:this.otp1
        }

        
  
        this.$store
         .dispatch(WITHDRAWROIWALLET, data)
       .then(response => {
          if (response.code == 200) {
            this.$toast.success(response.message);
          this.$router.push({ path:'withdrawals-income-report'});   
         // location.reload();   
          } else {
            this.$toast.error(response.message);
           
            location.reload();
          }
        }).catch(error => {
           this.$toast.error(error);
             this.message = "";
        });
      },
  
     
    },
  };
  
   </script>
