

let donatorEmail = sessionStorage.getItem("donatorEmail");

if (donatorEmail == null) {
    window.location.href = "login.html";
} else {
    document.getElementById("donatorName").innerHTML = sessionStorage.getItem("donatorName");
}

let logoutLink = document.getElementById("logoutLink");
logoutLink.addEventListener("click", function (e) {
    e.preventDefault();
    sessionStorage.removeItem("donatorEmail");
    sessionStorage.removeItem("donatorName");
    window.location.href = "index.html";
});
