# 🚀 QUICK START GUIDE - Deploy Your Portfolio in 10 Minutes!

## What You'll Get
A beautiful, professional portfolio website hosted on GitHub Pages for FREE! 
URL will be: https://sharathprasaath.github.io/portfolio

---

## 🎯 Prerequisites (One-time Setup)

1. **Install Node.js**
   - Go to https://nodejs.org/
   - Download and install the LTS version
   - Verify installation: Open terminal/cmd and type `node --version`

2. **Install Git**
   - Go to https://git-scm.com/downloads
   - Download and install
   - Verify: Type `git --version` in terminal

3. **Create GitHub Account**
   - Go to https://github.com
   - Sign up for free if you don't have an account

---

## 📋 Step-by-Step Deployment

### STEP 1: Create GitHub Repository (2 minutes)

1. Go to https://github.com and login
2. Click the **"+"** button (top right) → **"New repository"**
3. Repository name: `portfolio`
4. Select: **Public**
5. **DON'T** check any boxes (README, .gitignore, license)
6. Click **"Create repository"**
7. **Keep this page open** - you'll need it!

---

### STEP 2: Prepare Your Files (1 minute)

1. Download/extract all the portfolio files to a folder
2. Open the folder in your file explorer
3. Open `package.json` file in any text editor (Notepad works!)
4. Find this line:
   ```
   "homepage": "https://sharathprasaath.github.io/portfolio",
   ```
5. **IMPORTANT**: Replace `sharathprasaath` with YOUR GitHub username
6. Save the file

---

### STEP 3: Upload to GitHub (3 minutes)

1. **Open Terminal/Command Prompt:**
   - Windows: Press `Win + R`, type `cmd`, press Enter
   - Mac: Press `Cmd + Space`, type `terminal`, press Enter
   - Linux: Press `Ctrl + Alt + T`

2. **Navigate to your portfolio folder:**
   ```bash
   cd path/to/your/portfolio/folder
   ```
   Example: `cd C:\Users\Sharath\Desktop\portfolio`

3. **Run these commands ONE BY ONE:**

   ```bash
   # Initialize Git
   git init
   
   # Add all files
   git add .
   
   # Commit files
   git commit -m "Initial portfolio"
   
   # Connect to GitHub (replace with YOUR username and repo name)
   git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
   
   # Push to GitHub
   git branch -M main
   git push -u origin main
   ```

   **Note**: You might be asked to login to GitHub - follow the prompts!

---

### STEP 4: Install Dependencies & Deploy (4 minutes)

Still in the terminal, run:

```bash
# Install required packages (this might take 2-3 minutes)
npm install

# Deploy to GitHub Pages
npm run deploy
```

Wait for the deployment to complete (you'll see "Published" message)

---

### STEP 5: Enable GitHub Pages (1 minute)

1. Go to your repository on GitHub
2. Click **"Settings"** tab (top menu)
3. Click **"Pages"** in left sidebar
4. Under **"Source"**:
   - Branch: Select `gh-pages`
   - Folder: Keep as `/ (root)`
5. Click **"Save"**

---

### STEP 6: See Your Live Portfolio! 🎉

Wait 2-3 minutes, then visit:
```
https://YOUR-USERNAME.github.io/portfolio
```

**Example**: https://sharathprasaath.github.io/portfolio

---

## 🔄 How to Update Your Portfolio Later

Made changes to your portfolio? Here's how to update:

1. **Open terminal in your portfolio folder**

2. **Run these commands:**
   ```bash
   git add .
   git commit -m "Updated portfolio"
   git push origin main
   npm run deploy
   ```

3. **Wait 2-3 minutes** - your changes are live!

---

## ❓ Common Issues & Solutions

### Issue 1: "npm: command not found"
**Solution**: Install Node.js from https://nodejs.org/

### Issue 2: "git: command not found"
**Solution**: Install Git from https://git-scm.com/

### Issue 3: "Permission denied"
**Solution**: 
- Windows: Run Command Prompt as Administrator
- Mac/Linux: Add `sudo` before commands

### Issue 4: GitHub asks for username/password
**Solution**: 
- Use your GitHub username
- For password, you need a Personal Access Token:
  1. Go to GitHub → Settings → Developer settings → Personal access tokens
  2. Generate new token (classic)
  3. Select "repo" scope
  4. Use this token as password

### Issue 5: Changes not showing
**Solution**:
- Wait 2-3 minutes
- Clear browser cache (Ctrl+Shift+R)
- Check if deployment succeeded

### Issue 6: 404 Page Not Found
**Solution**:
- Check Settings → Pages is configured correctly
- Verify the URL matches your repository name
- Wait a few more minutes

---

## 🎨 Customize Your Portfolio

Edit the `src/portfolio.jsx` file to change:
- Your name and photo
- About section text
- Projects and experiences
- Skills and education
- Contact information
- Colors and styling

After editing, update using the commands above!

---

## 📞 Need Help?

If you get stuck:
1. Read the error message carefully
2. Check the troubleshooting section
3. Google the error message
4. Ask on GitHub Discussions

---

## 🎓 For Your Placement Interviews

**Pro Tips:**
1. Add this portfolio link to your resume
2. Mention it in your LinkedIn profile
3. Share it when applying to companies
4. Keep it updated with new projects
5. Make sure all links work before interviews!

---

**You're all set! Good luck with your placements! 🚀**

Made with ❤️ for college placements
