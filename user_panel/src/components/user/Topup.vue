<template>
    <Navbar />

    <main class="content-wrapper-section">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="comn-title">
                        <h2 class="f-size-22">Topup</h2>
                    </div>
                </div>
                <!-- <div class="col-12">
                    <div class="report-section">
                        <div class="ipaddress">
                            <h4>IP Address</h4>
                            <p>152.57.210.83</p>
                        </div>
                        <div class="ipaddress">
                            <h4>Server Time</h4>
                            <p>16:11:50</p>
                        </div>
                        <div class="ipaddress">
                            <h4>User ID</h4>
                            <p>CQC66262</p>
                        </div>
                    </div>
                </div> -->
            </div>

            <div class="row">
                <div class="col-12 col-md-7 col-xl-7 m-auto mt-4 d-flex">
                    <!-- Make payment -->
                    <div class="white-box-form card card-block">
                        <div class="report-sec text-center card card-block">
                            <div>
                                <h4>Fund Wallet Balance : <span>
                                <h5>${{userdata.fund_Wallet_balance}}</h5>
                                    </span></h4>

                            </div>
                        </div>

                        <div class="profile-sec-form mt-5">
                            <form>
                                <div class="row">
                                    <div class="col-12 col-md-6">
                                        <div class="form-group">
                                            <label class="form-lable">Enter User Id</label>
                                            <input type="hidden" name="user_id" v-model="topup.user_id"/>
                                            <input type="text" name="username" class="form-control input-profile-form"  placeholder="Enter User Id" id="username"  v-model="username"  @keydown.space.prevent  maxlength="10" onkeypress="return (event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123) ||  (event.charCode >= 48 && event.charCode <= 57)"  v-on:input="checkUserExisted">
                                           <span :class="{'text-success': isAvialable == 'User available','text-danger': isAvialable == 'Invalid User Id'}" v-if="isAvialable!='' && username!=''">{{isAvialable}}</span>
                                          </div>
                                    </div>
                                    <div class="col-12 col-md-6">
                                        <div class="form-group">
                                            <label class="form-lable">Enter Amount</label>
                                            <input type="number" class="form-control input-profile-form"    maxlength="8" name="hash_unit" min="1" step="1" placeholder="Enter Amount" onkeypress="return event.charCode >= 48 && event.charCode <= 57" title="Numbers only" v-model="topup.hash_unit" v-on:keyup="hashvalidation($event)">
                                            <div  class="text-danger">{{usermsg}}</div>
                                           
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-group">
                                            <label class="form-lable">Select Package</label>
                                             <select  class="form-control input-profile-form" v-model="topup.package_id" name="package_id" @change="changeSelect($event)" id="package_id" >
                                                <option selected value="" >Select Package</option>
                                                <option v-for="packagelist in packagelists" v-bind:value="packagelist.id" :key="packagelist"> {{ packagelist.package_name }}</option> 
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div class="text-center my-4">
                                    <button class="blue-add-fund"  type="button"  :disabled="  !iscomplete || userNotValid ==true || usermsg !== '' || isAvialable !== 'User available'"  @click="checkOtp()">Make Payment</button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <!-- -------------------------------- verificationcode modal  ---------------------------------------- -->
        <div class="modal-demo">
          <div class="modal fade dashboard-modal"  id="verification-code-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"  aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered"   role="document">
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
                        <img src="user-assets/images/verifi-code-img.png" class="img-fluid" />
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
    import axios from 'axios';
    import Navbar from "../../components/user/Navbar.vue";
   // import $ from "jquery";
    import countryMixin from "@/mixins/countryMixin";  
    import {SELFTOPUP,SENDOTP,GETPACKAGES,GETTOPUPBALANCE,CHECKDOWNLINE,CHECKUSEREXIST} from "@/store/actions.type";
 
  
  export default {
    name: "app",
    mixins: [countryMixin],
    components: { 
       Navbar
    },
     
computed: {
      iscomplete() {
        return ((this.username)  && (this.topup.package_id) && (this.topup.hash_unit));
      }
    },
    data() {
      return {
      
         hidedata : 0,
         disablebtn: true,
         countries: [],
        selftopup: {
          top_up_wallet: 0,
          top_up_wallet_withdraw: 0,
          top_up_Wallet_balance: 0,
          package_id: 0
        },
  
         userdata: {
          total_earnings:0,
          roi_income: 0,
          leveincome: 0,
          direct_income: 0,
          totawithdraw: 0,
          total_withdraw_amount: 0,
          top_up_Wallet_balance: 0,
          direct_list: 0,
          fund_Wallet_balance: 0,
        },
        topup: {
          user_id: "",
          pin: "",
          // product_id: null,
          hash_unit: "",
          payment_type: "BTC",
          package_id: "",
          fullname:"",
          transcation_type:2,
          //username:'',
        },
        perfectmoney: {
        },
        packagelists: {
          id: "",
          name: ""
        },
        user_id : "",
        fullname : "", 
        isAvialable: "",
          isUserExit : '',
          isDisabledBtn:true, 
        username: "",
        min_hash: "",
        max_hash: "",
        usermsg: "",
        arrProduct: [],
        isValid: true,
        userNotValid:false,
        franchise:{
          user_id:'',
          id:''
        },
        setting_wallet:0,
        show_wallet:0,
        topup_percentage:0,
        transcation_type:2, 
        masterfranchise:{
          user_id:'',
          id:''
        },
        masterFranchiseList:[],
        clicked: true,
        topup_wallet:{
          fund_wallet:0,
          user_id:'',
          purchase_wallet:0
  
        }
      };
    },
    mounted() {
      this.getUserDashboard();
      this.getPackageList();
      this.getUserDetails();
  
  
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
    
    sendOTP() {  
         this.$store
            .dispatch(SENDOTP, {})
            .then(response => {
            if (response.code == 200) {
            
              this.$toast.success(response.message);
              //this.statedata=response.data.data.message;
             // $("#verification-code-modal").modal("show");
            } else {
              this.$toast.error(response.message);
            }
          })
          .catch(error => {
             this.$toast.error(error);
  
          });
  
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
                  product_id: this.topup.package_id,
                  user_id: this.username,
                  hash_unit: this.topup.hash_unit,
                  transcation_type:parseInt(this.topup.transcation_type),
                  device:'web',
                  topupfrom:'Purchase Wallet'
          };

      this.$store
        .dispatch(SELFTOPUP, data)
        .then((response) => {
          if (response.code == 200) {
            this.statedata=response.data;
            this.otp = '';
            //  $('#forgotMe').trigger('click');
            // window.$("#verification-code-modal").modal("hide");
            //document.getElementById("verification-code-modal").style.display = "none";

            //  $('#editBankDetailsmodal').modal('hide');
            this.otpstatus = true;
           // window.location.href = response.data;
            /*$('#editBankDetails1').modal('show');*/
             this.$toast.success(response.message);
             if(this.topup_wallet.user_id != this.username){
            this.$router.push({ name: 'downline-topup-report' });
            //location.reload(); 
       
              }else{
              this.$router.push({ name: 'topup-report' });
              // location.reload(); 
             
               }
                      this.getUserDashboard();
                       this.getPackageList();
                       this.topup.package_id = "";
                       this.topup.hash_unit = "";
                       this.username = "";                  
                      this.disablebtn=false;
          } else {
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
    
      // packageid(){
      //  $('#selftopup').removeAttr("disabled");
      // },
     /* getProSettings(){
                  axios.get('/getprojectsettings')
                  .then(resp => {
                      if(resp.data.code === 200){
                          this.objProSettings = resp.data.data;
                      }
                  }).catch(err => {
                  })
      }, */
      
       getPackageList() {
         // alert(this.packagelists);
         this.$store
          .dispatch(GETPACKAGES, {}) 
          .then(response => {
            this.packagelists = response.data;
            for (var i in this.packagelists) {
              this.arrProduct[this.packagelists[i].id] = this.packagelists[i];
            }
            // this.min_hash = this.arrProduct[1].min_hash;
            // this.max_hash = this.arrProduct[1].max_hash;
            // this.hashvalidation();
            // alert(this.packagelists);
          })
          .catch( );
      },
  
      getCountry() {
        axios
          .get("country", {})
          .then(response => {
            this.countries = response.data.data;
          })
          .catch(error => {
            this.$toast.error(error);
          });
      },

      
  
      getUserDashboard() { 
           this.$store
                .dispatch(GETTOPUPBALANCE, {}) 
          .then(response => {
            this.topup_wallet = response.data;          
          })
          .catch( );
      }, 
      getPerfectMoneyCred() {
        axios
          .get("get-perfect-cred", {})
          .then(response => {
            this.perfectmoney = response.data;
          })
          .catch(error => {
            this.$toast.error(error);
          });
      },
  
      ///--- 
      getMasterFranchiseUserList(){
        axios.get("get-master-franchise-users", {})
        .then(response => {
          this.masterFranchiseList = response.data;
        })
        .catch(error => {
          this.$toast.error(error);
  
        });
      },
  
  
      getFranchiseOnCountry(country){
  
        axios.post("get-franchise-users", {country:country})
        .then(response => {
          this.franchise = response.data;
        })
        .catch(error => {
          this.$toast.error(error);
  
        });
  
      },
        hashvalidation(e) {
        // if(this.topup.product_id==1){
        //     this.min_hash=this.max_hash;
        // }
        const amount = e.target.value;
        if(amount==''){
          this.usermsg =
            "Amount field is required";
          this.isValid = false;

        }
       else if (
          amount < this.min_hash ||
          amount > this.max_hash
        ) {
          this.usermsg =
            "Amount should be on range " + this.min_hash + " to " + this.max_hash;
          this.isValid = false;
        } else {
          this.isValid = true;
          this.usermsg = "";
        }
      },
  
      // hashvalidation() {
       
      //   if (
      //     this.topup.hash_unit < this.min_hash ||
      //     this.topup.hash_unit > this.max_hash
      //   ) {
      //     this.usermsg =
      //       "Amount should be on range " + this.min_hash + " to " + this.max_hash;
      //     this.isValid = false;
      //   } else {
      //     this.isValid = true;
      //     this.usermsg = "";
      //   }
      // },
  
      // doPayment() {
      //  // document.payment.submit();
      //  $('#payment').submit();
        
      // },
     
      checkUserExisted() {
          var data = {
            user_id: this.username
          }; 
      
        this.$store
          .dispatch(CHECKUSEREXIST, data)  
          .then(response => {
            if (response.data.code == 200) {
              var data = {
              user_id: this.username
          }; 
             alert(CHECKDOWNLINE);
               this.$store  
                .dispatch(CHECKDOWNLINE, data) 
                .then(res => {
                  if (res.code == 200) {
                    //alert(1);
                    // this.paid = res.data.data;
                   //  this.fullname = response.data.fullname;
                    // this.address = response.data.data.address;
                    // this.mobile = response.data.data.mobile;
                    // this.sp_user_id = response.data.data.sponser_id;
                    // this.sp_fullname = response.data.data.sponser_fullname;
                    // this.useractive = true;
                    this.isAvialable = res.data.message;
                    /*this.topup.package_id = 1;
                  this.topup.hash_unit = 50;*/
                  this.userNotValid = true;
                  } else {
                    // alert(res.data.message)
                    // this.paid = '';
                    // this.isdownline = 0;
                    //  this.fullname = '';
                    // this.address = '';
                    // this.mobile = '';
                    // this.sp_user_id = '';
                    // this.sp_fullname = '';
                    // this.useractive = false;
               //     this.topup.user_id = "";
                    /*this.topup.package_id = "";
                    this.topup.hash_unit = "";*/
                    //this.isAvialable = 'Not Available';
                    //this.isAvialable = res.data.message;
                    this.user_id = '';
                    this.isAvialable = res.data.message;
                    // this.userNotValid = false;
                  }
                });
            } else {
              this.isAvialable = response.message;
              this.userNotValid = false;
            }
          })
          .catch(error => {
            console.log(error);
          });
        
      },
      
    changeSelect() {
        // let user = _.split(event.target.value, "-", 2); //using lodash here. You can also just use js split func
        let id =this.topup.package_id; // your id
        //this.topup.hash_unit = this.arrProduct[id].min_hash;
        //console.log(this.arrProduct);
        this.min_hash = this.arrProduct[id].min_hash;
        this.max_hash = this.arrProduct[id].max_hash;
        // this.hashvalidation();
        if (
          this.topup.hash_unit < this.min_hash ||
          this.topup.hash_unit > this.max_hash
        ) {
          this.usermsg =
            "Amount should be on range " + this.min_hash + " to " + this.max_hash;
          this.isValid = false;
        } else {
          this.isValid = true;
          this.usermsg = "";
        }
        // this.activeDiv = true;
        // this.usermsg='Amount should be on range ' + this.min_hash + ' to ' + this.max_hash;
      }, 
     
     }
  };
  </script>
     