var xhttp = new XMLHttpRequest;
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var gistdata = JSON.parse(this.responseText);
        var i;
        for(i=0;i<gistdata.length;i++){
            var figspace=document.getElementById("figspace");
            figspace.innerHTML+='<figure style="display:inline-block;background-color: blue; border-radius: 10px;padding:10px;background-image: url(/assets/repoicon_bg.png);background-size: contain;">'+
            '<a style="display: inline-block; color:yellow; margin:10px;"'+" href='"+gistdata[i].html_url+"'>"+Object.keys(gistdata[i].files)[0]+"</a>"+'<h2 style="font-size: 30px; font-weight: normal; color: yellow; font-style: italic; margin-bottom:25px;">'
            +gistdata[i].description+"</h2>";
        }
    }
}
xhttp.open("GET","https://api.github.com/users/chasepeck/gists",true);
xhttp.send();