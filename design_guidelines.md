# Design Guidelines: Anjalee Narenthiren - Robotics Portfolio

## Design Approach
**Reference-Based + Custom Interactive**: Drawing inspiration from Linear's precision typography, Stripe's minimalist confidence, and Apple's spatial design, enhanced with technical interactive elements that demonstrate engineering sophistication. The portfolio should feel like a product a Tesla engineer would build for themselves.

## Core Design Elements

### A. Color Palette
**Dark Mode Primary** (Tesla-inspired precision):
- Background: 12 8% 6% (near-black with slight warmth)
- Surface: 220 10% 12% (elevated components)
- Primary: 0 0% 98% (crisp white for text and key elements)
- Accent: 15 85% 65% (warm Tesla-orange for interactive states and highlights)
- Muted: 220 8% 45% (secondary text, borders)

**Light Mode Fallback**:
- Background: 0 0% 98%
- Surface: 0 0% 100%
- Text: 220 10% 12%

### B. Typography
**Primary Font**: Inter (Google Fonts) - clean, technical, readable
- Hero/Name: font-bold text-5xl md:text-7xl tracking-tight
- Section Headers: font-semibold text-3xl md:text-4xl tracking-tight
- Project Titles: font-semibold text-2xl tracking-tight
- Body: font-normal text-base md:text-lg leading-relaxed
- Technical Labels: font-mono text-sm uppercase tracking-wide

**Secondary Font**: JetBrains Mono (for code, technical specs)

### C. Layout System
**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Section padding: py-20 md:py-32
- Component spacing: gap-8 md:gap-12
- Element margins: mb-6, mb-8, mb-12
- Container: max-w-7xl mx-auto px-6 md:px-8

### D. Component Library

**Hero Section**: Full-viewport (min-h-screen) with split layout
- Left: Large typographic name treatment, current status ("Robotics Engineer @ GRASP Lab"), concise value proposition
- Right: 3D interactive element or dynamic project preview that responds to cursor movement
- Floating stats badges: "2x World Champion", "First Hire @Suno.ai", "UPenn M&T"

**Project Showcase Grid**: Asymmetric masonry-style layout
- Featured project: Large card spanning 2 columns with video/GIF preview
- Secondary projects: Staggered cards with hover-reveal details
- Each card: Project thumbnail, title, tech stack tags, brief description, expandable detailed view

**Interactive Project Viewer**: Modal/expandable component
- Full-screen project deep-dive with media carousel, technical breakdown, code samples, results/impact metrics
- Smooth enter/exit animations with backdrop blur

**Technical Skills Matrix**: Visual skill representation
- Category grouping: Robotics (ROS, Computer Vision, Motion Planning), ML/AI, Languages, Hardware
- Clean pill tags with proficiency indicators (not bars - discrete levels)

**Experience Timeline**: Vertical timeline with expandable cards
- Key positions: GRASP Lab, Suno.ai, VEX Robotics, Entrepreneurship
- Hover states reveal detailed achievements and impact

**Navigation**: Minimal fixed header
- Logo/Name left, smooth-scroll section links right
- Disappears on scroll down, reappears on scroll up
- Glass-morphic background (backdrop-blur-lg) when over content

**Footer**: Clean, informative
- Contact methods (email, LinkedIn, GitHub), location, availability status
- Download resume button (accent color)

### E. Interactions & Micro-animations

**Purposeful Motion**:
- Hero: Subtle parallax effect on scroll, 3D element responds to cursor position
- Project cards: Gentle lift on hover (translate-y-2), shadow expansion
- Section reveals: Fade-up on scroll into view (use Intersection Observer)
- Modal transitions: Scale from clicked element with smooth backdrop fade

**Technical Flourishes**:
- Cursor trail effect on hero section (subtle, Tesla-red glow)
- Project thumbnails: Slow zoom on hover
- Skill tags: Gentle pulse on initial page load
- Code snippets: Syntax highlighting with smooth reveal animation

## Images Strategy

**Hero Section**: Abstract robotics imagery or custom 3D render
- Recommendation: Robotic arm silhouette or geometric 3D visualization that suggests precision engineering
- Alternative: Video loop of robot in motion (low-file-size, compressed)
- Position: Right side of hero, occupies 40-50% of viewport width

**Project Cards**: High-quality thumbnails for each project
- VEX robotics: Team photo or robot competition shot
- GRASP work: Robot arm grasping demonstration
- Suno.ai: Product interface or AI visualization
- Startup: Product/team photo
- All images: 16:9 aspect ratio, optimized WebP format

**Background Elements**: Subtle technical patterns
- Grid overlay on hero (very low opacity)
- Circuit-board-inspired decorative elements in footer

## Layout Flow

1. **Hero** (100vh): Name, role, interactive element, scroll indicator
2. **Quick Intro** (auto-height): 2-3 sentence pitch about robotics expertise and career goals
3. **Featured Projects** (generous spacing): Asymmetric grid showcasing 3-5 projects with rich previews
4. **Technical Capabilities** (compact): Skills matrix organized by domain
5. **Experience Journey** (scrollable timeline): Key positions and achievements
6. **Contact/CTA** (focused): Clear next steps for recruiters/collaborators

**Viewport Strategy**: Hero uses full viewport for impact, all other sections use natural content height with consistent py-20 md:py-32 padding. No forced 100vh sections beyond hero.

**Critical Design Principles**:
- Every element earns its place - no decorative filler
- Technical credibility through subtle engineering-inspired details
- Interactive elements demonstrate skill, not distract
- Mobile-first responsive (single column on mobile, multi-column on desktop)
- Fast, performant - optimized assets, lazy-loaded images
- Accessibility: Proper heading hierarchy, keyboard navigation, screen reader labels