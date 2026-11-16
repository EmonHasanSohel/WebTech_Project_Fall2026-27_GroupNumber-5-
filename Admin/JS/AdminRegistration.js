function validateAdminReg() {
    let name = document.getElementById("regName").value.trim();
    let email = document.getElementById("regEmail").value.trim();
    let phone = document.getElementById("regPhone").value.trim();
    let genderSelected = document.querySelector('input[name="gender"]:checked');
    let age = document.getElementById("regAge").value.trim();
    let address = document.getElementById("regAddress").value.trim();
    let nid = document.getElementById("regNid").value.trim();
    let nidDoc = document.getElementById("regNidDoc").value;
    let pass = document.getElementById("regPass").value.trim();
    let confirmPass = document.getElementById("regConfirmPass").value.trim();


    document.getElementById("regNameErr").innerHTML = "";
    document.getElementById("regEmailErr").innerHTML = "";
    document.getElementById("regPhoneErr").innerHTML = "";
    document.getElementById("regGenderErr").innerHTML = "";
    document.getElementById("regAgeErr").innerHTML = "";
    document.getElementById("regAddressErr").innerHTML = "";
    document.getElementById("regNidErr").innerHTML = "";
    document.getElementById("regNidDocErr").innerHTML = "";
    document.getElementById("regPassErr").innerHTML = "";
    document.getElementById("regConfirmPassErr").innerHTML = "";

    let isValid = true;
    let emailExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    let passExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

   
    if (name === "" || name.length < 4) {
        document.getElementById("regNameErr").innerHTML = "Full name must be at least 4 characters.";
        isValid = false;
    }

   
    if (email === "" || !emailExp.test(email)) {
        document.getElementById("regEmailErr").innerHTML = "Please enter a valid email address.";
        isValid = false;
    }

   
    if (phone === "" || phone.length < 11) {
        document.getElementById("regPhoneErr").innerHTML = "Enter a valid 11-digit phone number.";
        isValid = false;
    }

   
    if (!genderSelected) {
        document.getElementById("regGenderErr").innerHTML = "Please select your gender.";
        isValid = false;
    }

    if (age === "" || isNaN(age) || Number(age) < 18 || Number(age) > 80) {
        document.getElementById("regAgeErr").innerHTML = "Age must be a valid number between 18 and 80.";
        isValid = false;
    }

    if (address === "" || address.length < 6) {
        document.getElementById("regAddressErr").innerHTML = "Please enter your full address.";
        isValid = false;
    }

   
    if (nid === "" || (nid.length !== 10 && nid.length !== 17)) {
        document.getElementById("regNidErr").innerHTML = "NID Number must be 10 or 17 digits.";
        isValid = false;
    }

    if (nidDoc === "") {
        document.getElementById("regNidDocErr").innerHTML = "Please upload your NID document (PDF/JPG/PNG).";
        isValid = false;
    }

   
    if (pass === "") {
        document.getElementById("regPassErr").innerHTML = "Password is required.";
        isValid = false;
    } else if (!passExp.test(pass)) {
        document.getElementById("regPassErr").innerHTML = "Must be 8+ chars (upper, lower, number & special char).";
        isValid = false;
    }

  
    if (confirmPass === "") {
        document.getElementById("regConfirmPassErr").innerHTML = "Please confirm your password.";
        isValid = false;
    } else if (pass !== confirmPass) {
        document.getElementById("regConfirmPassErr").innerHTML = "Passwords do not match.";
        isValid = false;
    }

    if (isValid) {
        alert("Admin Registration Successful! Redirecting to Login...");
        window.location.href = "AdminLogin.html";
        return false;
    }

    return isValid;
}