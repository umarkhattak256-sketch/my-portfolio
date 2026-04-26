# 🚀 Quick Start Checklist

Copy and use this checklist to track your setup progress.

## ✅ Installation & Setup (5 minutes)

- [ ] Navigate to project directory
- [ ] Run `npm install` in root folder
- [ ] Run `npm install` in `/server` folder
- [ ] Copy `.env.example` to `.env.local` (frontend)
- [ ] Copy `server/.env.example` to `server/.env` (backend)

## ✅ Configuration (5 minutes)

### Frontend Setup
- [ ] Update `.env.local` with your GitHub username
  - Change `REACT_APP_GITHUB_USERNAME=your_username`
- [ ] Verify `REACT_APP_BACKEND_URL=http://localhost:5000`

### Backend Setup (Gmail)
- [ ] Enable 2FA on Gmail account
  - Go to: https://myaccount.google.com/security
- [ ] Generate App Password
  - Go to: https://myaccount.google.com/apppasswords
  - Select "Mail" and "Windows Computer"
- [ ] Update `server/.env`:
  - [ ] `SMTP_USER=your_email@gmail.com`
  - [ ] `SMTP_PASS=your_16_char_app_password`
  - [ ] `SMTP_HOST=smtp.gmail.com`
  - [ ] `SMTP_PORT=587`

## ✅ Customization (10 minutes)

### Personalization
- [ ] Update name in Hero section (`src/components/Hero.js`)
- [ ] Update social links in Footer (`src/components/Footer.js`)
  - [ ] GitHub profile URL
  - [ ] LinkedIn profile URL
- [ ] Update email address in `server/.env` (SMTP_USER)
- [ ] Create/upload CV file to `/public/cv.pdf`

### Optional Customization
- [ ] Update skills list (`src/components/Skills.js`)
- [ ] Change color scheme (Tailwind classes)
- [ ] Customize theme colors (`tailwind.config.js`)

## ✅ Testing (10 minutes)

### Run Locally
- [ ] Start both frontend and backend:
  ```bash
  npm run dev
  ```
  OR separately:
  - [ ] Terminal 1: `npm start` (frontend on port 3000)
  - [ ] Terminal 2: `cd server && npm run dev` (backend on port 5000)

### Frontend Testing
- [ ] Open http://localhost:3000 in browser
- [ ] [ ] Test Navbar
  - [ ] Navigation links scroll correctly
  - [ ] Dark/Light mode toggle works
  - [ ] Mobile menu opens/closes
- [ ] Test Hero section
  - [ ] Download CV button works (needs CV file)
  - [ ] Contact Me button scrolls to contact
- [ ] Test Skills section
  - [ ] Icons display correctly
  - [ ] Hover effects work
- [ ] Test Projects section
  - [ ] GitHub repos load correctly
  - [ ] Click repo card opens GitHub
  - [ ] Stars and language show correctly
- [ ] Test Contact section
  - [ ] Form fields are editable
  - [ ] Form validation works (try submitting empty)
  - [ ] Submit button works
- [ ] Test Footer
  - [ ] GitHub link works
  - [ ] LinkedIn link works

### Backend Testing
- [ ] Test health endpoint: http://localhost:5000/api/health
- [ ] Test contact form:
  - [ ] Submit contact form from frontend
  - [ ] Check if admin email received
  - [ ] Check if confirmation email sent to user
  - [ ] Success message displays

### Responsive Testing
- [ ] Test on mobile (DevTools mobile view)
  - [ ] Navbar menu appears on mobile
  - [ ] Content is readable
  - [ ] Buttons are clickable
  - [ ] Images scale properly
- [ ] Test on tablet
- [ ] Test on desktop

### Dark Mode Testing
- [ ] Toggle dark mode
- [ ] Verify all sections change colors
- [ ] Refresh page - dark mode persists
- [ ] Test on different sections

## ✅ Deployment Preparation (Optional)

### For Vercel (Frontend)
- [ ] Push code to GitHub repository
- [ ] Create Vercel account (vercel.com)
- [ ] Import GitHub repository
- [ ] Add environment variables in Vercel dashboard
  - [ ] `REACT_APP_GITHUB_USERNAME`
  - [ ] `REACT_APP_BACKEND_URL` (update after Railway deployment)
- [ ] Deploy!

### For Railway (Backend)
- [ ] Create Railway account (railway.app)
- [ ] Create new project from GitHub
- [ ] Set root directory to `/server`
- [ ] Add environment variables in Railway dashboard
  - [ ] `SMTP_HOST`
  - [ ] `SMTP_PORT`
  - [ ] `SMTP_USER`
  - [ ] `SMTP_PASS`
  - [ ] `REACT_APP_URL` (your Vercel frontend URL)
  - [ ] `PORT=5000`
- [ ] Deploy!

### Post-Deployment
- [ ] Copy Railway backend URL
- [ ] Update Vercel environment variable `REACT_APP_BACKEND_URL`
- [ ] Redeploy frontend on Vercel
- [ ] Test contact form on deployed site

## ✅ Final Checks

- [ ] All links work correctly
- [ ] No console errors
- [ ] Dark mode works
- [ ] Responsive on all devices
- [ ] Contact form sends emails
- [ ] GitHub projects load
- [ ] Performance is good (Lighthouse)
- [ ] SEO meta tags are present
- [ ] CV download works

## 📚 Documentation Files

Reference these files for more information:
- `README.md` - Project overview and features
- `SETUP_GUIDE.md` - Detailed setup instructions
- `CODE_REFERENCE.md` - Code reference and customization
- `server/README.md` - Backend specific documentation

## 🎉 Done!

Once all checkboxes are complete, your portfolio is ready to share!

### Next Steps:
1. Share your deployed portfolio URL
2. Add it to your resume
3. Share on social media
4. Keep updating with new projects

---

**Need Help?** Check the troubleshooting section in SETUP_GUIDE.md
