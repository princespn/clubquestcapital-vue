<template>
  <div>
    <Navbar />
    <main ref="art1" class="content-wrapper-section">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="comn-title">
              <h2 class="f-size-22">Deposit</h2>
            </div>
          </div>
        </div>

        <!-- Deposit -->
        <div class="row">
          <div class="col-12 col-md-6 col-xl-6 d-flex">
            <div class="blue-box card card-block">
              <h5>Add Fund</h5>
              <div class="wht-box-inner text-center">
                <!-- <img src="user-assets/images/deposit-profile.png" /> -->
                <a href="#">
                  <img v-if="profile.user_image" v-bind:src="profile.user_image">
                  <img v-else src="user-assets/images/profile-img.png">
                </a>
                <h4>{{ profile.user_id }}</h4>
                <p>{{ profile.fullname }}.</p>
                <div class="total-wallet-amount">
                  <div class="bottom-content-wallet">
                    <p>Total Wallet Amount</p>
                    <h5>$ {{ fund_wallet_balance.fund_wallet }}</h5>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div class="col-12 col-md-6 col-xl-6 d-flex">
            <div class="wht-box-inner card card-block">
              <form @submit.prevent="purchasePackagecoin(currency_code, amount)">
                <div class="form-group">
                  <label class="form-lable-deposit">Enter Amount</label>
                  <div class="input-profile-form-deposit d-flex px-2 py-1">
                    <!-- <input placeholder="$1000" class="select-with-input" /> -->
                    <input type="text" class="select-with-input" maxlength="8" v-on:keyup="AmountValidation($event)"
                      min="20" step="20" placeholder="Enter Amount" name="amount"
                      onkeypress="return event.charCode >= 48 && event.charCode <= 57" title="Numbers only"
                      v-model="amount" />

                    <!-- <select class="custom-select-deposit">
                      <option selected value="default">USD</option>
                      <option value="Paris">Paris</option>
                      <option value="Rome">Rome</option>
                      <option value="Madrid">Madrid</option>
                    </select> -->
                  </div>

                  <div v-if="amountErr !== ''" class="tooltip2">
                    <span class="text-danger"> {{ this.amountErr }}</span>
                  </div>
                </div>
                <div class="form-group">
                  <label class="form-lable-deposit">Preview Amount</label>
                  <div class="input-profile-form-deposit d-flex px-2 py-1">
                    <!-- <input placeholder="$1000" class="select-with-input" /> -->
                    <input v-model="amount" formcontrolname="touser-id" id="touser-id" name="touser-id"
                      placeholder="Preview Amount" type="text" class="select-with-input" disabled />


                  </div>
                </div>
                <div class="form-group">
                  <label class="form-lable-deposit"> Payment Mode</label>
                  <div class="d-flex justify-content-between">
                    <select v-model="typeChange" class="input-profile-form-deposit">
                      <option selected value="">Select Currency</option>
                      <option v-for="cur in currency_code" v-bind:key="cur.currency_code" :value="cur.currency_code">
                        {{ cur.currency_name }} (
                        {{ cur.currency_code }} )
                      </option>
                    </select>

                  </div>
                </div>

                <div class="logo-carasole">
                  <div class="
                    d-flex
                    align-items-center
                    justify-content-center
                    flex-wrap
                  ">
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
                    <!--<div class="bg-logo">
                    <img src="user-assets/images/Litecoin.png" />
                  </div>-->
                    <div class="bg-logo">
                      <img src="user-assets/images/Tether.png" />
                    </div>
                    <div class="bg-logo">
                      <img src="user-assets/images/Solana.png" />
                    </div>
                  </div>
                </div>

                <div class="text-center mt-4">
                  <!-- <Button class="blue-add-fund"> Add Fund</Button> -->
                  <button type="submit" class="blue-add-fund" :disabled="amountErr !== '' || !isComplete">
                    Add Fund
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="overlay toggle-icon-main"></div>
    </main>
  </div>
</template>

