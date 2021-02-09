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
