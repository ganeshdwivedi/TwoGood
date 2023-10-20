const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});

gsap.from("#page1 h1,#book, #page2 .elem, #page3 .product",{
  y:100,
  opacity:0,
  delay:0.2,
  duration:0.3,
  stagger:0.5
});
