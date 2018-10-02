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
    //console.log(index, value); //show all data that got
    if(value.getAttribute("alt") == "Mnahafdzurs"){
      var link = articlelist[index].href;
      chrome.runtime.sendMessage(link, function(response) {
        console.log("url sent");
      });
    };
  });
};
console.log("Search Starting");
searching();
console.log("Search Complete");
