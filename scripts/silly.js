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
