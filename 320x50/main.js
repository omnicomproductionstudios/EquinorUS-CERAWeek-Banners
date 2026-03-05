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
  // tl.set(["#copy1a, #copy2a, #copy2b, #copy2c"], { autoAlpha:1 });


  // logo animation start

  tl.set(".leafs", { scale: 1.2, transformOrigin: "68% 75%", force3D: true })
  tl.set(".logoCopy", { x: -17, y: 17, scale:1.5, force3D: true })
  tl.set([".two", ".three", ".four", ".five", ".six", ".logoCopy"], { autoAlpha: 0 });
  tl.set(".two", { x: 20, rotation: 52, force3D: true })
  tl.set(".three", { x: 20, y: 0, rotation: 52, transformOrigin: "center center" });
  tl.set(".four", { x: 20, y: 10, rotation: 52, transformOrigin: "center center" });
  tl.set(".five", { x: 20, y: 10, rotation: 52, transformOrigin: "center center" });
  tl.set(".six", { x: 20, y: 10, rotation: 52, transformOrigin: "center center" });

  tl.to('.one', 1, {autoAlpha:1, rotation: 179, scale: 0.5, ease: "power1.inOut"})
  tl.to('.two', 1, {autoAlpha:1, x:0, rotation: 0, ease: "power1.inOut"}, '<+=0.4')
  tl.to('.leafs', 1, {scale: 1, ease: "power1.inOut"}, "<");
  tl.to('.three', 1, {x: -2.5, rotation: 0, autoAlpha: 1, ease: "power1.inOut" }, '<');
  tl.to('.three', 1, {y: 15, ease: "back.out(-5)",}, '<');
  tl.to('.four', 1, {x: 0, rotation: 0, autoAlpha: 1, ease: "power1.inOut" }, '<');
  tl.to('.four', 1, {y: 21, ease: "back.out(-10)",}, '<');
  tl.to('.five', 1, {x: 6, rotation: 0, autoAlpha: 1, ease: "power1.inOut" }, '<');
  tl.to('.five', 1, {y: 21, ease: "back.out(-10)",}, '<');
  tl.to('.six', 1, {x: 10, rotation: 0, autoAlpha: 1, ease: "power1.inOut" }, '<');
  tl.to('.six', 1, {y: 16.5, ease: "back.out(-20)",}, '<');
  tl.to('.logoCopy', 1, {autoAlpha:1, x: 0, y: 0, scale: 1, ease: "power1.inOut"}, "<")
  
  // logo animation start end

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
