document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('checkPage');
  var hmpage = document.getElementById('home');
  var save = document.getElementById('commit');
  var refresh = document.getElementById('refresh');
  function reloadtab(i){
    chrome.tabs.update({url:i});
  }
  function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }
  checkPageButton.addEventListener('click', function() {
    chrome.tabs.update({
         url: "https://www.supremenewyork.com/shop/all"
    });
    chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
       if(changeInfo.status == "complete"){
         chrome.tabs.getSelected(null,function(tab) {
           if(tab.url=="https://www.supremenewyork.com/checkout"){
             chrome.tabs.executeScript(null,{file:"fill.js"});
           }else if(tab.title.includes("Supreme:")){
             //chrome.tabs.query({active:true,windowType:"normal", currentWindow: true},function(d){console.debug(d);});
             sleep(100);
             chrome.tabs.executeScript(null,{file:"putcart.js"});
             sleep(700);
             chrome.tabs.executeScript(null,{file:"h_checkout.js"});
           }else if(tab.title == "Supreme"){
             //open search
             //chrome.tabs.executeScript(null,{code:"var item = 'B anymfju0o';"});
             chrome.tabs.executeScript(null,{file:"search.js"});
             chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
               reloadtab(request);
             });
           };
         });
      };
    });
  });

  //auto input img code from data still failed
  // if(document.querySelector('#imgcode').value == null){
  //   chrome.storage.sync.get('i_code', function(obj) {
  //     document.querySelector('#imgcode').value =obj.i_code;
  //   });
  // };
  save.addEventListener('click',function(){
    if(document.querySelector('#imgcode').value != null){
      //text got value and set data to local
      var value = document.querySelector('#imgcode').value;
      chrome.storage.sync.set({'i_code': value}, function() {
        console.log('Settings saved to:' + value);
      });
    }else{
      alert("We need img code to run");//alert dont have data
    };
  });
  refresh.addEventListener('click',function(){
    chrome.storage.sync.get('i_code', function(obj) {
      document.querySelector('#imgcode').value =obj.i_code;
    });
  });
  hmpage.addEventListener('click',function(){
    chrome.tabs.update({
         url: "https://www.supremenewyork.com/shop/all"
    });
  });
});
//chrome.tabs.query({active:true,windowType:"normal", currentWindow: true},function(d){console.debug(d);})
