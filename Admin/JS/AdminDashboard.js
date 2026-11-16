
function updateStatus(elementId, newStatus) {
    let statusBadge = document.getElementById(elementId);
    statusBadge.innerHTML = newStatus;

    if (newStatus === 'Approved') {
        statusBadge.style.backgroundColor = "#2ecc71";
        statusBadge.style.color = "white";
        alert("Request has been Approved!");
    } else if (newStatus === 'Rejected') {
        statusBadge.style.backgroundColor = "#e74c3c";
        statusBadge.style.color = "white";
        alert("Request has been Rejected!");
    }
}


function assignVolunteer() {
    let req = document.getElementById("reqSelect").value;
    let vol = document.getElementById("volSelect").value;
    let msg = document.getElementById("assignMessage");

    if (req === "" || vol === "") {
        msg.style.color = "#e74c3c";
        msg.innerHTML = "Please select both Request ID and Volunteer!";
        return false;
    } else {
        msg.style.color = "#2ecc71";
        msg.innerHTML = "Success: " + vol + " has been assigned to " + req;
        return false; 
    }
}