document.addEventListener('DOMContentLoaded', function() {
  var keyword = "";
  var checkPageButton = document.getElementById('checkPage');
  function getURL() {
    chrome.runtime.sendMessage({greeting: "GetURL"},
        function (response) {
            tabURL = response.navURL;
            $("#tabURL").text(tabURL);
        });
  }
  checkPageButton.addEventListener('click', function() {
    chrome.tabs.update({
         url: "https://www.supremenewyork.com/shop/all"
    });
    chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
       if(changeInfo.status == "complete"){
         chrome.tabs.getSelected(null,function(tab) {
            if(tab.title.includes(keyword)){

            };
         });
         //open search
         chrome.tabs.executeScript(null,{file:"search.js"});
         chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
           console.log(request, sender, sendResponse);
           sendResponse(JSON.stringify(request));
           alert(request);
         });
       }
    });
  });
});
//chrome.tabs.query({active:true,windowType:"normal", currentWindow: true},function(d){console.debug(d);})
