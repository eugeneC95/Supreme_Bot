var ifrm = document.createElement("iframe");
ifrm.setAttribute("src", chrome.extension.getURL('toolbar.html'));
ifrm.style.height = "35px";
document.body.appendChild(ifrm);
