document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    // Simulate sending OTP to email (replace with actual logic)
    const otp = generateOTP();
    console.log('OTP:', otp);
    // Redirect to OTP verification page
    window.location.href = `otp.html?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&otp=${otp}`;
  });
  
  function generateOTP() {
    const digits = '0123456789';
    let otp = '';
    for (let i = 0; i < 6; i++) {
      otp += digits[Math.floor(Math.random() * 10)];
    }
    return otp;
  }
  