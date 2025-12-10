/* ================= SCROLL ANIMATION ================= */
const animatedSections = document.querySelectorAll(".animate");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 }
);

animatedSections.forEach((section) => observer.observe(section));

/* ================= LOADER ================= */
window.addEventListener("load", () => {
  document.querySelector(".loader").style.display = "none";
});

/* ================= TYPING ANIMATION (FIXED) ================= */
const text = "Y Lakshmi Prasanna";
let index = 0;
const typingElement = document.getElementById("typing-text");

const cursor = document.createElement("span");
cursor.classList.add("typing-cursor");
cursor.textContent = "|";
typingElement.after(cursor);

function typeEffect() {
  if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(() => {
      cursor.remove();
    }, 800);
  }
}
typeEffect();

/* ================= THEME TOGGLE ================= */
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  themeToggle.textContent =
    document.body.classList.contains("light") ? "🌞" : "🌙";
});

/* ================= SCROLL PROGRESS ================= */
window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  document.getElementById("progress-bar").style.width =
    (scrollTop / height) * 100 + "%";
});

/* ================= NAVBAR CLICK ANIMATION EFFECTS ================= */
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach((link, index) => {
  link.addEventListener("click", () => {
    const targetId = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      // Remove old animation classes
      targetSection.classList.remove("rotate-in", "zigzag-in", "zoom-in");

      // Force reflow to restart animation
      void targetSection.offsetWidth;

      // Apply different animation based on menu item
      if (targetId === "education") {
        targetSection.classList.add("rotate-in");
      } 
      else if (targetId === "certifications") {
        targetSection.classList.add("zigzag-in");
      } 
      else if (targetId === "projects") {
        targetSection.classList.add("zoom-in");
      } 
      else {
        targetSection.classList.add("rotate-in");
      }
    }
  });
});
