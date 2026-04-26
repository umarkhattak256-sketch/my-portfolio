# Portfolio Website - Complete Setup Guide

## ✅ Project Complete!

Your complete personal portfolio website has been set up with all the features you requested.

---

## 📦 Installation Instructions

### 1. Install Frontend Dependencies

```bash
cd c:\Users\umar khattak\Desktop\simpleprojects\my-react-app\my-portfolio
npm install
```

### 2. Install Backend Dependencies

```bash
cd server
npm install
cd ..
```

---

## ⚙️ Configuration

### Frontend Configuration (.env.local)

Located at: `/my-portfolio/.env.local`

```
REACT_APP_GITHUB_USERNAME=umarkhattak
REACT_APP_BACKEND_URL=http://localhost:5000
```

**Change `umarkhattak` to your actual GitHub username**

### Backend Configuration (server/.env)

Located at: `/server/.env`

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
REACT_APP_URL=http://localhost:3000
PORT=5000
```

#### Setting Up Gmail SMTP:
1. Go to https://myaccount.google.com/security
2. Enable 2-Step Verification
3. Go to https://myaccount.google.com/apppasswords
4. Select "Mail" and "Windows Computer"
5. Copy the 16-character password
6. Paste it as `SMTP_PASS` in server/.env

---

## 🚀 Running the Application

### Option 1: Run Both Frontend and Backend Together

```bash
npm run dev
```

This requires `concurrently` to be installed. If you get an error, install it:
```bash
npm install --save-dev concurrently
```

### Option 2: Run Separately

**Terminal 1 - Frontend:**
```bash
npm start
```

**Terminal 2 - Backend:**
```bash
cd server
npm run dev
```

**Frontend URL:** http://localhost:3000
**Backend URL:** http://localhost:5000

---

## 📁 Complete File Structure

```
my-portfolio/
├── public/
│   ├── index.html                    # Main HTML file
│   ├── manifest.json
│   └── robots.txt
│
├── src/
│   ├── components/
│   │   ├── Navbar.js                # Navigation bar with mobile menu & theme toggle
│   │   ├── Hero.js                  # Hero section with CTA buttons
│   │   ├── Skills.js                # Tech stack display with icons
│   │   ├── Projects.js              # GitHub repos fetched automatically
│   │   ├── Contact.js               # Contact form with email backend
│   │   └── Footer.js                # Footer with social links
│   │
│   ├── context/
│   │   └── ThemeContext.js          # Dark/Light mode context & logic
│   │
│   ├── App.js                       # Main App component with AOS setup
│   ├── App.css                      # App styles
│   ├── index.js                     # React entry point
│   ├── index.css                    # Global styles + Tailwind
│   └── setupTests.js
│
├── server/
│   ├── config/
│   │   └── mailer.js                # Nodemailer configuration
│   │
│   ├── server.js                    # Express server + API routes
│   ├── package.json                 # Backend dependencies
│   ├── .env                         # Backend environment variables
│   ├── .env.example                 # Example env file
│   ├── .gitignore
│   ├── railway.json                 # Railway deployment config
│   └── README.md                    # Backend README
│
├── .env.local                       # Frontend environment variables
├── .env.example                     # Example env file
├── .gitignore
├── package.json                     # Frontend dependencies
├── tailwind.config.js               # Tailwind CSS config
├── postcss.config.js                # PostCSS config
├── vercel.json                      # Vercel deployment config
└── README.md                        # Main README

