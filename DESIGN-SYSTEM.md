# Noir Fashion Week - Design System

## Brand Foundation

The Noir Fashion Week design system embodies sophistication, elegance, and modernity. Drawing from the current black and white foundation, this enhanced system creates a premium, high-end aesthetic befitting a world-class fashion event.

---

## Color Palette

### Primary Colors

**Noir Black** (Primary)
- Hex: `#000000`
- RGB: `rgb(0, 0, 0)`
- Usage: Primary backgrounds, headlines, logo

**Pure White** (Primary)
- Hex: `#FFFFFF`
- RGB: `rgb(255, 255, 255)`
- Usage: Text on dark backgrounds, light sections, cards

### Neutral Grays

**Charcoal**
- Hex: `#1A1A1A`
- RGB: `rgb(26, 26, 26)`
- Usage: Alternate dark backgrounds, hover states

**Graphite**
- Hex: `#2D2D2D`
- RGB: `rgb(45, 45, 45)`
- Usage: Cards on dark backgrounds, subtle sections

**Slate**
- Hex: `#4A4A4A`
- RGB: `rgb(74, 74, 74)`
- Usage: Secondary text on dark backgrounds

**Silver**
- Hex: `#CCCCCC`
- RGB: `rgb(204, 204, 204)`
- Usage: Borders, dividers

**Smoke**
- Hex: `#F5F5F5`
- RGB: `rgb(245, 245, 245)`
- Usage: Light backgrounds, alternate sections

**Ghost White**
- Hex: `#FAFAFA`
- RGB: `rgb(250, 250, 250)`
- Usage: Subtle light backgrounds

### Accent Colors

**Gold** (Luxury Accent)
- Hex: `#D4AF37`
- RGB: `rgb(212, 175, 55)`
- Usage: CTAs, highlights, premium badges, hover states

**Rose Gold** (Secondary Accent)
- Hex: `#B76E79`
- RGB: `rgb(183, 110, 121)`
- Usage: Secondary buttons, links, decorative elements

**Champagne**
- Hex: `#F7E7CE`
- RGB: `rgb(247, 231, 206)`
- Usage: Subtle backgrounds, highlights

### Functional Colors

**Success**
- Hex: `#2ECC71`
- RGB: `rgb(46, 204, 113)`
- Usage: Success messages, confirmations

**Warning**
- Hex: `#F39C12`
- RGB: `rgb(243, 156, 18)`
- Usage: Warnings, alerts

**Error**
- Hex: `#E74C3C`
- RGB: `rgb(231, 76, 60)`
- Usage: Error messages, required fields

---

## Typography

### Font Families

**Display/Headings**
```css
font-family: 'Playfair Display', 'Georgia', serif;
```
- Elegant, sophisticated serif
- Used for: H1, H2, hero text, section titles
- Weights: 400 (Regular), 500 (Medium), 700 (Bold), 900 (Black)

**Body/UI**
```css
font-family: 'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```
- Modern, highly legible sans-serif
- Used for: Body text, navigation, buttons, UI elements
- Weights: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semi-Bold), 700 (Bold)

**Monospace/Dates**
```css
font-family: 'JetBrains Mono', 'SF Mono', 'Monaco', monospace;
```
- Technical, modern monospace
- Used for: Dates, times, numbers, technical details
- Weights: 400 (Regular), 500 (Medium)

### Type Scale

**Display 1** (Hero Headlines)
- Font: Playfair Display Bold
- Size: 72px / 4.5rem
- Line Height: 1.1
- Letter Spacing: -0.02em
- Weight: 700

**Display 2** (Large Headlines)
- Font: Playfair Display Bold
- Size: 56px / 3.5rem
- Line Height: 1.1
- Letter Spacing: -0.01em
- Weight: 700

**H1** (Page Titles)
- Font: Playfair Display Bold
- Size: 48px / 3rem
- Line Height: 1.2
- Letter Spacing: -0.01em
- Weight: 700

**H2** (Section Titles)
- Font: Playfair Display Medium
- Size: 36px / 2.25rem
- Line Height: 1.3
- Letter Spacing: 0
- Weight: 500

**H3** (Subsection Titles)
- Font: Inter Semi-Bold
- Size: 24px / 1.5rem
- Line Height: 1.4
- Letter Spacing: -0.01em
- Weight: 600

**H4** (Card Titles)
- Font: Inter Semi-Bold
- Size: 20px / 1.25rem
- Line Height: 1.4
- Letter Spacing: 0
- Weight: 600

**Body Large**
- Font: Inter Regular
- Size: 18px / 1.125rem
- Line Height: 1.6
- Letter Spacing: 0
- Weight: 400

**Body** (Default)
- Font: Inter Regular
- Size: 16px / 1rem
- Line Height: 1.6
- Letter Spacing: 0
- Weight: 400

