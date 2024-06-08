document.getElementById('otpForm').addEventListener('submit', (event) => {
    event.preventDefault();
  
    const otpInput = document.getElementById('otpInput');
    const enteredOtp = otpInput.value;
  
    // Replace this with your actual OTP verification logic
    const isOtpValid = enteredOtp === '123456';
  
    
      // Redirect to the main page
      window.location.href = 'duplicate.html';
    
  });