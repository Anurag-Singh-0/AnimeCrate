function locomotiveAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

function loadingAnimation() {
  let increaseNum = document.querySelector("#num");
  let grow = 0;
  setInterval(() => {
    if (grow < 101) {
      increaseNum.innerHTML = `<i>${grow++}</i>`;
    } else {
      increaseNum.innerHTM = grow;
    }
  }, 10);

  let t1 = gsap.timeline();

  t1.from(".line h1", {
    y: 100,
    stagger: 0.2,
    opacity: 0,
  });

  t1.from(".line3 h2", {
    opacity: 0,
  });

  t1.to("#loader", {
    opacity: 0,
    delay: 0.1,
  });

  t1.from(".page1", {
    y: 1200,
    opacity: 0,
    ease: Power4,
  });

  t1.to("#loader", {
    display: "none",
  });

  t1.from(".heroText h1", {
    y: 100,
    opacity: 0,
    stagger: 0.2,
    duration: 0.2,
  });

  t1.from("#nav", {
    opacity: 0,
  });
}

// function cursorAnimation() {
//   window.addEventListener("mousemove", (dets) => {
//     gsap.to("#cursor", {
//       left: dets.x,
//       top: dets.y,
//     });
//   });
// }

Shery.makeMagnet(".nav-part2 a", {});
Shery.makeMagnet("#logo", {});

const videoContainer = document.querySelector("#video-container");
const videoPlayer = document.querySelector("#videoPlayer");
const videoImage = document.querySelector("#video-container img");
const video = document.querySelector("#video-container video");
const icon = videoPlayer.querySelector("i");

let isPlaying = false;
const originalPosition = {
  top: videoPlayer.offsetTop,
  left: videoPlayer.offsetLeft,
};

videoContainer.addEventListener("mousemove", (e) => {
  const rect = videoContainer.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  gsap.to(videoPlayer, {
    top: y - videoPlayer.offsetHeight / 2,
    left: x - videoPlayer.offsetWidth / 2,
    duration: 0.3,
    ease: "power2.out",
  });
});

videoContainer.addEventListener("mouseleave", () => {
  gsap.to(videoPlayer, {
    top: originalPosition.top,
    left: originalPosition.left,
    duration: 0.4,
    ease: "power3.out",
  });
});

videoPlayer.addEventListener("click", () => {
  isPlaying = !isPlaying;
  if (isPlaying) {
    videoImage.style.display = "none"; // hide image
    video.play();
    icon.classList.remove("ri-play-fill");
    icon.classList.add("ri-pause-line");
  } else {
    video.pause();
    videoImage.style.display = "block"; // show image again
    icon.classList.remove("ri-pause-line");
    icon.classList.add("ri-play-fill");
  }

  gsap.to(videoImage, {
    opacity: 0,
    duration: 0.5,
    onComplete: () => (videoImage.style.display = "none"),
  });

  videoImage.style.display = "block";
  gsap.fromTo(videoImage, { opacity: 0 }, { opacity: 1, duration: 0.1 });
});

function sheryAnimation() {
  Shery.imageEffect(".images", {
    style: 5,
    config: {
      a: { value: 0.23, range: [0, 30] },
      b: { value: 0.92, range: [-1, 1] },
      zindex: { value: -9996999, range: [-9999999, 9999999] },
      aspect: { value: 0.8 },
      ignoreShapeAspect: { value: true },
      shapePosition: { value: { x: 0, y: 0 } },
      shapeScale: { value: { x: 0.5, y: 0.5 } },
      shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
      shapeRadius: { value: 0, range: [0, 2] },
      currentScroll: { value: 0 },
      scrollLerp: { value: 0.07 },
      gooey: { value: true },
      infiniteGooey: { value: false },
      growSize: { value: 4, range: [1, 15] },
      durationOut: { value: 1, range: [0.1, 5] },
      durationIn: { value: 1.5, range: [0.1, 5] },
      displaceAmount: { value: 0.5 },
      masker: { value: true },
      maskVal: { value: 1.12, range: [1, 5] },
      scrollType: { value: 0 },
      geoVertex: { range: [1, 64], value: 1 },
      noEffectGooey: { value: true },
      onMouse: { value: 0 },
      noise_speed: { value: 1.07, range: [0, 10] },
      metaball: { value: 0.6, range: [0, 2] },
      discard_threshold: { value: 0.5, range: [0, 1] },
      antialias_threshold: { value: 0, range: [0, 0.1] },
      noise_height: { value: 0.5, range: [0, 2] },
      noise_scale: { value: 10, range: [0, 100] },
    },
    gooey: true,
  });
}

window.addEventListener("load", () => {
  loadingAnimation();
  locomotiveAnimation();
  sheryAnimation();
});
