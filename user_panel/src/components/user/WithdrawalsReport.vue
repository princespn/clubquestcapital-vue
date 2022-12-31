<template>
  <Navbar />
  <main class="content-wrapper-section">
      <div class="container-fluid">
          <div class="row">
              <div class="col-12">
                  <div class="comn-title">
                      <h2 class="f-size-22">Withdrawal Report</h2>
                  </div>
              </div>
          </div>

          <div class="row">
              <div class="col-12">
                  <div class="deposite-datatable position-relative">
                      <div class="table-responsive  mt-3">
                          <div id="structure-balance-receive_wrapper"
                              class="dataTables_wrapper dt-bootstrap4 no-footer">
                              <form action="#" id="searchForm">
                                  <div class="row align-items-center">
                                      <div class="col-12 col-lg-8">
                                          <div class="date-picker-filter-topup">
                                              <div class="form-group mr-3">
                                                  <label class="date-picker-label mb-0">From Date</label>
                                                  <input type="date" class="form-control date-picker-input" name="from-date" :format="dateFormat" placeholder="From Date" id="from-date">
                                              </div>
                                              <div class="form-group mr-3">
                                                  <label class="date-picker-label mb-0">To Date</label>
                                                  <input type="date" class="form-control date-picker-input" name="to_date" :format="dateFormat" placeholder="To Date" id="to-date">
                                              </div>
                                            
                                           
                                              <div class="ml-3">
                                                  <button type="button" name="signup1" id="onSearchClick"  class="filter-search-btn">Search</button>

                                              </div>
                                              <div class="ml-3">
                                                  <button type="button" id="onResetClick"   class="filter-search-btn">Reset</button>

                                              </div>

                                          </div>
                                      </div>
                                     
                                  </div>
                              </form>

                              <div class="row">
                                  <div class="col-sm-12">
                                      <table id="withdraw-income-report" v-once
                                          class="main-datatable table   display dataTable no-footer"
                                          style="width: 100%;" aria-describedby="structure-balance-receive_info">

                                          <thead class="table-header border-0">
                                              <tr>
                                                <th>
                                                      <div class="bg-table">
                                                          <p>Sr.No</p>
                                                      </div>
                                                  </th>
                                                  <th>
                                                      <div class="bg-table">
                                                          <p>Date</p>
                                                      </div>
                                                  </th>
                                                  <th>
                                                      <div class="bg-table">
                                                          <p>Amount</p>
                                                      </div>
                                                  </th>
                                                  <th>
                                                      <div class="bg-table">
                                                          <p>Deduction</p>
                                                      </div>
                                                  </th>
                                                  <th>
                                                      <div class="bg-table">
                                                          <p>Net Amount</p>
                                                      </div>
                                                  </th>
                                                  <th>
                                                      <div class="bg-table">
                                                          <p>Address</p>
                                                      </div>
                                                  </th>
                                                  <th>
                                                      <div class="bg-table">
                                                          <p> Currency Type</p>
                                                      </div>
                                                  </th>
                                                  <th>
                                                      <div class="bg-table">
                                                          <p>Withdrawal Type</p>
                                                      </div>
                                                  </th>
                                                  <th>
                                                      <div class="bg-table">
                                                          <p>Status</p>
                                                      </div>
                                                  </th>
                                                 
                                              </tr>
                                          </thead>
                                          <tbody class="table-body"></tbody>

                                      </table>
                                  </div>
                              </div>

                          </div>

                      </div>


                  </div>
              </div>
          </div>
      </div>
     

  </main>
</template>
<script>
  import moment from "moment";
  import $ from "jquery";
  import axios from "axios";
  import Navbar from '../../components/user/Navbar.vue';
  import { serveApiUserHost} from "../../../user_config";
      export default {
          components: { Navbar },
        data() {
          return {
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
            //total_amount:0,
            INR: "",
            type: "",
            deposit_id: null,
             from_date: null,
            to_date: null,
          };
        },
        mounted() {
          this.getConfirmedDeposite();
          this.disableFutureDate();
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
          disableFutureDate(){
            let today = new Date();
            let dd = today.getDate();
            let mm = today.getMonth()+1; //January is 0!
            let yyyy = today.getFullYear();
            if(dd<10){
                dd='0'+dd
            }
            if(mm<10){
                mm='0'+mm
            }
            today = yyyy+'-'+mm+'-'+dd;
            document.getElementById("from-date").setAttribute("max", today);
            document.getElementById("to-date").setAttribute("max", today);
      
        },
        getConfirmedDeposite() {
        let i = 0;
        let that = this;
        let token = localStorage.getItem("user-token");
        setTimeout(function () {
          that.table = $("#withdraw-income-report").DataTable({
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
              url: serveApiUserHost + "withdrwal-income",
              type: "POST",
              data: function (d) {
                i = 0;
                i = d.start + 1;
  
                let params = {
                 // user_id: $("#user-id").val(),
                 // deposit_id: $("#deposit-id").val(),
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
            columns: [
              {
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
                  return `<span class="text-black" href="https://www.blockchain.com/btc/address/${row.to_address}">${row.to_address}</span>`;
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
                render: function (data, type, row, meta) {
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
                    return `<span class="label text-black">Pending</span>`;
                  } else if (row.status == 1) {
                    return `<span class="label text-black">Confirmed</span>`;
                  } else if (row.status == 2) {
                    return `<span class="label text-black">Rejected</span>`;
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
  
          $("#onSearchClick").click(function () {
                var startDate = $("#from-date").val();
                var endDate = $("#to-date").val();
               if(endDate < startDate)
                {
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
        }, 0);
      },
      
        },
      };
      </script>


