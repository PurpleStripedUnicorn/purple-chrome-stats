
function updateFields() {
    chrome.storage.sync.get("stats", ({ stats }) => {
        document.getElementById("tabs-today").innerText = stats.tabCount.today;
        document.getElementById("tabs-all").innerText = stats.tabCount.all;
        document.getElementById("sec-today").innerText = stats.seconds.today;
        document.getElementById("sec-all").innerText = stats.seconds.all;
    });
    chrome.storage.sync.get("startDate", ({ startDate }) => {
        document.getElementById("start-date").innerText = new Date(startDate).toLocaleString();
    });
}

updateFields();
setInterval(updateFields, 5000);