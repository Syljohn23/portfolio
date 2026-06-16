const menuIcon = document.querySelector("#menu-icon");
const navLinks = document.querySelector(".nav-links");

menuIcon.onclick = () => {
  navLinks.classList.toggle("active");
};

/* SECTION ANIMATION */

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const bgs = entry.target.querySelectorAll(".bg-animation");

      const reveal = entry.target.querySelector(".reveal");

      if (entry.isIntersecting) {
        /* POPUP CONTENT */

        reveal.classList.add("active");

        /* RESTART BG ANIMATION */

        bgs.forEach((bg) => {
          bg.classList.remove("active");

          void bg.offsetWidth;

          bg.classList.add("active");
        });
      } else {
        /* REMOVE POPUP */

        reveal.classList.remove("active");
      }
    });
  },
  {
    threshold: 0.3,
  },
);

sections.forEach((section) => {
  observer.observe(section);
});
