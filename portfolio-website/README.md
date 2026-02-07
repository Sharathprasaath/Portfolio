# 🚀 Sharath Prasaath J - Portfolio Website

A modern, professional portfolio website built with React, showcasing AI/ML projects, work experience, and technical skills.

## ✨ Features

- **Modern Design**: Clean, professional design with smooth animations
- **Fully Responsive**: Works perfectly on all devices (mobile, tablet, desktop)
- **Dynamic Sections**: 
  - Hero section with introduction
  - About section with stats
  - Professional experience timeline
  - Featured projects showcase
  - Technical skills categorized
  - Education and certifications
  - Contact information
- **Interactive UI**: Smooth scrolling, hover effects, and animated elements
- **GitHub Pages Ready**: Configured for easy deployment

## 🛠️ Technologies Used

- React 18
- Lucide React (for icons)
- CSS3 (with animations)
- GitHub Pages (for hosting)

## 📦 Installation & Local Development

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Git

### Steps to Run Locally

1. **Clone or Download the Repository**
   ```bash
   git clone https://github.com/sharathprasaath/portfolio.git
   cd portfolio
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm start
   ```
   
   The app will open at `http://localhost:3000`

4. **Build for Production**
   ```bash
   npm run build
   ```

## 🌐 Deploy to GitHub Pages

### Step-by-Step Deployment Guide

#### 1. Create a GitHub Repository

1. Go to [GitHub](https://github.com) and log in
2. Click the "+" icon in the top right → "New repository"
3. Name your repository: `portfolio` (or any name you prefer)
4. Make it **Public**
5. **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. Click "Create repository"

#### 2. Upload Your Code to GitHub

Open terminal/command prompt in the portfolio folder and run:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit the files
git commit -m "Initial portfolio commit"

# Add your GitHub repository as remote
# Replace 'sharathprasaath' with your GitHub username
git remote add origin https://github.com/sharathprasaath/portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

#### 3. Update package.json Homepage

Before deploying, update the `homepage` field in `package.json`:

```json
"homepage": "https://YOUR-GITHUB-USERNAME.github.io/YOUR-REPO-NAME"
```

For example:
```json
"homepage": "https://sharathprasaath.github.io/portfolio"
```

#### 4. Deploy to GitHub Pages

Run the deployment command:

```bash
npm run deploy
```

This will:
- Build your portfolio
- Create a `gh-pages` branch
- Push the build to GitHub Pages

#### 5. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" section (left sidebar)
4. Under "Source", select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
5. Click "Save"

#### 6. Access Your Live Portfolio

After 2-3 minutes, your portfolio will be live at:
```
https://YOUR-GITHUB-USERNAME.github.io/YOUR-REPO-NAME
```

For example: `https://sharathprasaath.github.io/portfolio`

## 🔄 Updating Your Portfolio

Whenever you make changes:

1. **Update your code**
2. **Commit changes:**
   ```bash
   git add .
   git commit -m "Update portfolio content"
   git push origin main
   ```
3. **Redeploy:**
   ```bash
   npm run deploy
   ```

Your changes will be live in 2-3 minutes!

## 📝 Customization Guide

### Update Personal Information

Edit `src/portfolio.jsx`:

1. **Hero Section**: Update name, tagline, and description
2. **About Section**: Modify the about text and stats
3. **Experience**: Add/edit work experiences
4. **Projects**: Update project details and GitHub links
5. **Skills**: Add or remove skills
6. **Education**: Update university, degree, and CGPA
7. **Contact**: Change email, phone, GitHub, LinkedIn links

### Change Colors

In `portfolio.jsx`, find the `:root` CSS variables and customize:

```css
:root {
  --primary: #0A66C2;        /* Primary brand color */
  --secondary: #00D9FF;      /* Secondary accent */
  --accent: #FF6B35;         /* Highlight color */
  /* ... other colors */
}
```

### Add New Sections

1. Add the section in the JSX
2. Update the navigation array
3. Style the section with CSS

## 🐛 Troubleshooting

### Issue: `npm run deploy` fails
**Solution**: Make sure you've committed all changes first
```bash
git add .
git commit -m "Your message"
npm run deploy
```

### Issue: GitHub Pages shows 404
**Solutions**:
- Wait 2-3 minutes after deployment
- Check if `gh-pages` branch exists
- Verify homepage URL in `package.json` matches your repo

### Issue: Changes not showing up
**Solution**: 
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Check if deployment was successful
- Verify you pushed to the correct branch

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## 📄 License

This project is open source and available for personal use.

## 🤝 Contact

- **Email**: sharathprasaath@gmail.com
- **GitHub**: [@sharathprasaath](https://github.com/sharathprasaath)
- **LinkedIn**: [Sharath Prasaath](https://linkedin.com/in/sharathprasaath)

---

**Built with ❤️ using React**

Good luck with your placements! 🎓✨
