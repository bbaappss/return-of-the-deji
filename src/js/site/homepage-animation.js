window.setTimeout(function(){$(".loading").addClass("not-loading");}, 3000);

var tl = gsap.timeline({repeat: 0});

tl.from(".loading img", {
  opacity: 0,
  duration: .5,
  y: 50,
  delay: 1
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

tl.from(".slider-arrow.left", {
    opacity: 0,
    scale: 0,
    duration: 1,
    x: -50
  }, "sliders"
)

tl.from(".slider-arrow.right", {
    opacity: 0,
    scale: 0,
    duration: 1,
    x: 50
  }, "sliders"
)

tl.from(".cta", {
    opacity: 0,
    y: 10,
    duration: .5
  }
)

tl.from("#navigation .burger-and-fries", {
  y: -20,
  opacity: 0,
  duration: .5
}, "loadTheRest")

tl.from(".homepage-hero .copy *", {
  opacity: 0,
  y: 10,
  duration: .5,
  stagger: .6
}, "loadTheRest")
