var disableAvatar = document.getElementById('avatar'),
    disableSign = document.getElementById('sign'),
    compimg = document.getElementById('compimg'),
    disableCustombg = document.getElementById('bg'),
    disableLogo = document.getElementById('logo'),
    frigid = document.getElementById('frigid');
function save_options() {
    chrome.storage.sync.set({
        disableAvatar: disableAvatar.checked,
        disableSign: disableSign.checked,
        disableLogo: disableLogo.checked,
        disableCustombg: disableCustombg.checked,
        compimg: compimg.checked,
        frigid: frigid.checked
    });
}

function restore_options() {
    chrome.storage.sync.get({
        disableAvatar: false,
        disableSign: false,
        disableLogo: false,
        disableCustombg: false,
        compimg: false,
        frigid: false
    }, function (items) {
        disableAvatar.checked = items.disableAvatar;
        disableSign.checked = items.disableSign;
        disableLogo.checked = items.disableLogo;
        disableCustombg.checked = items.disableCustombg;
        compimg.checked = items.compimg;
        frigid.checked = items.frigid;
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('form').addEventListener('input', save_options);