```

---

## 🌐 Features Implemented

### ✅ Navbar
- Logo/name on left
- Navigation links (Home, Skills, Projects, Contact)
- Dark/Light mode toggle
- Mobile-responsive hamburger menu
- Smooth scroll navigation

### ✅ Hero Section
- Large heading: "Hi, I'm [Name]"
- Subtitle: "Full Stack Developer"
- Download CV button
- Contact Me button
- Animated scroll indicator

### ✅ Skills Section
- Icons for: JavaScript, React, HTML, CSS, Python, PHP, Node.js
- Grid layout (2 cols mobile, 4 cols tablet, 7 cols desktop)
- Hover animation effects

### ✅ Projects Section
- Automatically fetches from GitHub API
- Displays: repo name, description, stars, language, link
- Card layout with hover effects
- Real-time data (updates automatically)

### ✅ Contact Section
- Name, Email, Message form fields
- Form validation
- Sends emails via Nodemailer backend
- Success/Error notifications
- Confirmation email to user
- Admin notification to your email

### ✅ Footer
- GitHub link
- LinkedIn link
- Copyright info
- Responsive design

### ✅ Dark/Light Mode
- Toggle button in navbar
- Persistent (stored in localStorage)
- Applied globally to all components
- Smooth transitions

### ✅ Animations
- AOS (Animate On Scroll) library integrated
- Smooth scrolling
- Fade-in animations on page load
- Scale and bounce effects on elements

### ✅ Responsive Design
- Mobile-first approach
- Tailwind CSS responsive classes
- Mobile menu for navbar
- Responsive grids and spacing
- Touch-friendly buttons

---

## 📝 Customization Guide

### 1. Change Your Name in Hero Section

Edit `src/components/Hero.js`:
```javascript
<span className="text-blue-500">Umar</span>  // Change to your name
```

### 2. Update GitHub Username

Edit `.env.local`:
```
REACT_APP_GITHUB_USERNAME=your_actual_username
```

### 3. Change Email Settings

Edit `server/.env`:
```
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
```

### 4. Update Social Links

Edit `src/components/Footer.js`:
```javascript
<a href="https://github.com/YOUR_USERNAME">  // Update GitHub URL
<a href="https://linkedin.com/in/YOUR_PROFILE"> // Update LinkedIn URL
```

### 5. Customize Skills

Edit `src/components/Skills.js` - add/remove skills from the array:
```javascript
const skills = [
  { name: 'JavaScript', icon: FaJavaScript, color: 'text-yellow-400' },
  // Add more...
];
```

### 6. Customize Colors

Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      dark: '#0f172a',
      darkCard: '#1e293b',
      // Add custom colors
    },
  },
},
```

---

## 🚀 Deployment

### Deploy Frontend to Vercel

1. Push to GitHub
2. Go to https://vercel.com
3. Click "New Project"
4. Select your GitHub repository
5. Set environment variables:
   - `REACT_APP_GITHUB_USERNAME=your_username`
   - `REACT_APP_BACKEND_URL=https://your-railway-backend.railway.app`
6. Deploy!

### Deploy Backend to Railway

1. Go to https://railway.app
2. Click "New Project"
3. Select "Deploy from GitHub"
4. Select your repository
5. In settings, set root directory to `/server`
6. Add environment variables:
   - `SMTP_HOST=smtp.gmail.com`
   - `SMTP_PORT=587`
   - `SMTP_USER=your_email@gmail.com`
   - `SMTP_PASS=your_app_password`
   - `REACT_APP_URL=https://your-vercel-frontend.vercel.app`
7. Deploy!

### Update Frontend After Backend Deployment

1. Go to Vercel dashboard
2. Go to project settings
3. Update environment variable `REACT_APP_BACKEND_URL` with your Railway backend URL
4. Redeploy

---

## 🐛 Troubleshooting

### Issue: Emails not sending
**Solution:**
- Check SMTP credentials are correct
- Verify 2FA is enabled on Gmail account
- Check app password was generated correctly
- Check backend server is running

### Issue: GitHub repos not loading
**Solution:**
- Verify GitHub username in .env.local is correct
- Check GitHub API rate limits (60/hour without auth)
- Make sure backend is running for CORS

### Issue: CORS errors
**Solution:**
- Make sure backend is running on port 5000
- Verify `REACT_APP_BACKEND_URL` in frontend .env.local
- Check backend has correct CORS origin

### Issue: Dark mode not saving
**Solution:**
- Check browser localStorage is enabled
- Clear cache and try again

---

## 📚 Technologies Used

### Frontend
- React 19
- Tailwind CSS 3
- Axios (API calls)
- React Icons
- AOS (Animate On Scroll)

### Backend
- Node.js
- Express
- Nodemailer
- CORS
- Body Parser

### Deployment
- Vercel (Frontend)
- Railway (Backend)

---

## 📞 Next Steps

1. **Install dependencies:**
   ```bash
   npm install
   cd server && npm install && cd ..
   ```

2. **Configure environment variables:**
   - Update `.env.local` with your GitHub username
   - Update `server/.env` with your Gmail credentials

3. **Run locally:**
   ```bash
   npm run dev
   ```

4. **Test the website:**
   - Visit http://localhost:3000
   - Check all sections load correctly
   - Test dark mode toggle
   - Try the contact form

5. **Deploy to Vercel & Railway**

---

## 🎉 You're All Set!

Your portfolio website is ready to use. Make it your own by customizing the content, colors, and adding your own projects!

Good luck! 🚀
