
function updateReqStatus(id, newStatus) {
    let statusBadge = document.getElementById("status-" + id);
    
    if (newStatus === "Approved") {
        statusBadge.innerHTML = "Approved";
        statusBadge.className = "badge approved";
        alert("Request #REQ-" + id + " is now Approved and visible to donators!");
    } else if (newStatus === "Rejected") {
        let reason = prompt("Enter optional rejection reason for Victim:");
        statusBadge.innerHTML = "Rejected";
        statusBadge.className = "badge rejected";
        alert("Request #REQ-" + id + " Rejected." + (reason ? " Reason: " + reason : ""));
    }
    filterRequests();
}


function filterRequests() {
    let searchText = document.getElementById("searchInput").value.toLowerCase();
    let typeVal = document.getElementById("typeFilter").value;
    let statusVal = document.getElementById("statusFilter").value;

    let table = document.getElementById("requestTable");
    let rows = table.getElementsByTagName("tr");

    for (let i = 1; i < rows.length; i++) {
        let cells = rows[i].getElementsByTagName("td");
        if (cells.length > 0) {
            let victimName = cells[1].innerText.toLowerCase();
            let disasterType = cells[2].innerText;
            let location = cells[3].innerText.toLowerCase();
            let status = cells[5].innerText;

            let matchesSearch = victimName.includes(searchText) || location.includes(searchText);
            let matchesType = (typeVal === "All") || (disasterType === typeVal);
            let matchesStatus = (statusVal === "All") || (status === statusVal);

            if (matchesSearch && matchesType && matchesStatus) {
                rows[i].style.display = "";
            } else {
                rows[i].style.display = "none";
            }
        }
    }
}