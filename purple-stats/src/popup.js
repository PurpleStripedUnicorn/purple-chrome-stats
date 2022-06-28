
chrome.storage.sync.get("stats", ({ stats }) => {
    document.getElementById("tabs-today").innerText = stats.tabCount.today;
    document.getElementById("tabs-all").innerText = stats.tabCount.all;
});