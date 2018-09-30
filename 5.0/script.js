//<script src="http://ajax.aspnetcdn.com/ajax/jquery/jquery-1.8.0.js" type="text/javascript"></script>
function getElementByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
};
var evt = document.createEvent("MouseEvents");
evt.initMouseEvent("click", true, true, window,0, 0, 0, 0, 0, false, false, false, false, 0, null);

function fillform(){
  document.querySelector('[id="order_billing_name"]').value = "xxx";
  document.querySelector('[id="order_email"]').value = "xxx";
  document.querySelector('[id="order_tel"]').value = "xxx";
  document.querySelector('[id="order_billing_zip"]').value = "1340084";
  document.querySelector('[id="order_billing_state"]').value =" 東京都";
  document.querySelector('[id="order_billing_city"]').value = "江戸川区東葛西";
  document.querySelector('[id="order_billing_address"]').value = "5-36-10";
  document.querySelector('[id="cnb"]').value = "1234567890";
  document.querySelector('[id="credit_card_month"]').value = "10";
  document.querySelector('[id="credit_card_year"]').value = "2021";
  document.querySelector('[id="vval"]').value = "xxx";
  document.querySelector('[id="order_terms"]').value = "xxx";
  document.querySelector('[id="order_terms"]').click();
}
function buy(){
  setInterval(30000);
  document.querySelector('input[type="submit"][value="購入する"]').click();
}
