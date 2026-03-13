// Banner duration timer start time
var startTime;

// Timeline reference
var tl;
var tl1;

// Init tricggered by onLoad in Body tag
function init() {
  // Set Banner duration timer
  startTime = new Date();
  // Set Global Timeline
  tl1 = new TimelineMax({});
  tl = gsap.timeline({ onComplete: endTime });
  animate();
  setRollover();
}

function animate() {
  

  tl.set(["#main"], { autoAlpha: 1, force3D: true });
  tl.set([".copy1Container, .copy2Container, #cta"], { x: 40, force3D: true });
  tl.set(["#cta"], { x: 25, force3D: true });
  tl.set(".ctaArrow", {x: -20})

  tl.set([".copy3Container"], {x: 50, scale: 1.1, transformOrigin: "left 50%", force3D: true });
  tl.set(square, { autoAlpha: 0, scaleX: 0, scaleY: 1, rotationY: -90, transformPerspective: 600, transformOrigin: "center center", force3D: true});
  
  tl.to(".gif_logo", 0.5, {autoAlpha:1}, '0')
  tl1.to('#bg', 5, { autoAlpha:1, scale:1.1, transformOrigin:"bottom center"}, "0")
  tl.to(".copy1Container", 1.5, { x: 0, ease: Power1.easeOut }, "+=0.5");

  tl.staggerTo(["#copy1a", "#copy1b", "#copy1c"], 0.5, { autoAlpha: 1, clipPath: "inset(0% 0% 0% 0%)", ease: Power1.easeOut }, 0.5, "<");
  
  tl.to(square, {autoAlpha:1})
  tl.to(square, 0.5, { autoAlpha: 1, rotationY: 0, scaleX: 1, ease: "power1.out" }, "<+=0.5");
  tl.to(square, 0.5, { scale: 4, ease: "none" }, "<+=0.5");

  tl.to(".copy2Container", 1.5, { x:0, ease: Power1.easeOut}, '>');
  tl.staggerTo(["#copy2a", "#copy2b", "#copy2c"], 0.5, {autoAlpha:1,  clipPath: "inset(0% 0% 0% 0%)", ease: Power1.easeOut}, 0.4, '<');

  tl.to("#cta", 1.5, { x:0, ease: Power1.easeOut}, '>+=1');
  tl.to(".ctaText", 0.5, {autoAlpha:1, clipPath: "inset(0% 0% 0% 0%)", ease: Power1.easeOut}, '<');
  tl.to(".ctaArrow", 0.3, { autoAlpha:1, x:0, ease: "none", }, '>+=0.1');

  tl.to(".copy3Container", 1.5, { x: 0, ease: "power1.out" }, '>+=1.5');
  tl.staggerTo(["#copy3a", "#copy3b"], 0.5, {autoAlpha: 1, clipPath: "inset(0% 0% 0% 0%)", ease: "power1.out" }, 0.4, '<');
  tl.to(".copy3Container", 1.5, { scale: 1, ease: "power1.out" }, '>+=1');

  // tl.to(["#copy3a", "#copy3b"], 1.5, {scale: 1, ease: "power1.out" }, '>+=1');
}


function setRollover() {
  document
    .getElementById("default_exit")
    .addEventListener("mouseover", default_over, false);
  document
    .getElementById("default_exit")
    .addEventListener("mouseout", default_out, false);
}

function default_over(event) {
  gsap.to(".ctaArrow", 0.2, {x: 5, ease: "none"});
}

function default_out(event) {
  gsap.to(".ctaArrow", 0.2, {x: 0, ease: "none"  });
}


function randomInt(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function endTime() {
  // show total banner animation time in browser console.
  var endTimestamp = new Date();

  console.log(
    "Animation duration: " + (endTimestamp - startTime) / 1000 + " seconds"
  );
}

function randomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}