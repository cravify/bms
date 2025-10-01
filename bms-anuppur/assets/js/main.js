// Bethel Mission School Anuppur - Main JavaScript
class BethelApp {
  constructor() {
    this.currentTheme = localStorage.getItem('theme') || 'light';
    this.currentLanguage = localStorage.getItem('language') || 'en';
    this.init();
  }

  init() {
    this.setupTheme();
    this.setupLanguage();
    this.setupNavigation();
    this.setupScrollAnimations();
    this.setupCounters();
    this.setupTestimonials();
    this.setupForms();
    this.setupLightbox();
    this.setupAccordion();
    this.setupTabs();
    this.setupNewsletter();
    this.setupSmoothScroll();
  }

  // Theme Management
  setupTheme() {
    const html = document.documentElement;
    const themeToggle = document.querySelector('.theme-toggle');
    
    html.setAttribute('data-theme', this.currentTheme);
    
    if (themeToggle) {
      themeToggle.addEventListener('click', () => {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        html.setAttribute('data-theme', this.currentTheme);
        localStorage.setItem('theme', this.currentTheme);
        this.updateThemeIcon(themeToggle);
      });
      
      this.updateThemeIcon(themeToggle);
    }
  }

  updateThemeIcon(toggle) {
    const icon = toggle.querySelector('i') || toggle;
    if (this.currentTheme === 'dark') {
      icon.textContent = '☀️';
    } else {
      icon.textContent = '🌙';
    }
  }

  // Language Management
  setupLanguage() {
    const translations = {
      en: {
        navHome: 'Home',
        navAbout: 'About',
        navAcademics: 'Academics',
        navAdmissions: 'Admissions',
        navGallery: 'Gallery',
        navEvents: 'Events',
        navContact: 'Contact',
        heroTitle: 'Lighted to Lighten',
        heroSubtitle: 'Nurturing Minds, Building Character',
        applyNow: 'Apply Now',
        exploreCurriculum: 'Explore Curriculum',
        downloadProspectus: 'Download Prospectus',
        yearsExperience: 'Years of Excellence',
        students: 'Students',
        alumni: 'Alumni',
        teachers: 'Expert Teachers',
        labs: 'Modern Laboratories'
      },
      hi: {
        navHome: 'होम',
        navAbout: 'हमारे बारे में',
        navAcademics: 'शैक्षणिक',
        navAdmissions: 'प्रवेश',
        navGallery: 'गैलरी',
        navEvents: 'आयोजन',
        navContact: 'संपर्क',
        heroTitle: 'रोशन करने के लिए रोशन',
        heroSubtitle: 'मस्तिष्क का पोषण, चरित्र का निर्माण',
        applyNow: 'अभी आवेदन करें',
        exploreCurriculum: 'पाठ्यक्रम देखें',
        downloadProspectus: 'प्रॉस्पेक्टस डाउनलोड करें',
        yearsExperience: 'वर्षों का उत्कृष्टता',
        students: 'छात्र',
        alumni: 'पूर्व छात्र',
        teachers: 'विशेषज्ञ शिक्षक',
        labs: 'आधुनिक प्रयोगशालाएं'
      }
    };

    const langToggle = document.querySelector('.lang-toggle');
    if (langToggle) {
      langToggle.addEventListener('click', () => {
        this.currentLanguage = this.currentLanguage === 'en' ? 'hi' : 'en';
        localStorage.setItem('language', this.currentLanguage);
        this.updateLanguage(translations);
      });
    }
    
    this.updateLanguage(translations);
  }

  updateLanguage(translations) {
    const t = translations[this.currentLanguage];
    
    // Update navigation
    Object.keys(t).forEach(key => {
      const elements = document.querySelectorAll(`[data-translate="${key}"]`);
      elements.forEach(el => {
        if (el.tagName === 'INPUT' || el.tagName === 'BUTTON') {
          el.value = t[key];
        } else {
          el.textContent = t[key];
        }
      });
    });
  }

