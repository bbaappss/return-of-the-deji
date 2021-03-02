const sectionTL = gsap.timeline( {    
    scrollTrigger: {
      trigger: ".section2",
      scrub: true,
      // markers: true,
      toggleActions: "play reverse play reverse",
    }
  });
  
sectionTL
    .to(
      '.section-transition.bgimage', 
    { 
      // backgroundPosition: "0 -100px",
      duration: 1 
    }
);