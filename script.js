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
