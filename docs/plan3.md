# Feature: Horizontal Scrolling Gallery

## Phase 1 — Planning

Prompt to AI:

How can I create a gallery section that pins in place when scrolling down, then scrolls horizontally through projects before continuing to the footer?

AI Planning Response:

- Using GSAP ScrollTrigger to pin the section during scroll
- Converting vertical scroll distance into horizontal translation
- Setting appropriate start/end points to control pin duration
- Using `scrub` for smooth scroll-linked animation
- Calculating scroll distance based on grid width minus viewport width

## Phase 2 — Implementation

What Was Implemented:

- GSAP ScrollTrigger with `pin: true` to fix the gallery section
- Horizontal animation using `gsap.to(projectsGrid, { x: -scrollDistance })`
- Pin starts at "top 80px" to show the full "03 GALLERY" header
- Project cards sized at 400px × 520px for dramatic movement
- `scrub: 1` for smooth, scroll-linked animation
- Section unpins automatically when animation completes

## Notes

The implementation required removing CSS overflow properties and letting GSAP handle the transformation. The pin start point was adjusted to prevent cutting off the section number.
