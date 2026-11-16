const loginSection = document.getElementById("login-section");
const registerSection = document.getElementById("register-section");
const forgotSection = document.getElementById("forgot-section");

function showSection(section) {
    loginSection.hidden = true;
    registerSection.hidden = true;
    forgotSection.hidden = true;
    section.hidden = false;
}

const showRegisterButton = document.getElementById("show-register");
const showLoginButton = document.getElementById("show-login");
const showforgotButton = document.getElementById("show-forgot");
const backToLoginButton = document.getElementById("back-to-login");

showRegisterButton.addEventListener("click",function() {
    showSection(registerSection);
});

showLoginButton.addEventListener("click",function() {
    showSection(loginSection);
});

showforgotButton.addEventListener("click",function() {
    showSection(forgotSection);
});

backToLoginButton.addEventListener("click",function() {
    showSection(loginSection);
});