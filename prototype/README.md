# Noir Fashion Week Website Prototype

## Overview

This is a fully functional HTML/CSS/JavaScript prototype of the redesigned Noir Fashion Week website. The prototype showcases a modern, premium aesthetic with best-in-class features inspired by leading fashion week platforms.

## Quick Start

1. Open `index.html` in your web browser
2. Navigate through the site using the main navigation menu
3. All pages are fully responsive and interactive

## Pages Included

### 1. Homepage (`index.html`)
- Hero section with call-to-actions
- Featured content sections
- About Noir Fashion Week
- Statistics showcase
- Upcoming shows preview
- Featured designers
- Press coverage
- Contact form

### 2. Schedule (`schedule.html`)
- Countdown timer to event
- Filterable event categories
- Day-by-day schedule breakdown
- Event cards with time, location, and details
- Interactive filtering system

### 3. Designers (`designers.html`)
- Search functionality
- Category filters (womenswear, menswear, sustainable, etc.)
- Designer profile cards with images
- Specialty tags
- Hover effects and animations

### 4. Archive (`archive.html`)
- Season selector
- Past collection showcase
- Video and photo gallery indicators
- Watch-again functionality
- Collection statistics

### 5. Press (`press.html`)
- Media statistics
- Downloadable press kits
- Press releases archive
- Media coverage showcase
- Press accreditation information
- Contact details

## Design System

The prototype uses a comprehensive design system documented in `/DESIGN-SYSTEM.md`. Key elements include:

### Colors
- **Primary**: Black (#000000), White (#FFFFFF)
- **Accent**: Gold (#D4AF37), Rose Gold (#B76E79)
- **Neutrals**: Charcoal, Graphite, Slate, Silver, Smoke

### Typography
- **Display**: Playfair Display (serif) - for headlines and hero text
- **Body**: Inter (sans-serif) - for body text and UI elements
- **Monospace**: JetBrains Mono - for dates, times, and technical details

### Design Principles
1. **Premium aesthetic** with generous white space
2. **Visual hierarchy** through typography and layout
3. **High-quality imagery** as focal points
4. **Smooth animations** and transitions
5. **Mobile-first** responsive design

## Features

### Interactive Elements
- Mobile navigation menu
- Smooth scroll for anchor links
- Navbar scroll effects
- Intersection Observer animations
- Form validation
- Countdown timer
- Filter and search functionality
- Image lazy loading
- Video background support

### Responsive Design
- Mobile-first approach
- Breakpoints:
  - Mobile: < 640px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px
- Touch-friendly interactions
- Hamburger menu for mobile

### Accessibility
- WCAG 2.1 AA compliant color contrast
- Keyboard navigation support
- Focus states for all interactive elements
- Screen reader friendly markup
- Reduced motion support

### Performance Optimizations
- Lazy loading images
- Optimized animations
- Minimal JavaScript dependencies
- CSS custom properties for theming
- Efficient selectors

## File Structure

```
prototype/
├── index.html              # Homepage
├── schedule.html           # Schedule page
├── designers.html          # Designers directory
├── archive.html            # Past seasons archive
├── press.html              # Press center
├── README.md               # This file
├── css/
│   └── design-system.css   # Complete design system
├── js/
│   └── main.js            # Interactive functionality
└── assets/
    └── images/            # Image assets (placeholders)
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Customization

### Changing Colors
Edit the CSS custom properties in `css/design-system.css`:

```css
:root {
  --color-noir-black: #000000;
  --color-gold: #D4AF37;
  /* etc. */
}
```

### Adding New Pages
1. Copy an existing HTML file
2. Update the content
3. Link it in the navigation menu
4. Use existing CSS classes from the design system

### Modifying Typography
Update font imports and variables in `css/design-system.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font');

:root {
  --font-display: 'Your Font', serif;
}
```

## Interactive Features Guide

### Mobile Navigation
- Click the hamburger icon to open/close mobile menu
- Menu items automatically close on navigation
- Body scroll is prevented when menu is open

### Search & Filter
- **Designers page**: Search by name or category filter
- **Schedule page**: Filter events by type (runway, presentation, etc.)
- **Archive page**: Select season to view collections

### Forms
- Real-time validation on all form fields
- Error messages display below invalid fields
- Submit button triggers validation check

### Countdown Timer
- Automatically updates every second
- Displays days, hours, minutes, seconds
- Shows "Event Started" when countdown completes

## Using with Real Content

To integrate with a backend or CMS:

1. **Dynamic Content**: Replace static content with template tags or API calls
2. **Images**: Replace placeholder images with actual event photos
3. **Forms**: Connect form submissions to your backend
4. **Video**: Add actual video URLs for the archive section
5. **Downloads**: Link press kit downloads to real files

## Development Notes

### Adding Animations
Use the existing animation classes:
- `.fade-in` - Simple fade in effect
- `.fade-in-up` - Fade in with upward motion
- `.slide-in-left` - Slide in from left
- `.slide-in-right` - Slide in from right

### Creating New Components
Follow the BEM-like naming convention:
- `.component-name` - Component wrapper
- `.component-element` - Element within component
- `.component--modifier` - Variant of component

### Utility Classes
Use utility classes for common styles:
- `.text-center`, `.text-left`, `.text-right`
- `.bg-black`, `.bg-white`, `.bg-gold`
- `.mt-lg`, `.mb-xl`, `.pt-2xl` (spacing)
- `.d-flex`, `.grid`, `.grid-2` (layout)

## Testing Checklist

- [ ] Test all pages on mobile, tablet, and desktop
- [ ] Verify all links work correctly
- [ ] Test form validation
- [ ] Check responsive images load properly
- [ ] Test navigation menu on mobile
- [ ] Verify accessibility with keyboard navigation
- [ ] Test on multiple browsers
- [ ] Check performance with browser dev tools

## Next Steps

1. **User Testing**: Gather feedback from stakeholders
2. **Content Integration**: Replace placeholder content with real data
3. **Backend Integration**: Connect to CMS or database
4. **Optimization**: Further optimize images and assets
5. **Deployment**: Set up hosting and domain

## Support

For questions or issues with this prototype, please refer to:
- `/DESIGN-SYSTEM.md` - Complete design system documentation
- `/PLANNING.md` - Research findings and recommendations
- `/claude.md` - Project documentation

## Credits

**Design & Development**: Claude Code
**Project**: Noir Fashion Week Website Redesign
**Date**: December 17, 2025
**Version**: 1.0

---

*This prototype is designed to showcase the visual design and user experience. For production use, integrate with appropriate backend systems, optimize assets, and conduct thorough testing.*
