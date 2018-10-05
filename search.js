chrome.storage.sync.get((codes), function(obj) {
  //document.querySelector('#imgcode').value =obj.i_code;
  var boo = false;
  var item = obj[codes];
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
      boo = true;
      chrome.runtime.sendMessage(link, function(response) {
        console.log("sent: "+link);
      });

    };
  });
  console.log("Search Complete");
  if(boo == false){
    var link = "notfound";
    chrome.runtime.sendMessage(link, function(response) {
      console.log("sent: "+link);
    });
  };
});
