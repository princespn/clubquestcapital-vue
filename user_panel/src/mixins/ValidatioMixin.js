export default {
    methods: {
        PasswordValidation(e) {
            const pwd = e.target.value;
            var cpwd = this.register.confirm_password;
            // alert(cpwd);
            var pwdpattern = new RegExp("^(?=.*[!@#$%^&/*])");

            if (pwd == "") {
                this.errorpwd = "Password should not be blank.";
            } else if (pwd.length < 8) {
                this.errorpwd = "Password field must be minimum 8 character";
            } else if (pwd.length > 30) {
                this.errorpwd = "The password field must be maximum 30 characters";
            } else if (!/[a-z]/.test(pwd)) {
                this.errorpwd =
                    "Password must contain at least one lowercase character.";
            } else if (!/[A-Z]/.test(pwd)) {
                this.errorpwd =
                    "Password must contain at least one Uppercase character.";
            } else if (!/[0-9]/.test(pwd)) {
                this.errorpwd = "Password must contain at least one Digit.";
            } else if (!pwdpattern.test(pwd)) {
                this.errorpwd = "Password must contain at least one Special Character.";
            } else if (cpwd != pwd && cpwd != ""){    
               // this.register.confirm_password = "";
                // this.errorpwd = "Password does not Match.";
                
            }else {
                this.errorpwd = "";
            }
        },
        ConfirmPasswordValidation(e) {
            const cpwd = e.target.value;
            var pwd = this.register.password;
            if (cpwd == "" && pwd != "") {
                this.errorcpwd = "Confirm Password should not be blank.";
            } else if (cpwd.length != pwd.length && pwd != "") {
                this.errorcpwd = "Password does not Match.";
            } else if (cpwd != pwd && pwd != "") {
                this.errorcpwd = "Password does not Match.";
            } else {
                this.errorcpwd = "";
            }
        },

 


        MobileValidation(e) {
            const number = e.target.value;
            number.replace(/\s/g, "");
            if (number == "") {
                this.mobile_data = "Mobile should not be blank.";
            }
            else if (isNaN(number)) {
                this.mobile_data = "Please enter only digits";
            }
            else if (number.length < 6) {
                this.mobile_data = "Enter minimum 6 Digits";
            } else if (number.length > 22) {
                this.mobile_data = "Enter maximum 22 Digits";
            } else {
                this.mobile_data = "";
            }
        },
        CountryValidation(e) {
            const country = e.target.value;
            if (country == "") {
                this.countryerr = "Please select country";
            } else {
                this.countryerr = "";
            }
        },
        NameValidation(e) {
            const fullname = e.target.value;
            var fullnamel = fullname.replace(/ /g, "");
            if (fullname == "") {
                this.nameErr = "Full name should not be blank.";
            } else if (!fullname.match(/^[a-zA-Z ]+$/)) {
                this.nameErr = "Please enter alphabets only";
            } else if (fullnamel.length < 5) {
                this.nameErr = "Enter minimum 5 character";
            } else if (fullnamel.length > 30) {
                this.nameErr = "Enter maximum 30 character";
            } else {
                this.nameErr = "";
            }
        },
        EmaiValidation(e) {
            const email = e.target.value;
            if (email == "") {
                this.emaiErr = "Email should not be blank.";
            } else if (
                !email.match(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/
                )
            ) {
                this.emaiErr = "Please enter email in correct format";
            } else {
                this.emaiErr = "";
            }
        },
    }
};