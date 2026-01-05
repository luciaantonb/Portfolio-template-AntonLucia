**Student:** Lucia Anton Barahona
**Handle:** @luciaantonb  
**Course:** Web Design 2025 · Fall  
**Date:** [Week 5 - Final Week]

---

## Project Concept

### What are you building?

This project is a customizable portfolio website template designed to present creative work in a clear, structured, and visually engaging way. It combines responsive design with GSAP-powered animations and interactive elements to create an immersive scrolling experience that enhances storytelling and user experience.

### Who is it for?

The project is aimed at graphic design students, emerging creatives, and junior designers who want a flexible and modern portfolio that can be adapted to their personal identity without starting from scratch.

### Why does it matter?

A portfolio is often the first point of contact between a designer and potential collaborators or employers. This project focuses on clarity, usability, and visual coherence, allowing the work to remain the main focus while still expressing personality through layout, motion, and interactive scrolling.

---

## Technical Approach

### Core Technologies

- [x] HTML5 (semantic markup)
- [x] CSS3 (custom properties, flexbox, CSS Grid, responsive design)
- [x] JavaScript (ES6+)
- [x] GSAP 3.12 (GreenSock Animation Platform)
  - [x] ScrollTrigger plugin (pinned sections, scroll-linked animations)
  - [x] ScrollToPlugin (smooth navigation)

### Accessibility Goals

- [x] Semantic HTML structure
- [x] Proper heading hierarchy
- [x] Alt text for images
- [x] Keyboard navigation support (hamburger menu, navigation links)
- [x] Color contrast compliance (WCAG AA)
- [x] Reduced motion support (`prefers-reduced-motion` media query)
- [x] ARIA labels for interactive elements (hamburger button)
- [x] Focus states for interactive elements

### Responsive Design Strategy

- [x] Mobile-first approach with hamburger menu
- [x] Flexible grid system (CSS Grid for layout sections)
- [x] Scalable typography (using clamp() for fluid sizing)
- [x] Responsive images (different sizes per breakpoint)
- [x] Touch-friendly interactions (drag-to-scroll on mobile)
- [x] Breakpoints: 480px, 768px, 1024px

---

## Content Strategy

### Key Sections/Pages

1. Homepage / Hero Section (with circular image composition)
2. About Section (two-column grid layout)
3. Horizontal Scrolling Gallery (pinned section with GSAP ScrollTrigger)
4. Contact Section (with email button and social links)
5. Custom 404 Error Page (matching main site design)

### Content Sources

All content is original and project-based, including placeholder images (via ImageKit.io), mock project descriptions, and a layout structure designed for easy customization with personal work.

### Multilingual Considerations

- Primary language: English
- Content structure supports easy translation
- Letter-spacing optimized for Latin characters (0.05em standard)

---

## Design Direction

### Visual Style

The visual approach is minimalist and photography-focused, combining clean layouts with layered imagery and sophisticated motion design. The design uses a dark theme (black background, white text) to create high contrast and let visual content stand out. Grayscale filters on images maintain visual consistency.

### Color Palette

- Background: Pure black (#000000)
- Text: Pure white (#ffffff)
- Borders: White with 10% opacity (rgba(255, 255, 255, 0.1))
- Muted text: White with 60% opacity
- Accent: White borders on interactive elements (2-3px solid)

### Typography

- Primary font: **DM Sans** (weights: 300-600)
- Fallback: System sans-serif stack
- Letter-spacing: 0.05em (standard), 0.15em-0.2em (buttons)
- All-caps for headers and navigation
- Fluid typography using CSS clamp() for responsive scaling
- Font weights: 300 (body), 400 (nav), 500-600 (buttons)

### Inspiration/References

- Contemporary photographer portfolios
- Minimalist editorial layouts with large typography
- Scroll-driven narrative websites
- Dark-themed design portfolios

---

## Success Metrics

### Week 5 Goals

- [x] Functional homepage with animated image composition
- [x] Responsive layout with mobile hamburger menu
- [x] Core content sections in place
- [x] Accessible markup with semantic HTML

### Final Project Goals

- [x] Fully responsive across devices (mobile, tablet, desktop)
- [x] Meets WCAG 2.1 AA standards (contrast, reduced motion, keyboard nav)
- [x] Smooth scrolling animations with GSAP ScrollTrigger
- [x] Horizontal scrolling gallery with pinned section
- [x] Complete content structure ready for customization
- [x] Polished visual design with consistent spacing system
- [x] Custom 404 page matching main design
- [x] MIT licensed with GitHub repository link

---

## Technical Implementations

### Advanced Features

1. **GSAP ScrollTrigger Integration**

   - Pinned horizontal scrolling gallery
   - Scroll-linked animations throughout
   - Smooth ScrollToPlugin navigation

2. **Custom Responsive Navigation**

   - Hamburger menu with animated X transformation
   - Slide-in mobile menu from right
   - Touch-friendly and keyboard accessible

3. **Interactive Hover Effects**

   - GSAP-powered image scaling and filter transitions
   - Button hover states with color inversion
   - Project card info reveal on hover

4. **Accessibility Enhancements**
   - Comprehensive reduced motion support
   - Proper ARIA labels
   - Keyboard navigation throughout
   - High contrast design (black/white)

---

## Reflection Questions

### What excites you most about this project?

The opportunity to combine design thinking with advanced front-end development techniques, particularly using GSAP ScrollTrigger to create immersive scroll-driven experiences that enhance storytelling without sacrificing usability.

### What challenges do you anticipate?

Balancing visual experimentation with accessibility requirements, especially when implementing complex scroll animations and ensuring they degrade gracefully for users who prefer reduced motion. Managing the complexity of pinned sections and horizontal scrolling while maintaining responsive behavior across all devices.

### How does this project connect to your learning goals?

This project reinforces skills in modern JavaScript animation libraries (GSAP), responsive design patterns, CSS custom properties, and accessibility standards. It demonstrates how to build scroll-driven experiences while maintaining semantic HTML and WCAG compliance, mirroring professional web development workflows.
