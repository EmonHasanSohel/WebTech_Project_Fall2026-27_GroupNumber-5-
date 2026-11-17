console.log("Common JS Connected successfully!");

function checkConnection() {
    console.log("Ready for future logic!");
}

function togglePassword(inputId, iconSpan) {
    let passField = document.getElementById(inputId);
    if (passField.type === "password") {
        passField.type = "text";
        iconSpan.innerHTML = "🙈"; 
    } else {
        passField.type = "password";
        iconSpan.innerHTML = "👁️"; 
    }
}