<template>
    <Navbar />

    <main class="content-wrapper-section">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="comn-title">
                        <h2 class="f-size-22">Report</h2>
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
                                        <h5>$0</h5>
                                    </span></h4>

                            </div>
                        </div>

                        <div class="profile-sec-form mt-5">
                            <form>
                                <div class="row">
                                    <div class="col-12 col-md-6">
                                        <div class="form-group">
                                            <label class="form-lable">Enter User Id</label>
                                            <input type="text" class="form-control input-profile-form"
                                                placeholder="Enter User Id">
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6">
                                        <div class="form-group">
                                            <label class="form-lable">Enter Amount</label>
                                            <input type="number" class="form-control input-profile-form"
                                                placeholder="123444">
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-group">
                                            <label class="form-lable">Select Package</label>
                                            <select class="form-control input-profile-form"
                                                id="exampleFormControlSelect1">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div class="text-center my-4">
                                    <button class="blue-add-fund">Make Payment</button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="overlay toggle-icon-main"></div>
    </main>
</template>

<script>
import Navbar from "../../components/user/Navbar.vue";
export default {
    name: "app",
    components: { Navbar },

};
</script>