function randomSubtitle() {
  var subtitles = [
	"GRAND AMAZINGNESS OF THE AMAZING™",
	"HA HA HA! YOU'VE FALLEN FOR MY TRAP! PREPARE FOR ECZEMA!",
	"i'm not a WEEB i'm a GLOBAL CITIZEN",
	"♫ na-na-na 塊魂 ♫",
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
	"Yeow!"
  ];
  document.getElementById("subtitle").innerHTML = subtitles[Math.floor(Math.random() * subtitles.length)];
}

function randomAcrostic() {
  var acrostics = [
`C hase
H ase
A se
S e
E

P eck
E ck
C k
K`,

`C ome on,
H am sandwiches again?
A lways with the ham
S andwiches...
E nough already!

P lease, I beg you, something
E lse other than ham sandwi
C hes, I'm going to
K ill myself!`,

`C In my younger and more
H vulnerable years my father
A gave me some advice that I've
S been turning over in my mind
E ver since.

P "Whenever you feel like criticizing anyone,"
E he told me, "just remember that all the people
C in this world haven't had the advantages
K that you've had."`,

`C it down
H and poised to write
A n acrostic poem!
S o fun and
E xciting!

P a pa pa, la la la
E ndless days writing
C reatively, poems
K ongregate.`,

`C 古池や
H 蛙飛び込む
A 水の音
S
E

P
E
C
K`,

`C oo〜coo!
H oot〜hoot!
A rf〜arf!
S ss〜sss…
E ee〜haww!

P too〜hrff!
E kk〜ekk…
C roak〜croak!
K akka〜koom!`,
  ];
  document.getElementById("acrostic").innerText = acrostics[Math.floor(Math.random() * acrostics.length)];
}
