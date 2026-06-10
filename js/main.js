const navbar = document.getElementById("navbar");

window.addEventListener(
  "scroll",
  () => {
    navbar.classList.toggle("scrolled", window.scrollY > 60);
  },
  { passive: true }
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((element) => {
  revealObserver.observe(element);
});

setTimeout(() => {
  document.querySelectorAll(".reveal:not(.visible)").forEach((element) => {
    const rect = element.getBoundingClientRect();

    if (rect.top < window.innerHeight) {
      element.classList.add("visible");
    }
  });
}, 100);
