// ==========================================================================
// Main JavaScript - Portfolio
// ==========================================================================

// Wait for DOM and GSAP to load
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded");

  // Check if GSAP is loaded
  if (typeof gsap !== "undefined") {
    console.log("GSAP loaded");
    initGSAPAnimations();
  } else {
    console.error("GSAP not loaded!");
  }

  // Initialize other features
  initNavigation();
});

// --------------------------------------------------------------------------
// GSAP Animations
// --------------------------------------------------------------------------
function initGSAPAnimations() {
  // Register ScrollTrigger plugin if available
  if (typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
    console.log("ScrollTrigger registered");
  } else {
    console.error("ScrollTrigger not loaded!");
    return;
  }

  // Hero Images - Simple fade in at their positions
  const heroImages = document.querySelectorAll(".hero-image");

  heroImages.forEach((img, index) => {
    gsap.set(img, {
      opacity: 0,
      scale: 0.9,
    });

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

  // HORIZONTAL SCROLL WITH PIN
  const projectsGrid = document.querySelector(".projects-grid");
  const projectsSection = document.querySelector("#projects");

  if (projectsGrid && projectsSection) {
    console.log("Setting up horizontal scroll");

    // Get the scroll width
    const scrollWidth = projectsGrid.scrollWidth;
    const viewportWidth = projectsGrid.offsetWidth;
    const scrollDistance = scrollWidth - viewportWidth;

    console.log("Scroll distance:", scrollDistance);

    // Create the horizontal scroll animation
    const horizontalScroll = gsap.to(projectsGrid, {
      x: -scrollDistance,
      ease: "none",
      scrollTrigger: {
        trigger: projectsSection,
        start: "top 40px",
        end: () => `+=${scrollDistance + window.innerHeight}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        markers: false,
        onEnter: () => console.log("Entered gallery"),
        onLeave: () => console.log("Left gallery"),
        onEnterBack: () => console.log("Entered gallery (back)"),
        onLeaveBack: () => console.log("Left gallery (back)"),
      },
    });

    console.log("Horizontal scroll animation created");
  } else {
    console.error("Projects grid or section not found!");
  }

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

// --------------------------------------------------------------------------
// Navigation
// --------------------------------------------------------------------------
function initNavigation() {
  const navbar = document.querySelector(".navbar");
  const navLinks = document.querySelectorAll(".nav-link");
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".navbar-nav");

  // Hamburger menu toggle
  if (hamburger) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    });

    // Close menu when clicking a link
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
      });
    });
  }

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

      if (href.startsWith("#")) {
        e.preventDefault();
        const target = document.querySelector(href);

        if (target) {
          const offsetTop = target.offsetTop - 80;

          if (target) {
            // Use GSAP to scroll if available, otherwise use native scroll
            if (typeof gsap !== "undefined") {
              gsap.to(window, {
                duration: 1,
                scrollTo: { y: target, offsetY: 80 },
                ease: "power2.inOut",
              });
            } else {
              const offsetTop = target.offsetTop - 80;
              window.scrollTo({
                top: offsetTop,
                behavior: "smooth",
              });
            }
          }
        }
      }
    });
  });
}

// --------------------------------------------------------------------------
// Project Card Hover Effect
// --------------------------------------------------------------------------
const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card) => {
  card.addEventListener("mouseenter", function () {
    const img = this.querySelector("img");
    if (img && typeof gsap !== "undefined") {
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
    if (img && typeof gsap !== "undefined") {
      gsap.to(img, {
        scale: 1,
        filter: "grayscale(30%)",
        duration: 0.6,
        ease: "power2.out",
      });
    }
  });
});
