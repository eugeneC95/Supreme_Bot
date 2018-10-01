document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('checkPage');
  var boughtbutton = document.getElementById('bought');

  boughtbutton.addEventListener('click',function(){
    chrome.browserAction.setBadgeText({
      text: 'click'
    });
    chrome.browserAction.setBadgeBackgroundColor({
      color: 'red'
    });

    var newURL = "https://www.supremenewyork.com/shop/all"; //https://www.supremenewyork.com/shop/all #http://206.189.90.203/career/supreme/v5.0/
    //chrome.tabs.create({ url: newURL });
    //chrome.tabs.update();
    chrome.tabs.create({ url: newURL }, function(tab) {
       alert(tab.id);
    });
    alert("hi");
  });
  function newtab(x){
    chrome.tabs.create({url: x });
  }
  checkPageButton.addEventListener('click', function() {
    var newURL = "https://www.supremenewyork.com/shop/all"; //https://www.supremenewyork.com/shop/all #http://206.189.90.203/career/supreme/v5.0/
    chrome.tabs.create({ url: newURL });
    //chrome.tabs.update();
    chrome.tabs.executeScript(null,{file:"search.js"}); //search
    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
    {
        console.log('Got Data:');
        console.log(request, sender, sendResponse);
        sendResponse(JSON.stringify(request));
        newtab(request);
        if(request != null){
          chrome.tabs.executeScript(null,{file:'putcart.js'});
          //newtab("https://www.supremenewyork.com/checkout");
          //chrome.tabs.create({ url: "https://www.supremenewyork.com/checkout"})
        }


    });
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

      console.log("after");
    });
  });
});
