let contentPort
chrome.runtime.onConnect.addListener(function(portFrom) {
   if(portFrom.name === 'background-content') {
      //This is how you add listener to a port.
      portFrom.onMessage.addListener(function(message) {
         //Do something to duck
      });
   }
});

//Send a message to a tab which has your content script injected
chrome.tabs.sendMessage(YOUR_TARGET_TAB_ID, {action: 'GET_DUCK'});
