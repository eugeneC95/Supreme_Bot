function searching(){
  //Sr2lrcybsgo
  //*[@id="container"]/article[1]/div[1]/a[1]/img[1]
  //getting all img alt to check
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

      chrome.runtime.sendMessage(articlelist[index].href, function(response) {
          console.log('Sent:' + response);
      });
      window.postMessage(articlelist[index].href, '*');

    };
  });
};
console.log("Search Starting");
searching();
console.log("Search Complete");
