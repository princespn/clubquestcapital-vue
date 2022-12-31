<template>
    <Navbar />
    <main class="content-wrapper-section">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="comn-title">
                        <h2 class="f-size-22">Deposit</h2>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-12">
                    <div class="deposite-datatable position-relative">
                        <div class="table-responsive  mt-3">
                            <div id="structure-balance-receive_wrapper"
                                class="dataTables_wrapper dt-bootstrap4 no-footer">
                                <div class="row">
                                    <div class="col-sm-12 text-right">
                                        <div class="dataTables_length" id="structure-balance-receive_length">
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
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-sm-12">
                                        <table id="structure-balance-receive"
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
                                                            <p>Address</p>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div class="bg-table">
                                                            <p>Action</p>
                                                        </div>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody class="table-body">
                                                <tr>
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
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                            </div>


                        </div>


                        <!-- date picker filter -->
                        <div class="date-picker-toggle">
                            <div class="date-picker-filter">
                                <div class="form-group">
                                    <label class="date-picker-label">From</label>
                                    <input type="date" class="form-control date-picker-input" name="from-date"
                                        placeholder="From Date" id="from-date" max="2022-09-12">
                                </div>
                                <div class="form-group ml-3">
                                    <label class="date-picker-label">To</label>
                                    <input type="date" class="form-control date-picker-input" name="from-date"
                                        placeholder="From Date" id="from-date" max="2022-09-12">
                                </div>
                                <div class="ml-3">
                                    <button class="filter-done-btn">Done</button>
                                </div>
                            </div>
                        </div>
                        <!-- transacation-id -->
                        <div class="transactionid">
                            <div class="transaction-deposit-popup">
                                <div class="form-group">
                                    <label class="date-picker-label">Transaction Id</label>
                                    <input type="text" class="form-control date-picker-input"
                                        placeholder="Enter Your Transaction Id">
                                </div>
                                <div class="ml-3">
                                    <button class="filter-done-btn">Done</button>
                                </div>
                            </div>
                        </div>

                        <div class="table-footer">
                            <div class="date-filter mt-3">
                                <button class="blue-btn-profile filter-btn" v-on:click="onclickFilterBtn">Apply Date
                                    Filter</button>
                                <button class="blue-btn-profile filter-btn ml-3" v-on:click="onTransaction">Transaction
                                    Id</button>
                            </div>
                            <div class="pagination mt-3">
                                <div class="left-arrow">
                                    <i class="fa fa-angle-left" aria-hidden="true"></i>
                                </div>
                                <div class="right-arrow ml-3">
                                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div class="overlay toggle-icon-main"></div>

    </main>
</template>


<script>
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
</script>

