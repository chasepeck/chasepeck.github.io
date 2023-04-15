function load_data(fn) {
  var request = new XMLHttpRequest;
  request.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          data = JSON.parse(this.responseText);
          fn(data);
      }
  }
  request.open("GET","/data.json");
  request.send();
}
