function requestListener() {
  document.querySelector("#content").innerHTML = this.responseText;
};

onload = function() {
  var request = new XMLHttpRequest();
  request.onload = requestListener;
  request.open("GET", "package.json", true);
  request.send();
};
