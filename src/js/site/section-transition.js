const sectionTL = gsap.timeline( {    
    scrollTrigger: {
      trigger: ".section2",
      start: "top bottom",
      end: "center bottom",
        markers: true,
      scrub: true,
      toggleActions: "play reverse play reverse",
    }
  });
  
sectionTL
    .to(
      '.section-transition.green', 
    { 
        opacity: 1, 
        duration: 1 
    }, ".section2"
);