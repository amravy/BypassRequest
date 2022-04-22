console.log("background running");

chrome.browserAction.onClicked.addListener(buttonClicked) 

function buttonClicked() {
    console.log("button clicked")
    let msg = {
        txt = "hello"
    }
    chrome.tabs.sendMessage(tab.id, msg)
}