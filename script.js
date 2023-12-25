
  // Function to send signup OTP
  function sendOTP() {
    const phoneNumber = document.getElementById('phone').value;
    const appVerifier = new firebase.auth.RecaptchaVerifier('signup-form', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        sendVerificationCode(phoneNumber, appVerifier);
      }
    });

    auth.signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
      })
      .catch((error) => {
        console.error("Error sending OTP:", error);
      });
  }

  // Function to verify signup OTP
  function verifyOTP() {
    const otp = document.getElementById('otp').value;
    const confirmationResult = window.confirmationResult;

    confirmationResult.confirm(otp)
      .then((result) => {
        console.log("Signup successful:", result.user);
      })
      .catch((error) => {
        console.error("Error verifying OTP:", error);
      });
  }

  // Function to send login OTP
  function sendLoginOTP() {
    const phoneNumber = document.getElementById('login-phone').value;
    const appVerifier = new firebase.auth.RecaptchaVerifier('login-form', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        sendVerificationCode(phoneNumber, appVerifier);
      }
    });

    auth.signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
      })
      .catch((error) => {
        console.error("Error sending login OTP:", error);
      });
  }

  // Function to verify login OTP
  function verifyLoginOTP() {
    const otp = document.getElementById('login-otp').value;
    const confirmationResult = window.confirmationResult;

    confirmationResult.confirm(otp)
      .then((result) => {
        console.log("Login successful:", result.user);
      })
      .catch((error) => {
        console.error("Error verifying login OTP:", error);
      });
  }
