<template>
  <Navbar />
  <main class="content-wrapper-section">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="comn-title">
            <h2 class="f-size-22"> Downline Topup Report</h2>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <div class="deposite-datatable position-relative">
            <div class="table-responsive  mt-3">
              <div id="structure-balance-receive_wrapper" class="dataTables_wrapper dt-bootstrap4 no-footer">

                <form action="#" id="searchForm">
                  <div class="row align-items-center">
                    <div class="col-12 col-lg-12">
                      <div class="date-picker-filter-topup">
                        <div class="form-group mr-3">
                          <label class="date-picker-label mb-0">From Date</label>
                          <input type="date" class="form-control date-picker-input" name="from-date"
                            :format="dateFormat" placeholder="From Date" id="from-date">
                        </div>
                        <div class="form-group mr-3">
                          <label class="date-picker-label mb-0">To Date</label>
                          <input type="date" class="form-control date-picker-input" name="to_date" :format="dateFormat"
                            placeholder="To Date" id="to-date">
                        </div>
                        <div class="form-group mr-3">
                          <label class="date-picker-label mb-0">User Id</label>
                          <div class="input-group date-picker-input-topup align-items-center">

                            <input type="text" class="form-control repot-search-input" placeholder="Enter User Id"
                              name="user-id" id="user-id">

                          </div>
                        </div>
                        <div class="form-group mr-3">
                          <label class="date-picker-label mb-0">Deposit Id</label>
                          <div class="input-group date-picker-input-topup align-items-center">
                            <input type="text" class="form-control repot-search-input" placeholder="Deposit Id"
                              name="deposit-id" id="deposit-id">

                          </div>
                        </div>

                      </div>
                      <div class="d-flex">
                        <div class="ml-3">
                          <button type="button" name="signup1" id="onSearchClick"
                            class="filter-search-btn">Search</button>
                        </div>
                        <div class="ml-3">
                          <button type="button" id="onResetClick" class="filter-search-btn">Reset</button>
                        </div>
                      </div>
                    </div>
                    <!-- <div class="col-12 col-lg-4 mt-3 mt-md-0">

                                        <div class="dataTables_length text-left text-md-right"
                                            id="structure-balance-receive_length">
                                            <label>
                                                Show
                                                <select name="structure-balance-receive_length"
                                                    aria-controls="structure-balance-receive"
                                                    class="custom-select custom-select-sm form-control form-control-sm show-entries">
                                                    <option value="10">10</option>
                                                    <option value="50">50</option>
                                                    <option value="100">100</option>
                                                </select>
                                                Entries
                                            </label>
                                        </div>
                                    </div> -->
                  </div>
                </form>


                <div class="row">
                  <div class="col-sm-12">
                    <table id="topup-report" v-once class="main-datatable table   display dataTable no-footer"
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
                              <p>User Id</p>
                            </div>
                          </th>
                          <th>
                            <div class="bg-table">
                              <p>Deposit Id</p>
                            </div>
                          </th>
                          <th>
                            <div class="bg-table">
                              <p>Amount</p>
                            </div>
                          </th>
                          <th>
                            <div class="bg-table">
                              <p>Topup From</p>
                            </div>
                          </th>

                        </tr>
                      </thead>
                      <tbody class="table-body">
                        <!--<tr>
                                                    <td>01</td>
                                                    <td>27/01/2022</td>
                                                    <td>VA17222578DF</td>
                                                    <td>$457.8</td>
                                                    <td>48,Hinjevadi Pune</td>
                                                    <td>Action</td>
                                                </tr>
                                                <tr>
                                                    <td>02</td>
                                                    <td>27/01/2022</td>
                                                    <td>VA17222578DF</td>
                                                    <td>$457.8</td>
                                                    <td>48,Hinjevadi Pune</td>
                                                    <td>Action</td>
                                                </tr>
                                                <tr class="active">
                                                    <td>03</td>
                                                    <td>27/01/2022</td>
                                                    <td>VA17222578DF</td>
                                                    <td>$457.8</td>
                                                    <td>48,Hinjevadi Pune</td>
                                                    <td>Action</td>
                                                </tr>
                                                <tr>
                                                    <td>04</td>
                                                    <td>27/01/2022</td>
                                                    <td>VA17222578DF</td>
                                                    <td>$457.8</td>
                                                    <td>48,Hinjevadi Pune</td>
                                                    <td>Action</td>
                                                </tr>
                                                <tr>
                                                    <td>05</td>
                                                    <td>27/01/2022</td>
                                                    <td>VA17222578DF</td>
                                                    <td>$457.8</td>
                                                    <td>48,Hinjevadi Pune</td>
                                                    <td>Action</td>
                                                </tr>-->
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>

            </div>

            <!--<div class="table-footer justify-content-end">

                            <div class="pagination mt-3">
                                <div class="left-arrow">
                                    <i class="fa fa-angle-left" aria-hidden="true"></i>
                                </div>
                                <div class="right-arrow ml-3">
                                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>-->

          </div>
        </div>
      </div>
    </div>
    <div class="overlay toggle-icon-main"></div>

  </main>