<script>
  import {
    FUNDREQUEST,
    PURCHASEPACKAGE,

    GETALLCURRENCY,
    GETTOPUPBALANCE,
    GETADDRESS,
  } from "@/store/actions.type";

  import moment from "moment";
  import $ from "jquery";
  import axios from "axios";

  import {
    serveApiUserHost
  } from "../../../user_config";
  import "datatables.net-bs4";
  export default {
    name: "app",
    components: {},
    data() {
      return {
        currency_img: "",
        Currency_type: "",
        amountErr: "",
        secondCount: 30,
        username: "",
        password: "",
        amt: "",
        status: 0,
        typeChange: "",
        btc: "",
        currency_code: '',
        amount: "",
        product_id: "",
        perfectmoney: {},
        userdata: {
          total_earnings: 0,
          roi_income: 0,
          leveincome: 0,
          direct_income: 0,
          totawithdraw: 0,
          total_withdraw_amount: 0,
          top_up_Wallet_balance: 0,
          direct_list: 0,
          fund_Wallet_balance: 0,
        },


        getpackagedetails: {
          price_in_usd: "",
          received_amount: "",
          price_in_currency: "",
          address: "",
          rem_amount: 0,
        },
        size: "",
        qrcodevalue: "",
        INR: "",
        selectedCurrency: "",
        countryCode: "",
        profile: {
          fullname: "",
          user_id: "",
          user_image: "",



        },

        fullname: "",
        disablebtn: false,
        isActiveBtn: false,
        balance: {},
        payment_mode: "Bank",
        trn_ref_no: "",
        holder_name: "",
        bank_name: "",
        deposit_date: "",
        fundamount: "",
        fundAmountDisplay: "",
        type: "",
        changemodal: 0,
        fund_wallet_balance: {
          fund_wallet: 0,
          purchase_wallet: 0,
          total_earnings: 0,
          roi_income: 0,
          binary_income: 0,
          direct_income: 0,
          residual_income: 0,
          usermsg: "",
          isValid: true,
        },
      };
    },

    computed: {
      isComplete() {
        return this.amount;
      },
    },
    mounted() {
      // this.getPackages();
      this.getAllCurrency();
      this.getUserDashboard();
      this.getConfirmedDeposite();
      this.getUserDetails();
      this.readProfile();

    },
    methods: {
      readProfile() {
        axios
          .post("get-profile-info", {})
          .then((response) => {
            this.profile = response.data.data;
            this.profile_show.Fullname = response.data.data.fullname;
            this.profile_show.Mobile = response.data.data.mobile;
            this.profile_show.User_id = response.data.data.user_id;
            this.profile_show.Email = response.data.data.email;
            this.btc_addresses = response.data.data.btc_address;
          })
          .catch();
      },
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

      minmax(getpackage, value, min, max) {
        /*   if(this.type == "INR")
        {
          min = min * this.INR;
          max = max * this.INR;
        }
  */
        if (parseInt(value) < min) {
          this.isActiveBtn = false;
          // this.amount[getpackage] = min;
          this.$toast.error("Amount must be minimum " + min);
          $("#makedeposite" + getpackage).attr("disabled", "disabled");
        } else if (parseInt(value) > max) {
          this.isActiveBtn = false;
          //this.amount[getpackage] = max;
          this.$toaster.error("Amount must be maximum " + max);
          $("#makedeposite" + getpackage).attr("disabled", "disabled");
        } else {
          //this.isActiveBtn = true;
          if (this.status == getpackage) {
            $("#makedeposite" + getpackage).removeAttr("disabled");
          }
        }
      },

      getUserDashboard() {
        this.$store
          .dispatch(GETTOPUPBALANCE, {})
          .then((response) => {
            this.fund_wallet_balance = response.data;
          })
          .catch();
      },

      // getPackages() {
      //   this.$store
      //     .dispatch(GETPACKAGES, {})
      //     .then((response) => {
      //       this.getpackages = response.data;

      //       this.INR = response.data[0]["convert"];
      //       this.type = response.data[0]["type"];
      //       this.countryCode = response.data[0]["countryCode"];
      //       for (let x in this.getpackages) {
      //         this.amount[this.getpackages[x].id] = "";
      //       }
      //     })
      //     .catch();
      // },
      getAllCurrency() {
        this.$store
          .dispatch(GETALLCURRENCY, {})
          .then((response) => {
            this.currency_code = response.data;
          })
          .catch();
      },

      radioButtonChecked(id, name, value, min, max) {
        this.selectedCurrency = name;
        this.status = id;

        $(".pay").attr("disabled", "disabled");
        if (parseInt(value) < min) {
          $("#makedeposite" + id).attr("disabled", "disabled");
        } else if (parseInt(value) > max) {
          $("#makedeposite" + id).attr("disabled", "disabled");
        } else {
          $("#makedeposite" + id).removeAttr("disabled");
        }
      },

      fundRequest() {
        this.disablebtn = true;
        let formData = new FormData();
        if (this.$refs.file.files[0] != "") {
          formData.append("file", this.$refs.file.files[0]);
        }
        formData.append("amount", this.fundamount);
        formData.append("INR", this.INR);
        formData.append("payment_mode", this.payment_mode);
        formData.append("trn_ref_no", this.trn_ref_no);
        formData.append("holder_name", this.holder_name);
        formData.append("bank_name", this.bank_name);
        formData.append("product_id", this.product_id);
        formData.append("deposit_date", this.deposit_date);

        if (this.typeChange == "") {
          this.$toast.error("Currency field required");
        } else if (this.amount == "") {
          this.$toast.error("Amount  field required");
        } else {
          this.$store
            .dispatch(FUNDREQUEST, formData)
            .then((response) => {
              if (response.code == 200) {
                $("#INR-payment").modal("toggle");
                this.$toast.success(response.message);

                this.disablebtn = false;
                this.$router.push({
                  name: "pending-add-deposit"
                });
              } else {
                this.$toast.error(response.message);
                this.disablebtn = false;
              }
            })
            .catch((error) => {
              this.disablebtn = false;
              this.$toast.error(error);
              this.message = "";
            });
        }
      },

      purchasePackage1(product_id, currency_code, hash_unit) {
        alert(product_id);
        $(".overlay").show();
        $(".loader").show();
        if (currency_code != "BTC") {
          $("#login").modal("show");

          //this.doPayment(hash_unit);
          this.amt = hash_unit;
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
            product_id: product_id,
            currency_code: currency_code,
            hash_unit: hash_unit,
          };

          this.$store
            .dispatch(GETADDRESS, data)
            .then((response) => {
              if (response.code === 200) {
                this.getpackagedetails = response.data;
                this.getpackagedetails.rem_amount =
                  this.getpackagedetails.price_in_currency;
                //this.qrcodevalue = this.getpackagedetails.address;
                this.qrcodevalue =
                  "bitcoin:" +
                  this.getpackagedetails.address +
                  "?amount=" +
                  this.getpackagedetails.rem_amount;

                this.getOneMinInterval();
                this.changemodal = 0;
                $("#demo-default-modal").modal();
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

      closeModal() {
        $(".loadrr").hide();
        $(".loader").hide();
        $("#loader").css("display", "none");
      },

      closeModal1() {
        $("#demo-default-modal").modal("hide");
      },
      showreport() {
        $("#demo-default-modal").modal("hide");
        this.$router.push({
          name: "add-fund-report"
        });
      },
      showreport1() {
        $("#demo-default-modal").modal("hide");
        this.$router.push({
          name: "add-fund-perfectmoney-report"
        });
      },
      getConfirmedDeposite() {
        let i = 0;
        let that = this;
        let token = localStorage.getItem("user-token");
        setTimeout(function () {
          that.table = $("#downline-topup-report").DataTable({
            lengthMenu: [
              [10, 50, 100],
              [10, 50, 100],
            ],
            retrieve: true,
            destroy: true,
            processing: false,
            serverSide: true,
            responsive: true,
            stateSave: false,
            ordering: false,
            dom: "lrtip",

            // buttons: [
            //     // 'copyHtml5',
            //     'excelHtml5',
            //    // 'csvHtml5',
            //    // 'pdfHtml5',
            //  //   'pageLength',
            // ],
            ajax: {
              url: serveApiUserHost + "pending-add-deposit",
              type: "POST",
              data: function (d) {
                i = 0;
                i = d.start + 1;

                let params = {
                  deposit_id: $("#deposit-id").val(),
                  status: $("#status").val(),
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
                    return moment(String(row.entry_time)).format("YYYY/MM/DD");
                  }
                },
              },
              {
                data: "invoice_id"
              },

              {
                render: function (data, type, row) {
                  return `<span>$${row.price_in_usd}</span>`;
                },
              },

              {
                data: "payment_mode"
              },
              {
                render: function (data, type, row) {
                  return (
                    "<span style='word-break: break-word;'>" +
                    row.address +
                    "</span>"
                  );
                },
              },
              {
                render: function (data, type, row) {
                  if (row.product_url == "node_api") {
                    return "<label id='showInvoice' class='btn btn-link text-primary'>Checkout</label>";
                  } else {
                    return "<a href='" + row.status_url + "'>Checkout</a>";
                  }
                },
              },
              {
                render: function (data, type, row) {
                  return (
                    "<span style='word-break: break-word;'>" +
                    row.in_status +
                    "</span>"
                  );
                },
              },
            ],
          });

          $("#onSearchClick").click(function () {
            that.table.ajax.reload();
          });
          $("#onResetClick").click(function () {
            $("#searchForm").trigger("reset");
            that.table.ajax.reload();
          });
        }, 0);
      },
    },
  };
</script>