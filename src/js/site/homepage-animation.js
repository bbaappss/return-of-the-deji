window.setTimeout(function(){$(".loading").addClass("not-loading");}, 3000);

var tl = gsap.timeline({repeat: 0});

tl.set(".loading img", {
  visibility: "visible"
})

tl.from(".loading img", {
  opacity: 0,
  duration: .5,
  y: 50,
  delay: .5
})

tl.to(".loading img", {
  opacity: 0,
  duration: .5,
  y: -50,
  delay: 1
})

tl.to(".loading", {
  opacity: 0,
  duration: .5,
})

tl.from("#navigation .logo-in-navigation", {
  y: -20,
  opacity: 0,
  duration: .5
})

tl.from(".phone-breakout img", {
    opacity: 0, 
    y: 20,
    x: 20,
    delay: .5,
    duration: 1.5,
    stagger: -0.5
  }
)

tl.from("#navigation .burger-and-fries", {
  y: -20,
  opacity: 0,
  duration: .5
}, "loadTheRest")

tl.from("#navigation .menu-on-large .main-nav a", {
  x: 50,
  y: -40,
  opacity: 0,
  duration: .2,
  stagger: {
    amount: .5
  },
}, "loadTheRest")

tl.from(".homepage-hero .copy *", {
  opacity: 0,
  y: 10,
  duration: .6,
  stagger: .2
}, "loadTheRest")

tl.from(".slider-arrow.left", {
  opacity: 0,
  scale: 0,
  duration: .6,
  x: 50
}, "sliders"
)

tl.from(".slider-arrow.right", {
  opacity: 0,
  scale: 0,
  duration: .3,
  x: -50
}, "sliders"
)

tl.from(".cta", {
  opacity: 0,
  y: 10,
  duration: .5
}
)

tl.from(".down-arrow", {
  opacity: 0,
  y: -10,
  duration: .5
}
)


const downarrowTL = gsap.timeline( { 
   
  scrollTrigger: {
    trigger: ".down-arrow",
    start: "-=300 55%",
    end: "100 70%",
    scrub: true,
    toggleActions: "play reverse play reverse",
  }
  
});

downarrowTL
  .to('.down-arrow', { opacity: 0, duration: 1 }, 0.5)
;

