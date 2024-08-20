function recent(dest, id, url, limit) {
	fetch(url)
		.then(response => response.text())
		.then(text => {
			var doc = document.implementation.createHTMLDocument().documentElement;
			doc.innerHTML = text;
			var items = [];
			doc.querySelectorAll("#" + id + " li a").forEach(function(item) {
				items.push(item);
			});
			items.sort(function(a, b) { return parseInt(b.getAttribute("num")) - parseInt(a.getAttribute("num")); });
			items.forEach(function(item) {
				var li = document.createElement("li");
				li.appendChild(item);
				if(document.getElementById(dest).childElementCount < limit) {
					document.getElementById(dest).appendChild(li);
				}
			});
		});
}
