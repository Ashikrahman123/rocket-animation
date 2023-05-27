var tl = new TimelineMax({repeat: -1,repeatDelay: 0});
tl.from('.cloud',1, {alpha:0})
.to('.rocket-wrapper',3, {y: -400,ease: expo.easeIn })
.to('.cloud',3, { attr: { cy:185},ease:expo.easeIn}, "-=3")
.set('.cloud',{clearProps:"all"})
.set('.rocket-wrapper',{y:450})
