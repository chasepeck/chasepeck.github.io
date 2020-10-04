var fakeAdPaths=["/ads/Execution.png","/ads/Graphic design.png","/ads/John Code.png","/ads/Rich quick.png","/ads/Secrets.png",
"/ads/Abstract Art.png","/ads/Anonymous Classes.png","/ads/Chase Peck for President.png","/ads/Click It.png","/ads/Glasses for Seniors.png",
"/ads/Kindness Kills.png","/ads/Never Too Young.png","/ads/Other Candidates.png","/ads/Richard Danger Schitzelburgh.png","/ads/Save Money.png","/ads/X-Tra Long Peanut.png",];
var adlist={
    "/ads/Execution.png": "/ads/p/execution.html",
    "/ads/Graphic design.png": "/ads/p/graphicdesign.html",
    "/ads/John Code.png": "/ads/p/johncode.html",
    "/ads/Rich quick.png": "/ads/p/richquick.html",
    "/ads/Secrets.png": "/ads/p/secrets.html",
    "/ads/Abstract Art.png": "/ads/p/abstractart.html",
    "/ads/Anonymous Classes.png": "/ads/p/anonymousclasses.html",
    "/ads/Chase Peck for President.png": "/ads/p/president.html",
    "/ads/Click It.png": "/ads/p/thanks.html",
    "/ads/Glasses for Seniors.png": "/ads/p/glassesforseniors.html",
    "/ads/Kindness Kills.png": "/ads/p/kindnesskills.html",
    "/ads/Never Too Young.png": "/ads/p/president.html",
    "/ads/Other Candidates.png": "/ads/p/president.html",
    "/ads/Richard Danger Schitzelburgh.png": "/ads/p/dickdanger.html",
    "/ads/Save Money.png": "/ads/p/savemoney.html",
    "/ads/X-Tra Long Peanut.png": "/ads/p/peanuts.html",
}
var fakeadslots = document.getElementsByClassName("fakead");
for(i=0;i<fakeadslots.length;i++){
    var randnum = Math.floor(Math.random()*fakeAdPaths.length);
    fakeadslots[i].href = adlist[fakeAdPaths[randnum]];
    fakeadslots[i+1].src = fakeAdPaths[randnum];
}