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

tl.from(".homepage-hero .cta", {
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
    start: "-=400% center",
    end: "200% center",
    scrub: true,
    toggleActions: "play reverse play reverse",
  }
});

downarrowTL
  .to(
    '.down-arrow', 
    { 
      opacity: 0, 
      duration: 2,
      y: 100
    }, 0.5)
  ;

const parallaxHomePageHero = gsap.timeline( {    
    scrollTrigger: {
      trigger: ".homepage-hero",
      start: "100% center",
      end: "+=100 center",
      scrub: true,
      toggleActions: "play reverse play reverse",
    }
  });

parallaxHomePageHero
  .to(
    '.homepage-hero', 
    { 
      opacity: 0, 
      duration: 1,
      y: -20
    })
  ;

parallaxHomePageHero
  .from(
    '.why-triplelift', 
    { 
      opacity: 0, 
      duration: 1,
      y: 20
    })
  ;

const whyTripleLiftParallax = gsap.timeline( {    
  scrollTrigger: {
    trigger: ".why-triplelift",
    start: "10% center",
    end: "40% center",
    scrub: true,
    toggleActions: "play reverse play reverse",
  }
});

whyTripleLiftParallax
  .from(
    '.why-triplelift-section', 
    { 
      opacity: 0, 
      duration: 1,
      x: -20,
      stagger: .5
    });