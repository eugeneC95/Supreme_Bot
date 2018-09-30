document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('checkPage');
  checkPageButton.addEventListener('click', function() {
    var newURL = "http://stackoverflow.com/";
    chrome.tabs.create({ url: newURL });

    });
  });
