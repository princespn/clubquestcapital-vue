<template>
  <div>
    <Navbar />
    <main class="content-wrapper-section">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="comn-title">
              <h2 class="f-size-22">Pending Fund</h2>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-12">
            <div class="deposite-datatable position-relative">
              <div class="table-responsive mt-3">
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
                            <input type="date" class="form-control date-picker-input" name="to_date"
                              :format="dateFormat" placeholder="To Date" id="to-date">
                          </div>
                          <div class="form-group mr-3">
                            <label class="date-picker-label mb-0">Deposit Id</label>
                            <div class="input-group date-picker-input-topup align-items-center">
                              <input type="text" class="form-control repot-search-input" placeholder="Deposit Id"
                                name="deposit-id" id="deposit-id">
                              <!-- <div class="input-group-append">
                                                        <button class="search-btn" type="button">
                                                            <img src="user-assets/images/search-icon.svg" />
                                                        </button>
                                                    </div> -->
                            </div>
                          </div>
                          <!--<div class="form-group mr-3">
                                                    <label class="date-picker-label mb-0">Select Status</label>
                                                    <div class="input-group date-picker-input-topup align-items-center">
                                                        <select id="status" class="form-control">
                                                            <option value>All</option>
                                                            <option value="1">Active</option>
                                                            <option value="2">Inactive</option>
                                                        </select>
                                                    </div>
                                                </div>-->
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
                      <table id="structure-balance-receive" v-once
                        class="main-datatable table   display dataTable no-footer" style="width: 100%;"
                        aria-describedby="structure-balance-receive_info">

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
                                <p>Payment Mode</p>
                              </div>
                            </th>
                            <th>
                              <div class="bg-table">
                                <p> Address</p>
                              </div>
                            </th>
                            <th>
                              <div class="bg-table">
                                <p> Action</p>
                              </div>
                            </th>
                            <th>
                              <div class="bg-table">
                                <p> Status</p>
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

              <!---<div class="table-footer justify-content-end">
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
  </div>
</template>


<script>
  import $ from "jquery";
  import Navbar from "./Navbar.vue";
  import {
    serveApiUserHost
  } from "../../../user_config";
  import moment from "moment";

  export default {
    name: "app",
    components: {
      Navbar
    },
    mounted() {
      this.getConfirmedDeposite();
      this.disableFutureDate();
    },
    methods: {
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
      getConfirmedDeposite() {
        let i = 0;
        let that = this;
        let token = localStorage.getItem("user-token");
        setTimeout(function () {
          that.table = $("#structure-balance-receive").DataTable({
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
                  let total_amount = 0;
                  for (let j = 0; j < json.data.records.length; j++) {
                    total_amount =
                      total_amount + parseInt(json.data.records[j].price_in_usd);
                    $("#total_amount").text("$" + total_amount);
                  }
                  that.arrGetHelp = json.data.records;
                  // json['draw'] = json.data.draw;
                  json["recordsFiltered"] = json.data.recordsFiltered;
                  json["recordsTotal"] = json.data.recordsTotal;
                  return json.data.records;
                } else if (json.code === 401) {
                  localStorage.removeItem("user-token");
                  localStorage.removeItem("check-in");
                  location.reload();
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
                render: function (data, type, row) {
                  return `<span>${row.invoice_id}</span>`;
                },
              },

              {
                render: function (data, type, row) {
                  return `<span>${row.price_in_usd}</span>`;
                },
              },
              {
                data: "payment_mode"
              },

              {
                render: function (data, type, row) {
                  return `<span>${row.address}</span>`;
                },
              },
              {
                defaultContent: "",
                render: function (data, type, row) {
                  if (row.product_url == "node_api") {
                    return "<label id='showInvoice' class='btn btn-link text-primary'>Checkout</label>";
                  } else {
                    return "<a href='" + row.status_url + "'>Checkout</a>";
                  }
                },
              },
              {
                defaultContent: "",
                render: function (data, type, row) {
                  return (
                    "<span style=''>" +
                    row.in_status +
                    "</span>"
                  );
                },
              },

              //    {
              //       render: function (data, type, row) {
              //         if (row.in_status == 0) {
              //           return `<span class="label text-warning">Pending</span>`;
              //         } else if (row.in_status == 1) {
              //           return `<span class="label text-success">Confirmed</span>`;
              //         } else if (row.in_status == 2) {
              //           return `<span class="label text-danger">Rejected</span>`;
              //         } else {
              //           return ``;
              //         }
              //       },
              //     },
            ],
          });

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

      onclickFilterBtn() {
        $(".date-picker-toggle").toggleClass("active");
        $(".transactionid").removeClass("activepopup");
      },
      onTransaction() {
        $(".transactionid").toggleClass("activepopup");
        $(".date-picker-toggle").removeClass("active");
      },
    },
  };
  $("body").on("click", function (e) {
    if ($(e.target).find(".date-picker-toggle.active").length != 0) {
      $(".date-picker-toggle").removeClass("active");
      $(".transactionid").removeClass("activepopup");
    }
  });
</script>