

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

let requestList = document.getElementById("requestList");
let count = 0;

for (let i = 0; i < requests.length; i++) {
    if (requests[i][5] == "Approved" && (requests[i][4] == "Urgent" || requests[i][4] == "Critical")) {
        requestList.innerHTML += '<div class="request-card"><h2>' + requests[i][1] + '</h2><p><b>Request ID:</b> ' + requests[i][0] + '</p><p><b>Location:</b> ' + requests[i][2] + '</p><p><b>Needed:</b> ' + requests[i][3] + '</p><p><b>Priority:</b> ' + requests[i][4] + '</p><a class="button-inline" href="donate.html?request=' + requests[i][0] + '">Donate</a></div>';
        count++;
    }
}

document.getElementById("requestCount").innerHTML = count;

let logoutLink = document.getElementById("logoutLink");
logoutLink.addEventListener("click", function (e) {
    e.preventDefault();
    sessionStorage.removeItem("donatorEmail");
    sessionStorage.removeItem("donatorName");
    window.location.href = "index.html";
});
