var e=function(e,t,n,o,i){var a=document.createElement("div");a.className="notification ".concat(i),a.style.position="absolute",a.style.right="".concat(t,"px"),a.style.top="".concat(e,"px");var s=document.createElement("h2");s.className="title",s.textContent=n,a.appendChild(s);var c=document.createElement("p");c.textContent=o,a.appendChild(c),document.body.appendChild(a),setTimeout(function(){document.body.removeChild(a)},2e3)};e(10,10,"Title of Success message","Message example.\n Notification should contain title and description.","success"),e(165,10,"Title of Error message","Message example.\n Notification should contain title and description.","error"),e(290,10,"Title of Warning message","Message example.\n Notification should contain title and description.","warning");
//# sourceMappingURL=index.024e68ba.js.map
