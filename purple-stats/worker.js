
let lastDate = 0;
let stats = {
    tabCount: {today: 0, all: 0}
};

function curDate() {
    return Math.floor(new Date() / 86400000);
}

function update() {
    if (lastDate != curDate()) {
        for (const key in stats) {
            stats[key].today = 0;
        }
        lastDate = curDate();
    }
    chrome.storage.sync.set({stats: stats, lastDate: lastDate});
}

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({
        stats, lastDate
    });
    console.log("PurpleStats loaded");
    update();
});

chrome.tabs.onCreated.addListener(function(tab) { 
    update();
    stats.tabCount.today++;
    stats.tabCount.all++;
    update();
});