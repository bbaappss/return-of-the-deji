const sectionTL = gsap.timeline( {    
    scrollTrigger: {
      trigger: ".section2",
      start: "top bottom",
      end: "bottom bottom",
      scrub: true,
      toggleActions: "play reverse play reverse",
    }
  });
  
sectionTL
    .to(
      '.section-transition.bgimage', 
    { 
      backgroundPosition: "10% 50%",
      duration: 1 
    }, "section2"
);