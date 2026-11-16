

let donatorEmail = sessionStorage.getItem("donatorEmail");
if (donatorEmail == null) {
    window.location.href = "login.html";
}

let requests = [
    ["REQ-101", "Flood", "Sunamganj", "Water and dry food", "Critical", "Approved"],
    ["REQ-102", "Cyclone", "Cox's Bazar", "Food and medicine", "Urgent", "Approved"],
    ["REQ-103", "River Erosion", "Kurigram", "Shelter materials", "Low", "Approved"],
    ["REQ-104", "Flood", "Feni", "Food and water", "Critical", "Pending"]
];

let requestSelect = document.getElementById("requestSelect");

for (let i = 0; i < requests.length; i++) {
    if (requests[i][5] == "Approved" && (requests[i][4] == "Urgent" || requests[i][4] == "Critical")) {
        let option = document.createElement("option");
        option.value = requests[i][0];
        option.text = requests[i][0] + " - " + requests[i][1];
        requestSelect.appendChild(option);
    }
}

let selectedRequest = window.location.search.substring(9);
if (selectedRequest != "") requestSelect.value = selectedRequest;

let donationForm = document.getElementById("donationForm");
donationForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let requestId = document.getElementById("requestSelect").value;
    let type = document.getElementById("donationType").value;
    let item = document.getElementById("itemName").value.trim();
    let amountText = document.getElementById("donationAmount").value;
    let amount = Number(amountText);
    let valid = true;

    if (requestId == "") {
        document.getElementById("requestError").innerHTML = "Select a request";
        valid = false;
    } else document.getElementById("requestError").innerHTML = "";

    if (type == "") {
        document.getElementById("typeError").innerHTML = "Select donation type";
        valid = false;
    } else document.getElementById("typeError").innerHTML = "";

    if (type != "Money" && item == "") {
        document.getElementById("itemError").innerHTML = "Enter item name";
        valid = false;
    } else document.getElementById("itemError").innerHTML = "";

    if (amountText == "" || amount <= 0) {
        document.getElementById("amountError").innerHTML = "Enter an amount greater than zero";
        valid = false;
    } else document.getElementById("amountError").innerHTML = "";

    if (valid) {
        let disaster = "";
        let location = "";

        for (let i = 0; i < requests.length; i++) {
            if (requests[i][0] == requestId) {
                disaster = requests[i][1];
                location = requests[i][2];
            }
        }

        let donation = donatorEmail + "|DON-" + new Date().getTime() + "|" + requestId + "|" + disaster + "|" + location + "|" + type + "|" + item + "|" + amount + "|Pending Dispatch|" + new Date().toLocaleDateString();
        let allDonations = localStorage.getItem("donatorDonations");

        if (allDonations == null || allDonations == "") {
            localStorage.setItem("donatorDonations", donation);
        } else {
            localStorage.setItem("donatorDonations", allDonations + "\n" + donation);
        }

        document.getElementById("donationMessage").innerHTML = "Donation submitted successfully";
        document.getElementById("donationMessage").style.color = "green";
        donationForm.reset();
    }
});

let logoutLink = document.getElementById("logoutLink");
logoutLink.addEventListener("click", function (e) {
    e.preventDefault();
    sessionStorage.removeItem("donatorEmail");
    sessionStorage.removeItem("donatorName");
    window.location.href = "index.html";
});
