

let donatorEmail = sessionStorage.getItem("donatorEmail");
if (donatorEmail == null) {
    window.location.href = "login.html";
}

let allDonations = localStorage.getItem("donatorDonations");
let trackingList = document.getElementById("trackingList");
let count = 0;

if (allDonations != null && allDonations != "") {
    let donationRows = allDonations.split("\n");

    for (let i = 0; i < donationRows.length; i++) {
        let donation = donationRows[i].split("|");
if (donation[0] == donatorEmail) {
            trackingList.innerHTML += '<div class="tracking-card"><h2>' + donation[1] + '</h2><p><b>Request:</b> ' + donation[2] + ' - ' + donation[3] + '</p><p><b>Destination:</b> ' + donation[4] + '</p><p><b>Donation:</b> ' + donation[5] + ' ' + donation[6] + '</p><p><b>Amount / Quantity:</b> ' + donation[7] + '</p><p><b>Date:</b> ' + donation[9] + '</p><span class="tag approved">' + donation[8] + '</span></div>';
            count++;
        }
    }
}
if (count == 0) {
    trackingList.innerHTML = '<div class="empty-state">You have not made a donation yet.</div>';
}

let logoutLink = document.getElementById("logoutLink");
logoutLink.addEventListener("click", function (e) {
    e.preventDefault();
    sessionStorage.removeItem("donatorEmail");
    sessionStorage.removeItem("donatorName");
    window.location.href = "index.html";
});
