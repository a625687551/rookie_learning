// 所谓content-scripts，其实就是Chrome插件中向页面注入脚本的一种形式（虽然名为script，其实还可以包括css的），
// 借助content-scripts我们可以实现通过配置的方式轻松向指定页面注入JS和CSS（如果需要动态注入，可以参考下文），
// 最常见的比如：广告屏蔽、页面CSS定制，等等。

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  switch (request.type) {
    case 'get_editable':
      sendResponse(document.body.contentEditable);
      break;
    case 'toggle':
      // 打开复制
      document.body.contentEditable = ![true, 'true'].includes(
        document.body.contentEditable
      );
      // 移除关注可见
      document.getElementById("article_content").removeAttribute("style");
      // 移除关注可见的标签。
      let attention_tag = document.getElementsByClassName("hide-article-box");
      if(attention_tag.length >0){
        attention_tag[0].remove();
      }
    default:
      break;
  }
});