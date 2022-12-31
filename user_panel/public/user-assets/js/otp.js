document.addEventListener("DOMContentLoaded", function(event) {

    function OTPInput() {
        const inputs = document.querySelectorAll('#otpJump > *[id]');
        for (let i = 0; i < inputs.length; i++) {
          inputs[i].addEventListener('keydown', function(event) {
            if (event.key === "Backspace") {
                if(inputs[i].value !== ''){
                    inputs[i].value = '';
                }else{
                    if (i !== 0)
                      inputs[i - 1].focus();
                }
            } else {
              
              if (i === inputs.length - 1 && inputs[i].value !== '') {
                return true;
              } else if (event.keyCode > 47 && event.keyCode < 58) {
                inputs[i].value = event.key;
                if (i !== inputs.length - 1)
                  inputs[i + 1].focus();
                event.preventDefault();
              }
            }
          });
        }
      }
      OTPInput();
    });