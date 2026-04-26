# 📝 Complete Component Code Summary

## Frontend Components Overview

### 1. ThemeContext.js (28 lines)
**Purpose:** Global dark/light mode management

**Key Functions:**
- `useState()` - Manages theme state
- `useEffect()` - Updates localStorage and DOM
- `toggleTheme()` - Switches between themes

**How it works:**
- Reads theme from localStorage on initial load
- Saves theme choice to localStorage on change
- Adds/removes 'dark' class to document root
- Provides isDark and toggleTheme to all components via Context

**Usage in Components:**
```javascript
const { isDark, toggleTheme } = useContext(ThemeContext);
```

---

### 2. Navbar.js (229 lines)
**Purpose:** Navigation bar with responsive design

**Features:**
- Desktop navigation menu
- Mobile hamburger menu
- Dark/Light mode toggle button
- Smooth scroll navigation

**State:**
- `isOpen` - Mobile menu visibility

**Key Functions:**
- `scrollToSection(id)` - Smooth scrolls to section with ID

**Navigation Links:**
- Home → #home
- Skills → #skills
- Projects → #projects
- Contact → #contact

**Responsive:**
- Hamburger menu on mobile (< md breakpoint)
- Full menu on desktop
- Theme toggle always visible

---

### 3. Hero.js (48 lines)
**Purpose:** Landing section with call-to-action

**Content:**
- Large heading: "Hi, I'm Umar"
- Subtitle: "Full Stack Developer"
- Description text

**Buttons:**
1. Download CV - downloads `/public/cv.pdf`
2. Contact Me - scrolls to contact section

**Features:**
- Animated scroll indicator (bounce animation)
- Responsive text sizing
- Theme-aware colors

**Required File:**
- `/public/cv.pdf` (for download button to work)

---

### 4. Skills.js (52 lines)
**Purpose:** Display technology stack

**Skills Array:**
```javascript
[
  { name: 'JavaScript', icon: FaJavaScript, color: 'text-yellow-400' },
  { name: 'React', icon: FaReact, color: 'text-blue-400' },
  { name: 'HTML', icon: FaHtml5, color: 'text-orange-500' },
  { name: 'CSS', icon: FaCss3Alt, color: 'text-blue-500' },
  { name: 'Python', icon: FaPython, color: 'text-blue-600' },
  { name: 'PHP', icon: FaPhp, color: 'text-purple-500' },
  { name: 'Node.js', icon: FaNode, color: 'text-green-500' },
]
```

**Features:**
- Icons from react-icons
- Color-coded badges
- Hover scale animation
- Responsive grid (2 cols mobile, 4 cols tablet, 7 cols desktop)

**Customization:**
Edit the `skills` array to add/remove technologies

---

### 5. Projects.js (71 lines)
**Purpose:** Display GitHub repositories

**API Integration:**
```javascript
GET https://api.github.com/users/{username}/repos
```

**Environment Variable:**
- `REACT_APP_GITHUB_USERNAME` - GitHub username

**State:**
- `repos` - Array of repository objects
- `loading` - Loading state

**Features:**
- Fetches from GitHub API on component mount
- Displays up to 6 most recent repos
- Shows: name, description, stars, language
- Links to GitHub repository
- Loading spinner while fetching

**Error Handling:**
- Catches and logs API errors
- Still renders if fetch fails

**Repository Data Displayed:**
- `repo.name` - Repository name
- `repo.description` - Description text
- `repo.stargazers_count` - Star count
- `repo.language` - Programming language
- `repo.html_url` - Link to GitHub

---

### 6. Contact.js (89 lines)
**Purpose:** Contact form with email backend integration

**Form Fields:**
1. Name (text input)
2. Email (email input)
3. Message (textarea)

**State:**
- `formData` - Form input values
- `loading` - Submission state
- `success` - Success message flag
- `error` - Error message text

**Key Functions:**
- `handleChange()` - Updates form state
- `handleSubmit()` - Submits form to backend

**Validation:**
- Required field validation (HTML5)
- Email format validation on backend

**API Endpoint:**
```
POST http://localhost:5000/api/contact
Body: { name, email, message }
```

**Features:**
- Form validation
- Loading button state
- Success notification (auto-clears after 3s)
- Error display
- Clears form on successful submission

**Backend Processing:**
- Sends admin email to SMTP_USER
- Sends confirmation email to user
- Validates email format
- Handles errors gracefully

---

### 7. Footer.js (33 lines)
**Purpose:** Footer with social links

**Links:**
1. GitHub profile
2. LinkedIn profile

**Features:**
- Opens links in new tab
- Hover color effects
- Copyright information
- Responsive layout
- Theme-aware colors

**Customization:**
Update href values in footer:
```javascript
href="https://github.com/your_username"
href="https://linkedin.com/in/your_profile"
```

---

## Configuration Files

### tailwind.config.js (18 lines)
**Custom Colors:**
```javascript
colors: {
  dark: '#0f172a',      // Dark background
  darkCard: '#1e293b',  // Dark card background
}
```

**Dark Mode:**
- Mode: 'class' - Toggled by adding 'dark' class to html element

**Content:**
- Scans all html and jsx files in src/

### postcss.config.js (5 lines)
**Plugins:**
1. tailwindcss - CSS processing
2. autoprefixer - Browser vendor prefixes

