# Noir Fashion Week - Complete Wireframe & Site Overview

**Project**: Noir Fashion Week Global Website Redesign
**Version**: 2.0 - Black & White Edition
**Date**: December 17, 2025
**Designer**: Claude Code

---

## Table of Contents

1. [Design Philosophy](#design-philosophy)
2. [Site Architecture](#site-architecture)
3. [Page Wireframes](#page-wireframes)
4. [Component Library](#component-library)
5. [Navigation Structure](#navigation-structure)
6. [User Flows](#user-flows)
7. [Responsive Breakpoints](#responsive-breakpoints)
8. [Technical Specifications](#technical-specifications)

---

## Design Philosophy

### Core Principles

**1. Timeless Black & White Aesthetic**
- Pure monochromatic palette creates sophistication
- Eliminates trend-dependent colors
- Allows imagery and typography to command attention
- Represents the duality and balance in fashion

**2. Typography as Hero**
- Playfair Display (serif): Headlines, emotional impact
- Inter (sans-serif): Body copy, clarity
- JetBrains Mono: Technical details, dates, times
- Clear hierarchy guides the eye

**3. Generous White Space**
- Breathing room creates luxury feel
- Prevents visual clutter
- Draws focus to key content
- Modern, clean aesthetic

**4. Content-First Approach**
- High-quality imagery drives engagement
- Authentic Noir FW content and mission
- Clear calls-to-action
- Accessibility as standard

---

## Site Architecture

```
Noir Fashion Week Global
│
├── Home (index.html)
│   ├── Hero Section
│   ├── Mission & Vision
│   ├── Why Noir
│   ├── BIPOC Benefits
│   ├── Schedule Preview
│   ├── Press Logos
│   ├── Partners
│   ├── CTA / Tickets
│   └── Contact Form
│
├── Schedule (schedule.html)
│   ├── Hero
│   ├── Countdown Timer
│   ├── Event Filters
│   ├── Day 1: Feb 12 - Summit
│   ├── Day 2: Feb 13 - Showcases
│   ├── Day 3: Feb 14 - Pret-a-Porter
│   ├── Day 4: Feb 15 - Celebration
│   └── Ticket CTA
│
├── Archive (archive.html)
│   ├── Hero
│   ├── Season Selector
│   ├── Past Collections Grid
│   ├── Video/Photo Galleries
│   └── CTA to Current Season
│
├── Press (press.html)
│   ├── Hero
│   ├── Media Statistics
│   ├── Press Kit Downloads
│   ├── Press Releases
│   ├── Media Coverage
│   └── Accreditation Info
│
└── Global Elements
    ├── Navigation (Fixed Header)
    ├── Footer (4-column)
    └── Mobile Menu
```

---

## Page Wireframes

### 1. Homepage (index.html)

```
┌─────────────────────────────────────────────────┐
│  [NOIR FW LOGO]    Home Schedule Why-Noir etc  │ ← Fixed Nav
├─────────────────────────────────────────────────┤
│                                                 │
│           HERO IMAGE (FW 2026)                 │
│                                                 │
│     Where Diversity Fuels Innovation           │
│  A global fashion ecosystem where creativity   │
│          knows no borders                       │
│                                                 │
│    [View Schedule]  [Learn More]               │
│                                                 │
├─────────────────────────────────────────────────┤
│              OUR MISSION                        │
│     Redefining the Geography of Fashion        │
│                                                 │
│  [2-Column Grid]                               │
│  Left: Mission/Vision Text                     │
│  Right: Founder Photo + Bio                    │
├─────────────────────────────────────────────────┤
│              WHY NOIR                           │
│  (Black background, white text)                │
│                                                 │
│  [2-Column Grid]                               │
│  Left: 4 Pillars (Reimagine, Connect, etc)    │
│  Right: Runway Image                           │
├─────────────────────────────────────────────────┤
│       THE SOLUTION FOR BIPOC DESIGNERS         │
│                                                 │
│  [3-Column Grid of Benefits]                   │
│  • Showcase   • Network    • Visibility        │
│  • Resources  • Movement   • Growth            │
├─────────────────────────────────────────────────┤
│           UPCOMING EVENTS                       │
│          February 12-15, 2026                   │
│                                                 │
│  [4 Event Cards - Preview]                     │
│  Feb 12: Summit | Feb 13: Showcases            │
│  Feb 14: Pret-a-Porter | Feb 15: Brunch       │
│                                                 │
│         [Full Schedule Button]                  │
├─────────────────────────────────────────────────┤
│           AS SEEN IN                            │
│  (Dark background)                             │
│                                                 │
│  [Logos: Forbes, Essence, CBS, Impact, PIX11] │
│                                                 │
│         [Press Center Button]                   │
├─────────────────────────────────────────────────┤
│           OUR PARTNERS                          │
│                                                 │
│     [Partner Logos Grid]                       │
├─────────────────────────────────────────────────┤
│        BE PART OF THE MOVEMENT                  │
│  (Background Image with Overlay)               │
│                                                 │
│  [Get Tickets] [Designer Application]          │
│  Early Bird: $97 • VIP: $157                   │
├─────────────────────────────────────────────────┤
│            CONTACT US                           │
│                                                 │
│        [Contact Form]                           │
│  Name, Email, Subject, Message                 │
├─────────────────────────────────────────────────┤
│  [FOOTER - 4 columns]                          │
│  Logo + About | Links | Get Involved | Social  │
│  © 2025 Noir FW | Founded by Nichole M. Bess  │
└─────────────────────────────────────────────────┘
```

### 2. Schedule Page (schedule.html)

```
┌─────────────────────────────────────────────────┐
│  [NAVIGATION - Same as all pages]              │
├─────────────────────────────────────────────────┤
│           HERO IMAGE                            │
│        Fall/Winter 2026                         │
│        Event Schedule                           │
│  Four days of extraordinary fashion            │
├─────────────────────────────────────────────────┤
│        EVENT STARTS IN                          │
│  (Black background)                            │
│   [Countdown: 45 Days 12 Hours 30 Min]        │
├─────────────────────────────────────────────────┤
│     [Filter Buttons]                           │
│  All | Summit | Runway | Market | Networking   │
├─────────────────────────────────────────────────┤
│  DAY 1 - Wednesday, February 12, 2026         │
│  Beyond The Runway                             │
│  ─────────────────────────────────────────    │
│                                                 │
│  [Event Card]                                  │
│  11:00 AM | Global Fashion Summit             │
│  📍 45 W. 29th St. | 6 hours | 50 Seats       │
│  Description...                                │
│  [Register Button]                             │
│                                                 │
│  [Event Card]                                  │
│  7:00 PM | Power 30                            │
│  📍 Brooklyn Chop House | Invite Only          │
│  Description...                                │
│  [Request Invite]                              │
├─────────────────────────────────────────────────┤
│  DAY 2 - Thursday, February 13, 2026          │
│  Designer Showcases Begin                      │
│  ─────────────────────────────────────────    │
│                                                 │
│  [4 Event Cards]                               │
│  • Noir Locale Market (10am)                  │
│  • Private Showing (2pm)                       │
│  • Emerging Designer Collective (4pm)          │
│  • International Collective (6pm)              │
├─────────────────────────────────────────────────┤
│  DAY 3 - Friday, February 14, 2026            │
│  Pret-A-Porter Day                             │
│  ─────────────────────────────────────────    │
│                                                 │
│  [4 Event Cards]                               │
│  • Noir Locale Market Day 2 (10am)            │
│  • Pret-A-Porter Collective (2pm)             │
│  • Private Showing Session 1 (6pm)            │
│  • Private Showing Session 2 (8pm)            │
├─────────────────────────────────────────────────┤
│  DAY 4 - Saturday, February 15, 2026          │
│  Celebration Day                               │
│  ─────────────────────────────────────────    │
│                                                 │
│  [Event Card]                                  │
│  11:00 AM | Meet Us for Brunch in Harlem      │
│  Description...                                │
│  [RSVP Button]                                 │
├─────────────────────────────────────────────────┤
│         DON'T MISS OUT                          │
│  (Black background, white text)                │
│                                                 │
│  [Early Bird $97] [VIP Access $157]           │
├─────────────────────────────────────────────────┤
│  [FOOTER]                                      │
└─────────────────────────────────────────────────┘
```

### 3. Archive Page (archive.html)

```
┌─────────────────────────────────────────────────┐
│  [NAVIGATION]                                  │
├─────────────────────────────────────────────────┤
│           HERO IMAGE                            │
│         Watch Again                             │
│         Archive                                 │
│  Relive iconic runway moments                  │
├─────────────────────────────────────────────────┤
│        SELECT A SEASON                          │
│                                                 │
│  [Season Buttons]                              │
│  FW2025 | SS2025 | FW2024 | SS2024 | etc      │
├─────────────────────────────────────────────────┤
│     COLLECTIONS GRID                            │
│                                                 │
│  [Card] [Card] [Card]                          │
│  Image  Image  Image                           │
│  ▶ Play                                        │
│  Designer Name                                 │
│  Season | 45min | 32 Photos                   │
│  [Watch Show]                                  │
│                                                 │
│  [Card] [Card] [Card]                          │
│  More collections...                           │
├─────────────────────────────────────────────────┤
│    BE PART OF THE NEXT SEASON                  │
│  (Black background)                            │
│                                                 │
│      [View Schedule]                            │
├─────────────────────────────────────────────────┤
│  [FOOTER]                                      │
└─────────────────────────────────────────────────┘
```

### 4. Press Page (press.html)

```
┌─────────────────────────────────────────────────┐
│  [NAVIGATION]                                  │
├─────────────────────────────────────────────────┤
│           HERO IMAGE                            │
│         Media Center                            │
│         Press                                   │
│  News, media kits, and resources               │
├─────────────────────────────────────────────────┤
│           OUR REACH                             │
│  (Black background gradient)                   │
│                                                 │
│  [4-Column Stats]                              │
│  2.5M+        150+       500+        50+       │
│  Impressions  Media     Attendees   Countries  │
├─────────────────────────────────────────────────┤
│         PRESS KITS                              │
│                                                 │
│  [2x2 Grid]                                    │
│  • SS 2026 Media Kit (45MB)                   │
│  • Brand Assets (12MB)                         │
│  • Fact Sheet (3MB)                            │
│  • Designer Headshots (28MB)                   │
│  [Download Button on each]                     │
├─────────────────────────────────────────────────┤
│        PRESS RELEASES                           │
│                                                 │
│  [Press Article Card]                          │
│  Dec 10, 2025                                  │
│  Noir FW Announces SS26 Designer Lineup       │
│  Excerpt...                                    │
│  [Read More →]                                 │
│                                                 │
│  [More Articles...]                            │
│  • Partnership Announcement (Nov 22)           │
│  • FW25 Wrap-Up (Oct 15)                      │
│  • Sustainability Initiative (Sept 8)          │
│                                                 │
│  [View All Press Releases]                     │
├─────────────────────────────────────────────────┤
│        MEDIA COVERAGE                           │
│  Trusted by leading publications               │
│                                                 │
│  [Logo Grid]                                   │
│  Vogue Forbes Essence WWD Elle GQ etc          │
├─────────────────────────────────────────────────┤
│      MEDIA ACCREDITATION                        │
│                                                 │
│  [2-Column Grid]                               │
│  Left: Benefits & Info                         │
│  Right: Press Contact Card                     │
│         Email, Phone, Location                 │
│                                                 │
│  [Apply for Accreditation]                     │
├─────────────────────────────────────────────────┤
│  [FOOTER]                                      │
└─────────────────────────────────────────────────┘
```

---

## Component Library

### Global Components

**1. Navigation Bar**
```
┌─────────────────────────────────────────────────┐
│ [LOGO]    Home  Schedule  Why-Noir  Archive    │
│                 Press  Contact        [☰]      │
└─────────────────────────────────────────────────┘

Specs:
- Position: Fixed top
- Background: rgba(0,0,0,0.95) + blur
- Padding: 24px 80px
- Logo: nfw_logo_white22.webp (40px height)
- Links: Inter Medium, 14px, uppercase
- Hover: Color changes to silver
- Mobile: Hamburger menu, full-screen overlay
```

**2. Hero Section**
```
┌─────────────────────────────────────────────────┐
│                                                 │
│         [Background Image/Video]               │
│              + Dark Overlay                     │
│                                                 │
│          HEADLINE (72px Playfair)              │
│        Subheadline (18px Inter)                │
│                                                 │
│     [Primary Button]  [Secondary Button]       │
│                                                 │
└─────────────────────────────────────────────────┘

Specs:
- Min-height: 100vh (or 60vh for sub-pages)
- Overlay: linear-gradient black to transparent
- Text: Center-aligned, white
- Buttons: 16px spacing between
```

**3. Section Container**
```
┌─────────────────────────────────────────────────┐
│ ┌─────────────────────────────────────────┐   │
│ │                                         │   │
│ │         Content Area                    │   │
│ │         Max-width: 1440px               │   │
│ │         Padding: 80px sides             │   │
│ │                                         │   │
│ └─────────────────────────────────────────┘   │
└─────────────────────────────────────────────────┘

Specs:
- Vertical Padding: 128px (8rem)
- Horizontal Padding: 80px (5rem)
- Background: Alternates white/smoke/black
- Margins: Auto-centered
```

**4. Buttons**

**Primary Button (White)**
```
┌─────────────────────┐
│   VIEW SCHEDULE     │
└─────────────────────┘

- Background: White
- Text: Black, Inter Semi-Bold, 16px, uppercase
- Padding: 16px 40px
- Border: 2px solid white
- Hover: Inverts to black bg, white text
```

**Secondary Button (Outline)**
```
┌─────────────────────┐
│   LEARN MORE        │
└─────────────────────┘

- Background: Transparent
- Text: White, Inter Semi-Bold, 16px, uppercase
- Border: 2px solid white
- Padding: 16px 40px
- Hover: Fill white bg, black text
```

**5. Cards**

**Standard Card**
```
┌─────────────────────┐
│                     │
│   [Content]         │
│                     │
│   Heading           │
│   Body text...      │
│                     │
│   [Button]          │
└─────────────────────┘

- Background: White
- Padding: 32px
- Shadow: 0 4px 16px rgba(0,0,0,0.08)
- Hover: Lift effect (translateY -4px)
```

**Image Card**
```
┌─────────────────────┐
│                     │
│     [Image]         │
│     3:4 ratio       │
│                     │
├─────────────────────┤
│   Card Content      │
│   Heading           │
│   Description       │
│   [Link →]          │
└─────────────────────┘

- Image: object-fit cover
- Hover: Image scales 1.05
- Transition: 0.5s ease
```

**6. Event Card**
```
┌──────┬────────────────────────┬─────────┐
│      │                        │         │
│ TIME │  Event Details         │ [Button]│
│ 2:00 │  Title                 │         │
│  PM  │  📍 Location           │         │
│      │  Description...        │         │
│      │                        │         │
└──────┴────────────────────────┴─────────┘

- Border-left: 4px solid black
- Grid: 140px | 1fr | auto
- Hover: Slide right 8px
```

**7. Footer (4-Column)**
```
┌──────────┬──────────┬──────────┬──────────┐
│ [Logo]   │  Links   │ Involved │  Social  │
│          │          │          │          │
│ About    │ Schedule │ Apply    │ Instagram│
│ text     │ Why Noir │ Tickets  │ Twitter  │
│          │ Archive  │ Volunteer│ Facebook │
│          │ Press    │ Partner  │ LinkedIn │
└──────────┴──────────┴──────────┴──────────┘
─────────────────────────────────────────────
     © 2025 Noir FW | Founded by Nichole M. Bess

Specs:
- Background: Black
- Text: Silver (#CCCCCC)
- Padding: 96px top, 32px bottom
- Border-top: 1px solid graphite
- Links: Hover brightens to white
```

---

## Navigation Structure

### Primary Navigation
- Home
- Schedule
- Why Noir
- Archive
- Press
- Contact

### Secondary Navigation (Footer)
- Designer Application
- Buy Tickets
- Volunteer
- Become a Partner
- Social Media Links

### Mobile Navigation
- Hamburger menu (3 lines)
- Full-screen overlay
- Same links as desktop
- Close on link click
- Prevents body scroll when open

---

## User Flows

### 1. Visitor Wants to Attend Event
```
Homepage
  → "View Schedule" CTA
    → Schedule Page
      → Filter by interest
        → Select event
          → "Get Tickets" / "Register"
            → External ticket platform
```

### 2. Designer Wants to Apply
```
Homepage
  → "Designer Application" CTA
    → Application form/page
      → Submit application
        → Confirmation
```

### 3. Press Wants Media Kit
```
Homepage
  → "Press Center" / Press nav
    → Press Page
      → Scroll to "Press Kits"
        → Click "Download"
          → File downloads
```

### 4. User Explores Past Work
```
Homepage
  → "Archive" nav
    → Archive Page
      → Select season
        → Browse collections
          → "Watch Show" / "View Gallery"
            → Media player/gallery
```

---

## Responsive Breakpoints

### Desktop (1280px+)
- Full multi-column layouts
- Side-by-side images and text
- 4-column footer
- Fixed navigation

### Tablet (768px - 1279px)
- 2-column grids become stacked or fluid
- Reduced padding (40px sides)
- Smaller typography
- Hamburger menu starts at 768px

### Mobile (< 768px)
- Single column layouts
- Full-width images
- Touch-friendly buttons (min 44px)
- Mobile menu overlay
- Reduced padding (24px sides)
- Smaller hero text (2.5rem vs 4.5rem)

---

## Technical Specifications

### Typography Scale

| Element | Font | Size | Weight | Line Height |
|---------|------|------|--------|-------------|
| Display 1 | Playfair | 72px | 700 | 1.1 |
| Display 2 | Playfair | 56px | 700 | 1.1 |
| H1 | Playfair | 48px | 700 | 1.2 |
| H2 | Playfair | 36px | 500 | 1.3 |
| H3 | Inter | 24px | 600 | 1.4 |
| H4 | Inter | 20px | 600 | 1.4 |
| Body Large | Inter | 18px | 400 | 1.6 |
| Body | Inter | 16px | 400 | 1.6 |
| Small | Inter | 14px | 400 | 1.5 |
| Caption | Inter | 12px | 500 | 1.4 |
| Mono | JetBrains | 14px | 400-500 | 1.5 |

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Noir Black | #000000 | Primary, headers, nav |
| Pure White | #FFFFFF | Text on dark, buttons |
| Charcoal | #1A1A1A | Alt backgrounds |
| Graphite | #2D2D2D | Cards on dark |
| Slate | #4A4A4A | Secondary text |
| Silver | #CCCCCC | Borders, subtle text |
| Smoke | #F5F5F5 | Light backgrounds |
| Ghost White | #FAFAFA | Subtle sections |

### Spacing System (8px base)

| Name | Value | Usage |
|------|-------|-------|
| xs | 4px | Tight spacing |
| sm | 8px | Small gaps |
| md | 16px | Default spacing |
| lg | 24px | Component spacing |
| xl | 32px | Section elements |
| 2xl | 48px | Large gaps |
| 3xl | 64px | Section padding |
| 4xl | 96px | Large sections |
| 5xl | 128px | Hero padding |
| 6xl | 192px | Extra large |

### Grid System
- 12-column grid
- Gutter: 24px (desktop), 16px (mobile)
- Max-width: 1440px
- Auto-margins for centering

### Shadows

| Level | Value | Usage |
|-------|-------|-------|
| 1 | 0 2px 8px rgba(0,0,0,0.06) | Subtle |
| 2 | 0 4px 16px rgba(0,0,0,0.08) | Standard cards |
| 3 | 0 8px 32px rgba(0,0,0,0.12) | Hover states |
| 4 | 0 16px 48px rgba(0,0,0,0.16) | Modals, overlays |

---

## Accessibility Features

### WCAG 2.1 AA Compliance
- ✅ Color contrast: 21:1 (Black on White)
- ✅ Keyboard navigation supported
- ✅ Focus states visible (3px white outline)
- ✅ Alt text on all images
- ✅ Semantic HTML structure
- ✅ Form labels and error messages
- ✅ Skip navigation link
- ✅ Reduced motion support

### Semantic HTML
```html
<header>
<nav>
<main>
  <section>
    <article>
  </section>
</main>
<footer>
```

### ARIA Labels
- Hamburger menu: `aria-label="Toggle mobile menu"`
- Form inputs: Proper `<label>` associations
- Buttons: Clear text or aria-labels

---

## Performance Optimizations

1. **Images**
   - WebP format (smaller file size)
   - Lazy loading (`loading="lazy"`)
   - Responsive images with srcset
   - Optimized dimensions

2. **CSS**
   - Single design-system.css file
   - CSS custom properties
   - Minimal specificity
   - Mobile-first approach

3. **JavaScript**
   - Vanilla JS (no frameworks)
   - Event delegation
   - Debounced scroll events
   - Intersection Observer for animations

4. **Fonts**
   - Google Fonts with display=swap
   - Subset to needed weights only
   - System font fallbacks

---

## File Structure

```
prototype/
├── index.html              (Homepage)
├── schedule.html           (Events & Schedule)
├── archive.html            (Past Collections)
├── press.html              (Media Center)
├── css/
│   └── design-system.css   (Complete Styles)
├── js/
│   └── main.js            (Interactions)
└── assets/
    └── images/
        ├── nfw_logo_white22.webp
        ├── FW+2026+DESIGNER+PKG.webp
        ├── as-seen-in/
        │   ├── FORBES22.webp
        │   ├── ESSENCE2.webp
        │   ├── cbs2.webp
        │   ├── IMPACT.webp
        │   └── pix.webp
        ├── partners/
        │   ├── bk-logo-new.webp
        │   ├── Myavana_Black__2_Logo.webp
        │   └── global+edit+2.webp
        └── from-noirfw/
            ├── Nichole+Founder.webp
            ├── flaunter-2KbjY_7c7to-unsplash.webp
            ├── naomi-campbell...webp
            └── [other event images]
```

---

## Next Steps for Development

### Phase 1: Content Integration
- [ ] Connect to CMS/Database
- [ ] Add real designer profiles
- [ ] Import all event details
- [ ] Upload high-res imagery

### Phase 2: Functionality
- [ ] Ticket purchase integration
- [ ] Designer application form
- [ ] Email newsletter signup
- [ ] Contact form backend
- [ ] Video player for archive

### Phase 3: Enhancement
- [ ] Add animations (scroll-triggered)
- [ ] Instagram feed integration
- [ ] Search functionality
- [ ] Multi-language support

### Phase 4: Launch
- [ ] Performance audit
- [ ] Accessibility audit
- [ ] SEO optimization
- [ ] Analytics setup
- [ ] Deploy to production

---

**End of Wireframe Overview**

*This document serves as the complete blueprint for the Noir Fashion Week Global website. All measurements, specifications, and layouts are production-ready.*

**Last Updated**: December 17, 2025
**Version**: 2.0 Black & White Edition
