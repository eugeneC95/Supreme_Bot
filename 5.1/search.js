chrome.storage.sync.get('i_code', function(obj) {
  //document.querySelector('#imgcode').value =obj.i_code;
  var item = obj.i_code;
  console.log("Searching:" + item);
  var forEach = function (array, callback, scope) {
    for (var i = 0; i < array.length; i++) {
      callback.call(scope, i, array[i]);
    }
  };
  var articlelist = document.querySelectorAll('div.inner-article>a');
  var imglist = document.querySelectorAll('div.inner-article>a>img');
  forEach(imglist, function (index, value) {
    //console.log(index, value); //show all data that got
    if(value.getAttribute("alt") == item){
      var link = articlelist[index].href;
      chrome.runtime.sendMessage(link, function(response) {
        console.log("url sent");
      });
    };
  });
  console.log("Search Complete");
});
