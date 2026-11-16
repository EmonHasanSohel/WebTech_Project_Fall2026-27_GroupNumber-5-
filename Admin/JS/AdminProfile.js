
function updateAdminInfo() {
    let name = document.getElementById("editName").value.trim();
    let email = document.getElementById("editEmail").value.trim();
    let phone = document.getElementById("editPhone").value.trim();
    let genderSelected = document.querySelector('input[name="editGender"]:checked');
    let age = document.getElementById("editAge").value.trim();
    let address = document.getElementById("editAddress").value.trim();
    let nid = document.getElementById("editNid").value.trim();
    let nidDocInput = document.getElementById("editNidDoc");

   
    document.getElementById("editNameErr").innerHTML = "";
    document.getElementById("editEmailErr").innerHTML = "";
    document.getElementById("editPhoneErr").innerHTML = "";
    document.getElementById("editGenderErr").innerHTML = "";
    document.getElementById("editAgeErr").innerHTML = "";
    document.getElementById("editAddressErr").innerHTML = "";
    document.getElementById("editNidErr").innerHTML = "";
    document.getElementById("editNidDocErr").innerHTML = "";

    let isValid = true;
    let emailExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (name === "" || name.length < 4) {
        document.getElementById("editNameErr").innerHTML = "Name must be at least 4 characters.";
        isValid = false;
    }

    if (email === "" || !emailExp.test(email)) {
        document.getElementById("editEmailErr").innerHTML = "Please enter a valid email address.";
        isValid = false;
    }

    if (phone === "" || phone.length < 11) {
        document.getElementById("editPhoneErr").innerHTML = "Enter a valid 11-digit phone number.";
        isValid = false;
    }

    if (!genderSelected) {
        document.getElementById("editGenderErr").innerHTML = "Please select your gender.";
        isValid = false;
    }

    if (age === "" || isNaN(age) || Number(age) < 18 || Number(age) > 80) {
        document.getElementById("editAgeErr").innerHTML = "Age must be between 18 and 80.";
        isValid = false;
    }

    if (address === "" || address.length < 6) {
        document.getElementById("editAddressErr").innerHTML = "Please enter your full address.";
        isValid = false;
    }

    if (nid === "" || (nid.length !== 10 && nid.length !== 17)) {
        document.getElementById("editNidErr").innerHTML = "NID Number must be 10 or 17 digits.";
        isValid = false;
    }

    if (isValid) {
        
        document.getElementById("displayAdminName").innerHTML = name;

        
        if (nidDocInput.files.length > 0) {
            document.getElementById("currentDocName").innerHTML = "Current File: " + nidDocInput.files[0].name;
            nidDocInput.value = "";
        }

        alert("Admin Profile Information Updated Successfully!");
    }

    return false; 
}


function resetAdminPassword() {
    let oldPass = document.getElementById("oldPass").value.trim();
    let newPass = document.getElementById("newPass").value.trim();
    let confirmPass = document.getElementById("confirmPass").value.trim();

    let oldPassErr = document.getElementById("oldPassErr");
    let newPassErr = document.getElementById("newPassErr");
    let confirmPassErr = document.getElementById("confirmPassErr");

    oldPassErr.innerHTML = "";
    newPassErr.innerHTML = "";
    confirmPassErr.innerHTML = "";

    let isValid = true;
    let passExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (oldPass === "") {
        oldPassErr.innerHTML = "Current password is required.";
        isValid = false;
    }

    if (newPass === "") {
        newPassErr.innerHTML = "New password is required.";
        isValid = false;
    } else if (!passExp.test(newPass)) {
        newPassErr.innerHTML = "Must be 8+ chars (upper, lower, number & special char).";
        isValid = false;
    }

    if (confirmPass === "") {
        confirmPassErr.innerHTML = "Please confirm your new password.";
        isValid = false;
    } else if (newPass !== confirmPass) {
        confirmPassErr.innerHTML = "Passwords do not match.";
        isValid = false;
    }

    if (isValid) {
        alert("Password has been reset successfully!");
        document.getElementById("oldPass").value = "";
        document.getElementById("newPass").value = "";
        document.getElementById("confirmPass").value = "";
    }

    return false;
}