# Complete Code Reference

This file contains quick reference to all major components and their key functions.

## Frontend Components

### ThemeContext.js
**Purpose:** Manages dark/light mode theme across the application
**Key Features:**
- Uses React Context for global theme state
- Persists theme choice in localStorage
- Toggles `dark` class on document element
- Available in all components via `useContext(ThemeContext)`

### Navbar.js
**Purpose:** Navigation bar with responsive design
**Key Features:**
- Desktop navigation with smooth scrolling
- Mobile hamburger menu
- Dark/Light mode toggle button
- Smooth scroll behavior

**Navigation Links:**
- Home → scrolls to hero section
- Skills → scrolls to skills section
- Projects → scrolls to projects section
- Contact → scrolls to contact section

### Hero.js
**Purpose:** Landing section with call-to-action
**Key Features:**
- Large greeting: "Hi, I'm [Name]"
- Subtitle: "Full Stack Developer"
- Download CV button
- Contact Me button
- Animated scroll indicator

### Skills.js
**Purpose:** Displays technology stack with icons
**Key Technologies:**
- JavaScript (yellow)
- React (blue)
- HTML (orange)
- CSS (blue)
- Python (blue)
- PHP (purple)
- Node.js (green)

**Customization:** Edit the `skills` array to add/remove technologies

### Projects.js
**Purpose:** Fetches and displays GitHub repositories
**API Used:** GitHub REST API (`/repos` endpoint)
**Displays:**
- Repository name
- Description
- Star count
- Programming language
- Link to GitHub repo

**Environment Variable:** `REACT_APP_GITHUB_USERNAME`

### Contact.js
**Purpose:** Contact form with email backend integration
**Form Fields:**
- Name (required)
- Email (required, validated)
- Message (required)

**Features:**
- Form validation
- Loading state during submission
- Success/error notifications
- Calls backend at `POST /api/contact`

### Footer.js
**Purpose:** Footer with social links
**Links:**
- GitHub profile
- LinkedIn profile

---

## Backend API

### Server.js
**Port:** 5000 (configurable via PORT env variable)

#### Health Check Endpoint
```
GET /api/health
Response: { message: "Server is running" }
```

#### Contact Email Endpoint
```
POST /api/contact
Request Body:
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Your message here"
}

Response Success (200):
{ "message": "Email sent successfully" }

Response Error (400/500):
{ "error": "Error message" }
```

**Validation:**
- All fields required
- Email format validation
- Name and message character validation

**Emails Sent:**
1. Admin notification email (to SMTP_USER)
2. Confirmation email to user

### Mailer.js
**Purpose:** Nodemailer configuration and email sending
**Supports:** Gmail SMTP (easily configurable for other services)
**Features:**
- Transporter setup
- HTML email formatting
- Error handling

---

## Configuration Files

### tailwind.config.js
**Custom Colors:**
- `dark: '#0f172a'` - Dark mode background
- `darkCard: '#1e293b'` - Dark mode card background

**Customization:** Add more colors in `theme.extend.colors`

### postcss.config.js
**Plugins:**
- tailwindcss
- autoprefixer (for browser compatibility)

### vercel.json
**Deployment Config:**
- Builds to `/build` directory
- All routes fallback to `/index.html` (for React Router)

### railway.json
**Deployment Config for Backend:**
- Node.js environment
- Start command: `npm start`
- Health check path: `/api/health`

---

## Environment Variables

### Frontend (.env.local)
```
REACT_APP_GITHUB_USERNAME=umarkhattak
REACT_APP_BACKEND_URL=http://localhost:5000
```

### Backend (server/.env)
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
REACT_APP_URL=http://localhost:3000
PORT=5000
```

---

## CSS & Styling

### Global Styles (index.css)
**Tailwind Integration:**
- @tailwind base
- @tailwind components
- @tailwind utilities

**Custom Animations:**
- `@keyframes fadeIn` - Fade in with upward movement
- `@keyframes slideInLeft` - Slide from left
- `@keyframes slideInRight` - Slide from right

**Utility Classes:**
- `.animate-fade-in` - 1s fade-in animation
- `.animate-slide-in-left` - 1s slide from left
- `.animate-slide-in-right` - 1s slide from right

**Scrollbar Styling:**
- Light mode: Gray scrollbar
- Dark mode: Slate scrollbar colors

---

## Key Libraries & Their Usage

### React Icons
```javascript
import { FiMoon, FiSun, FiMenu, FiX, FiGithub, FiLinkedin } from 'react-icons/fi';
import { FaJavaScript, FaReact, FaNode, etc } from 'react-icons/fa';
```

### Axios
```javascript
axios.get('https://api.github.com/users/{username}/repos')
axios.post('http://localhost:5000/api/contact', formData)
```

### AOS (Animate On Scroll)
```javascript
import AOS from 'aos';
AOS.init({ duration: 1000, once: false });
```

### Nodemailer
```javascript
const transporter = nodemailer.createTransport({...})
transporter.sendMail({...})
```

---

## Component Props & State

### Navbar
- **State:** `isOpen` (mobile menu open/closed)
- **Context:** `isDark` (theme mode)
- **Functions:** `scrollToSection(id)` - smooth scroll navigation

### Hero
- **Context:** `isDark` (theme mode)
- **Functions:** `scrollToSection(id)` - navigate to contact

### Skills
- **Context:** `isDark` (theme mode)
- **Data:** Static `skills` array with icon, color, name

### Projects
- **State:** `repos`, `loading`
- **Context:** `isDark` (theme mode)
- **Effect:** Fetches GitHub repos on component mount

### Contact
- **State:** `formData`, `loading`, `success`, `error`
- **Context:** `isDark` (theme mode)
- **Functions:** `handleChange()`, `handleSubmit()`

### Footer
- **Context:** `isDark` (theme mode)

---

## API Response Examples

### GitHub API Response (truncated)
```json
{
  "id": 12345,
  "name": "project-name",
  "description": "Project description",
  "html_url": "https://github.com/username/project-name",
  "stargazers_count": 42,
  "language": "JavaScript"
}
```

### Contact API Response
```json
{
  "message": "Email sent successfully"
}
```

---

## Hooks Used

- `useState()` - Component state management
- `useEffect()` - Side effects (fetching data, initializing AOS)
- `useContext()` - Access global theme context
- `useRef()` - (Optional) DOM references

---

## Best Practices Implemented

1. **Component Composition** - Small, reusable components
2. **Context API** - Global state management (theme)
3. **Error Handling** - Try-catch blocks, error states
4. **Responsive Design** - Mobile-first approach with Tailwind
5. **Performance** - Lazy loading repos, memoization possible
6. **Accessibility** - Semantic HTML, ARIA labels
7. **Security** - Input validation, CORS configuration
8. **SEO** - Meta tags, semantic structure
9. **Code Organization** - Clear folder structure
10. **Documentation** - Comments and README files

---

## Common Customizations

### Change Primary Color
Edit all `bg-blue-500` and `text-blue-500` classes to your preferred color

### Add More Skills
Add to `skills` array in Skills.js:
```javascript
{ name: 'TypeScript', icon: SiTypescript, color: 'text-blue-700' }
```

### Change Hero Text
Edit strings in Hero.js:
```javascript
"Hi, I'm [Name]" → "Hi, I'm John Doe"
"Full Stack Developer" → "Your Title"
```

### Add More Social Links
Edit Footer.js - add more links in the social links div

### Change Animations Duration
Edit tailwind.config.js or individual animation keyframes

---

## Support & Troubleshooting

For detailed troubleshooting, see SETUP_GUIDE.md and README.md
