function randomSubtitle() {
  var subtitles = [
	"i'm not a WEEB i'm a GLOBAL CITIZEN",
	"♪ na-na-na 塊魂 ♪",
	"Live Fast Die Slow; Live Slow Die Fast",
	"Everything is Everything is what you're just about to say",
	"ニャ〜♥ (*´ω｀*)",
	"HELP I GOT MYSELF STUCK IN THE NUCLEAR REACTOR AGAIN",
	"why don’t you Gobi Desert somewhere else",
	"competency is determined by number of semicolons per 100 punctuation marks",
	"html written by hand",
	"through adversity, advertisements",
	"to err is human, but to air is fan",
	"shebang! hebang! theybang!",
	"GROUSE?!",
	"WonderLust - Aphrodesiac White Bread",
	"ma musique jazzical",
	"i just farted a fracking business",
	"SUBDUE, NEUTRALIZE",
	"i'm lazy because of my chronic brain disease, not other shortcomings of my character",
	"as black and white as gender isn't!",
	"as not black and white as gender isn't not!",
	"naïve adolescent purple poetry",
	"open mic and see all his organs!",
	"yeow!",
	"photophotophotogiftmap1",
	"what's the data, theta?",
	"穃粫挧橸膤袮閠妛暃椦軅鵈恷碵駲墸壥彁蟐",
	"⍼⍼⍼⍼⍼⍼⍼⍼⍼⍼⍼⍼⍼",
	"Grant, what're we drinkin'?",
	"“In short, all good things are wild and free.” - Henry David Thoreau"
  ];
  document.getElementById("subtitle").innerHTML = subtitles[Math.floor(Math.random() * subtitles.length)];
}

fetch("/sidebar.html")
	.then(response => response.text())
	.then(text => {
		// Create sidebar
		var sidebar = document.createElement("div");
		var content = document.getElementsByClassName("main-content");
		sidebar.innerHTML = text;
		sidebar.classList.add("sidebar");
		if(window.screen.width < 800)
			content[content.length - 1].parentNode.insertBefore(sidebar, content[content.length - 1].nextSibling);
		else
			content[0].parentNode.insertBefore(sidebar, content[0]);

		// Enable subelements
		document.querySelectorAll(".sidebar .sub").forEach(function(elem) {
			if(elem.getAttribute("sub") == document.body.getAttribute("name")) {
				elem.style = "display: block;";
			}
		});

		// Highlight current page
		try {
			document.getElementById(document.body.getAttribute("sub")).style = "display: block; color: var(--fg);";
		} catch {
			try {
				document.getElementById(document.body.getAttribute("name")).style = "color: var(--fg);";
			} catch {}
		}
		randomSubtitle();
	});
