function animate() {
  TweenMax.to(".st3", 0.4, {
    scale: 1.1,
    repeat: -1,
    yoyo: true,
    onComplete: animate
  });

  TweenMax.to(".st2", 1, {
    scale: 1.16,
    repeat: -1,
    yoyo: true,
    onComplete: animate
  });

  TweenMax.to(".st4", 0.5, {
    scale: 1.1,
    repeat: -1,
    yoyo: true,
    onComplete: animate
  });

  TweenMax.to(".g", 1, {
    scale: 1.16,
    repeat: -1,
    yoyo: true,
    onComplete: animate
  });
}
animate();

var hart = document.getElementById("hart");
TweenMax.fromTo(
  hart,
  0.6,
  {
    visible: true,
    scale: 1
  },
  {
    scale: 1.05,
    repeat: -1,
    yoyo: true
  }
);
