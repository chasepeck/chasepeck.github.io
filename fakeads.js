var fakeAdPaths=["/ads/Execution.png","/ads/Graphic design.png","/ads/John Code.png","/ads/Rich quick.png","/ads/Secrets.png"];
var fakeAdHrefs=["/ads/p/execution.html","/ads/p/graphicdesign.html","/ads/p/johncode.html","/ads/p/richquick.html","/ads/p/secrets.html"];
var fakeadslots = document.getElementsByClassName("fakead");
for(i=0;i<fakeadslots.length;i++){
    var randnum = Math.floor(Math.random()*fakeAdPaths.length);
    fakeadslots[i].href = fakeAdHrefs[randnum];
    fakeadslots[i+1].src = fakeAdPaths[randnum];
}