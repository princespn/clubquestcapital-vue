<template>
    <Navbar />
    <main class="content-wrapper-section">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="comn-title">
                        <h2 class="f-size-22">C Wallet to P Wallet Transfer</h2>
                    </div>
                </div>
                <div class="col-12">
                    <div class="tab-content mt-3">
                        <div class="tab-pane fade show active" id="withdraw" role="tabpanel"
                            aria-labelledby="withdraw-tab">
                            <div class="withdraw-tab-sec mt-5">
                                <div class="row">
                                    <div class="col-12 col-md-6 col-xl-6">
                                        <div class="blue-box card card-block">
                                            <h5>ROI Wallet</h5>
                                            <div class="wht-box-inner text-center">
                                                <h5>PR Wallet Amount</h5>
                                                <div class="wallet-transfer-one">
                                                    <div class="bottom-content-wallet" style="background: #0031a666;backdrop-filter: blur(1px);">
                                                        <h5 class="text-light text-center">$89238.66</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-xl-6">
                                        <div class="blue-box card card-block">
                                            <h5>Transfer Mode</h5>
                                            <div class="wht-box-inner">
                                                <form action="">
                                                    <div class="form-group">
                                                        <label class="form-lable-deposit">Select Amount</label>
                                                        <div class="input-profile-form-deposit d-flex px-2 py-1">
                                                            <input type="text" class="select-with-input"
                                                                placeholder="Select Amount">
                                                            <select class="custom-select-deposit">
                                                                <option value="default">USD </option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="form-lable-deposit">Select wallet</label>
                                                        <select class="input-profile-form-deposit"
                                                            aria-label="Default select example">
                                                            <option value="">Direct Wallet Amount</option>
                                                        </select>
                                                    </div>
                                                </form>
                                                <div class="text-center mt-5">
                                                    <button class="blue-add-fund mt-5" type="button">Submit</button>
                                                </div>
                                            </div>
                                        </div>
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
    // import jQuery from 'jquery'
    import {} from "@/store/actions.type";
    //VERIFYUSEROTP
    import Navbar from '../../components/user/Navbar.vue';


    export default {
        name: "app",
        components: {
            Navbar
        },

    }
</script>