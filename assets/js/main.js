// ==========================================================================
// Main JavaScript - Photography Portfolio
// ==========================================================================

// Wait for DOM and GSAP to load
document.addEventListener("DOMContentLoaded", () => {
  // Check if GSAP is loaded
  if (typeof gsap !== "undefined") {
    initGSAPAnimations();
  }

  // Initialize other features
  initNavigation();
  initHorizontalScroll();
});

// --------------------------------------------------------------------------
// GSAP Animations
// --------------------------------------------------------------------------
function initGSAPAnimations() {
  // Register ScrollTrigger plugin if available
  if (typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }

  // Hero Images - Simple fade in at their positions
  const heroImages = document.querySelectorAll(".hero-image");

  heroImages.forEach((img, index) => {
    // Set initial state - invisible at their final position
    gsap.set(img, {
      opacity: 0,
      scale: 0.9,
    });

    // Fade in with stagger
    gsap.to(img, {
      opacity: 1,
      scale: 1,
      duration: 1.2,
      delay: index * 0.2,
      ease: "power2.out",
    });
  });

  // Hero text fade in
  gsap.from(".hero-title", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.3,
    ease: "power3.out",
  });

  gsap.from(".hero-subtitle", {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 0.6,
    ease: "power3.out",
  });

  // Scroll-triggered animations
  if (typeof ScrollTrigger !== "undefined") {
    // About section
    gsap.from(".about-image img", {
      scrollTrigger: {
        trigger: "#about",
        start: "top 80%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      x: -100,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(".about-text", {
      scrollTrigger: {
        trigger: "#about",
        start: "top 80%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      x: 100,
      duration: 1,
      ease: "power3.out",
    });

    // Projects section header
    gsap.from(".section-header", {
      scrollTrigger: {
        trigger: "#projects",
        start: "top 80%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    });

    // Project cards stagger
    gsap.from(".project-card", {
      scrollTrigger: {
        trigger: ".projects-grid",
        start: "top 70%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: 80,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
    });

    // Contact section
    gsap.from("#contact > *", {
      scrollTrigger: {
        trigger: "#contact",
        start: "top 80%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    });
  }
}

// --------------------------------------------------------------------------
// Navigation
// --------------------------------------------------------------------------
function initNavigation() {
  const navbar = document.querySelector(".navbar");
  const navLinks = document.querySelectorAll(".nav-link");

  // Add scrolled class to navbar on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Smooth scroll for navigation links
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");

      // Only handle internal links
      if (href.startsWith("#")) {
        e.preventDefault();
        const target = document.querySelector(href);

        if (target) {
          const offsetTop = target.offsetTop - 80; // Account for fixed navbar

          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
          });

          // Update active state
          navLinks.forEach((l) => l.classList.remove("active"));
          link.classList.add("active");
        }
      }
    });
  });

  // Update active link on scroll
  const sections = document.querySelectorAll("section[id]");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (window.scrollY >= sectionTop - 200) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
}

// --------------------------------------------------------------------------
// Project Card Hover Effect (optional enhancement)
// --------------------------------------------------------------------------
const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card) => {
  card.addEventListener("mouseenter", function () {
    const img = this.querySelector("img");
    if (img) {
      gsap.to(img, {
        scale: 1.05,
        filter: "grayscale(0%)",
        duration: 0.6,
        ease: "power2.out",
      });
    }
  });

  card.addEventListener("mouseleave", function () {
    const img = this.querySelector("img");
    if (img) {
      gsap.to(img, {
        scale: 1,
        filter: "grayscale(30%)",
        duration: 0.6,
        ease: "power2.out",
      });
    }
  });
});

// --------------------------------------------------------------------------
// Horizontal Scroll for Gallery
// --------------------------------------------------------------------------
function initHorizontalScroll() {
  const projectsGrid = document.querySelector(".projects-grid");

  if (!projectsGrid) return;

  // Enable mouse wheel horizontal scroll
  projectsGrid.addEventListener(
    "wheel",
    (e) => {
      // Check if scrolling vertically
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        projectsGrid.scrollLeft += e.deltaY;
      }
    },
    { passive: false }
  );

  // Smooth scroll for touch devices
  let isDown = false;
  let startX;
  let scrollLeft;

  projectsGrid.addEventListener("mousedown", (e) => {
    isDown = true;
    projectsGrid.style.cursor = "grabbing";
    startX = e.pageX - projectsGrid.offsetLeft;
    scrollLeft = projectsGrid.scrollLeft;
  });

  projectsGrid.addEventListener("mouseleave", () => {
    isDown = false;
    projectsGrid.style.cursor = "grab";
  });

  projectsGrid.addEventListener("mouseup", () => {
    isDown = false;
    projectsGrid.style.cursor = "grab";
  });

  projectsGrid.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - projectsGrid.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    projectsGrid.scrollLeft = scrollLeft - walk;
  });

  // Set initial cursor
  projectsGrid.style.cursor = "grab";
}
