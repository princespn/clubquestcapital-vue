<template>
    <div class="container-fluid recover-background-img h-100">
        <div class="row h-100">
            <div class="col-12 col-md-5 col-lg-6 col-xl-7">
                <div class="admin-logo mt-5 text-left">
                    <img src="user-assets/images/login-logo.svg" />
                </div>
                <div class="data-checking">
                    <p>Incorrect data please check & enter again</p>
                </div>
            </div>
            <div class="col-12 col-md-7 col-lg-6 col-xl-5 align-items-center d-flex justify-content-center">
                <div class="login-white-box text-left">
                    <h4>Recover Password</h4>
                    <p>Don't worry, you can't loss your data.</p>
                    <form class="mt-5 login-form">
                        <div class="form-group">
                            <input type="email" class="form-control form-input" placeholder="Enter Address">
                        </div>
                        <div class="input-error-show">
                            <p>Please Enter Valid User Name or Password</p>
                        </div>


                        <div class="prove-human prove-human-recover">
                            <div>
                                <h5>Prove you are the Human</h5>
                            </div>
                            <div class="cust-checkbox-new">
                                <label class="cust-chk-bx">
                                    <input type="checkbox">
                                    <span class="cust-chkmark"></span>
                                </label>
                            </div>

                        </div>
                        <div class=" text-center">
                            <button type="submit" class="login-blue-btn">Recover</button>
                        </div>
                        <div class="frt-link">
                            <p>Don't have an account?</p>
                            <a href="./Register">Register</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'app',

}
</script>
