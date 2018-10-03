function fillform(){
  chrome.storage.sync.get('o_name', function(obj) {
    document.querySelector('[id="order_billing_name"]').value = obj['o_name'];
  });
  chrome.storage.sync.get('o_email', function(obj) {
    document.querySelector('[id="order_email"]').value = obj['o_email'];
  });
  chrome.storage.sync.get('o_tel', function(obj) {
    document.querySelector('[id="order_tel"]').value = obj['o_tel'];
  });
  chrome.storage.sync.get('o_zip', function(obj) {
    document.querySelector('[id="order_billing_zip"]').value = obj['o_zip'];
  });
  chrome.storage.sync.get('o_state', function(obj) {
    document.querySelector('[id="order_billing_state"]').value = obj['o_state'];
  });
  chrome.storage.sync.get('o_add1', function(obj) {
    document.querySelector('[id="order_billing_city"]').value = obj['o_add1'];
  });
  chrome.storage.sync.get('o_add2', function(obj) {
    document.querySelector('[id="order_billing_address"]').value = obj['o_add2'];
  });
  chrome.storage.sync.get('o_card', function(obj) {
    document.querySelector('[id="cnb"]').value = obj['o_card'];
  });
  chrome.storage.sync.get('o_month', function(obj) {
    document.querySelector('[id="credit_card_month"]').value = obj['o_month'];
  });
  chrome.storage.sync.get('o_year', function(obj) {
    document.querySelector('[id="credit_card_year"]').value = obj['o_year'];
  });
  chrome.storage.sync.get('o_cvv', function(obj) {
    document.querySelector('[id="vval"]').value = obj['o_cvv'];
  });
  document.querySelector('[id="order_terms"]').click();
}
function buy(){
  document.querySelector('input[type="submit"][value="購入する"]').click();
}
console.log("filling");
fillform();
console.log("fill done");
