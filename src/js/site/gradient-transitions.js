const whyTLGradientTL = gsap.timeline( {    
  scrollTrigger: {
    trigger: ".why-triplelift",
    start: "40% bottom",
    end: "60% bottom",
    scrub: true,
    toggleActions: "play reverse play reverse",
  }
});

whyTLGradientTL
  .to(
    '.gradient-transition.gradient2', 
    { 
      opacity: 1, 
      duration: 1 
    }, "why-triplelift"
);

const exploreGalleryGradientTL = gsap.timeline( {    
  scrollTrigger: {
    trigger: ".explore-our-gallery-container",
    start: "-70% center",
    end: "60% center",
    scrub: true,
    markers: true,
    toggleActions: "play reverse play reverse",
  }
});


exploreGalleryGradientTL
  .to(
    '.gradient-transition.white', 
    { 
      opacity: 1, 
      duration: 1 
    }, "explore"
);