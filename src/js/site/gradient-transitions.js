const gradientTL = gsap.timeline( {    
  scrollTrigger: {
    trigger: ".why-triplelift",
    start: "40% bottom",
    end: "60% bottom",
    scrub: true,
    markers: true,
    toggleActions: "play reverse play reverse",
  }
});


gradientTL
  .to(
    '.gradient-transition.gradient2', 
    { 
      opacity: 1, 
      duration: 1 
    }, 
    0.5
  );