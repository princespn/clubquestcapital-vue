<template>
  <div>
    <Navbar />
    <main ref="art1" class="content-wrapper-section">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="comn-title">
              <h2 class="f-size-22">Dashboard</h2>
            </div>
          </div>

          <div class="col-12 col-md-4 col-xl-2 mt-2">
            <div class="box-white-dash">
              <div class="bg-box-img1">
                <div class="top-content">
                  <h5>ROI</h5>
                  <h5>Income</h5>
                </div>
                <div class="bottom-content">
                  <h4>${{dashboard.roi_income}}</h4>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12  col-md-4 col-xl-2 mt-2">
            <div class="box-white-dash">
              <div class="bg-box-img2">
                <div class="top-content">
                  <h5>Binary</h5>
                  <h5>Income</h5>
                </div>
                <div class="bottom-content">
                  <h4>${{dashboard.binary_income}}</h4>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12  col-md-4 col-xl-2 mt-2">
            <div class="box-white-dash">
              <div class="bg-box-img3">
                <div class="top-content">
                  <h5>Direct</h5>
                  <h5>Income</h5>
                </div>
                <div class="bottom-content">
                  <h4>${{dashboard.direct_income}}</h4>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12  col-md-4 col-xl-2 mt-2">
            <div class="box-white-dash">
              <div class="bg-box-img4">
                <div class="top-content">
                  <h5>Total</h5>
                  <h5>Income</h5>
                </div>
                <div class="bottom-content">
                  <h4>${{dashboard.total_earnings}}</h4>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12  col-md-4 col-xl-4 mt-2">
            <div class="box-white-dash1">
              <div class="bg-box-img5">
                <div class="bottom-content-btn">
                  <div class="referrals-none">
                    <div class="d-flex align-items-center justify-content-center">
                      <div>
                        <h4>Get Referrals</h4>
                      </div>
                      <div class="down-arrow-icon ml-4" v-on:click="getreferrallink">
                        <img src="user-assets/images/Down-arrow-icon.svg" />
                      </div>
                    </div>
                  </div>

                  <div class="refrrals-link-added position-relative">
                    <div class="down-arrow-icon re-down-arrow-icon">
                      <img src="user-assets/images/Down-arrow-icon.svg" />
                    </div>
                    <div class="left-input mb-3">
                      <span class="label-text">L</span>
                      <div class="input-group">
                        <input id="kt_share_earn_link_input" type="text" class="form-control refrrals-input"
                          name="search" v-on:focus="$event.target.select()" ref="clone"
                          v-bind:value="dashboard.link+'&position=1'" />

                        <!--<input type="text" class="form-control refrrals-input" placeholder="">-->
                        <div class="input-group-append">
                          <span class="input-group-text" id="basic-addon2"><button id="kt_share_earn_link_copy_button"
                              class="copy-btn" data-clipboard-target="#kt_share_earn_link_input"
                              @click="copy">Copy</button></span>
                        </div>
                      </div>
                    </div>
                    <div class="left-input">
                      <span class="label-text">R</span>
                      <div class="input-group">
                        <input id="kt_share_earn_link_input" type="text" class="form-control refrrals-input"
                          name="search" v-on:focus="$event.target.select()" ref="clone1"
                          v-bind:value="dashboard.link+'&position=2'" />

                        <!--<input type="text" class="form-control refrrals-input" placeholder="">-->
                        <div class="input-group-append">
                          <span class="input-group-text" id="basic-addon2"><button id="kt_share_earn_link_copy_button"
                              class="copy-btn" data-clipboard-target="#kt_share_earn_link_input"
                              @click="copy1">Copy</button></span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-12 col-md-6 col-xl-8">
            <div class="overview">
              <div class="comn-title">
                <h2 class="f-size-22">Overview</h2>
              </div>
              <div class="bar-chart">
                <!--<canvas id="myChart"></canvas>
               <canvas id="barChart"></canvas>-->
                <div class="row">
                  <div class="col-md-12">
                    <div class="card">
                      <div class="card-header">
                        All Income Graph
                      </div>
                      <div class="card-body">
                        <div id="chart_div">
                          <apexchart type="line" height="300" :options="chartOptions" :series="series"></apexchart>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="payment-history">
              <div class="comn-title">
                <h2 class="f-size-22">Recent Topup</h2>
              </div>

              <div class="row">
                <div class="col-sm-12">
                  <table id="topup-report" class="main-datatable table history-table   display dataTable no-footer"
                    style="width: 100%;" aria-describedby="structure-balance-receive_info">
                    <!-- <div class="history-table"> -->
                    <!-- <table id="topup-report" class="table table-responsive"> -->
                    <thead class="thead-color">
                      <tr>
                        <th scope="col">Sr.No.</th>
                        <th scope="col">Date</th>
                        <th scope="col">User Id</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Package</th>

                      </tr>
                    </thead>
                    <tbody>
                    </tbody>
                  </table>
                  <!-- </div> -->
                </div>
              </div>
            </div>


          </div>

          <div class="col-12 col-md-6 col-xl-4">
            <div class="over-view-right">
              <button id="kt_share_earn_link_copy_button" class="btn left-btn"
                data-clipboard-target="#kt_share_earn_link_input" @click="copy"
                v-on:click="onclickBanner">Banner</button>
              <!--<button class="btn left-btn">Left R.</button>-->
              <button id="kt_share_earn_link_copy_button" class="btn right-btn"
                data-clipboard-target="#kt_share_earn_link_input" @click="copy1" v-on:click="onclickPPT">PPT</button>
              <!--<button class="">Right R.</button>-->
            </div>


            <!-- Banner section -->
            <div class="banner-popup">
              <div class="banner-section">
                <div class="banner-media">
                  <div class="banner-img d-flex align-items-center">
                    <img src="user-assets/images/banner1.png" />
                    <img src="user-assets/images/banner2.png" />
                    <img src="user-assets/images/banner3.png" />
                  </div>
                  <div class="banner-img d-flex align-items-center">
                    <img src="user-assets/images/banner4.png" />
                    <img src="user-assets/images/banner5.png" />
                    <img src="user-assets/images/banner6.png" />
                  </div>
                </div>
                <div class="view-all-link text-right mt-3">
                  <router-link to="/banner">
                    <p class="mb-0">View All Banners</p>
                  </router-link>
                </div>
              </div>
            </div>

            <!-- PPT section -->
            <div class="ppt-popup">
              <div class="ppt-section">
                <div class="banner-media">
                  <div class="ppt-img d-flex align-items-center ">
                    <img src="user-assets/images/pdf-img.png" />
                    <img src="user-assets/images/pdf-img.png" />
                    <img src="user-assets/images/pdf-img.png" />
                    <img src="user-assets/images/pdf-img.png" />
                  </div>
                  <div class="ppt-img d-flex align-items-center">
                    <img src="user-assets/images/pdf-img.png" />
                    <img src="user-assets/images/pdf-img.png" />
                    <img src="user-assets/images/pdf-img.png" />
                    <img src="user-assets/images/pdf-img.png" />
                  </div>

                </div>
                <div class="view-all-link text-right mt-3">
                  <router-link to="/presenation">
                    <p class="mb-0">View All PPT's</p>
                  </router-link>
                </div>
              </div>
            </div>

            <form class="form" @submit.prevent="purchasePackagecoin(currency_code,amount)" data-vv-scope="addfundform">
              <div class="comm-sec-title text-center">
                <div class="fund-sec">
                  <h2>Add Fund</h2>
                </div>
                <div class="total-wallent-balance">
                  <p>Total Wallet Balance</p>
                  <h3>${{fund_wallet_balance.fund_wallet}}</h3>
                </div>
                <div class="current-typing">
                  <h5>Enter Amount</h5>
                  <div class="current-type-box">

                    <input type="text" class="form-control input-amount" maxlength="8" id="amount"
                      placeholder="Enter Amount" name="amount" min="1" step="1"
                      onkeypress="return event.charCode >= 48 && event.charCode <= 57" title="Numbers only"
                      @blur="AmountValidation($event)" v-model="amount" />

                    <!--<h4>$ 100</h4>
                <h4>Bitcoin</h4>-->
                  </div>
                  <div v-if="amountErr !== ''" class="tooltip2">
                    <span class="tooltip-inner tooltip-custome"> {{ this.amountErr }}</span>
                  </div>
                </div>
                <div class="current-typing">
                  <h5>Payment Mode</h5>
                  <div class="current-type-box">
                    <!--<img src="user-assets/images/Add-fund-Bitcoin.png" />
                <h4>Bitcoin</h4>-->
                    <select v-model="typeChange" class="input-profile-form-deposit" style="box-shadow:none;"
                      aria-label="Default select example">
                      <option value="" selected>Select Currency</option>
                      <option v-for="cur in currency_code" v-bind:key="cur.currency_code" :value="cur.currency_code">
                        {{ cur.currency_name }} (
                        {{ cur.currency_code }} )
                      </option>
                    </select>


                  </div>
                </div>

                <div class="add-fund-btn text-center mt-5">
                  <button type="submit" class="btn blue-btn" :disabled="amountErr !== '' || !isComplete"> Add
                    Fund</button>
                </div>

              </div>
            </form>
            <div class="recent-activites mt-3">
              <div class="comm-sec-title">
                <h2 class="mb-0">Recent Withdrawals</h2>
                <!--<span>23 Jul - Today</span>-->
              </div>
              <div class="recent-sec mt-4">
                <div class="history-table">
                  <table id="withdrawals-income-report" class="table table-responsive">
                    <thead class="thead-color">
                      <tr>
                        <th scope="col">Sr.No.</th>
                        <th scope="col">Date</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Net Amount</th>
                        <th scope="col">Deduction</th>
                        <th scope="col">Address</th>
                      </tr>
                    </thead>
                    <tbody>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!---<div class="row">
        <div class="col-12 col-lg-4">
        -------------------------------- confirmation modal  ---------------------------------------- 
          <div class="modal-demo">
            <button class="blue-btn" data-toggle="modal" data-target="#permission-modal">
              Confirmation popup
            </button>
            <div class="modal fade dashboard-modal" id="permission-modal" tabindex="-1" role="dialog"
              aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content dashboard-modal-dialog position-relative">
                  <div class="modal-header border-0">
                    <div class="modal-close">
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <img src="user-assets/images/modal-close-icon.svg" />
                      </button>
                    </div>
                  </div>
                  <div class="modal-body p-0">
                    <div class="modal-icon">
                      <img src="user-assets/images/modal-exlimantry-icon.svg" />
                    </div>
                    <div class="apply-sure-msg-modal">
                      <h4>Are You Sure....?</h4>
                      <p>You want to implement these changes</p>
                    </div>
                  </div>
                  <div class="modal-footer border-0">
                    <button type="button" class="blue-btn-modal">
                      Yes
                    </button>

                    <button type="button" class="grey-btn-modal" data-dismiss="modal">
                      No
                    </button>
                  </div>
                </div>
              </div>
            </div>

         -------------------------------- end  modal  ---------------------------------------- 
          </div>
        </div>
        <div class="col-12 col-lg-4">
         ------------------------------- verificationcode modal  ---------------------------------------- 
          <div class="modal-demo">
            <button class="blue-btn" data-toggle="modal" data-target="#verification-code-modal">
              verification code
            </button>-
            <div class="modal fade dashboard-modal" id="verification-code-modal" tabindex="-1" role="dialog"
              aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div class="modal-content verifi-modal-dialog position-relative">
                  <div class="modal-header border-0 px-0">
                    <h5 class="modal-title verifi-title">Enter Verification Code...…..</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <img src="user-assets/images/veri-close-icon.svg" />
                    </button>
                  </div>

                  <div class="modal-body p-0">
                    <div class="row">
                      <div class="col-12 col-lg-6">
                        <div class="verifi-content">
                          <p>We have just sent a verification code to User 6427715 , and their mail also</p>
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
                          <button type="button" class="blue-btn mt-4">Verify</button>

                        </div>
                      </div>
                      <div class="col-12 col-lg-6">
                        <div class="verifi-img">
                          <img src="user-assets/images/verifi-code-img.png" />
                        </div>
                      </div>
                    </div>

                  </div>
                  <div class="modal-footer border-0">
                      <button type="button" class="blue-btn-modal">
                        Yes
                      </button>

                      <button
                        type="button"
                        class="grey-btn-modal"
                        data-dismiss="modal"
                      >
                        No
                      </button>
                    </div> -
                </div>
              </div>
            </div>

            ---------------------------- end  modal  ----------------------------------
          </div>
        </div>
      </div>------ -->
      </div>
      <div class="overlay toggle-icon-main"></div>
    </main>
  </div>
