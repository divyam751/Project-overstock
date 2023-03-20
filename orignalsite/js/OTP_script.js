


   function digitValidate(input) {
     // allow only digits
     input.value = input.value.replace(/\D/g, '');
 
     // move focus to next input on input
     if (input.value.length === input.maxLength) {
       tabChange(parseInt(input.id.slice(-1)) + 1);
     }
   }
 
   function tabChange(tabNum) {
     // focus on next input
     document.getElementById('inp' + tabNum)?.focus();
   }
 
   function verifyOTP() {
     // get input values
     var inp1 = document.getElementById('inp1').value;
     var inp2 = document.getElementById('inp2').value;
     var inp3 = document.getElementById('inp3').value;
     var inp4 = document.getElementById('inp4').value;
 
     // check if input values match
     if (inp1 === '1' && inp2 === '2' && inp3 === '3' && inp4 === '4') {
      //  alert('Payment successful');
       window.location.href = "successfulPayment.html"; 
     } else {
       alert('Incorrect OTP');
     }
   }
 
   // bind verifyOTP function to button click
   document.querySelector('button').addEventListener('click', verifyOTP);
 
