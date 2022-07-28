ScrollTrigger.defaults({
  markers: false,
});

var points = gsap.utils.toArray(".point");
var indicators = gsap.utils.toArray(".indicator");

var height = 100 * points.length;

gsap.set(".indicators", { display: "flex" });

var tl = gsap.timeline({
  duration: points.length,
  scrollTrigger: {
    trigger: ".philosophie",
    start: "top center",
    end: "+=" + height + "%",
    scrub: true,
    id: "points",
  },
});

var pinner = gsap.timeline({
  scrollTrigger: {
    trigger: ".philosophie .wrapperr",
    start: "top top",
    end: "+=" + height + "%",
    scrub: true,
    pin: ".philosophie .wrapperr",
    pinSpacing: true,
    id: "pinning",
    markers: false,
  },
});

points.forEach(function (elem, i) {
  gsap.set(elem, { position: "absolute", top: 0 });

  tl.to(indicators[i], { backgroundColor: "orange", duration: 0.25 }, i);
  tl.from(elem.querySelector("img"), { autoAlpha: 0 }, i);
  tl.from(elem.querySelector("article"), { autoAlpha: 0, translateY: 100 }, i);

  if (i != points.length - 1) {
    tl.to(
      indicators[i],
      { backgroundColor: "#adadad", duration: 0.25 },
      i + 0.75
    );
    tl.to(
      elem.querySelector("article"),
      { autoAlpha: 0, translateY: -100 },
      i + 0.75
    );
    tl.to(elem.querySelector("img"), { autoAlpha: 0 }, i + 0.75);
  }
});

//   horizontal sccroll

let scroll_tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".factsContainer",
      start: "top center",
      // pin: true,
      scrub: true,
      end: "+=300",
      // markers: true,
    },
  }),
  facts = [...document.querySelectorAll(".fact")];
scroll_tl.to(".factsContainer h2", {
  scale: 1.5,
  duration: 1,
  ease: "slow",
});
scroll_tl.to(facts, {
  xPercent: -85 * (facts.length - 1),
  scrollTrigger: {
    trigger: ".factsContainer_sm",
    start: "center center",
    pin: true,
    // horizontal: true,
    // pinSpacing:false,
    // markers: true,
    scrub: 1,
    snap: 1 / (facts.length - 1),
    // base vertical scrolling on how wide the container is so it feels more natural.
    // end: () => `+=${smallFactsContainer.offsetWidth}`
    end: () => `+=1320`,
  },
});
// document.querySelector(".po1").style.backgroundColor = "#000";
