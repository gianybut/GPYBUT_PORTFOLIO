# Gian Ybut - Front-end Developer Portfolio

A modern, responsive portfolio website showcasing my skills, projects, achievements, and experience as a Front-end Developer and Computer Science student.

## 🌐 Live Demo

Visit the live portfolio: [Link to your hosted site]

## 📋 Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Usage](#usage)
- [Key Components](#key-components)
- [Animations & Interactions](#animations--interactions)
- [Contact Form Integration](#contact-form-integration)
- [Browser Support](#browser-support)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

### Visual Design
- **Modern Dark Theme**: Sleek dark interface with cyan gradients
- **Smooth Animations**: Page transitions, scroll effects, and interactive elements
- **Responsive Design**: Fully optimized for mobile (375px+), tablet, and desktop
- **Glass Morphism UI**: Contemporary frosted glass effect on cards

### Interactive Elements
- **Smooth Navigation**: Seamless scrolling between sections with fixed navbar
- **Scroll Progress Bar**: Visual indicator of page scroll position
- **Parallax Effect**: Dynamic text movement on hero section as you scroll
- **Tab System**: Skills, Achievements, and Education with smooth swipe animations
- **Typing Effect**: Character-by-character name animation on page load
- **Certificate Lightbox**: Interactive modal for viewing certificates

### User Engagement
- **Contact Form**: Google Sheets integration for message submissions
- **Loading States**: Visual feedback with spinner animation during form submission
- **Duplicate Prevention**: Smart validation to prevent multiple submissions
- **Success/Error Messages**: Color-coded feedback (green/red) with auto-clear

### Performance
- **Automatic Scroll Reset**: Always loads at home section, regardless of previous scroll position
- **Optimized Assets**: External CSS/JS for better caching and performance
- **Smooth Scroll Behavior**: All navigation uses smooth scroll animation

## 🛠 Technologies Used

### Frontend Stack
- **HTML5**: Semantic markup and structure
- **CSS3**: Advanced animations, flexbox, and responsive design
- **JavaScript (Vanilla)**: No framework dependencies, pure JS for interactions

### Styling & UI
- **Tailwind CSS**: Utility-first CSS framework (CDN)
- **Font Awesome 6**: Icon library for visual elements
- **Google Fonts**: Poppins typeface (300-700 weights)
- **Custom CSS Variables**: Easy theming and color management

### Backend & Services
- **Google Sheets API**: Contact form submission and data storage
- **Google Apps Script**: Serverless backend for form processing

### Development
- **File Protocol Support**: Works with `file://` protocol (no server needed)
- **Modular Architecture**: Separate CSS and JS files for maintainability
- **Clean Code**: Semantic HTML, DRY principles, consistent naming

## 📁 Project Structure

```
PORTFOLIO/
├── index.html                 # Main HTML file (409 lines)
├── README.md                  # This file
├── assets/
│   ├── css/
│   │   ├── style.css         # Core styles & animations (382 lines)
│   │   ├── responsive.css    # Media queries & breakpoints
│   │   ├── home.css          # Home section styles (placeholder)
│   │   └── extra-animations.css  # Additional animations (placeholder)
│   ├── js/
│   │   ├── animations.js     # Scroll, parallax, reveals, typing
│   │   ├── main.js           # Navigation, modals, form handling
│   │   └── extra-animations.js  # Extra animations (placeholder)
│   └── images/
│       ├── background.png    # Hero section background
│       ├── certificate-1.jpg # Certificate example
│       ├── certificate-2.jpg # Certificate example
│       ├── certificate-3.jpg # Certificate example
│       ├── logo.png          # Navigation logo
│       ├── phone-background.png  # Mobile background
│       └── user.png          # Profile picture
├── files/
│   └── CV_GIANYBUT.pdf      # Downloadable CV
└── pages/
    ├── about.html           # About section (optional)
    ├── contact.html         # Contact section (optional)
    └── projects.html        # Projects section (optional)
```

## 🚀 Installation & Setup

### Quick Start (No Server Required)

1. **Clone or Download**
   ```bash
   git clone https://github.com/gianybut/PORTFOLIO.git
   cd PORTFOLIO
   ```

2. **Open in Browser**
   - Simply open `index.html` with your preferred browser
   - Works with `file://` protocol (no local server needed)
   - Or use Live Server extension in VS Code for development

3. **Customize**
   - Edit `index.html` to update content
   - Modify `assets/css/style.css` for colors and styles
   - Update contact form endpoint in `assets/js/main.js`

### For Development

**Using Live Server (VS Code)**
```bash
# Install Live Server extension
# Right-click index.html → Open with Live Server
```

**Using Python**
```bash
# Python 3
python -m http.server 8000

# Then visit http://localhost:8000
```

**Using Node.js**
```bash
npx http-server
```

## 📖 Usage

### Basic Navigation
- **Home**: Click logo or "Home" in navbar to scroll to hero section
- **Sections**: Click any navigation link to smoothly scroll to that section
- **Mobile Menu**: Hamburger icon on screens smaller than 1024px

### Interacting with Content

**Skills/Achievements/Education Tabs**
- Click any tab button to switch content
- Content swipes in from the left with smooth fade animation
- All transitions take 0.5 seconds

**View Certificates**
- Hover over any certificate to see description
- Click to open fullscreen lightbox modal
- Close with X button or by pressing ESC

**Contact Form**
- Fill in Name, Email, and Message
- Submit button shows loading spinner during submission
- Prevents duplicate submissions automatically
- Shows success (green) or error (red) message
- Form auto-clears on successful submission

### Download CV
- Click "Download CV" button in contact section
- Opens `files/CV_GIANYBUT.pdf` in new window

## 🎨 Key Components

### Color System
```css
--primary: #38b6ff;      /* Cyan accent color */
--secondary: #5ce1e6;    /* Light cyan accent */
--dark: #0a0a0a;         /* Main background */
--dark-light: #1a1a1a;   /* Section backgrounds */
```

### Breakpoints
- **Mobile**: 375px+ (iPhone SE and up)
- **Tablet**: 768px+
- **Desktop**: 1024px+ (lg), 1280px+ (xl)

### Key Classes
- `.gradient-text`: Cyan to light-cyan gradient
- `.glass`: Glass morphism effect (backdrop blur + semi-transparent)
- `.reveal-card`: Elements with scroll reveal animation
- `.floating`: Gentle floating animation
- `.active-tab`: Active tab styling and animation

## 🎬 Animations & Interactions

### Page Load Animations
- **Typing Effect**: Name types out character-by-character (1.5 seconds total)
- **Scroll-to-Top**: Automatic scroll to home on page reload

### Scroll Animations
- **Progress Bar**: Width increases as you scroll down (top of page)
- **Parallax Text**: Hero text moves upward as you scroll
- **Reveal Cards**: Service and project cards fade and slide up when visible

### Interactive Animations
- **Tab Switch**: Content swipes from left with fade-in (0.5s)
- **Button Hover**: Scale up and glow on hover
- **Icon Hover**: Icons scale and change color on hover
- **Loading Spinner**: Rotating circle on submit button during form submission

### CSS Keyframes
- `@keyframes gradientShift` - Background gradient animation (15s)
- `@keyframes float` - Profile image floating (6s)
- `@keyframes blink` - Cursor blinking (0.7s)
- `@keyframes slideUp` - Content sliding up (0.8s)
- `@keyframes spin` - Loading spinner rotation (1s)
- `@keyframes swipeFromLeft` - Tab content sliding from left (0.5s)

## 📧 Contact Form Integration

### Google Sheets Setup

The contact form integrates with Google Sheets using Google Apps Script:

1. **Google Apps Script Endpoint**
   ```javascript
   const scriptURL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec'
   ```

2. **Form Submission Flow**
   - User fills form and clicks "Send Message"
   - Loading spinner appears, button becomes disabled
   - Data sent to Google Apps Script via POST request
   - Script processes and stores in Google Sheet
   - Success message appears in green
   - Form auto-clears after 5 seconds

3. **Duplicate Prevention**
   - JavaScript flag (`isSubmitting`) prevents multiple submissions
   - Button stays disabled until response received
   - Visual feedback during entire process

4. **Setup Instructions**
   - Create Google Sheet for collecting submissions
   - Set up Google Apps Script to accept form data
   - Update `scriptURL` in `assets/js/main.js` with your endpoint

## 🌐 Browser Support

| Browser | Support | Notes |
|---------|---------|-------|
| Chrome | ✅ Full | Latest version recommended |
| Firefox | ✅ Full | Latest version recommended |
| Safari | ✅ Full | Latest version recommended |
| Edge | ✅ Full | Latest version recommended |
| IE 11 | ⚠️ Partial | CSS Grid and Flexbox supported, some animations may differ |
| Mobile Browsers | ✅ Full | iOS Safari, Chrome Mobile, Firefox Mobile |

### CSS Features Used
- CSS Grid & Flexbox ✅
- CSS Variables ✅
- CSS Animations ✅
- Backdrop Filter (Glass Effect) ✅
- Transform & Transitions ✅

## 🛠️ Customization Guide

### Change Colors
Edit CSS variables in `assets/css/style.css`:
```css
:root {
    --primary: #38b6ff;      /* Change to your color */
    --secondary: #5ce1e6;    /* Change to your color */
    --dark: #0a0a0a;
    --dark-light: #1a1a1a;
}
```

### Add New Projects
1. Copy a project card HTML from projects section
2. Update title, description, technologies, and GitHub link
3. Replace icon with Font Awesome icon of choice

### Update Sections
1. **About**: Edit bio text and achievements in respective tabs
2. **Services**: Add or remove service cards with icon and description
3. **Certificates**: Add certificate images and update modal details

### Modify Animations
- **Speed**: Change duration in `animation` property (e.g., `0.5s` to `0.3s`)
- **Easing**: Change `ease-in-out` to `linear`, `ease-in`, or `ease-out`
- **Transform**: Adjust `translateX`, `translateY`, `scale` values

## 📱 Responsive Features

- **Mobile-First Design**: Optimized for small screens first
- **Flexible Layout**: Uses CSS Grid and Flexbox for automatic adjustments
- **Responsive Images**: Images scale appropriately for all screen sizes
- **Touch-Friendly**: Buttons and links sized for easy mobile interaction
- **Adaptive Navigation**: Menu collapses to hamburger on mobile

## ⚡ Performance Tips

- **Caching**: External CSS/JS files leverage browser caching
- **CDN Resources**: Tailwind, Font Awesome, and Google Fonts via CDN
- **Image Optimization**: Consider using optimized image formats
- **Lazy Loading**: Add intersection observer for below-fold images
- **Minification**: Minify CSS and JS files for production

## 🐛 Troubleshooting

### Form Not Submitting
- Verify Google Apps Script endpoint is correct in `main.js`
- Check browser console for CORS errors
- Ensure form field names match Google Sheet column headers

### Animations Not Showing
- Check if JavaScript is enabled in browser
- Verify CSS files are loaded (check Network tab)
- Clear browser cache and reload

### Page Not Scrolling to Top on Reload
- Browser cache may have scroll position stored
- This is handled by `window.history.scrollRestoration = 'manual'`
- Hard refresh (Ctrl+Shift+R) should resolve

### Mobile Menu Not Closing
- Click outside the menu or on a link to close
- Can also press ESC key to close modals

## 📝 Maintenance

### Regular Updates
- Keep browser libraries updated (CDN links)
- Update certificate images as new achievements earned
- Add completed projects to portfolio
- Update skills and education information

### Backup
- Maintain backup of Google Sheet with form submissions
- Version control via Git for code changes
- Export PDF of CV regularly

## 🔐 Security Notes

- Form submissions go directly to Google Sheets (no server middleware)
- No sensitive data stored locally
- All external resources loaded from trusted CDNs
- Email/phone are publicly visible (consider if desired)

## 📄 License

This portfolio is personal work. Feel free to use as a template for your own portfolio, but please credit and don't claim the design as your own.

## 📞 Contact

- **Email**: ybutgianpaolo@gmail.com
- **Phone**: +63 920 602 2884
- **LinkedIn**: [linkedin.com/in/gpybut](https://www.linkedin.com/in/gpybut/)
- **GitHub**: [github.com/gianybut](https://github.com/gianybut)
- **Facebook**: [facebook.com/gpybut](https://www.facebook.com/gpybut/)

## 🙏 Acknowledgments

- **Tailwind CSS**: For the utility-first CSS framework
- **Font Awesome**: For the comprehensive icon library
- **Google Fonts**: For the beautiful Poppins typeface
- **Google Sheets API**: For free backend form handling

## 📚 Resources & References

- [CSS Animations MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/animation)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Font Awesome Icons](https://fontawesome.com/icons)
- [Google Apps Script](https://script.google.com)
- [Web Accessibility](https://www.w3.org/WAI/test-evaluate/)

---

**Last Updated**: February 2, 2026  
**Version**: 1.0.0  
**Status**: ✅ Fully Functional

Made with ❤️ by Gian Paolo Ybut
