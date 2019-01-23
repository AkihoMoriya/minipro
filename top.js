function timeout_callback() {
  if (window.confirm("作品紹介のページもぜひご覧ください！")){
    location.href = "file:///Users/moriyaakiho/Desktop/minipro/listall.html";
  } else {
    window.alert("お時間ある時にぜひ！");
  }
}

setTimeout(timeout_callback,20000);
