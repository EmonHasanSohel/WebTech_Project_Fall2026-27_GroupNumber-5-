

let registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("fullName").value.trim();
    let email = document.getElementById("registerEmail").value.trim().toLowerCase();
    let password = document.getElementById("registerPassword").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let valid = true;

    if (name == "") {
        document.getElementById("nameError").innerHTML = "Enter your name";
        valid = false;
    } else document.getElementById("nameError").innerHTML = "";

    if (email == "" || !email.includes("@")) {
        document.getElementById("emailError").innerHTML = "Enter a valid email";
        valid = false;
    } else document.getElementById("emailError").innerHTML = "";

    if (password.length < 4) {
        document.getElementById("passError").innerHTML = "Password must have at least 4 characters";
        valid = false;
    } else document.getElementById("passError").innerHTML = "";

    if (confirmPassword == "" || confirmPassword != password) {
        document.getElementById("confirmPassError").innerHTML = "Passwords do not match";
        valid = false;
    } else document.getElementById("confirmPassError").innerHTML = "";

    if (valid) {
        let account = localStorage.getItem("donator_" + email);

        if (account != null) {
            document.getElementById("registerMessage").innerHTML = "This email is already registered";
            document.getElementById("registerMessage").style.color = "red";
        } else {
            localStorage.setItem("donator_" + email, password + "|" + name);
            document.getElementById("registerMessage").innerHTML = "Registration successful. Please login.";
            document.getElementById("registerMessage").style.color = "green";
            registerForm.reset();
        }
    }
});
