function page1animation() {
  let tl = gsap.timeline();

  tl.from(".navContent h1,.navContent li,.navContent button", {
    y: -30,
    duration: 0.8,
    delay: 0.5,
    opacity: 0,
    stagger: 0.15,
  });

  tl.from(".centre h1", {
    x: -300,
    duration: 0.5,
    opacity: 0,
  });
  tl.from(" .centre p", {
    x: -100,
    duration: 0.4,
    opacity: 0,
  });
  tl.from(".centre button", {
    duration: 0.5,
    opacity: 0,
  });

  tl.from(
    ".centre img",
    {
      duration: 0.5,

      opacity: 0,
    },
    "-=0.5"
  );

  tl.from(".bottom img", {
    opacity: 0,
    duration: 0.5,
    y: 30,
  });
}
page1animation();
function page2animation() {
  let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page2",
      scroller: "body",

      start: "top 50%",
      end: "top 0",
      scrub: 2,
    },
  });
  tl2.from(".page2 .part1", {
    y: 30,
    opacity: 0,
  });
  tl2.from(".elem.left", {
    opacity: 0,
    x: -300,

    duration: 1,
  });

  tl2.from(
    ".elem.right",
    {
      opacity: 0,
      x: 300,
      duration: 1,
    },
    "-=1"
  );
}
page2animation();

let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page3",
    scroller: "body",

    start: "top 50%",
    end: "top 0",
    scrub: 2,
  },
});
tl3.from(".page3 .part1 h3,p,button", {
  opacity: 0,
  y: 50,
  duration: 0.5,
  Delay: 0.5,
});
tl3.from(
  ".page3 .part2",
  {
    opacity: 0,
    y: 30,
    duration: 0.5,
    Delay: 0.5,
  },
  "-=1"
);
