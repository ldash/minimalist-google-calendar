var initPopup = function(){
    document.getElementById('options').addEventListener('click', options);
    document.getElementById('toggle').addEventListener('click', toggle);
    document.getElementById('reload').addEventListener('click', reload);
};

document.addEventListener('DOMContentLoaded', initPopup);

function options() {
    if (localStorage["uncheckedUpdate"] == "true") {
        chrome.tabs.create({url:chrome.extension.getURL("options.html#update")});
        chrome.pageAction.setIcon({tabId: tab.id, path:"img/icons/icon19.png"});
        chrome.pageAction.setTitle({tabId: tab.id, title:"Minimalist for Google Calendar Options"});
        localStorage["uncheckedUpdate"] = false;
    } else {
        chrome.tabs.create({url:chrome.extension.getURL("options.html")});
    }
}

function toggle() {
    chrome.runtime.sendMessage({action: 'toggle'}, function(response){});
    reload();
}

function reload() {
    chrome.runtime.sendMessage({action: 'reload'}, function(response){});
}