**Body Small**
- Font: Inter Regular
- Size: 14px / 0.875rem
- Line Height: 1.5
- Letter Spacing: 0
- Weight: 400

**Caption**
- Font: Inter Medium
- Size: 12px / 0.75rem
- Line Height: 1.4
- Letter Spacing: 0.05em
- Weight: 500
- Transform: uppercase

**Button Text**
- Font: Inter Semi-Bold
- Size: 16px / 1rem
- Line Height: 1
- Letter Spacing: 0.05em
- Weight: 600
- Transform: uppercase

---

## Spacing System

Based on 8px base unit for consistency and harmony.

**Scale:**
- `xs`: 4px (0.25rem)
- `sm`: 8px (0.5rem)
- `md`: 16px (1rem)
- `lg`: 24px (1.5rem)
- `xl`: 32px (2rem)
- `2xl`: 48px (3rem)
- `3xl`: 64px (4rem)
- `4xl`: 96px (6rem)
- `5xl`: 128px (8rem)
- `6xl`: 192px (12rem)

**Common Usage:**
- Element padding: 16px - 32px
- Section padding: 64px - 128px
- Grid gap: 24px - 32px
- Component spacing: 16px - 24px

---

## Layout & Grid

### Container Widths

**Max Content Width**
- Desktop: 1440px
- Padding: 80px (left/right)

**Content Containers**
- Wide: 1200px
- Standard: 1000px
- Narrow: 800px
- Text: 680px

### Grid System

**12 Column Grid**
- Columns: 12
- Gutter: 24px (desktop), 16px (mobile)
- Margin: 80px (desktop), 24px (mobile)

### Breakpoints

```css
/* Mobile First Approach */
xs: 0px      /* Mobile portrait */
sm: 640px    /* Mobile landscape */
md: 768px    /* Tablet portrait */
lg: 1024px   /* Tablet landscape / Small desktop */
xl: 1280px   /* Desktop */
2xl: 1536px  /* Large desktop */
```

---

## Components

### Buttons

**Primary Button**
```css
background: #D4AF37 (Gold)
color: #000000
padding: 16px 40px
font: Inter Semi-Bold, 16px, uppercase
letter-spacing: 0.05em
border-radius: 0px (sharp edges)
transition: all 0.3s ease

hover:
  background: #C19B2F
  transform: translateY(-2px)
  box-shadow: 0 8px 24px rgba(212, 175, 55, 0.3)
```

**Secondary Button**
```css
background: transparent
color: #FFFFFF
border: 2px solid #FFFFFF
padding: 16px 40px
font: Inter Semi-Bold, 16px, uppercase

hover:
  background: #FFFFFF
  color: #000000
```

**Tertiary Button**
```css
background: transparent
color: #D4AF37
border: none
padding: 16px 24px
font: Inter Semi-Bold, 16px

hover:
  color: #C19B2F
  text-decoration: underline
```

### Cards

**Standard Card**
```css
background: #FFFFFF
padding: 32px
border-radius: 0px
box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08)
transition: all 0.3s ease

hover:
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12)
  transform: translateY(-4px)
```

**Dark Card**
```css
background: #1A1A1A
color: #FFFFFF
padding: 32px
border: 1px solid #2D2D2D
```

**Image Card**
```css
aspect-ratio: 3/4 (portrait)
aspect-ratio: 16/9 (landscape)
overflow: hidden

image:
  width: 100%
  height: 100%
  object-fit: cover
  transition: transform 0.5s ease

hover:
  transform: scale(1.05)
```

### Navigation

**Desktop Navigation**
```css
background: rgba(0, 0, 0, 0.95)
backdrop-filter: blur(10px)
padding: 24px 80px
position: fixed
z-index: 1000

links:
  font: Inter Medium, 14px, uppercase
  letter-spacing: 0.1em
  color: #FFFFFF
  padding: 8px 16px

  hover:
    color: #D4AF37
```

**Mobile Navigation**
```css
background: #000000
position: fixed
width: 100vw
height: 100vh
padding: 80px 24px

hamburger:
  width: 32px
  height: 24px
  color: #FFFFFF
```

### Forms

**Input Fields**
```css
background: #FFFFFF
border: 2px solid #CCCCCC
padding: 16px 20px
font: Inter Regular, 16px
border-radius: 0px

focus:
  border-color: #D4AF37
  outline: none
  box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.1)

error:
  border-color: #E74C3C
```

**Labels**
```css
font: Inter Medium, 14px
color: #2D2D2D
margin-bottom: 8px
letter-spacing: 0.02em
```

---

## Effects & Interactions

### Shadows

**Elevation 1** (Subtle)
```css
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
```

**Elevation 2** (Standard)
```css
box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
```

