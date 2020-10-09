const adlist={
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
    "/ads/Shenzhen Electric Ad.png": "/ads/shenzhenelectric"
}
var fakeadslots=document.querySelectorAll(".fakead");
var i;
for (i=0;i<fakeadslots.length;i+=2){
    var randnum = Math.floor(Math.random()*Object.keys(adlist).length);
    fakeadslots[i].href = adlist[Object.keys(adlist)[randnum]];
    fakeadslots[i].querySelector(".fakead").src = Object.keys(adlist)[randnum];
}