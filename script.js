/* =============== Typing Effect (Hero Section) =============== */
var typed = new Typed(".typing", {
  strings: [
    "Web Developer 💻",
    "Software Engineer 👨‍💻",
    "Tech Enthusiast 🚀",
  ],
  typeSpeed: 90,
  backSpeed: 50,
  loop: true
});

/* =============== Scroll Reveal Animations =============== */
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 1500,
  delay: 200
});

ScrollReveal().reveal(".hero-text, #about h2, #skills h2, #projects h2, #contact h2", { origin: "top" });
ScrollReveal().reveal(".hero-image, .project-card, #skills li, #contact .socials", { origin: "bottom" });
ScrollReveal().reveal("#about p, #contact p", { origin: "right" });

/* =============== Smooth Scroll (Optional Extra Effect) =============== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});