### index.css (96 lines)
**Tailwind Setup:**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**Global Styles:**
- Global reset (margin, padding, box-sizing)
- Smooth scrolling
- Font setup

**Custom Animations:**
- `@keyframes fadeIn` - Fade in with upward motion
- `@keyframes slideInLeft` - Slide from left side
- `@keyframes slideInRight` - Slide from right side

**Utility Classes:**
- `.animate-fade-in` - Apply fade-in animation
- `.animate-slide-in-left` - Apply left slide animation
- `.animate-slide-in-right` - Apply right slide animation

**Scrollbar Styling:**
- Light mode: Gray colors
- Dark mode: Slate colors

---

## Backend Components

### server.js (81 lines)
**Purpose:** Express server setup and API endpoints

**Setup:**
- Port: 5000 (configurable)
- CORS enabled for frontend
- Body parser for JSON
- Environment variables loaded

**Endpoints:**

1. **GET /api/health**
   - Health check endpoint
   - Response: `{ message: "Server is running" }`

2. **POST /api/contact**
   - Contact form endpoint
   - Request body: `{ name, email, message }`
   - Response: `{ message: "Email sent successfully" }`
   - Errors: 400 (validation), 500 (server error)

**Features:**
- CORS configured for frontend URL
- Input validation
- Email sending to admin and user
- Error handling middleware
- Logging on server start

---

### config/mailer.js (31 lines)
**Purpose:** Nodemailer email configuration

**Transporter Setup:**
- Host: Gmail SMTP (smtp.gmail.com)
- Port: 587 (TLS)
- Auth: Username and password from .env

**Function: sendEmail()**
```javascript
sendEmail(to, subject, html)
- to: recipient email
- subject: email subject
- html: HTML email content
- Returns: nodemailer response
```

**Email Format:**
- HTML content
- Supports formatted text and line breaks

**Error Handling:**
- Try-catch blocks
- Logs errors to console
- Throws errors for handler

---

## App.js (35 lines)
**Purpose:** Main application component

**Setup:**
- Wraps app with ThemeProvider
- Initializes AOS library
- Imports all sections

**Component Composition:**
```
App
├── ThemeProvider
│   ├── Navbar
│   ├── Hero
│   ├── Skills
│   ├── Projects
│   ├── Contact
│   └── Footer
```

**AOS Configuration:**
```javascript
AOS.init({
  duration: 1000,  // Animation duration
  once: false      // Animation repeats on scroll
})
```

---

## Environment Files

### .env.local (Frontend)
```
REACT_APP_GITHUB_USERNAME=umarkhattak
REACT_APP_BACKEND_URL=http://localhost:5000
```

**Variables Used:**
- `REACT_APP_GITHUB_USERNAME` - Used in Projects component
- `REACT_APP_BACKEND_URL` - Used in Contact component

### server/.env (Backend)
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
REACT_APP_URL=http://localhost:3000
PORT=5000
```

**Variables Used:**
- `SMTP_*` - Used in mailer.js
- `REACT_APP_URL` - Used in CORS config
- `PORT` - Used in server.js

---

## Dependencies

### Frontend (package.json)
```json
{
  "react": "^19.2.5",
  "react-dom": "^19.2.5",
  "react-scripts": "5.0.1",
  "tailwindcss": "^3.3.0",
  "postcss": "^8.4.24",
  "autoprefixer": "^10.4.14",
  "axios": "^1.4.0",
  "react-icons": "^4.10.1",
  "aos": "^2.3.4",
  "dotenv": "^16.0.3"
}
```

### Backend (server/package.json)
```json
{
  "express": "^4.18.2",
  "nodemailer": "^6.9.3",
  "cors": "^2.8.5",
  "body-parser": "^1.20.2",
  "dotenv": "^16.0.3"
}
```

---

## Code Statistics

| Component | Lines | Purpose |
|-----------|-------|---------|
| ThemeContext.js | 28 | Theme management |
| Navbar.js | 229 | Navigation |
| Hero.js | 48 | Landing section |
| Skills.js | 52 | Tech stack |
| Projects.js | 71 | GitHub repos |
| Contact.js | 89 | Contact form |
| Footer.js | 33 | Footer links |
| App.js | 35 | Main component |
| index.css | 96 | Styles |
| server.js | 81 | Express server |
| mailer.js | 31 | Email config |
| **TOTAL** | **793** | **All components** |

---

## Usage Examples

### Using the Theme
```javascript
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function MyComponent() {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  
  return (
    <div className={isDark ? 'bg-dark' : 'bg-white'}>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}
```

### Fetching GitHub Repos
```javascript
const username = process.env.REACT_APP_GITHUB_USERNAME || 'umarkhattak';
const response = await axios.get(
  `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`
);
```

### Sending Contact Email
```javascript
const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000';
await axios.post(`${backendUrl}/api/contact`, {
  name: 'John Doe',
  email: 'john@example.com',
  message: 'Hello!'
});
```

### Smooth Scrolling
```javascript
const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
```

---

## Best Practices Implemented

✅ Component-based architecture
✅ Context API for global state
✅ Environment variable management
✅ Error handling in async operations
✅ Input validation on frontend and backend
✅ Responsive design with Tailwind
✅ Semantic HTML
✅ Accessibility considerations
✅ Performance optimization
✅ Clean code structure
✅ Comments and documentation
✅ Consistent naming conventions

---

That's your complete portfolio website! All components are modular, reusable, and production-ready. 🚀
