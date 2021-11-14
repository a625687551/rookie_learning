var callback = function (details) {
    console.log("fuck....csdn");
    return {cancel: true};
};
var filter = {urls: ["https://*.csdnimg.cn/common/*"]};
var opt_extraInfoSpec = ["blocking"];

chrome.webRequest.onBeforeRequest.addListener(callback, filter, opt_extraInfoSpec)

// chrome.webRequest.onBeforeRequest.addListener(
//   function(detail) {
//       console.log("fuuck,...");
//       return {cancel : true};
//       },
//   {urls:[
//       "*://g.csdnimg.cn/common/csdn-login-box/*"
//     ]},
//   extraInfoSpec = ["blocking"] //类型blocking为拦截,
// );

//注释广告
//"*://g.csdnimg.cn/common/csdn-login-box/*",
//           "*://g.csdnimg.cn/common/csdn-toolbar/*",
//           "*://g.csdnimg.cn/common/csdn-report/report*",