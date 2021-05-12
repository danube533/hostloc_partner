
var headLoaded = false;
var optionsData = {};

chrome.storage.sync.get(['disableAvatar', 'disableSign', 'disableLogo', 'compimg', 'disableCustombg', 'frigid'], function (res) {
    optionsData = res;
});

window.addEventListener("DOMSubtreeModified", function () {
    var num = document.getElementsByTagName('head').length;
    if (num > 0 && !headLoaded) {
        headLoaded = true;
        initHead();
    }
});

function initHead() {
    var html = document.getElementsByTagName('html')[0];
    html.classList.add('locCSS');
    if (optionsData.disableLogo) {
        html.classList.add('disableLogo');
    }
    if (optionsData.disableSign) {
        html.classList.add('disableSign');
    }
    if (optionsData.disableAvatar) {
        html.classList.add('disableAvatar');
    }
    if (optionsData.compimg) {
        html.classList.add('compimg');
    }
    if (optionsData.disableCustombg) {
        html.classList.add('disableCustombg');
    }
    if (optionsData.frigid) {
        html.classList.add('frigid');
    }
}