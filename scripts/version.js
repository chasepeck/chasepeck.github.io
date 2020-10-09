var xhttp = new XMLHttpRequest;
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var commitdata = JSON.parse(this.responseText)[0].commit.message.split("\n")[0];
        document.getElementById("version").innerHTML = commitdata;
    }
}
xhttp.open("GET","https://api.github.com/repos/chasepeck/chasepeck.github.io/commits",true)
xhttp.send();