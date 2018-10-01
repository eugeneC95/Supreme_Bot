chrome.tabs.onCreated.addListener(function(tab) {
//    INSERT HTML HERE
//    chrome.tabs.create({url: ""});
  var value = "opened";
  chrome.storage.local.set({keys: value}, function() {
  });
});
