function updateCalendar() {
    const now = new Date();
    const day = now.getDate();
    const monthNames = ["January", "February", "March", "April", "May", "june", "july", 
        "August", "September", "October", "November", "December"];
    const month = monthNames[now.getMonth()];

    document.getElementById("day").textContent = day;
    document.getElementById("month").textContent = month;
}
updateCalendar();