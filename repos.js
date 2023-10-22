const leftmin = -20;
const leftmax = 20;
const topmin = 0;
const topmax = 10;

var xhttp = new XMLHttpRequest;
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var repodata = JSON.parse(this.responseText);
        var i;
        for(i = 0; i < repodata.length; i++){
            document.getElementById("repos").innerHTML +=
                "<li style='margin-left: " + (Math.random() * (leftmax - leftmin) - leftmin).toString() + "px; margin-top: "
                + (Math.random() * (topmax - topmin) - topmin).toString() + "px;'><a href=\"" + repodata[i].html_url
                + "\">" + repodata[i].name
                + " <i>" + repodata[i].description + "</i></a></li>";
        }
    }
}
xhttp.open("GET", "https://api.github.com/users/chasepeck/repos", true);
xhttp.send();

var elements = document.getElementsByTagName("li");
for(var i = 0; i < elements.length; i++) {
    elements[i].style = "margin-left: " + (Math.random() * (leftmax - leftmin) - leftmin).toString() + "px; margin-top: " + (Math.random() * (topmax - topmin) - topmin).toString() + "px;";
}
