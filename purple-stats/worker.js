
let color = "#ee4444";

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ color });
    console.log("Woooo!", `color: ${color}`);
})