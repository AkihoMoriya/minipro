window.onload = function() {
  var address, body;
  var sendmail = document.getElementById("send");
  sendmail.onclick  = function() {
    body = (document.getElementById("name").value) + (document.getElementById("phone").value) + (document.getElementById("color").value) + (document.getElementById("size").value);
    address = "t18809am@keio.jp"
    location.href = "mailto" + address + "?body=" + body;
  }
}
