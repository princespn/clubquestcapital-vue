<template>
    <Navbar />
    <main class="content-wrapper-section">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="comn-title">
                        <h2 class="f-size-22">Team View</h2>
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
                                        <div class="col-12 col-lg-12">
                                            <div class="date-picker-filter-topup">
                                                <div class="form-group mr-3">
                                                    <label class="date-picker-label mb-0">From Date</label>
                                                    <input type="date" class="form-control date-picker-input" name="from-date" :format="dateFormat" placeholder="From Date" id="from-date">
                                                </div>
                                                <div class="form-group mr-3">
                                                    <label class="date-picker-label mb-0">To Date</label>
                                                    <input type="date" class="form-control date-picker-input" name="to_date" :format="dateFormat" placeholder="To Date" id="to-date" >
                                                </div>
                                                <div class="form-group mr-3">
                                                    <label class="date-picker-label mb-0">Select Team</label>
                                                    <div class="input-group date-picker-input-topup align-items-center">
                                                      <select id="position" class="form-select">
                                                        <option value>All</option>
                                                        <option value="1">Left Team</option>
                                                        <option value="2">Right Team</option>
                                                      </select>
                                                        <!-- <div class="input-group-append">
                                                        <button class="search-btn" type="button">
                                                            <img src="user-assets/images/search-icon.svg" />
                                                        </button>
                                                    </div> -->
                                                    </div>
                                                </div>
                                               <div class="form-group mr-3">
                                                    <label class="date-picker-label mb-0">Select Status</label>
                                                    <div class="input-group date-picker-input-topup align-items-center">
                                                         <select id="status" class="form-select">
                                                        <option value>All</option>
                                                        <option value="1">Active</option>
                                                        <option value="0">Inactive</option>
                                                      </select>
                                                    </div>
                                                </div>
                                                <div class="ml-3">
                                                    <button type="button" name="signup1"   value="Sign up"  id="onSearchClick"  class="filter-search-btn">Search</button>

                                                </div>
                                                <div class="ml-3">
                                                    <button type="button"  name="signup1" value="Sign up" id="onResetClick"  class="filter-search-btn">Reset</button>

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
                                        <table id="team-view" v-once
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
                                                            <p>Registration Date</p>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div class="bg-table">
                                                            <p>User Id</p>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div class="bg-table">
                                                            <p>Name</p>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div class="bg-table">
                                                            <p>Sponsor Id</p>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div class="bg-table">
                                                            <p>Placement Id</p>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div class="bg-table">
                                                            <p> Position</p>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div class="bg-table">
                                                            <p>Left BV</p>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div class="bg-table">
                                                            <p>Right BV</p>
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

                        <!-- <div class="table-footer justify-content-end">
                            <div class="pagination mt-3">
                                <div class="left-arrow">
                                    <i class="fa fa-angle-left" aria-hidden="true"></i>
                                </div>
                                <div class="right-arrow ml-3">
                                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div> -->

                    </div>
                </div>
            </div>
        </div>
        <div class="overlay toggle-icon-main"></div>

    </main>
</template>


<!-- <script>
import $ from "jquery";
import Navbar from '../../components/user/Navbar.vue';
export default {
    name: "app",
    components: { Navbar },
    methods: {
        onclickFilterBtn() {
            $('.date-picker-toggle').toggleClass('active');
            $('.transactionid').removeClass('activepopup');

        },
        onTransaction() {
            $('.transactionid').toggleClass('activepopup');
            $('.date-picker-toggle').removeClass('active');
        }

    }

};
$('body').on('click', function (e) {
    if ($(e.target).find('.date-picker-toggle.active').length != 0) {
        $('.date-picker-toggle').removeClass('active');
        $('.transactionid').removeClass('activepopup');
    }
})
</script> -->

<script>
import moment from "moment";
import $ from "jquery";
import Navbar from '../../components/user/Navbar.vue';
import axios from "axios";
import { serveApiUserHost,domainReferralLink } from "../../../user_config";
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
             // userdata:'',
              user_id: null,
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
              that.table = $("#team-view").DataTable({
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
                  url: serveApiUserHost + "team-view",
                  type: "POST",
                  data: function (d) {
                    i = 0;
                    i = d.start + 1;
      
                    let params = {
                      user_id: $("#user-id").val(),
                      frm_date: $("#from-date").val(),
                      to_date: $("#to-date").val(),
                      position: $("#position").val(),
                      status: $("#status").val()
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
                    } else if (json.code === 401 || json.code === 403) {
                      localStorage.removeItem("user-token"); 
                      window.location.href=domainReferralLink+'login';
                      // location.reload();
                    }else {
                      // json['draw'] = 0;
                      json["recordsFiltered"] = 0;
                      json["recordsTotal"] = 0;
                      return json;
                    }
                  },
                },
                columns: [
                  {
                   
                    render: function() {
                      return i++;
                    }
                  },
                  {
                    "defaultContent": "",
                    render: function(data, type, row) {
                      if (
                        row.joining_date === null ||
                        row.joining_date === undefined ||
                        row.joining_date === ""
                      ) {
                        return `-`;
                      } else {
                        return moment(String(row.joining_date)).format("YYYY/MM/DD");
                      }
                    }
                  },
                  { 
                    "defaultContent": "",
                    data: "user_id"
                   },
                  {"defaultContent": "",
                     data: "fullname" 
                  },
                  { "defaultContent": "",
                    data: "sponser_id" 
                  },
                  {"defaultContent": "",
                     data: "upline_id" 
                  },
                  {"defaultContent": "",
                   data: "position" 
                   },
                  /*{
                                          render: function (data, type, row) {
                                              if (row.type === 'Red') {
                                                return `<span style="color:Red">${row.type}</span>`;
                                              } else {
                                                   return `<span style="color:Green">${row.type}</span>`;
                                              }
                                          }
                                      },*/
                  {"defaultContent": "",
                     data: "left_bv" 
                  },
                  {"defaultContent": "",
                   data: "right_bv" 
                   },
                   {"defaultContent": "",
                    render: function (data, type, row) {
                       if (row.status === "Inactive") {
                          return `<span class="btn btn-danger">${row.status}</span>`;
                        } else {
                             return `<span class="btn btn-success">${row.status}</span>`;
                        }
                     } 
                   },
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
