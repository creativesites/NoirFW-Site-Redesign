/**
 * Noir Fashion Week - Main JavaScript
 * Version 1.0 - December 17, 2025
 *
 * Handles interactive elements and animations
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

  // ========================================
  // MOBILE NAVIGATION TOGGLE
  // ========================================

  const mobileToggle = document.querySelector('.navbar-mobile-toggle');
  const navbarMenu = document.querySelector('.navbar-menu');
  const navbarLinks = document.querySelectorAll('.navbar-link');

  if (mobileToggle) {
    mobileToggle.addEventListener('click', function() {
      navbarMenu.classList.toggle('active');
      mobileToggle.classList.toggle('active');

      // Prevent body scroll when menu is open
      if (navbarMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    });

    // Close mobile menu when clicking on a link
    navbarLinks.forEach(link => {
      link.addEventListener('click', function() {
        navbarMenu.classList.remove('active');
        mobileToggle.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }


  // ========================================
  // SMOOTH SCROLL FOR ANCHOR LINKS
  // ========================================

  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');

      // Skip empty or '#' only links
      if (href === '#' || href === '') {
        e.preventDefault();
        return;
      }

      const target = document.querySelector(href);

      if (target) {
        e.preventDefault();
        const offsetTop = target.offsetTop - 80; // Account for fixed navbar

        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });


  // ========================================
  // NAVBAR SCROLL EFFECT
  // ========================================

  const navbar = document.querySelector('.navbar');
  let lastScroll = 0;

  if (navbar) {
    window.addEventListener('scroll', function() {
      const currentScroll = window.pageYOffset;

      // Add shadow when scrolled
      if (currentScroll > 50) {
        navbar.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.3)';
      } else {
        navbar.style.boxShadow = 'none';
      }

      lastScroll = currentScroll;
    });
  }


  // ========================================
  // INTERSECTION OBSERVER FOR ANIMATIONS
  // ========================================

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe elements with animation classes
  const animatedElements = document.querySelectorAll('.fade-in, .fade-in-up, .slide-in-left, .slide-in-right');
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
  });

  // Add visible class styles
  const style = document.createElement('style');
  style.textContent = `
    .fade-in.visible,
    .fade-in-up.visible,
    .slide-in-left.visible,
    .slide-in-right.visible {
      opacity: 1 !important;
    }
  `;
  document.head.appendChild(style);


  // ========================================
  // VIDEO BACKGROUND CONTROLS
  // ========================================

  const videoBackgrounds = document.querySelectorAll('.hero-background video');

  videoBackgrounds.forEach(video => {
    // Ensure videos are muted and autoplay
    video.muted = true;
    video.autoplay = true;
    video.loop = true;
    video.playsInline = true;

    // Play video when in view
    const videoObserver = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          video.play().catch(err => console.log('Video autoplay prevented:', err));
        } else {
          video.pause();
        }
      });
    }, { threshold: 0.1 });

    videoObserver.observe(video);
  });


  // ========================================
  // IMAGE LAZY LOADING (for older browsers)
  // ========================================

  if ('loading' in HTMLImageElement.prototype) {
    // Browser supports native lazy loading
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
      img.src = img.dataset.src || img.src;
    });
  } else {
    // Fallback for older browsers
    const imageObserver = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src || img.src;
          img.classList.add('loaded');
          imageObserver.unobserve(img);
        }
      });
    });

    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    lazyImages.forEach(img => imageObserver.observe(img));
  }


  // ========================================
  // FORM VALIDATION
  // ========================================

  const forms = document.querySelectorAll('form[data-validate]');

  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      let isValid = true;
      const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');

      inputs.forEach(input => {
        const errorElement = input.parentElement.querySelector('.form-error');

        if (!input.value.trim()) {
          input.classList.add('error');
          if (errorElement) {
            errorElement.textContent = 'This field is required';
          }
          isValid = false;
        } else {
          input.classList.remove('error');
          if (errorElement) {
            errorElement.textContent = '';
          }
        }

        // Email validation
        if (input.type === 'email' && input.value.trim()) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(input.value)) {
            input.classList.add('error');
            if (errorElement) {
              errorElement.textContent = 'Please enter a valid email address';
            }
            isValid = false;
          }
        }
      });

      if (isValid) {
        // Form is valid, you can submit it
        console.log('Form is valid, ready to submit');
        // Uncomment to actually submit: form.submit();
      }
    });

    // Remove error on input
    const inputs = form.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
      input.addEventListener('input', function() {
        this.classList.remove('error');
        const errorElement = this.parentElement.querySelector('.form-error');
        if (errorElement) {
          errorElement.textContent = '';
        }
      });
    });
  });


  // ========================================
  // COUNTDOWN TIMER (for events)
  // ========================================

  const countdownElements = document.querySelectorAll('[data-countdown]');

  countdownElements.forEach(element => {
    const targetDate = new Date(element.dataset.countdown).getTime();

    const updateCountdown = function() {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        element.innerHTML = '<span class="caption">Event Started</span>';
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      element.innerHTML = `
        <div class="countdown">
          <div class="countdown-item">
            <span class="countdown-value">${days}</span>
            <span class="countdown-label">Days</span>
          </div>
          <div class="countdown-item">
            <span class="countdown-value">${hours}</span>
            <span class="countdown-label">Hours</span>
          </div>
          <div class="countdown-item">
            <span class="countdown-value">${minutes}</span>
            <span class="countdown-label">Minutes</span>
          </div>
          <div class="countdown-item">
            <span class="countdown-value">${seconds}</span>
            <span class="countdown-label">Seconds</span>
          </div>
        </div>
      `;
    };

    updateCountdown();
    setInterval(updateCountdown, 1000);
  });


  // ========================================
  // MODAL FUNCTIONALITY
  // ========================================

  const modalTriggers = document.querySelectorAll('[data-modal]');
  const modalCloses = document.querySelectorAll('.modal-close');

  modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', function(e) {
      e.preventDefault();
      const modalId = this.dataset.modal;
      const modal = document.getElementById(modalId);

      if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  modalCloses.forEach(close => {
    close.addEventListener('click', function() {
      const modal = this.closest('.modal');
      if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });

  // Close modal on background click
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    modal.addEventListener('click', function(e) {
      if (e.target === this) {
        this.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });

  // Close modal on ESC key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      const activeModal = document.querySelector('.modal.active');
      if (activeModal) {
        activeModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    }
  });

});


// ========================================
// UTILITY FUNCTIONS
// ========================================

/**
 * Debounce function to limit function calls
 */
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle function to limit function calls
 */
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}
