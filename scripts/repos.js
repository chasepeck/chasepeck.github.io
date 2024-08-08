fetch("https://api.github.com/users/chasepeck/repos")
	.then(response => response.text())
	.then(text => {
		var repodata = JSON.parse(text);
		for(var i = 0; i < repodata.length; i++) {
			var repos = document.getElementById("repos");
			repos.innerHTML += "<li><a href='" + repodata[i].html_url + "'>" + repodata[i].name + "</a><i>" + repodata[i].description + "</i>";
		}
	});