  // Navigation
  setupNavigation() {
    const navbar = document.querySelector('.navbar');
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Sticky navbar
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        navbar?.classList.add('scrolled');
      } else {
        navbar?.classList.remove('scrolled');
      }
    });

    // Mobile menu toggle
    if (mobileToggle && navLinks) {
      mobileToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileToggle.classList.toggle('active');
      });
    }

    // Close mobile menu on link click
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks?.classList.remove('active');
        mobileToggle?.classList.remove('active');
      });
    });
  }

  // Scroll Animations
  setupScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, observerOptions);

    // Observe elements with loading class
    document.querySelectorAll('.loading').forEach(el => {
      observer.observe(el);
    });

    // Parallax effect for hero
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const hero = document.querySelector('.hero');
      if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    });
  }

  // Counter Animation
  setupCounters() {
    const counters = document.querySelectorAll('.counter-number');
    
    const observerOptions = {
      threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
          this.animateCounter(entry.target);
          entry.target.classList.add('counted');
        }
      });
    }, observerOptions);

    counters.forEach(counter => {
      observer.observe(counter);
    });
  }

  animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const updateCounter = () => {
      current += increment;
      if (current < target) {
        element.textContent = Math.floor(current);
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = target;
      }
    };

    updateCounter();
  }

  // Testimonial Cards
  setupTestimonials() {
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    
    testimonialCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'rotateY(180deg)';
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'rotateY(0deg)';
      });
    });
  }

  // Form Handling
  setupForms() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleFormSubmission(form);
      });
    });

    // Form validation
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
      input.addEventListener('blur', () => {
        this.validateField(input);
      });
    });
  }

  handleFormSubmission(form) {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    // Simulate form submission
    setTimeout(() => {
      this.showNotification('Message sent successfully!', 'success');
      form.reset();
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }, 1500);
  }

  validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    let message = '';

    if (field.hasAttribute('required') && !value) {
      isValid = false;
      message = 'This field is required';
    } else if (field.type === 'email' && value && !this.isValidEmail(value)) {
      isValid = false;
      message = 'Please enter a valid email address';
    } else if (field.type === 'tel' && value && !this.isValidPhone(value)) {
      isValid = false;
      message = 'Please enter a valid phone number';
    }

    this.showFieldValidation(field, isValid, message);
    return isValid;
  }

  isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  isValidPhone(phone) {
    return /^[\+]?[1-9][\d]{0,15}$/.test(phone.replace(/\s/g, ''));
  }

  showFieldValidation(field, isValid, message) {
    const errorElement = field.parentNode.querySelector('.error-message');
    
    if (!isValid) {
      field.classList.add('error');
      if (!errorElement) {
        const error = document.createElement('div');
        error.className = 'error-message';
        error.textContent = message;
        field.parentNode.appendChild(error);
      }
    } else {
      field.classList.remove('error');
      errorElement?.remove();
    }
  }

  // Lightbox for Gallery
  setupLightbox() {
    const galleryImages = document.querySelectorAll('.gallery-image');
    
    galleryImages.forEach(img => {
      img.addEventListener('click', () => {
        this.openLightbox(img.src, img.alt);
      });
    });
  }

  openLightbox(src, alt) {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox glass';
    lightbox.innerHTML = `
      <div class="lightbox-content">
        <img src="${src}" alt="${alt}">
        <button class="lightbox-close">&times;</button>
      </div>
    `;
    
    document.body.appendChild(lightbox);
    
    // Close lightbox
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox || e.target.classList.contains('lightbox-close')) {
        lightbox.remove();
      }
    });
    
    // Close on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        lightbox.remove();
      }
    });
  }

  // Accordion for FAQ
  setupAccordion() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
      header.addEventListener('click', () => {
        const accordionItem = header.parentElement;
        const accordionContent = header.nextElementSibling;
        const isActive = accordionItem.classList.contains('active');
        
        // Close all accordion items
        document.querySelectorAll('.accordion-item').forEach(item => {
          item.classList.remove('active');
          item.querySelector('.accordion-content').style.maxHeight = '0';
        });
        
        // Open clicked item if it wasn't active
        if (!isActive) {
          accordionItem.classList.add('active');
          accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        }
      });
    });
  }

  // Tabs for Academics
  setupTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        const targetTab = button.getAttribute('data-tab');
        
        // Remove active class from all buttons and contents
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        // Add active class to clicked button and corresponding content
        button.classList.add('active');
        document.getElementById(targetTab)?.classList.add('active');
      });
    });
  }

  // Newsletter Subscription
  setupNewsletter() {
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
      newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input[type="email"]').value;
        
        if (this.isValidEmail(email)) {
          this.showNotification('Successfully subscribed to newsletter!', 'success');
          newsletterForm.reset();
        } else {
          this.showNotification('Please enter a valid email address', 'error');
        }
      });
    }
  }

  // Smooth Scroll
  setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  // Notification System
  showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    Object.assign(notification.style, {
      position: 'fixed',
      top: '20px',
      right: '20px',
      padding: '1rem 1.5rem',
      borderRadius: 'var(--radius)',
      color: 'white',
      fontWeight: '500',
      zIndex: '10000',
      transform: 'translateX(100%)',
      transition: 'transform 0.3s ease-out'
    });
    
    // Set background color based on type
    const colors = {
      success: '#28a745',
      error: '#dc3545',
      info: '#007bff',
      warning: '#ffc107'
    };
    notification.style.background = colors[type] || colors.info;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
      notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
      notification.style.transform = 'translateX(100%)';
      setTimeout(() => {
        notification.remove();
      }, 300);
    }, 3000);
  }

  // Utility Methods
  debounce(func, wait) {
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

  throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new BethelApp();
});

// Add loading class to elements for scroll animations
document.addEventListener('DOMContentLoaded', () => {
  const elementsToAnimate = document.querySelectorAll('.card, .counter-item, .testimonial-card, .section-title, .section-subtitle');
  elementsToAnimate.forEach(el => {
    el.classList.add('loading');
  });
});

// Performance optimization
window.addEventListener('load', () => {
  // Lazy load images
  const images = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach(img => imageObserver.observe(img));
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = BethelApp;
}