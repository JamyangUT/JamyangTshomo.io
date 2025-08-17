// Smooth scroll for anchor links
document.querySelectorAll('nav a[href^="#"], .hero-btns a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Mobile navigation toggle
const navToggle = document.querySelector(".nav-mobile-toggle");
const navLinks = document.querySelector(".nav-links");
navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
navToggle.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") navLinks.classList.toggle("active");
});
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("active"));
});
