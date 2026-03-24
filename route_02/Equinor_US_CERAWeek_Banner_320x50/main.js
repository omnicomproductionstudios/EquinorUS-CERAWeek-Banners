// Banner duration timer start time
var startTime;

// Timeline reference
var tl;

// Init tricggered by onLoad in Body tag
function init() {
  // Set Banner duration timer
  startTime = new Date();
  // Set Global Timeline
  tl = gsap.timeline({ onComplete: endTime });
  animate();
}

function animate() {
  tl.set(["#main"], { autoAlpha: 1, force3D: true });
  tl.set([".copy1Container, .copy2Container, #cta"], { x: 40, force3D: true });
  
  tl.to("#logo", 0.5, {autoAlpha:1}, '0');

  tl.to(".copy1Container", 1.5, { x: 0, ease: Power1.easeOut }, "+=0.5");

  tl.staggerTo(["#copy1a", "#copy1b"], 1, {autoAlpha:1,  clipPath: "inset(0% 0% 0% 0%)", ease: Power1.easeOut}, 0.7, '<');

  tl.to(".copy1Container", 0.5, {autoAlpha:0, ease: Power1.easeOut}, '+=2.5');

  tl.to(".copy2Container", 1.5, { x:0, ease: Power1.easeOut}, '>');
  tl.staggerTo(["#copy2a", "#copy2b"], 1, {autoAlpha:1,  clipPath: "inset(0% 0% 0% 0%)", ease: Power1.easeOut}, 0.5, '<');
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
