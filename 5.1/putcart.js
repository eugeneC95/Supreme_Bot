function putcart(){
  document.querySelector('input[type="submit"][value="カートに入れる"]').click();
  console.log("Cart Inserted");

}
var link="https://www.supremenewyork.com/checkout";
putcart();
if (link != null){
  chrome.runtime.sendMessage(link, function(response) {
    console.log("url sent");
  });
}
