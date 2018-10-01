function searching(){
  var forEach = function (array, callback, scope) {
    for (var i = 0; i < array.length; i++) {
      callback.call(scope, i, array[i]);
    }
  };
  var target = 0;
  var articlelist = document.querySelectorAll('div.inner-article>a');
  var imglist = document.querySelectorAll('div.inner-article>a>img');
  forEach(imglist, function (index, value) {
    console.log(index, value);
    if(value.getAttribute("alt") == "Mnahafdzurs"){
      var link = articlelist[index].href;
      chrome.tabs.sendMessage(null,articlelist[index].href,function(response) {
         console.log('Sent:' + response);
      });
      
    };
  });
};
console.log("Search Starting");
searching();
console.log("Search Complete");
