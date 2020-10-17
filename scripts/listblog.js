var xhttp = new XMLHttpRequest;
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var blogtable=this.responseText.split("\n");
        var i;
        for(i=0;i<blogtable.length;i++){
            var figspace=document.getElementById("figspace");
            var currentelementsplit=blogtable[blogtable.length-i-1].split("_");
            figspace.innerHTML+='<figure style="display: inline-block;"><a href="/blog/'+currentelementsplit[0]+'.html'+
            '"><img style="vertical-align: top;" src="/assets/blogicon.gif" alt="blogicon" height="150px"></img></a>'+
            '<figcaption style="color:black; text-align: center;">'+currentelementsplit[1]+'<br>'+currentelementsplit[0]+
            '</figcaption></figure>';
        }
    }
}
xhttp.open("GET","/blog/blogtable.txt",true);
xhttp.send();