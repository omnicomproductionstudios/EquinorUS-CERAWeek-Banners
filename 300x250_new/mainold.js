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
  tl.set(["#cta"], { x: 25, force3D: true });
  tl.set([".copy3Container"], {x: 40, force3D: true });
  tl.set(["#copy3a", "#copy3b"], { scale:1.3, force3D: true });
  tl.set(["#copy1a", "#copy1b", "#copy1c, #copy2a", "#copy2b", "#copy2c, .ctaText, #copy3a, #copy3b"], { autoAlpha: 1 });
  tl.set(square, { autoAlpha: 0, scale:0, rotationY: -360, transformPerspective: 600, force3D: true });
  
  
  // logo animation
  tl.set([".logoCopy"], { x: -17, y: 17, scale:1.5, force3D: true })
  
  tl.set([".two"], { x: 20, rotation: 52, force3D: true })
  tl.set(".three", { x: 20, y: 0, rotation: 52, transformOrigin: "center center" });
  tl.set(".four", { x: 20, y: 10, rotation: 52, transformOrigin: "center center" });
  tl.set(".five", { x: 20, y: 10, rotation: 52, transformOrigin: "center center" });
  tl.set(".six", { x: 20, y: 10, rotation: 52, transformOrigin: "center center" });


  tl.to('.one', 1, {autoAlpha:1, rotation: 179, scale: 0.5, ease: "power1.inOut"})
  tl.to('.logoCopy', 1, {autoAlpha:1, x: 0, y: 0, scale: 1, ease: "power1.inOut"}, "<")
  tl.to('.two', {
    duration: 0.8,
    autoAlpha: 1,
    keyframes: [
      { x: 10, y: -8, rotation: 24, ease: "power1.out", duration: 0.3 },
      { x: 3, y: -2, rotation: 8, ease: "power1.inOut", duration: 0.25 },
      { x: 0, y: 0, rotation: 0, ease: "back.out(1.1)", duration: 0.25 }
    ]
  }, '<+=0.5');

  tl.to('.three', {
    duration: 0.75,
    autoAlpha: 1,
    keyframes: [
      { x: 10, y: -6, rotation: 20, ease: "power1.out", duration: 0.28 },
      { x: 1, y: 9, rotation: 7, ease: "power1.inOut", duration: 0.22 },
      { x: -2.5, y: 15, rotation: 0, ease: "back.out(1.15)", duration: 0.25 }
    ]
  }, '<');

  tl.to('.four', {
    duration: 0.75,
    autoAlpha: 1,
    keyframes: [
      { x: 9, y: -4, rotation: 18, ease: "power1.out", duration: 0.28 },
      { x: 2, y: 12, rotation: 6, ease: "power1.inOut", duration: 0.22 },
      { x: 0, y: 21, rotation: 0, ease: "back.out(1.2)", duration: 0.25 }
    ]
  }, '<');

  tl.to('.five', {
    duration: 0.75,
    autoAlpha: 1,
    keyframes: [
      { x: 11, y: -4, rotation: 18, ease: "power1.out", duration: 0.28 },
      { x: 8, y: 11, rotation: 6, ease: "power1.inOut", duration: 0.22 },
      { x: 6, y: 21, rotation: 0, ease: "back.out(1.2)", duration: 0.25 }
    ]
  }, '<');

  tl.to('.six', {
    duration: 0.75,
    autoAlpha: 1,
    keyframes: [
      { x: 14, y: -7, rotation: 22, ease: "power1.out", duration: 0.28 },
      { x: 12, y: 8, rotation: 8, ease: "power1.inOut", duration: 0.22 },
      { x: 10, y: 16.5, rotation: 0, ease: "back.out(1.25)", duration: 0.25 }
    ]
  }, '<');



  
  tl.to(".copy1Container", 1.5, { x:0, ease: Power1.easeOut}, '+=0.5');
  tl.staggerTo(["#copy1a", "#copy1b", "#copy1c"], 0.5, {autoAlpha:1,  clipPath: "inset(0% 0% 0% 0%)", ease: Power1.easeOut}, 0.4, '<');

  tl.to(square, 0.6, { autoAlpha: 1, scale:1, rotationY: 0, ease: Power1.easeOut }, '+=1');
  tl.to(square, 1, {scale:1, ease: Power1.easeOut}, '<+=0.5');
  tl.to(square, 1, {scale:4, ease: Power1.easeOut}, '<+=0.2');

  tl.to(".copy2Container", 1.5, { x:0, ease: Power1.easeOut}, '>');
  tl.staggerTo(["#copy2a", "#copy2b", "#copy2c"], 0.5, {autoAlpha:1,  clipPath: "inset(0% 0% 0% 0%)", ease: Power1.easeOut}, 0.4, '<');

  tl.to("#cta", 1.5, { x:0, ease: Power1.easeOut}, '>+=1');
  tl.to(".ctaText", 0.5, {autoAlpha:1, clipPath: "inset(0% 0% 0% 0%)", ease: Power1.easeOut}, '<');
  tl.to(".ctaArrow", 0.2, { autoAlpha:1, ease: "none", }, '>');

  tl.to(".copy3Container", 1.5, { x:0, ease: Power1.easeOut}, '>+=1.5');
  tl.staggerTo(["#copy3a", "#copy3b"], 0.5, {autoAlpha:1,clipPath: "inset(0% 0% 0% 0%)", ease: Power1.easeOut}, 0.4, '<');


  tl.to(["#copy3a", "#copy3b"], 1, {scale:1, ease: Power1.easeOut}, '>+=0.7');
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