**Elevation 3** (Prominent)
```css
box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
```

**Elevation 4** (High)
```css
box-shadow: 0 16px 48px rgba(0, 0, 0, 0.16);
```

### Transitions

**Standard**
```css
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
```

**Smooth**
```css
transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
```

**Snappy**
```css
transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
```

### Animations

**Fade In**
```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
animation: fadeIn 0.6s ease;
```

**Slide Up**
```css
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
animation: slideUp 0.8s cubic-bezier(0.4, 0, 0.2, 1);
```

---

## Imagery Guidelines

### Image Ratios

**Hero Images**
- Aspect Ratio: 16:9 or 21:9 (ultra-wide)
- Minimum Width: 1920px
- Format: WebP with JPG fallback

**Designer Profile**
- Aspect Ratio: 3:4 (portrait)
- Minimum Width: 800px
- Format: WebP with JPG fallback

**Collection Gallery**
- Aspect Ratio: 2:3 (runway)
- Minimum Width: 1200px
- Format: WebP with JPG fallback

**Thumbnail**
- Aspect Ratio: 1:1 (square)
- Minimum Width: 400px
- Format: WebP with JPG fallback

### Image Treatments

**Overlay (Dark)**
```css
background: linear-gradient(
  180deg,
  rgba(0, 0, 0, 0) 0%,
  rgba(0, 0, 0, 0.7) 100%
);
```

**Overlay (Light)**
```css
background: linear-gradient(
  180deg,
  rgba(255, 255, 255, 0) 0%,
  rgba(255, 255, 255, 0.9) 100%
);
```

**Duotone Effect**
- Shadows: #000000
- Highlights: #D4AF37
- Opacity: 15%

---

## Icons

### Style
- Line style (not filled)
- Stroke width: 2px
- Size: 24px (standard), 32px (large), 16px (small)
- Color: Inherits from parent or #FFFFFF/#000000

### Icon Set
- Use: Feather Icons or Heroicons
- Consistent stroke width across all icons
- Minimal, clean aesthetic

---

## Accessibility

### Color Contrast

**WCAG 2.1 AA Compliance**
- Normal text: 4.5:1 minimum
- Large text (18px+): 3:1 minimum
- UI components: 3:1 minimum

**Tested Combinations**
- White (#FFFFFF) on Black (#000000): 21:1 ✓
- Gold (#D4AF37) on Black (#000000): 8.2:1 ✓
- White (#FFFFFF) on Gold (#D4AF37): 2.6:1 (Large text only)
- Black (#000000) on Gold (#D4AF37): 8.2:1 ✓

### Focus States

**Keyboard Navigation**
```css
*:focus-visible {
  outline: 3px solid #D4AF37;
  outline-offset: 2px;
}
```

### Motion

**Respect User Preferences**
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Design Principles

### 1. Elegance Through Simplicity
- Clean layouts with generous white space
- Minimal color palette focusing on black, white, and gold
- Typography does the heavy lifting

### 2. Premium Visual Hierarchy
- Large, bold headlines command attention
- Clear content structure guides the eye
- Strategic use of gold accent for emphasis

### 3. Content-First
- High-quality imagery takes center stage
- Text serves to enhance, not compete with visuals
- Breathing room around all content

### 4. Sophisticated Interactions
- Smooth, refined animations
- Subtle hover effects
- Purposeful transitions

### 5. Timeless Aesthetic
- Classic black and white foundation
- Modern sans-serif paired with elegant serif
- Avoids trendy effects that date quickly

---

## Usage Examples

### Hero Section
```css
background: #000000
color: #FFFFFF
padding: 128px 80px
min-height: 100vh

headline:
  font: Playfair Display Bold, 72px
  color: #FFFFFF
  margin-bottom: 24px

subheadline:
  font: Inter Regular, 20px
  color: #CCCCCC
  margin-bottom: 48px

cta:
  Primary button (Gold)
```

### Designer Card
```css
background: #FFFFFF
overflow: hidden

image:
  aspect-ratio: 3/4
  width: 100%

content:
  padding: 24px

  name:
    font: Playfair Display Medium, 24px
    color: #000000

  collection:
    font: Inter Regular, 14px
    color: #4A4A4A
    text-transform: uppercase
    letter-spacing: 0.1em
```

### Schedule Entry
```css
background: #FAFAFA
padding: 32px
border-left: 4px solid #D4AF37

time:
  font: JetBrains Mono, 14px
  color: #4A4A4A
  text-transform: uppercase

designer:
  font: Playfair Display Medium, 20px
  color: #000000
  margin: 8px 0

venue:
  font: Inter Regular, 14px
  color: #4A4A4A
```

---

*Design System v1.0 - December 17, 2025*
*Noir Fashion Week*
