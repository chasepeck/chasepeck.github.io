var xhttp = new XMLHttpRequest;
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var repodata = JSON.parse(this.responseText);
        var i;
        for(i = 0; i < repodata.length; i++){
            document.getElementById("repos").innerHTML +=
                "<li><a href=\"" + repodata[i].html_url
                + "\">" + repodata[i].name
                + " <i>" + repodata[i].description + "</i></a></li>";
        }
    }
}
xhttp.open("GET", "https://api.github.com/users/chasepeck/repos", true);
xhttp.send();
