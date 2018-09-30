function putcart(){
  document.querySelector('input[type="submit"][value="カートに入れる"]').click();
  console.log("Cart Inserted");
}
putcart();
chrome.tabs.create({ url: "https://www.supremenewyork.com/checkout" });
