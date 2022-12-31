<template>
  <div class="container-fluid cong-background-img h-100">
    <div class="row h-100">
      <div class="col-12 col-md-7 col-lg-6 col-xl-4 align-items-center d-flex justify-content-center m-auto">
        <div class="clg-white-box text-center">
          <div class="clg-logo text-center">
            <img src="user-assets/images/congratulation-logo.svg" />
          </div>
          <div class="text-center congratulation-icon">
            <img src="user-assets/images/Congratulation-Icon.png" />
          </div>
          <div class="congratulation-content text-center">
            <h5>Activation Successful</h5>
            <p>
              Congratulations Your Submission Has Been successfully registered
              with Demo
            </p>
            <h6>
              Your Are Registered Member of
              <span class="blue-text">Club Quest Capital</span>
            </h6>
            <div class="credantion-sec">
              <p>
                Username Id :
                <span class="blue-text font-weight-bold"> '$username.'</span>
              </p>
              <p>
                Password :
                <span class="blue-text font-weight-bold">'$Password.' </span>
              </p>
            </div>
          </div>

          <div class="text-center">
            <button type="submit" class="login-blue-btn">Recover</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "app",
};
</script>
