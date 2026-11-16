let volunteerName = "Shawn Hasnat Ankur";
let volunteerEmail = "volunteer@sahayata.com";
let volunteerPassword = "123456";
let volunteerPhone = "01712345678";
let volunteerAddress = "Dhaka, Bangladesh";

function showLogin() {
    document.getElementById("loginPage").style.display = "block";
    document.getElementById("registerPage").style.display = "none";
    document.getElementById("portalPage").style.display = "none";
}

function showRegister() {
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("registerPage").style.display = "block";
    document.getElementById("portalPage").style.display = "none";
}

function validateLogin() {
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;
    if (email == volunteerEmail && password == volunteerPassword) {
        document.getElementById("loginError").innerHTML = "";
        document.getElementById("loginPage").style.display = "none";
        document.getElementById("portalPage").style.display = "block";
        document.getElementById("welcomeName").innerHTML = volunteerName;
        loadProfile();
    } else {
        document.getElementById("loginError").innerHTML = "Incorrect email or password.";
        alert("Please enter correct login information.");
    }
    return false;
}

function validateRegistration() {
    let name = document.getElementById("regName").value;
    let phone = document.getElementById("regPhone").value;
    let email = document.getElementById("regEmail").value;
    let address = document.getElementById("regAddress").value;
    let password = document.getElementById("regPassword").value;
    let confirmPassword = document.getElementById("regConfirmPassword").value;
    if (name == "" || phone == "" || email == "" || address == "" || password == "") {
        document.getElementById("registerError").innerHTML = "Please fill in all fields.";
        return false;
    } else if (password != confirmPassword) {
        document.getElementById("registerError").innerHTML = "Password and Confirm Password must match.";
        return false;
    } else {
        volunteerName = name;
        volunteerPhone = phone;
        volunteerEmail = email;
        volunteerAddress = address;
        volunteerPassword = password;
        alert("Registration successful. You can now login.");
        showLogin();
        return false;
    }
}

function showPage(pageName) {
    document.getElementById("overviewPage").style.display = "none";
    document.getElementById("assignmentsPage").style.display = "none";
    document.getElementById("historyPage").style.display = "none";
    document.getElementById("profilePage").style.display = "none";
    if (pageName == "overview") {
        document.getElementById("overviewPage").style.display = "block";
    } else if (pageName == "assignments") {
        document.getElementById("assignmentsPage").style.display = "block";
    } else if (pageName == "history") {
        document.getElementById("historyPage").style.display = "block";
    } else if (pageName == "profile") {
        document.getElementById("profilePage").style.display = "block";
        loadProfile();
    }
}

function updateTask1() {
    let status = document.getElementById("selectStatus1").value;
    document.getElementById("taskStatus1").innerHTML = status;
    document.getElementById("overviewStatus1").innerHTML = status;
    if (status == "Delivered") { document.getElementById("historyRow101").style.display = "table-row"; }
    else { document.getElementById("historyRow101").style.display = "none"; }
    updateSummary();
    alert("Task DL-101 status updated.");
}

function updateTask2() {
    let status = document.getElementById("selectStatus2").value;
    document.getElementById("taskStatus2").innerHTML = status;
    document.getElementById("overviewStatus2").innerHTML = status;
    if (status == "Delivered") { document.getElementById("historyRow102").style.display = "table-row"; }
    else { document.getElementById("historyRow102").style.display = "none"; }
    updateSummary();
    alert("Task DL-102 status updated.");
}

function updateTask3() {
    let status = document.getElementById("selectStatus3").value;
    document.getElementById("taskStatus3").innerHTML = status;
    if (status == "Delivered") { document.getElementById("historyRow103").style.display = "table-row"; }
    else { document.getElementById("historyRow103").style.display = "none"; }
    updateSummary();
    alert("Task DL-103 status updated.");
}

function updateTask4() {
    let status = document.getElementById("selectStatus4").value;
    document.getElementById("taskStatus4").innerHTML = status;
    if (status == "Delivered") { document.getElementById("historyRow104").style.display = "table-row"; }
    else { document.getElementById("historyRow104").style.display = "none"; }
    updateSummary();
    alert("Task DL-104 status updated.");
}

function updateSummary() {
    let pending = 0;
    let progress = 0;
    let delivered = 0;
    let status1 = document.getElementById("taskStatus1").innerHTML;
    let status2 = document.getElementById("taskStatus2").innerHTML;
    let status3 = document.getElementById("taskStatus3").innerHTML;
    let status4 = document.getElementById("taskStatus4").innerHTML;

    if (status1 == "Pending") { pending = pending + 1; }
    else if (status1 == "Picked Up" || status1 == "In Transit") { progress = progress + 1; }
    else if (status1 == "Delivered") { delivered = delivered + 1; }
    if (status2 == "Pending") { pending = pending + 1; }
    else if (status2 == "Picked Up" || status2 == "In Transit") { progress = progress + 1; }
    else if (status2 == "Delivered") { delivered = delivered + 1; }
    if (status3 == "Pending") { pending = pending + 1; }
    else if (status3 == "Picked Up" || status3 == "In Transit") { progress = progress + 1; }
    else if (status3 == "Delivered") { delivered = delivered + 1; }
    if (status4 == "Pending") { pending = pending + 1; }
    else if (status4 == "Picked Up" || status4 == "In Transit") { progress = progress + 1; }
    else if (status4 == "Delivered") { delivered = delivered + 1; }

    document.getElementById("assignedCount").innerHTML = 4;
    document.getElementById("pendingCount").innerHTML = pending;
    document.getElementById("progressCount").innerHTML = progress;
    document.getElementById("deliveredCount").innerHTML = delivered;
}

function loadProfile() {
    document.getElementById("profileName").value = volunteerName;
    document.getElementById("profilePhone").value = volunteerPhone;
    document.getElementById("profileEmail").value = volunteerEmail;
    document.getElementById("profileAddress").value = volunteerAddress;
}

function updateProfile() {
    let name = document.getElementById("profileName").value;
    let phone = document.getElementById("profilePhone").value;
    let email = document.getElementById("profileEmail").value;
    let address = document.getElementById("profileAddress").value;
    if (name == "" || phone == "" || email == "" || address == "") {
        document.getElementById("profileMessage").innerHTML = "Please fill in all fields.";
        document.getElementById("profileMessage").style.color = "red";
        return false;
    } else {
        volunteerName = name;
        volunteerPhone = phone;
        volunteerEmail = email;
        volunteerAddress = address;
        document.getElementById("welcomeName").innerHTML = volunteerName;
        document.getElementById("profileMessage").innerHTML = "Profile updated successfully.";
        document.getElementById("profileMessage").style.color = "green";
        alert("Profile updated successfully.");
        return false;
    }
}

function logout() {
    document.getElementById("portalPage").style.display = "none";
    document.getElementById("loginPage").style.display = "block";
    document.getElementById("registerPage").style.display = "none";
    document.getElementById("loginEmail").value = "";
    document.getElementById("loginPassword").value = "";
}