</template>
<script>
  import $ from "jquery";
  import "datatables.net-bs4";
  import jQuery from 'jquery'
  import axios from "axios";
  import Swal from "sweetalert2";
  import {
    serveApiUserHost
  } from "../../../user_config";
  import moment from 'moment';
  import VueApexCharts from 'vue3-apexcharts';
  import Navbar from "../../components/user/Navbar.vue";
  import {
    GETPROFILEINFO,
    GETDASHBOARDDETAILS,
    GETWORKINGBALANCE,
    WITHDRAWINCOME,
    PURCHASEPACKAGE
  } from '@/store/actions.type'
  //SENDOTP
  export default {
    name: "app",
    components: {
      Navbar,
      apexchart: VueApexCharts
    },

    data() {
      return {
        series: [

          {
            name: '',
            color: '',
            // data: ['direct_income','binary_income', 'roi_income','compounding','reward_income','team_associative_reward_income']
            data: ['direct_income', 'binary_income', 'roi_income']

          }
        ],

        amount: "",
        // franchise_income_balance:0,
        // compunding_income_balance:0,
        // reward_income_balance:0,
        roi_income_balance: 0,
        // team_associative_income_balance:0,
        direct_income_balance: 0,
        binary_income_balance: 0,
        // residual_income_balance:0,

        chartOptions: {
          chart: {
            toolbar: {
              show: false
            },
            height: 350,
            type: 'line',
            zoom: {
              enabled: false
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'straight'
          },
          title: {
            text: 'Incomes',
            align: 'left'
          },
          grid: {
            row: {
              colors: ['#fff', '#fff', '#fff', '#fff', '#f3f3f3',
                'transparent'
              ], // takes an array which will be repeated on columns
              opacity: 0.5
            },
          },
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          }
        },
        dashboard: {
          fullname: '',
          totle_investment: '',
          compounding_Wallet_balance: 0,
          franchise_income: 0,
          compounding_wallet: 0,
          reward_income: 0,
          total_reward_income: 0,
          roi_income: 0,
          direct_income: 0,
          binary_income: 0,
          active_investment: 0,
          total_withdraw: 0,
          roi_income_balance: 0,
          link: ""
        },
        fund_wallet_balance: {
          fund_wallet: 0,
        },
        arrayForSelectedCheckbox: [],
        working_wallet: 0,
        amountErr: "",
        curErr: '',
        set_working_wallet: '',
        Currency_type: '',
        currency_code: [],
        typeChange: "",
        fund: {
          currency: "",
          amount: "",
          errCurrency: "",
          errAmount: ""
        },
        hiddenUserId: '',
        user_id: '',
        userExistsMessage: '',
        custom_msg_class: '',
        otp: "",
        deduction: "5%",
        withdrawBtn: true,
        profile: {}
      }
    },

    // components: {
    //       apexchart: VueApexCharts,
    //    },

    computed: {
      isComplete() {
        return this.amount;
      },
    },
    mounted() {



      /*const ctx = document.getElementById("myChart").getContext("2d");
      const myChart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "July",
            "Aug",
            "Sep",
            "Oct",
          ],
          datasets: [
            {
              label: "# of Votes",
              data: [1, 12, 19, 3, 5, 2, 3, 13, 9, 12, 10, 11],
              backgroundColor: [
                "#005CDA",
                "#005CDA",
                "#005CDA",
                "#005CDA",
                "#005CDA",
                "#005CDA",
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
      myChart;*/


      // location.reload();
      this.readProfile();
      this.getDashboardData();

      this.getUserDashboard();
      this.getAllCurrency();
      this.getWorkingWithdrawal()
      this.getConfirmedDeposite();
      this.getGraphDetails();
      //this.addfund();
      //this.fa();
    },
    methods: {
      getreferrallink() {
        $('.bottom-content-btn').toggleClass('active');
      },
      onclickBanner() {
        $('.banner-popup').toggleClass('active');
        $('.ppt-popup').removeClass('pptactive');
      },
      onclickPPT() {
        $('.ppt-popup').toggleClass('pptactive');
        $('.banner-popup').removeClass('active');

      },

      purchasePackagecoin(currency_code = "", amount = 0) {
        // alert(123);
        // console.log(product_id);
        //alert(this.currency_code);return false;
        currency_code = this.typeChange;
        // alert(product_id);

        //   $(".loadrr").modal();

        //   $(".overlay").show();
        //   $(".loader").show();
        if (currency_code == "PM") {
          // $("#login").modal();

          //this.doPayment(hash_unit);
          this.amount = amount;
          this.createPMTransaction(amount);

          /* axios.post('sendWAMessage', {
                   INR: this.INR,
                   amount: hash_unit,
                })
                this.fundamount = hash_unit;
                this.fundAmountDisplay = hash_unit * this.INR;
                this.product_id = product_id;
                $("#INR-payment").modal("show");*/
        } else {
          var data = {
            currency_code: this.typeChange,
            hash_unit: this.amount,
          };

          this.$store
            .dispatch(PURCHASEPACKAGE, data)
            .then((response) => {
              if (response.code === 200) {
                this.getpackagedetails = response.data;
                this.qrcodevalue = this.getpackagedetails.address;
                // var txn = resp.data.data.txn_details;
                //   $("#loader").modal().hide();
                //   $("#loader").modal("hide");
                if (this.getpackagedetails.payment_by == "node_api") {
                  this.$router.push({
                    name: "payment-invoice-status",
                    params: {
                      invoice_id: this.getpackagedetails.invoice_id,
                      type: "add-fund",
                    },
                  });
                } else if (this.getpackagedetails.payment_by == "coinpayment") {
                  location.replace(this.getpackagedetails.status_url);
                }

                /*location.replace(this.getpackagedetails.status_url);
                          if (this.getpackagedetails.exists == 0) {
                          location.replace(this.getpackagedetails.status_url);
                          }else{
                          this.$toaster.success("Already requested for same amount");              
                       }*/
                //$('#demo-default-modal').modal();
              } else {
                this.$toast.error(response.message);
              }
            })
            .catch((error) => {
              this.$toast.error(error);
              this.message = "";
            });
        }
      },
      getGraphDetails() {

        axios
          .get("/graphReportForIncomes")
          .then((resp) => {
            if (resp.data.code === 200) {
              try {
                var graphData = resp.data.data;
                var ArrayForDirect = [];
                var ArrayForBinary = [];
                var ArrayForRoi = [];
                //var ArrayForFranchise = [];
                // var ArrayForCompunding = [];
                // var ArrayForReward = [];
                // var ArrayForTeamAssociative = [];
                // var ArrayForResidual = [];
                // var ArrayForNames = [];

                for (var m = 0; m < graphData.length; m++) {

                  // var item = {};
                  // item["data"] = "" + graphData[m]["date"] + "";
                  // item["a"] = graphData[m]["binary"];
                  // item["b"] = graphData[m]["direct"];
                  // ArrayForNames.push(graphData[m]["date"]+ " GMT");
                  ArrayForDirect.push(graphData[m]["direct"]);
                  ArrayForBinary.push(graphData[m]["binary"]);
                  ArrayForRoi.push(graphData[m]["roi"]);
                  //  ArrayForFranchise.push(graphData[m]["franchise"]);
                  // // ArrayForCompunding.push(graphData[m]["compounding"]);
                  // ArrayForReward.push(graphData[m]["reward"]);
                  // ArrayForTeamAssociative.push(graphData[m]["team_reward"]);
                  // ArrayForResidual.push(graphData[m]["residual"]);

                }
                ArrayForDirect.reverse();
                ArrayForBinary.reverse();
                ArrayForRoi.reverse();
                //  ArrayForFranchise.reverse();
                //  ArrayForCompunding.reverse();
                //  ArrayForReward.reverse();
                //  ArrayForTeamAssociative.reverse();
                // ArrayForResidual.reverse();

                for (var i = ArrayForDirect.length; i < 12; i++) {
                  ArrayForDirect.push(0);
                }
                for (i = ArrayForBinary.length; i < 12; i++) {
                  ArrayForBinary.push(0);
                }
                for (i = ArrayForRoi.length; i < 12; i++) {
                  ArrayForRoi.push(0);
                }
                /*  for(i=ArrayForCompunding.length;i<12;i++)
                  {
                    ArrayForCompunding.push(0);
                  }
                   for(i=ArrayForReward.length;i<12;i++)
                  {
                    ArrayForReward.push(0);
                  }
                   for(i=ArrayForTeamAssociative.length;i<12;i++)
                  {
                    ArrayForTeamAssociative.push(0);
                  }
                  for(i=ArrayForFranchise.length;i<12;i++)
                  {
                    ArrayForFranchise.push(0);
                  }*/

                // for(i=ArrayForResidual.length;i<12;i++)
                // {
                //   ArrayForResidual.push(0);
                // }
                console.log(ArrayForDirect);
                var item = {};
                item['name'] = "Direct Income";
                item['data'] = ArrayForDirect;
                this.series.push(item);

                var item2 = {};
                item2['name'] = "Binary Income";
                item2['data'] = ArrayForBinary;
                this.series.push(item2);


                var item3 = {};
                item3['name'] = "ROI Income";
                item3['data'] = ArrayForRoi;
                this.series.push(item3);

                /* var item4 = {};
                  item4['name'] = "Compounding Income";
                  item4['data'] = ArrayForCompunding;
                  this.series.push(item4);
  
                  var item5 = {};
                  item5['name'] = "Reward Income";
                  item5['data'] = ArrayForReward;
                  this.series.push(item5);
  
                  var item6 = {};
                  item6['name'] = "Team Reward Income";
                  item6['data'] = ArrayForTeamAssociative;
                  this.series.push(item6);
  
                  var item7 = {};
                  item7['name'] = "Franchise Income";
                  item7['data'] = ArrayForFranchise;
                  this.series.push(item7);*/


                // var item4 = {};
                // item3['name'] = "Residual Income";
                // item3['data'] = ArrayForResidual;
                // this.series.push(item4);
                // console.log(this.series);
                // this.chart1();

              } catch (err) {
                // alert(err.message);
              }

            }
          })
          .catch({});
      },

      getRoi() {
        let i = 0;
        let that = this;
        let token = localStorage.getItem("user-token");
        //var lang = "Chinese";
        setTimeout(function () {
          that.table = $("#withdrawals-income-report").DataTable({
            lengthMenu: [
              [5, 5, 50],
              [5, 5, 50],
            ],
            retrieve: true,
            destroy: true,
            processing: false,
            serverSide: true,
            responsive: true,
            stateSave: false,
            ordering: false,
            scrollY: 250,
            deferRender: true,
            scroller: true,
            dom: 'rt',
            /* "language": {
                              "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/"+ lang +".json"
                          },*/
            ajax: {
              url: serveApiUserHost + "withdrwal-income",
              type: "POST",
              data: function (d) {
                i = 0;
                i = d.start + 1;

                let params = {
                  deposit_id: $("#deposit-id").val(),
                  frm_date: $("#from-date").val(),
                  to_date: $("#to-date").val(),
                };
                Object.assign(d, params);
                return d;
              },
              headers: {
                Authorization: "Bearer " + token,
              },
              dataSrc: function (json) {
                if (json.code === 200) {
                  that.arrGetHelp = json.data.records;
                  json["draw"] = json.data.draw;
                  json["recordsFiltered"] = json.data.recordsFiltered;
                  json["recordsTotal"] = json.data.recordsTotal;
                  return json.data.records;
                } else {
                  json["draw"] = 0;
                  json["recordsFiltered"] = 0;
                  json["recordsTotal"] = 0;
                  return json;
                }
              },
            },

            columns: [{
                "defaultContent": "",
                render: function () {
                  return i++;
                },
              },
              {
                "defaultContent": "",
                render: function (data, type, row) {
                  if (
                    row.entry_time === null ||
                    row.entry_time === undefined ||
                    row.entry_time === ""
                  ) {
                    return `-`;
                  } else {
                    return moment(String(row.entry_time)).format("YYYY/MM/DD");
                  }
                },
              },

              {
                "defaultContent": "",
                render: function (data, type, row) {
                  return `<span>$${row.amount + row.deduction}</span>`;
                },
              },
              {
                "defaultContent": "",
                render: function (data, type, row) {
                  return `<span>$${row.deduction}</span>`;
                },
              },
              {
                "defaultContent": "",
                render: function (data, type, row) {
                  return `<span>$${row.amount}</span>`;
                },
              },
              {
                "defaultContent": "",
                render: function (data, type, row) {
                  return `<a href="https://www.blockchain.com/btc/address/${row.to_address}">${row.to_address}</a>`;
                },
              },


              {
                "defaultContent": "",
                render: function (data, type, row) {
                  return `<span>${row.network_type}</span>`;
                },
              },
              /*{
                "defaultContent": "",
                render: function (data, type, row) {
                  if (row.network_type == "BTC") {
                    return `Bitcoin(BTC)`;
                  } else if (row.network_type == "TRX") {
                    return `TRON`;
                  } else if (row.network_type === "ETH") {
                    return `Ethereum(ETH)`;
                  } else if (row.network_type === "USDT.TRC20") {
                    return `Tether USD(USDT.TRC20)`;
                  } else if (row.network_type === "BSC") {
                    return `BNB Coin(BSC)`;
                  } else if (row.network_type === "BCH") {
                    return `BCH`;
                  } else if (row.network_type === "LTC") {
                    return `Litecoin(LTC)`;
                  } else if (row.network_type === "DOGE") {
                    return `Dogecoin(DOGE)`;
                  } else if (row.network_type === "PM") {
                    return `Perfect Money(PM)`;
                  } else if (row.network_type === "SHIB") {
                    return `SHIBA(SHIB)`;
                  } else {
                    return ``;
                  }
                },
              },*/
              {
                "defaultContent": "",
                render: function (data, type, row) {
                  if (row.withdraw_type == 2) {
                    return `Working`;
                  } else if (row.withdraw_type == 3) {
                    return `ROI`;
                  } else if (row.withdraw_type === 6) {
                    return `Transfer`;
                  } else {
                    return ``;
                  }
                },
              },
              {
                "defaultContent": "",
                render: function (data, type, row) {
                  if (row.status == 0) {
                    return `<span class="label text-warning">Pending</span>`;
                  } else if (row.status == 1) {
                    return `<span class="label text-success">Confirmed</span>`;
                  } else if (row.status == 2) {
                    return `<span class="label text-danger">Rejected</span>`;
                  } else {
                    return ``;
                  }
                },
              },
              /*{ data: 'on_amount' },*/

              /*{ "defaultContent": "",
                data: "remark" },*/
            ],
          });


        }, 0);
        $("#onSearchClick").click(function () {
          var startDate = $("#from-date").val();
          var endDate = $("#to-date").val();
          if (endDate < startDate) {
            that.$toast.error("To date should be greater than from date");
            return false;
            // alert("To date should not less than from date ");
          }
          that.table.ajax.reload();
        });
        $("#onResetClick").click(function () {
          $("#searchForm").trigger("reset");
          that.table.ajax.reload();
        });

        //  $("#onSearchClick").click(function() {

        //           var startDate = $("#from").val();
        //           var endDate = $("#to").val();
        //           if (endDate < startDate) {
        //               //alert("To date should not less than from date ");
        //               that.$toaster.error("To date should be greater than from date");
        //               return false;
        //           }
        //           that.table.ajax.reload();
        //           });

      },

      disableFutureDate() {
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth() + 1; //January is 0!
        let yyyy = today.getFullYear();
        if (dd < 10) {
          dd = '0' + dd
        }
        if (mm < 10) {
          mm = '0' + mm
        }
        today = yyyy + '-' + mm + '-' + dd;
        document.getElementById("to-date").setAttribute("max", today);
        document.getElementById("from-date").setAttribute("max", today);

      },
      readProfile() {
        this.$store
          .dispatch(GETPROFILEINFO, {})
          .then(response => {
            this.profile = response.data;
          })
          .catch(error => {
            this.$toast.error(error);
          })
      },

      AmountValidation(e) {
        const amount = e.target.value;

        if (amount == "") {
          this.amountErr = "amount should not be blank.";
        } else if (amount < 50) {
          this.amountErr = "The amount must be 50 or more.";
        } else {
          this.amountErr = "";
        }
      },


      getConfirmedDeposite() {
        let i = 0;
        let that = this;
        let token = localStorage.getItem("user-token");
        setTimeout(function () {
          that.table = $("#topup-report").DataTable({
            lengthMenu: [
              [5, 5, 50],
              [5, 5, 50],
            ],
            retrieve: true,
            destroy: true,
            processing: false,
            serverSide: true,
            responsive: true,
            stateSave: false,
            ordering: false,
            scrollY: 250,
            deferRender: true,
            scroller: true,
            dom: 'rt',



            // buttons: [
            //     // 'copyHtml5',
            //     'excelHtml5',
            //    // 'csvHtml5',
            //    // 'pdfHtml5',
            //  //   'pageLength',
            // ],
            ajax: {
              url: serveApiUserHost + "downline-topup-report",
              type: "POST",
              data: function (d) {
                i = 0;
                i = d.start + 1;

                let params = {
                  user_id: $("#user-id").val(),
                  deposit_id: $("#deposit-id").val(),
                  frm_date: $("#from-date").val(),
                  to_date: $("#to-date").val(),
                };
                Object.assign(d, params);
                return d;
              },
              headers: {
                Authorization: "Bearer " + token,
              },
              dataSrc: function (json) {
                if (json.code === 200) {
                  that.arrGetHelp = json.data.records;
                  // json['draw'] = json.data.draw;
                  json["recordsFiltered"] = json.data.recordsFiltered;
                  json["recordsTotal"] = json.data.recordsTotal;
                  return json.data.records;
                } else {
                  // json['draw'] = 0;
                  json["recordsFiltered"] = 0;
                  json["recordsTotal"] = 0;
                  return json;
                }
              },
            },
            columns: [{

                render: function () {
                  return i++;
                },
              },



              {

                render: function (data, type, row) {
                  if (
                    row.entry_time === null ||
                    row.entry_time === undefined ||
                    row.entry_time === ""
                  ) {
                    return `-`;
                  } else {
                    return moment(String(row.entry_time)).format("YYYY-MM-DD");
                  }
                },
              },

              {

                data: "user_id",
              },

              {

                render: function (data, type, row) {
                  return `<span>$${row.amount}</span>  `;
                },
              },

              {
                data: "package_name",
              }


              /* {
               
                render: function (data, type, row) {
                  if (
                    row.compound_lock_status == 0
                  ) {
                    // return `<button type="redio" id="Updatelokingstatuscheckbox" class="btn btn-primary" data-pin="${row.pin}">Lock Now</button>`;
                     return `<input class="form-check-input" type="checkbox" data-pin="${row.pin}" name="${row.pin}">
                              <label class="text-white form-check-label"><b>
                                Lock Now</b>
                              </label>`;
                  } else if (
                    row.compound_lock_status == 1
                  ) {
                    return '<b class="btn btn-sm btn-danger text-black-50">Locked</b>';
                  } else{
                    return '<b>--</b>'
                  }
                },
              },*/

            ],
          });

          $("#downline-topup-report tbody").on(
            "click",
            ".form-check-input",
            function () {
              if ($(this).is(":checked")) {
                that.arrayForSelectedCheckbox.push($(this).data("pin"));
              } else if (!$(this).is(":checked")) {
                // $('.form-check-input').prop('checked', false);
                that.arrayForSelectedCheckbox.splice(
                  that.arrayForSelectedCheckbox.indexOf($(this).data("pin")),
                  1
                );
              }
            }
          );
        }, 0);
      },


      onViewClicks() {
        let that = this;
        if (that.arrayForSelectedCheckbox == "") {
          this.$toast.error("Checkbox is empty");
        } else {
          new Swal({
            title: "Are you sure?",
            text: `You want to Locked`,
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
          }).then(result => {
            if (result.value) {
              axios.post("Updatelokingstatuscheckbox", {
                  pin: that.arrayForSelectedCheckbox,
                })
                .then(response => {
                  if (response.data.code == 200) {
                    this.$toast.success(response.data.message);
                    that.table.ajax.reload();
                    location.reload();
                  } else {
                    this.$toast.error(response.data.message);
                  }
                }).catch(error => {
                  this.$toast.error(error);
                })
            }
          });
        }
      },

      //   getLevelIncome(){
      //   $('table').dataTable();
      // },

      getUserDashboard() {
        axios.get("get-topup-balance", {})
          .then(response => {
            this.fund_wallet_balance = response.data.data;
          })
          .catch(error => {
            this.message = error.response.data.message;
            this.flash(this.message, 'error', {
              timeout: 500000,
            });
          });
      },

      getDashboardData() {
        this.$store
          .dispatch(GETDASHBOARDDETAILS)
          .then(response => {
            if (response.code === 200) {
              this.dashboard = response.data;
              //console.log(this.dashboard);
            } else {
              this.$toast.error(response.message)
            }
          }).catch(error => {
            this.message = error.response.data.message;
            this.flash(this.message, 'error', {
              timeout: 500000,
            });
          });
      },
      copy() {
        this.$toast.success('Copied!');
        this.$refs.clone.focus();
        document.execCommand('copy');
      },
      copy1() {
        this.$toast.success('Copied!');
        this.$refs.clone1.focus();
        document.execCommand('copy');
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
      getAllCurrency() {
        axios
          .post("getall-currency", {})
          .then((response) => {
            this.currency_code = response.data.data;
            // this.Currency_type = "TRX";
          })
          .catch();
      },
      only_number($event) {
        let keyCode = ($event.keyCode ? $event.keyCode : $event.which);
        if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) { // 46 is dot
          $event.preventDefault();
        }
      },
      /* sendOTP() {
            this.withdrawBtn = true;
                  var arr = {};
                  if (this.mode == "withdraw") {
                    if(this.Currency_type == "")
                    {
                    
                    return this.curErr ="Please select Currency";
                                     }
                    
                    arr = { type: "Withdrawal" };
                  } else {
                    arr = { type: "transfer" };
                  }
  
                 if(this.Currency_type == "")
                   {
                      this.curErr ="Please select Currency";
  
                   }else if(this.set_working_wallet == "" || this.set_working_wallet < 20 )
                   {  
                    this.curErr ='';
                      this.amountErr = "The amount must be 20 or more";
                   }
  
                   else{
                    this.curErr ='';
                     this.amountErr ='';
                    new Swal
              ({
                      title: 'Are you sure?',
                      text: `You want to withdraw!`,
                      type: 'warning',
                      showCancelButton: true,
                      confirmButtonColor: '#3085d6',
                      cancelButtonColor: '#d33',
                      confirmButtonText: 'Yes'
              }).then((result) => 
              {
                if (result.value)
                {
  
                      this.withdrawBtn = false;
                    this.$store
                    .dispatch(SENDOTP, arr) 
                  .then((response) => {
                    if (response.code == 200) {
                      //console.log(response);
                      this.$toast.success(response.message);
                      jQuery("#enterOTP").show();
                      //this.statedata=response.data.data.message;
                      this.otp = "";
  
                    } else {
                      this.$toast.error(response.message);
                    }
                  })
                  .catch((error) => {
                   this.$toast.error(error);
  
                  }); 
                  }else{
                     location.reload();
                  }
              });              
                }
                 
      },*/

      verifyOtp() {
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
          otp: this.otp,
        }

        this.$store
          .dispatch(WITHDRAWINCOME, data)

          .then((response) => {
            this.withdrawBtn = false;
            if (response.code == 200) {
              jQuery('#enterOTP').hide();
              this.$toast.success(response.message);
              location.reload();
            } else {
              this.$toast.error(response.message);
              this.otp = "";
            }
          });
      },
      closePopup() {
        jQuery('#enterOTP').hide();
        location.reload();
      },
      addfund() {
        const self = this;
        var data = {
          currency_code: this.fund.currency,
          hash_unit: this.fund.amount,
        }
        if (data.currency_code == '') {
          self.fund.errCurrency = "Please select currency";
          setTimeout(function () {
            self.fund.errCurrency = "";
          }, 5000);
        }
        if (data.hash_unit == '') {
          self.fund.errAmount = "Please enter amount";
          setTimeout(function () {
            self.fund.errAmount = "";
          }, 5000);
        } else if (isNaN(data.hash_unit)) {
          self.fund.errAmount = "Please enter only digits";
          setTimeout(function () {
            self.fund.errAmount = "";
          }, 5000);
        }
        if (data.currency_code != '' && data.hash_unit != '' && !isNaN(data.hash_unit)) {
          this.$store
            .dispatch(PURCHASEPACKAGE, data)
            .then(response => {
              // console.log(response);
              if (response.code === 200) {
                self.fund.currency = "";
                self.fund.amount = "";
                self.$toast.success(response.message)

                this.getpackagedetails = response.data;
                this.qrcodevalue = this.getpackagedetails.address;
                if (this.getpackagedetails.payment_by == "node_api") {
                  this.$router.push({
                    name: 'payment-invoice-status',
                    params: {
                      invoice_id: this.getpackagedetails.invoice_id,
                      type: 'add-fund'
                    }
                  });
                } else if (this.getpackagedetails.payment_by == "coinpayment") {
                  location.replace(this.getpackagedetails.status_url);
                }
              } else {
                self.$toast.error(response.message)
              }
            }).catch(error => {
              self.message = error.response.data.message;
              self.flash(self.message, 'error', {
                timeout: 500000,
              });
            });
        }
        //purchase-package
      },
    },
  };
</script>