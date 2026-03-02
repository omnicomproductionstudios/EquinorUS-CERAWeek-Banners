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
  tl.set(["#copy2"], { y: 20, autoAlpha: 0, force3D: true });

  tl.to(copy1, 0.5, {autoAlpha:0, ease: Power1.easeOut}, '+=2.5');
  tl.to(copy2, 0.5, {autoAlpha:1, y:0, ease: Power1.easeOut}, '>');
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