</template>
<script>
  import moment from "moment";
  import $ from "jquery";
  import Navbar from '../../components/user/Navbar.vue';
  import Swal from "sweetalert2";
  import axios from "axios";

  import {
    serveApiUserHost
  } from "../../../user_config";
  export default {
    components: {
      Navbar
    },
    data() {
      return {
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
        dateErr: '',
        //total_amount:0,
        INR: "",
        type: "",
      };
    },
    mounted() {
      this.getConfirmedDeposite();
      this.disableFutureDate();
      this.getUserDetails();
    },
    methods: {
      onclickFilterBtn() {
        $('.date-picker-toggle').toggleClass('active');
        $('.transactionid').removeClass('activepopup');

      },
      onTransaction() {
        $('.transactionid').toggleClass('activepopup');
        $('.date-picker-toggle').removeClass('active');
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
        document.getElementById("from-date").setAttribute("max", today);
        document.getElementById("to-date").setAttribute("max", today);

      },

      getConfirmedDeposite() {
        let i = 0;
        let that = this;
        let token = localStorage.getItem("user-token");
        setTimeout(function () {
          $.fn.dataTable.ext.errMode = 'none';
          that.table = $("#topup-report").DataTable({
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
                data: "user_id"
              },

              {
                data: "pin"
              },

              {
                render: function (data, type, row) {
                  return `<span>$${row.amount}</span>  `;
                },
              },


              {
                data: "topupfrom"
              },

              /*{
                
                 render: function (data, type, row) {
                   if (
                     row.compound_lock_status == 0
                   ) {
                     return `<button type="button" id="Updatelokingstatus" class="btn btn-success btn-sm" data-pin="${row.pin}">Lock Now</button>`;
                   } else if (
                     row.compound_lock_status == 1
                   ) {
                     return '<b class="btn btn-sm btn-danger">Locked</b>';
                   } else{
                     return '<b>--</b>'
                   }
                 },
               },*/

            ],
          });
          /* 
            $("#topup-report").on("click", "#Updatelokingstatus", function () {
                     that.onViewClicks($(this).data("pin"));
                   
               });*/

          // $("#onSearchClick").click(function () {
          //   that.table.ajax.reload();
          // });
          //  $("#onSearchClick").click(function () {
          //   var startDate = $("#from-date").val();
          //     var endDate = $("#to-date").val();

          //     if(endDate < startDate)
          //     {
          //         that.$toast.error("To date should be greater than from date");
          //         return false;
          //         // alert("To date should not less than from date ");
          //     }
          //     // that.table.ajax.reload();
          //       console.log(startDate,endDate);
          //   that.table.ajax.reload();
          // });

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
        }, 0);
      },

      onViewClicks(pin) {
        let that = this;
        new Swal({
          title: "Are you sure?",
          text: `You want to Locked`,
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes"
        }).then(result => {
          // alert(pin);
          if (result.value) {
            axios.post("Updatelokingstatus", {
                pin: pin,
              })
              .then(response => {
                if (response.data.code == 200) {
                  this.$toast.success(response.data.message);
                  that.table.ajax.reload();
                } else {
                  this.$toast.error(response.data.message);
                }
              }).catch(error => {
                this.$toast.error(error);
              })
          }
        });
      },
    },
  };

  $('body').on('click', function (e) {
    if ($(e.target).find('.date-picker-toggle.active').length != 0) {
      $('.date-picker-toggle').removeClass('active');
      $('.transactionid').removeClass('activepopup');
    }
  })
</script>