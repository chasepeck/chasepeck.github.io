const adlist={
    "/ads/Execution.png": "/ads/p/execution.html",
    "/ads/Graphic design.png": "/ads/p/graphicdesign.html",
    "/ads/John Code.png": "/ads/p/johncode.html",
    "/ads/Secrets.png": "/ads/p/secrets.html",
    "/ads/Anonymous Classes.png": "/ads/p/anonymousclasses.html",
    "/ads/Glasses for Seniors.png": "/ads/p/glassesforseniors.html",
    "/ads/Kindness Kills.png": "/ads/p/kindnesskills.html",
    "/ads/Never Too Young.png": "/ads/p/president.html",
    "/ads/Richard Danger Schitzelburgh.png": "/ads/p/dickdanger.html",
    "/ads/Shenzhen Electric Ad.png": "/ads/shenzhenelectric",
    "/ads/Hypernet.png": "/ads/p/hypernet.html",
    "/ads/CPFA.png": "/ads/p/cpfa.html",
    "/ads/Coolfun.png": "/ads/p/coolfun.html"
}
var fakeadslots=document.querySelectorAll(".fakead");
var i;
for (i=0;i<fakeadslots.length;i+=2){
    var randnum = Math.floor(Math.random()*Object.keys(adlist).length);
    fakeadslots[i].href = adlist[Object.keys(adlist)[randnum]];
    fakeadslots[i].querySelector(".fakead").src = Object.keys(adlist)[randnum];
}