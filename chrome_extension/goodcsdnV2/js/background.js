// chrome.browserAction.onClicked.addListener(() => {
//     let url = "https://blog.csdn.net/";
//     chrome.tabs.create({url});
// });

var callback = function (detail) {
    // alert("googd");
    return {cancel: true};
};

var filter = {
    urls: [
        "https://g.csdnimg.cn/common/csdn-login-box/*",
        // "https://vip.csdn.net/*",
        // "*://kunpeng.csdn.net/ad/*"
        "https://g.csdnimg.cn/common/csdn-toolbar/csdn-toolbar.js",
    ]
};
var opt_extraInfoSpec = ["blocking"];
chrome.webRequest.onBeforeRequest.addListener(callback, filter, opt_extraInfoSpec);