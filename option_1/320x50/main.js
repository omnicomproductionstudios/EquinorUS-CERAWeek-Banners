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
  setRollover();
}

function animate() {
  tl.set(["#main"], { autoAlpha: 1, force3D: true });
  tl.set([".copy1Container, .copy2Container, #cta"], { x: 40, force3D: true });
  tl.set(["#copy1a, #copy2a, #copy2b, #copy2c"], { autoAlpha:1 });

  tl.to(".copy1Container", 1.5, { x:0, ease: Power1.easeOut}, '+=0.5');
  tl.staggerTo(["#copy1a"], 1, {autoAlpha:1,  clipPath: "inset(0% 0% 0% 0%)", ease: Power1.easeOut}, 0.4, '<');

  tl.to(".copy1Container", 0.5, {autoAlpha:0, ease: Power1.easeOut}, '+=2.5');

  tl.to(".copy2Container", 1.5, { x:0, ease: Power1.easeOut}, '>');
  tl.staggerTo(["#copy2a", "#copy2b", "#copy2c"], 1, {autoAlpha:1,  clipPath: "inset(0% 0% 0% 0%)", ease: Power1.easeOut}, 0.5, '<');
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
