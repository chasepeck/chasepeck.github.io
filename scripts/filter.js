function filter(id, keyword) {
	Array.from(
		document.getElementById(id)
		.getElementsByTagName("li")
	).forEach(function(item) {
			if(keyword != null && item.innerText.indexOf(keyword) < 0)
				item.style.display = "none";
			else
				item.style.display = "list-item";
		});
}
