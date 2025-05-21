/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

//   menu show

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// menu hidden
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // when we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
};

navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () => {
  const header = document.getElementById("header");
  // Add the blur-header class to the header when the scroll is greater than 50 viewport height
  if (this.scrollY >= 50) header.classList.add("blur-header");
  else header.classList.remove("blur-header");
};

window.addEventListener("scroll", blurHeader);

/*=============== GSAP ANIMATION ===============*/

gsap.from(".home__img-1", 5, {opacity: 0, x: 400});
gsap.from(".home__img-6", 1.5, {
  opacity: 0,
  y: 200,
  delay: 0.1,
  ease: "back.out(1.5)",
});
gsap.from(".home__img-3", 1.5, {
  opacity: 0,
  y: 400,
  delay: 0.3,
  ease: "back.out(1.5)",
});
gsap.from(".home__img-5", 1.5, {
  opacity: 0,
  y: 400,
  delay: 0.5,
  ease: "back.out(1.5)",
});
gsap.from(".home__img-2", 1.5, {
  opacity: 0,
  y: 400,
  delay: 0.8,
  ease: "back.out(1.5)",
});
gsap.from(".home__img-4", 1.5, {
  opacity: 0,
  y: 200,
  delay: 1.8,
  ease: "back.out(1.5)",
});
gsap.from(".home__data", 1.5, {
  opacity: 0,
  y: -100,
  delay: 2.5,
  ease: "back.out(1.5)",
});
gsap.from(".home__lantern-1", 1.5, {
  opacity: 0,
  x: 70,
  delay: 3,
  ease: "back.out(1.5)",
});
gsap.from(".home__lantern-2", 1.5, {
  opacity: 0,
  x: -70,
  delay: 3.5,
  ease: "back.out(1.5)",
});

/*=============== SAKURA ANIMATION ===============*/

const sakura = new Sakura(".sakura__petals");
