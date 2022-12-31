<!--<template>
  <div class="container-fluid thanku-background-img">
    <div class="row">
      <div class="col-12">
        <div class="text-center my-5 mx-auto">
          <div class="clg-logo text-center">
            <img src="user-assets/images/congratulation-logo.svg" />
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-xl-6">
        <div class="thanku-header text-left">
          <h3>Hello....,</h3>
          <h2>6427715!</h2>
        </div>
      </div>
      <div class="col-12 col-xl-6">
        <div class="thanu-header-icon">
          <img src="user-assets/images/mail-box.png" />
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-12 col-xl-9 m-auto">
        <div class="thanku-content text-center">
          <h4>
            Did you try to change the Password of your account ? If Yes, use the
            below code to proceed,
          </h4>
          <button class="blue-btn-thanku">969970</button>
          <h4>If Not, just ignore this mail.</h4>
          <h4 class="mt-5">
            You can login here :
            <span class="font-weight-bold"> www.ClubQuestCspital.com </span>
          </h4>
          <h3>Thank You</h3>
        </div>
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "app",
};
</script>-->

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
            <h5>Dear User,</h5>
            <p>
              Congratulations Your Submission Has Been successfully registered.
            </p>
            <h6>
              Your Are Registered Member of
              <span class="blue-text">Club Quest Capital</span>
            </h6>
            <div class="credantion-sec">
              <p>
                <span class="blue-text font-weight-bold">  User Id :  {{user_id}}</span>
              </p>
              <p>
                <span class="blue-text font-weight-bold"> Password : {{password}}</span>
              </p>
            </div>
          </div>

          <div class="text-center">
            <router-link to="/" class="login-blue-btn" @click="moveTop">Login</router-link>
           <!--<button type="submit" class="login-blue-btn">Recover</button>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
      export default {
          name: "app",
           data() {
            return {
              
                user_id : '',
                password : '',
                hostName: window.location.origin
            }
        },
        mounted()
            { 
                this.user_id = this.$route.params.user_id,
                this.password = this.$route.params.password
    
        },
      };
  </script>
