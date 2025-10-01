# Bethel Mission School, Anuppur - Website

A modern, responsive school website built with glass-morphism design principles, featuring interactive components and smooth animations.

## 🌟 Features

- **Glass Morphism Design**: Modern iOS-inspired frosted glass UI
- **Responsive Design**: Mobile-first approach with smooth animations
- **Interactive Components**: Counters, testimonials, tabs, accordion, lightbox gallery
- **Dark Mode Toggle**: Seamless theme switching with localStorage persistence
- **Multi-language Support**: English and Hindi language toggle
- **Contact Forms**: Validated forms with real-time feedback
- **Search Functionality**: Blog and news search with filtering
- **Performance Optimized**: Lazy loading, optimized images, and efficient animations

## 🎨 Design System

### Color Palette
| Color | Hex Code | Usage |
|-------|----------|-------|
| Primary Blue | `#0033A0` | Brand color, buttons, accents |
| Secondary Red | `#D1001C` | Highlights, call-to-actions |
| White | `#FFFFFF` | Text, backgrounds |
| Glass Light | `rgba(255,255,255,0.20)` | Glass effect backgrounds |
| Glass Dark | `rgba(0,0,0,0.18)` | Dark mode glass effects |

### Typography
- **Primary Font**: Inter (Google Fonts)
- **Responsive Scaling**: Uses `clamp()` for fluid typography
- **Hierarchy**: Proper heading structure (H1-H6) for accessibility

### Glass Effect Properties
```css
--blur: 14px;
--radius: 18px;
--shadow: 0 12px 40px rgba(0,0,0,0.08);
--trans: 0.35s cubic-bezier(0.25, 1, 0.5, 1);
```

## 📁 Project Structure

```
bms-anuppur/
├── index.html              # Homepage with hero and features
├── about.html              # About us, mission, vision, history
├── academics.html          # Academic programs and facilities
├── admission.html          # Admission process and forms
├── gallery.html            # Photo and video gallery
├── blog.html               # News and events
├── contact.html            # Contact information and forms
├── assets/
│   ├── css/
│   │   └── style.css       # Main stylesheet with design system
│   ├── js/
│   │   └── main.js         # Interactive functionality
│   └── img/
│       ├── hero-school.jpg # Hero section images
│       ├── hero-classroom.jpg
│       └── hero-activities.jpg
└── README.md               # This file
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional but recommended)

### Installation & Setup

1. **Download and Extract**
   ```bash
   # Extract the zip file to your desired location
   unzip bms-anuppur-glass.zip
   cd bms-anuppur
   ```

2. **Start Local Server** (Recommended)
   ```bash
   # Using Python 3
   python -m http.server 8080
   
   # Using Python 2
   python -m SimpleHTTPServer 8080
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8080
   ```

3. **Access the Website**
   Open your browser and navigate to: `http://localhost:8080`

### Alternative: Direct File Access
You can also open `index.html` directly in your browser, but some features might be limited due to CORS restrictions.

## 🛠️ Customization Guide

### Adding New Pages
1. Create a new HTML file (e.g., `new-page.html`)
2. Copy the structure from an existing page
3. Update the navigation links in all pages
4. Add the new page to the navigation in `main.js`

### Modifying Design Tokens
Edit `assets/css/style.css` and update the CSS custom properties:
```css
:root {
  --blue: #0033A0;        /* Primary brand color */
  --red: #D1001C;         /* Secondary accent color */
  --white: #FFFFFF;       /* Text and background */
  --glass-light: rgba(255,255,255,.20);  /* Glass effect */
  --blur: 14px;           /* Blur amount */
  --radius: 18px;         /* Border radius */
  --shadow: 0 12px 40px rgba(0,0,0,.08);  /* Box shadow */
}
```

### Adding New Components
1. Add HTML structure with appropriate classes
2. Style using existing glass classes: `.glass`, `.glass-blue`, `.glass-red`
3. Add JavaScript functionality in `main.js`
4. Include AOS animation classes for scroll effects

### Image Management
- Place images in `assets/img/` directory
- Use descriptive filenames
- Optimize images for web (WebP format recommended)
- Use lazy loading: `<img loading="lazy" data-src="path/to/image.jpg">`

## 📱 Responsive Breakpoints

- **Mobile**: < 576px
- **Tablet**: 576px - 768px  
- **Desktop**: > 768px
- **Large Desktop**: > 992px

## 🔧 Available Scripts

The main JavaScript functionality is in `assets/js/main.js` and includes:

- **Theme Management**: Dark/light mode toggle
- **Language Switching**: English/Hindi translation
- **Scroll Animations**: AOS integration
- **Form Validation**: Real-time validation with feedback
- **Interactive Components**: Counters, tabs, accordion, lightbox
- **Search Functionality**: Blog and gallery search
- **Notification System**: Toast notifications
- **Performance Optimization**: Lazy loading, debounced events

## 🎨 Component Library

### Glass Cards
```html
<div class="glass">
  <!-- Content -->
</div>
```

### Buttons
```html
<button class="btn btn-primary">Primary Button</button>
<button class="btn btn-secondary">Secondary Button</button>
<button class="btn btn-outline">Outline Button</button>
```

### Forms
```html
<div class="form-group">
  <label for="input">Label</label>
  <input type="text" id="input" placeholder="Placeholder">
</div>
```

### Navigation
```html
<nav class="navbar glass">
  <!-- Navigation content -->
</nav>
```

## 🌐 Browser Support

- **Chrome**: 80+
- **Firefox**: 75+
- **Safari**: 13+
- **Edge**: 80+

## 📊 Performance Features

- **Lazy Loading**: Images load as they enter viewport
- **Optimized Animations**: Hardware-accelerated CSS animations
- **Minimal JavaScript**: Vanilla JS only, no heavy frameworks
- **Compressed Assets**: Optimized CSS and images
- **CDN Integration**: Google Fonts and AOS library from CDN

## 🔒 Accessibility Features

- **Semantic HTML**: Proper heading hierarchy and landmarks
- **ARIA Labels**: Screen reader support for interactive elements
- **Keyboard Navigation**: Full keyboard accessibility
- **Color Contrast**: WCAG AA compliant contrast ratios
- **Focus Management**: Visible focus indicators
- **Alt Text**: Descriptive alt attributes for all images

## 📞 Support

For technical support or customization assistance:
- Email: info@bethelschoolanuppur.edu.in
- Phone: +91 12345 67890

## 📝 License

This project is created for Bethel Mission School, Anuppur. All rights reserved.

## 🤝 Contributing

This is a custom school website. For modifications or improvements, please contact the development team.

---

**Made with ❤️ by Creda**