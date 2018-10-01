document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('checkPage');
  function newtab(x){
    chrome.tabs.create({url: x });
  }
  checkPageButton.addEventListener('click', function() {
    var newURL = "https://www.supremenewyork.com/shop/all"; //https://www.supremenewyork.com/shop/all #http://206.189.90.203/career/supreme/v5.0/
    //chrome.tabs.create({ url: newURL });
    //chrome.tabs.update();
    document.addEventListener('DOMContentLoaded', function() {
        
    });
    chrome.storage.local.get(['keys'], function(results) {
      alert(results.keys);
      console.log(results.keys);
    });

    chrome.tabs.executeScript(null,{file:"search.js"}); //search
    chrome.storage.local.get(['key'], function(result) {
      console.log(result.key);
      if (result.key.includes("supreme")) {
         newtab(result.key);
         chrome.tabs.executeScript(null,{file:'putcart.js'});
       }
    });

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {


      // chrome.tabs.create({ url: "https://www.supremenewyork.com/checkout"})
      // chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
      // {
      //     console.log('Got Data:');
      //     console.log(request, sender, sendResponse);
      //     sendResponse(JSON.stringify(request));
      //
      //     if (request.includes("supreme")) {
      //         newtab(request);
      //           chrome.tabs.executeScript(null,{file:'putcart.js'});
      //     } else if (status == "done") {

      //     };
      //     // chrome.tabs.executeScript(
      //     //    {code: 'document.body.style.backgroundColor="orange"'});
      // });
      console.log("after");
    });
  });
});
