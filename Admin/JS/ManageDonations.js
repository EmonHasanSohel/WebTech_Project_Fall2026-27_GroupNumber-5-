function assignDelivery() {
    let donationVal = document.getElementById("donationSelect").value;
    let volunteerName = document.getElementById("volunteerSelect").value;
    let errText = document.getElementById("assignErr");

    errText.innerHTML = "";

    if (donationVal === "") {
        errText.innerHTML = "Please select a donation to dispatch.";
        return false;
    }
    if (volunteerName === "") {
        errText.innerHTML = "Please select an available volunteer.";
        return false;
    }

   
    let parts = donationVal.split("|");
    let donId = parts[0];     
    let victimInfo = parts[1]; 
    let itemDetails = parts[2];

    
    let numericId = donId.replace("#DON-", "");
    let donBadge = document.getElementById("don-stat-" + numericId);
    if (donBadge) {
        donBadge.innerText = "Assigned";
        donBadge.className = "badge approved";
    }

   
    let now = new Date();
    let timestamp = now.toISOString().slice(0, 10) + " " + now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    let tbody = document.getElementById("deliveryTableBody");
    let newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${volunteerName}</td>
        <td>${victimInfo}</td>
        <td>${itemDetails} (${donId})</td>
        <td><span class="badge pending">Assigned</span></td>
        <td>${timestamp}</td>
    `;
    tbody.appendChild(newRow);

    alert("Volunteer " + volunteerName + " has been assigned to " + donId + " and notified!");

    document.getElementById("donationSelect").value = "";
    document.getElementById("volunteerSelect").value = "";

    return false;
}