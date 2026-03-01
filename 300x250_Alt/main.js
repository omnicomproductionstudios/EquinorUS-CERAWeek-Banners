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
  tl.set(["#copy3"], { autoAlpha: 0, force3D: true });
  tl.set(["#copy3Line1", "#copy3Line2"], { autoAlpha: 1, force3D: true });
  // Split copy3 into 2 masked line layers and type each line in steps.
  tl.set("#copy3Line1", { clipPath: "inset(0% 100% 52% 0%)", webkitClipPath: "inset(0% 100% 52% 0%)" });
  tl.set("#copy3Line2", { clipPath: "inset(55% 100% 0% 0%)", webkitClipPath: "inset(55% 100% 0% 0%)" });
  tl.set(square, { autoAlpha: 0, scale:0, rotationY: -360, transformPerspective: 600, force3D: true });

  
  tl.to(square, 0.6, { autoAlpha: 1, scale:1, rotationY: 0, ease: Power1.easeOut }, '+=2.5');
  tl.to(square, 1, {scale:4, ease: Power1.easeOut}, '<+=0.2');
  tl.to(copy2, 0.5, {autoAlpha:1, y:0, ease: Power1.easeOut}, '>');
  tl.to(cta, 0.7, {autoAlpha:1, ease: Power1.easeOut}, '+=1.5');
  tl.to(".ctaArrow", 0.2, {duration:1, x: 5, ease: "none", repeat: 1, yoyo: true  });
  tl.to("#copy3Line1", 0.9, { clipPath: "inset(0% 0% 52% 0%)", webkitClipPath: "inset(0% 0% 52% 0%)", ease: "steps(24)" }, '+=1');
  tl.to("#copy3Line2", 0.8, { clipPath: "inset(55% 0% 0% 0%)", webkitClipPath: "inset(55% 0% 0% 0%)", ease: "steps(20)" }, '>-0.05');
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
