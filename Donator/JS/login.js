

let loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let email = document.getElementById("loginEmail").value.trim().toLowerCase();
    let password = document.getElementById("loginPassword").value;
    let valid = true;

    if (email == "") {
        document.getElementById("loginEmailError").innerHTML = "Enter your email";
        valid = false;
    } else document.getElementById("loginEmailError").innerHTML = "";

    if (password == "") {
        document.getElementById("loginPassError").innerHTML = "Enter your password";
        valid = false;
    } else document.getElementById("loginPassError").innerHTML = "";

    if (valid) {
        let account = localStorage.getItem("donator_" + email);

        if (account == null) {
            document.getElementById("loginMessage").innerHTML = "Email or password is incorrect";
            document.getElementById("loginMessage").style.color = "red";
        } else {
            let accountDetails = account.split("|");
            let savedPassword = accountDetails[0];
            let savedName = accountDetails[1];

            if (password == savedPassword) {
                sessionStorage.setItem("donatorEmail", email);
                sessionStorage.setItem("donatorName", savedName);
                window.location.href = "dashboard.html";
            } else {
                document.getElementById("loginMessage").innerHTML = "Email or password is incorrect";
                document.getElementById("loginMessage").style.color = "red";
            }
        }
    }
});
