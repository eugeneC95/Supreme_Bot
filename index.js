document.addEventListener('DOMContentLoaded', function() {
  var start = document.getElementById('start_btn');
  var hmpage = document.getElementById('home_btn');
  var save = document.getElementById('save_btn');
  var refresh = document.getElementById('refresh_btn');
  var edit = document.getElementById('edit_btn');
  var test = document.getElementById('test');
  function reloadtab(i){
    chrome.tabs.update({url:i});
  }
  function newtab(i){
    chrome.tabs.create({url:i});
  }
  function autoinput(id,data){
    if(document.querySelector(id).value == ""){
      chrome.storage.sync.get(data, function(obj) {
        document.querySelector(id).value =obj[data];
      });
      document.querySelector('#start_btn').disabled = false;
    }else{document.querySelector('#start_btn').disabled = true;};
  };
  function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }
  start.addEventListener('click', function() {
      chrome.tabs.update({
           url: "https://www.supremenewyork.com/shop/all"
      });
      sleep(150);
      chrome.tabs.executeScript(null,{file:"search.js"});
  });
  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    sendResponse(JSON.stringify(request));
    if(request.includes("shop")){
      reloadtab(request);
      chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
        if(changeInfo.status == "complete"){
          if(tab.url.includes('checkout') == true){
            chrome.tabs.executeScript(null,{file:"fill.js"});
          }else if(tab.url.includes('all') == false){
            sleep(200);
            chrome.tabs.executeScript(null,{file:"putcart.js"});
          };
        };
      });
    }else if (request =="notfound") {
      chrome.tabs.update({
        url: "https://www.supremenewyork.com/shop/all"
      });
      sleep(300);
      chrome.tabs.executeScript(null,{file:"search.js"});
    };
  });
  //auto input img code from data
  autoinput("#delays","delay");
  autoinput("#imgcode","i_code");
  autoinput("#order_name","o_name");
  autoinput("#order_email","o_email");
  autoinput("#order_tel","o_tel");
  autoinput("#order_zip","o_zip");
  autoinput("#order_state","o_state");
  autoinput("#order_add1","o_add1");
  autoinput("#order_add2","o_add2");
  autoinput("#order_card","o_card");
  autoinput("#order_month","o_month");
  autoinput("#order_year","o_year");
  autoinput("#order_cvv","o_cvv");
  edit.addEventListener('click',function(){
    chrome.tabs.update({
         url: "https://www.supremenewyork.com/shop/cart"
    });
  });
  save.addEventListener('click',function(){
    //text got value and set data to local
    chrome.storage.sync.set({'delay': document.querySelector('#delays').value}, function() {console.log("saved")});
    chrome.storage.sync.set({'i_code': document.querySelector('#imgcode').value}, function() {console.log("saved")});
    chrome.storage.sync.set({'o_name': document.querySelector('#order_name').value}, function() {console.log("saved")});
    chrome.storage.sync.set({'o_email': document.querySelector('#order_email').value}, function() {console.log("saved")});
    chrome.storage.sync.set({'o_tel': document.querySelector('#order_tel').value}, function() {console.log("saved")});
    chrome.storage.sync.set({'o_zip': document.querySelector('#order_zip').value}, function() {console.log("saved")});
    chrome.storage.sync.set({'o_state': document.querySelector('#order_state').value}, function() {console.log("saved")});
    chrome.storage.sync.set({'o_add1': document.querySelector('#order_add1').value}, function() {console.log("saved")});
    chrome.storage.sync.set({'o_add2': document.querySelector('#order_add2').value}, function() {console.log("saved")});
    chrome.storage.sync.set({'o_card': document.querySelector('#order_card').value}, function() {console.log("saved")});
    chrome.storage.sync.set({'o_month': document.querySelector('#order_month').value}, function() {console.log("saved")});
    chrome.storage.sync.set({'o_year': document.querySelector('#order_year').value}, function() {console.log("saved")});
    chrome.storage.sync.set({'o_cvv': document.querySelector('#order_cvv').value}, function() {console.log("saved")});
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
