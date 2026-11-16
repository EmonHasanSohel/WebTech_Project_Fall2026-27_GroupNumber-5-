let userCount = 4;


function createNewAdmin() {
    let name = document.getElementById("newAdminName").value.trim();
    let email = document.getElementById("newAdminEmail").value.trim();
    let phone = document.getElementById("newAdminPhone").value.trim();
    let errText = document.getElementById("adminCreateErr");

    errText.innerHTML = "";
    let emailExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (name === "" || name.length < 4) {
        errText.innerHTML = "Admin name must be at least 4 characters.";
        return false;
    }
    if (email === "" || !emailExp.test(email)) {
        errText.innerHTML = "Please enter a valid email address.";
        return false;
    }
    if (phone === "" || phone.length < 11) {
        errText.innerHTML = "Enter a valid 11-digit contact number.";
        return false;
    }

    userCount++;
    let tbody = document.getElementById("userTableBody");
    let newRow = document.createElement("tr");

    newRow.innerHTML = `
        <td>${name}</td>
        <td><strong>Admin</strong></td>
        <td>${email} (${phone})</td>
        <td>2026-11-16</td>
        <td><span class="badge approved" id="u-stat-${userCount}">Active</span></td>
        <td>
            <button class="action-btn reject-btn" id="u-btn-${userCount}" onclick="toggleUserStatus(${userCount})">Deactivate</button>
        </td>
    `;

    tbody.appendChild(newRow);
    alert("New Admin Account Created! Login credentials sent to " + email);

    document.getElementById("newAdminName").value = "";
    document.getElementById("newAdminEmail").value = "";
    document.getElementById("newAdminPhone").value = "";

    return false;
}


function toggleUserStatus(id) {
    let badge = document.getElementById("u-stat-" + id);
    let btn = document.getElementById("u-btn-" + id);

    if (badge.innerText === "Active") {
        badge.innerText = "Inactive";
        badge.className = "badge rejected";
        btn.innerText = "Activate";
        btn.className = "action-btn approve-btn";
        alert("Account has been Deactivated (Suspended).");
    } else {
        badge.innerText = "Active";
        badge.className = "badge approved";
        btn.innerText = "Deactivate";
        btn.className = "action-btn reject-btn";
        alert("Account has been Activated!");
    }
}


function filterUsers() {
    let searchText = document.getElementById("userSearchInput").value.toLowerCase();
    let roleVal = document.getElementById("roleFilter").value;
    let rows = document.getElementById("userTable").getElementsByTagName("tr");

    for (let i = 1; i < rows.length; i++) {
        let cells = rows[i].getElementsByTagName("td");
        if (cells.length > 0) {
            let name = cells[0].innerText.toLowerCase();
            let role = cells[1].innerText.trim();
            let email = cells[2].innerText.toLowerCase();

            let matchesSearch = name.includes(searchText) || email.includes(searchText);
            let matchesRole = (roleVal === "All") || (role === roleVal);

            rows[i].style.display = (matchesSearch && matchesRole) ? "" : "none";
        }
    }
}