let generatedOTP = "";


function validateAdminLogin() {
    let email = document.getElementById("loginEmail").value.trim();
    let pass = document.getElementById("loginPass").value.trim();

    let emailErr = document.getElementById("loginEmailError");
    let passErr = document.getElementById("loginPassError");

    emailErr.innerHTML = "";
    passErr.innerHTML = "";

    let isValid = true;
    let emailExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    let passExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (email === "") {
        emailErr.innerHTML = "Email is required to login.";
        isValid = false;
    } else if (!emailExp.test(email)) {
        emailErr.innerHTML = "Invalid email format! (e.g., name@domain.com)";
        isValid = false;
    }

    if (pass === "") {
        passErr.innerHTML = "Password is required to login.";
        isValid = false;
    } else if (!passExp.test(pass)) {
        passErr.innerHTML = "Must be 8+ chars (upper, lower, number & special char).";
        isValid = false;
    }

    if (isValid) {
        alert("Admin Login Successful!");
        window.location.href = "AdminDashboard.html";
        return false;
    }

    return isValid;
}


function toggleForgotBox() {
    let box = document.getElementById("forgotPasswordSection");
    if (box.style.display === "none") {
        box.style.display = "block";
    } else {
        box.style.display = "none";
    }
}


function sendResetOTP() {
    let contact = document.getElementById("recoveryContact").value.trim();
    let contactErr = document.getElementById("recoveryContactErr");
    contactErr.innerHTML = "";

    if (contact === "") {
        contactErr.innerHTML = "Please enter your registered email or mobile number.";
        return;
    }

   
    generatedOTP = Math.floor(1000 + Math.random() * 9000).toString();
    alert("OTP sent to " + contact + "! Your Demo OTP is: " + generatedOTP);

   
    document.getElementById("otpVerifyArea").style.display = "block";
}

function verifyAndResetPass() {
    let enteredOtp = document.getElementById("enteredOtp").value.trim();
    let newPass = document.getElementById("resetNewPass").value.trim();

    let otpErr = document.getElementById("otpErr");
    let newPassErr = document.getElementById("resetNewPassErr");

    otpErr.innerHTML = "";
    newPassErr.innerHTML = "";

    let isValid = true;
    let passExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (enteredOtp === "") {
        otpErr.innerHTML = "Please enter the 4-digit OTP.";
        isValid = false;
    } else if (enteredOtp !== generatedOTP) {
        otpErr.innerHTML = "Invalid OTP! Please check and try again.";
        isValid = false;
    }

    if (newPass === "") {
        newPassErr.innerHTML = "New password is required.";
        isValid = false;
    } else if (!passExp.test(newPass)) {
        newPassErr.innerHTML = "Must be 8+ chars (upper, lower, number & special char).";
        isValid = false;
    }

    if (isValid) {
        alert("Password reset successful! Old password is now invalid. Please login with your new password.");
        
        document.getElementById("recoveryContact").value = "";
        document.getElementById("enteredOtp").value = "";
        document.getElementById("resetNewPass").value = "";
        document.getElementById("otpVerifyArea").style.display = "none";
        document.getElementById("forgotPasswordSection").style.display = "none";
    }
}

