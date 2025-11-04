// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const navMenu = document.getElementById("nav-menu");

mobileMenuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  mobileMenuBtn.classList.toggle("active");
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    mobileMenuBtn.classList.remove("active");
  });
});

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  if (!e.target.closest("nav")) {
    navMenu.classList.remove("active");
    mobileMenuBtn.classList.remove("active");
  }
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});

// Navbar Scroll Effect
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Intersection Observer for Fade-in Animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Apply fade-in to sections
const sections = document.querySelectorAll("section");
sections.forEach((section) => {
  section.style.opacity = "0";
  section.style.transform = "translateY(30px)";
  section.style.transition = "opacity 0.8s ease, transform 0.8s ease";
  observer.observe(section);
});

// Portfolio item hover effect
const portfolioItems = document.querySelectorAll(".portfolio-item");
portfolioItems.forEach((item) => {
  item.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-12px)";
  });

  item.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0)";
  });
});

// Contact button functionality
const contactBtn = document.querySelector(".cta-btn-large");
if (contactBtn) {
  contactBtn.addEventListener("click", () => {
    window.location.href = "mailto:saiwaiyanphone27@gmail.com";
  });
}

// Add hover effect to social icons
const socialIcons = document.querySelectorAll(
  ".social-icon, .social-icon-contact"
);
socialIcons.forEach((icon) => {
  icon.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-6px) rotate(5deg)";
  });

  icon.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) rotate(0deg)";
  });
});

// Animate elements on page load
window.addEventListener("load", () => {
  const heroContent = document.querySelector(".hero-content");
  if (heroContent) {
    setTimeout(() => {
      heroContent.style.opacity = "1";
      heroContent.style.transform = "translateY(0)";
    }, 100);
  }

  const heroImage = document.querySelector(".hero-image");
  if (heroImage) {
    setTimeout(() => {
      heroImage.style.opacity = "1";
      heroImage.style.transform = "translateY(0)";
    }, 300);
  }
});

// Add loading animation styles
document.querySelectorAll(".hero-content, .hero-image").forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(30px)";
  el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
});

console.log("Portfolio website loaded successfully! 🚀");
