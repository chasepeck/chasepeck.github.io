fetch("https://api.github.com/users/chasepeck/gists")
	.then(response => response.text())
	.then(text => {
		var repodata = JSON.parse(text);
		for(var i = 0; i < repodata.length; i++) {
			var repos = document.getElementById("gists-list");
			repos.innerHTML += "<li><a href='" + repodata[i].html_url + "'>" + Object.keys(repodata[i].files)[0] + "</a><i>" + repodata[i].description + "</i>";
		}
	});
