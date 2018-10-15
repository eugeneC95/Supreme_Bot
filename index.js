document.addEventListener('DOMContentLoaded', function() {
  var start = document.getElementById('start_btn');
  var hmpage = document.getElementById('home_btn');
  var save = document.getElementById('save_btn');
  var refresh = document.getElementById('refresh_btn');
  var edit = document.getElementById('edit_btn');
  var card1 = document.getElementById('card1');
  var card2 = document.getElementById('card2');
  var coption = true;
  var codes="";
  function reloadtab(i){
    chrome.tabs.update({url:i});
  }
  function autoinput(id,data){
    chrome.storage.sync.get(data, function(obj) {
      document.querySelector(id).value =obj[data];
    });
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
      if(document.querySelector('input[type="radio"][name="selectcode"]:checked').value == "code1"){
        chrome.tabs.executeScript(null,{code:"codes = 'i_code1';"});
      }else if(document.querySelector('input[type="radio"][name="selectcode"]:checked').value == "code2"){
        chrome.tabs.executeScript(null,{code:"codes = 'i_code2';"});
      }else if(document.querySelector('input[type="radio"][name="selectcode"]:checked').value == "code3"){
        chrome.tabs.executeScript(null,{code:"codes = 'i_code3';"});
      }else if(document.querySelector('input[type="radio"][name="selectcode"]:checked').value == "code4"){
        chrome.tabs.executeScript(null,{code:"codes = 'i_code4';"});
      }
      chrome.tabs.executeScript(null,{file:"search.js"});
  });
  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    sendResponse(JSON.stringify(request));
    if(request.includes("shop")){
      reloadtab(request);
      chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
        if(changeInfo.status == "complete"){
          if(tab.url.includes('all') == false){
            sleep(200);
            chrome.tabs.executeScript(null,{file:"putcart.js"});
          };
        };
        if(tab.url.includes('checkout') == true){
          if(coption == true){
            chrome.tabs.executeScript(null,{code:"option = 'card1';"});
          }else if(coption == false){
            chrome.tabs.executeScript(null,{code:"option = 'card2';"});
          };
          chrome.tabs.executeScript(null,{file:"fill.js"});
        };
      });
    }else if (request =="notfound") {
      chrome.tabs.update({
        url: "https://www.supremenewyork.com/shop/all"
      });
      sleep(300);
      if(document.querySelector('input[type="radio"][name="selectcode"]:checked').value == "code1"){
        chrome.tabs.executeScript(null,{code:"codes = 'i_code1';"});
      }else if(document.querySelector('input[type="radio"][name="selectcode"]:checked').value == "code2"){
        chrome.tabs.executeScript(null,{code:"codes = 'i_code2';"});
      }else if(document.querySelector('input[type="radio"][name="selectcode"]:checked').value == "code3"){
        chrome.tabs.executeScript(null,{code:"codes = 'i_code3';"});
      }else if(document.querySelector('input[type="radio"][name="selectcode"]:checked').value == "code4"){
        chrome.tabs.executeScript(null,{code:"codes = 'i_code4';"});
      }
      chrome.tabs.executeScript(null,{file:"search.js"});
    };
  });
  //auto input img code from data
  autoinput("#delays","delay");
  autoinput("#imgcode1","i_code1");
  autoinput("#imgcode2","i_code2");
  autoinput("#imgcode3","i_code3");
  autoinput("#imgcode4","i_code4");
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
  coption = true;
  edit.addEventListener('click',function(){
    chrome.tabs.update({
         url: "https://www.supremenewyork.com/shop/cart"
    });
  });
  save.addEventListener('click',function(){
    //text got value and set data to local
    if(coption == true){
      chrome.storage.sync.set({'delay': document.querySelector('#delays').value}, function() {console.log("saved")});
      chrome.storage.sync.set({'i_code1': document.querySelector('#imgcode1').value}, function() {console.log("saved")});
      chrome.storage.sync.set({'i_code2': document.querySelector('#imgcode2').value}, function() {console.log("saved")});
      chrome.storage.sync.set({'i_code3': document.querySelector('#imgcode3').value}, function() {console.log("saved")});
      chrome.storage.sync.set({'i_code4': document.querySelector('#imgcode4').value}, function() {console.log("saved")});
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
    }else{
      chrome.storage.sync.set({'delay': document.querySelector('#delays').value}, function() {console.log("saved2")});
      chrome.storage.sync.set({'i_code1': document.querySelector('#imgcode1').value}, function() {console.log("saved2")});
      chrome.storage.sync.set({'i_code2': document.querySelector('#imgcode2').value}, function() {console.log("saved2")});
      chrome.storage.sync.set({'i_code3': document.querySelector('#imgcode3').value}, function() {console.log("saved2")});
      chrome.storage.sync.set({'i_code4': document.querySelector('#imgcode4').value}, function() {console.log("saved2")});
      chrome.storage.sync.set({'o_name2': document.querySelector('#order_name').value}, function() {console.log("saved2")});
      chrome.storage.sync.set({'o_email2': document.querySelector('#order_email').value}, function() {console.log("saved2")});
      chrome.storage.sync.set({'o_tel2': document.querySelector('#order_tel').value}, function() {console.log("saved2")});
      chrome.storage.sync.set({'o_zip2': document.querySelector('#order_zip').value}, function() {console.log("saved2")});
      chrome.storage.sync.set({'o_state2': document.querySelector('#order_state').value}, function() {console.log("saved2")});
      chrome.storage.sync.set({'o_add1_2': document.querySelector('#order_add1').value}, function() {console.log("saved2")});
      chrome.storage.sync.set({'o_add2_2': document.querySelector('#order_add2').value}, function() {console.log("saved2")});
      chrome.storage.sync.set({'o_card2': document.querySelector('#order_card').value}, function() {console.log("saved2")});
      chrome.storage.sync.set({'o_month2': document.querySelector('#order_month').value}, function() {console.log("saved2")});
      chrome.storage.sync.set({'o_year2': document.querySelector('#order_year').value}, function() {console.log("saved2")});
      chrome.storage.sync.set({'o_cvv2': document.querySelector('#order_cvv').value}, function() {console.log("saved2")});
    };
  });
  card1.addEventListener('click',function(){
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
    coption = true;
    console.log(coption);
  });
  card2.addEventListener('click',function(){
    autoinput("#order_name","o_name2");
    autoinput("#order_email","o_email2");
    autoinput("#order_tel","o_tel2");
    autoinput("#order_zip","o_zip2");
    autoinput("#order_state","o_state2");
    autoinput("#order_add1","o_add1_2");
    autoinput("#order_add2","o_add2_2");
    autoinput("#order_card","o_card2");
    autoinput("#order_month","o_month2");
    autoinput("#order_year","o_year2");
    autoinput("#order_cvv","o_cvv2");
    coption = false;
    console.log(coption);
  });
  refresh.addEventListener('click',function(){
  });
  hmpage.addEventListener('click',function(){
    chrome.tabs.update({
         url: "https://www.supremenewyork.com/shop/all"
    });
  });
});
//chrome.tabs.query({active:true,windowType:"normal", currentWindow: true},function(d){console.debug(d);})
