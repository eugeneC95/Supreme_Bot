document.addEventListener('DOMContentLoaded', function() {
  var keyword = "";
  var checkPageButton = document.getElementById('checkPage');
  function reloadtab(i){
    chrome.tabs.update({url:i});
  }
  checkPageButton.addEventListener('click', function() {
    chrome.tabs.update({
         url: "https://www.supremenewyork.com/shop/all"
    });
    chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
       if(changeInfo.status == "complete"){
         chrome.tabs.getSelected(null,function(tab) {
           if(tab.title == "Supreme"){
             //open search
             chrome.tabs.executeScript(null,{file:"search.js"});
             chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
               reloadtab(request);
             });
           }else if (tab.title != "Supreme") {
             //chrome.tabs.query({active:true,windowType:"normal", currentWindow: true},function(d){console.debug(d);})
             chrome.tabs.executeScript(null,{file:"putcart.js"});
             chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
               reloadtab(request);
             });
           };
         });
      };
    });
  });
});
//chrome.tabs.query({active:true,windowType:"normal", currentWindow: true},function(d){console.debug(d);})
