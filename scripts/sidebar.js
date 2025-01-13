function randomSubtitle() {
  var subtitles = [
	"GRAND AMAZINGNESS OF THE AMAZING™",
	"HA HA HA! YOU'VE FALLEN FOR MY TRAP! PREPARE FOR ECZEMA!",
	"i'm not a WEEB i'm a GLOBAL CITIZEN",
	"♪ na-na-na 塊魂 ♪",
	"go back to the trees",
	"fun with HTML",
	"Live Fast Die Slow; Live Slow Die Fast",
	"Everything is Everything<br>is what you're just about to say",
	"ニャ〜♥ (*´ω｀*)",
	"no, not HIM",
	"MN-8537 Fluxional Dual-rod Nanorefractor",
	"HELP I GOT MYSELF STUCK IN THE NUCLEAR REACTOR AGAIN",
	"Why don’t you Gobi Desert somewhere else",
	"Competency is determined by number of semicolons per 100 punctuation marks",
	"Carter's Babies and Kids: He doesn't want them anymore",
	"HTML written by hand",
	"Through adversity, advertisements",
	"To err is human, but to air is fan",
	"Shebang! Hebang! Theybang!",
	"GROUSE?!",
	"WonderLust - Aphrodesiac White Bread",
	"Ma musique jazzical",
	"I just farted a fracking business",
	"SUBDUE, NEUTRALIZE",
	"All of my zero friends can attest that I am normal",
	"I'm lazy because of my chronic brain disease, not other shortcomings of my character",
	"What do you call someone who despises hippos? Hippo critical",
	"As black and white as gender isn't!",
	"As not black and white as gender isn't not!",
	"naïve adolescent purple poetry",
	"Open mic and see all his organs!",
	"Yeow!",
	"photophotophotogiftmap1",
	"What's the data, theta?",
	"穃粫挧橸膤袮閠妛暃椦軅鵈恷碵駲墸壥彁蟐",
	"⍼⍼⍼⍼⍼⍼⍼⍼⍼⍼⍼⍼⍼",
	"Grant, what're we drinkin'?",
	"chase peck: an incompetent lagomorph who will get us all killed",
	"i take all credit. nothing is plundered."
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
