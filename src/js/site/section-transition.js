gsap.registerPlugin(ScrollTrigger);

/*** Different ScrollTrigger setups for various screen sizes (media queries) ***/
ScrollTrigger.matchMedia({

  "(min-width: 1024px)": function() {
    // setup animations and ScrollTriggers for screens over 800px wide (desktop) here...
    // ScrollTriggers will be reverted/killed when the media query doesn't match anymore.
    let tl = gsap.timeline({
          scrollTrigger: {
          trigger: ".section2",
          scrub: true,
        }
      });
    tl.to(".section-transition.bgimage", {backgroundPosition: "0 60%"})
  },
  
  "(min-width: 768px)": function() {
    // setup animations and ScrollTriggers for screens over 800px wide (desktop) here...
    // ScrollTriggers will be reverted/killed when the media query doesn't match anymore.
    let tl = gsap.timeline({
          scrollTrigger: {
          trigger: ".section2",
          scrub: true,
        }
      });
    tl.to(".section-transition.bgimage", {backgroundPosition: "0 100%"})
  }, 
  
  // mobile
  "(max-width: 767px)": function() {
    // Any ScrollTriggers created inside these functions are segregated and get
    // reverted/killed when the media query doesn't match anymore. 
    let tl = gsap.timeline({ 
        scrollTrigger:{
          trigger: ".section2",
          scrub:true,
        }
      });
      tl.to(".section-transition.bgimage", {
        backgroundPosition: "0 -100px",
      duration: 1})
    }, 
  
  // all 
  "all": function() {
    // ScrollTriggers created here aren't associated with a particular media query,
    // so they persist.
  }
  
});