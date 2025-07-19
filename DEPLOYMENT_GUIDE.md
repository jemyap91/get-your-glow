# Deployment Guide - Get Your Glow

This guide will help you deploy your game to the web so anyone can play it!

## 🚀 Option 1: Railway (Recommended)

Railway is the easiest option with a generous free tier.

### Step 1: Create Railway Account
1. Go to [railway.app](https://railway.app)
2. Sign up with GitHub
3. Create a new project

### Step 2: Connect Your Repository
1. Click "Deploy from GitHub repo"
2. Select your repository
3. Railway will automatically detect it's a Node.js app

### Step 3: Set Environment Variables
1. In your Railway project dashboard, go to **Variables**
2. Add these environment variables:
   ```
   SUPABASE_URL=https://lgpgsbdugpqoebxqxvqw.supabase.co
   SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxncGdzYmR1Z3Bxb2VieHF4dnF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI4OTUzNTgsImV4cCI6MjA2ODQ3MTM1OH0.jg3TTNtglajvk92k109sMGUaFFSGt-KJCaPbwlduEyM
   PORT=3000
   ```

### Step 4: Deploy
1. Railway will automatically deploy your app
2. You'll get a URL like: `https://your-app-name.railway.app`
3. Share this URL with anyone to play your game!

---

## 🌐 Option 2: Render

Render is another great free option.

### Step 1: Create Render Account
1. Go to [render.com](https://render.com)
2. Sign up with GitHub
3. Create a new **Web Service**

### Step 2: Connect Repository
1. Connect your GitHub repository
2. Set build command: `npm install`
3. Set start command: `npm run start:supabase`

### Step 3: Set Environment Variables
Add the same environment variables as Railway:
- `SUPABASE_URL`
- `SUPABASE_ANON_KEY`
- `PORT=3000`

### Step 4: Deploy
1. Click "Create Web Service"
2. Render will deploy your app
3. You'll get a URL like: `https://your-app-name.onrender.com`

---

## ⚡ Option 3: Vercel

Vercel is great but requires a bit more setup for Node.js backends.

### Step 1: Create Vercel Account
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub

### Step 2: Deploy
1. Import your repository
2. Vercel will auto-detect it's a Node.js app
3. Set environment variables in the dashboard

---

## 🔧 Manual Deployment Steps

If you prefer to deploy manually:

### 1. Push to GitHub
```bash
git add .
git commit -m "Add deployment files"
git push origin main
```

### 2. Set Environment Variables
Make sure your hosting platform has these variables:
- `SUPABASE_URL`
- `SUPABASE_ANON_KEY`
- `PORT` (optional, most platforms set this automatically)

### 3. Deploy
Follow the platform-specific instructions above.

---

## 🎯 Quick Start with Railway

1. **Install Railway CLI** (optional):
   ```bash
   npm install -g @railway/cli
   ```

2. **Deploy directly**:
   ```bash
   railway login
   railway init
   railway up
   ```

3. **Set environment variables**:
   ```bash
   railway variables set SUPABASE_URL=https://lgpgsbdugpqoebxqxvqw.supabase.co
   railway variables set SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxncGdzYmR1Z3Bxb2VieHF4dnF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI4OTUzNTgsImV4cCI6MjA2ODQ3MTM1OH0.jg3TTNtglajvk92k109sMGUaFFSGt-KJCaPbwlduEyM
   ```

---

## 🌍 What Happens After Deployment

✅ **Your game will be accessible worldwide**  
✅ **Anyone can play and save scores**  
✅ **Global leaderboard works for everyone**  
✅ **Scores are stored in your Supabase database**  
✅ **No server maintenance required**  

---

## 🎮 Testing Your Deployed Game

1. Visit your deployment URL
2. Play the game and get a score
3. Check if your score appears in the leaderboard
4. Share the URL with friends!

---

## 🔧 Troubleshooting

### "Environment variables not found"
- Make sure you set `SUPABASE_URL` and `SUPABASE_ANON_KEY` in your hosting platform

### "Build failed"
- Check that all dependencies are in `package.json`
- Make sure the start command is correct

### "Database connection failed"
- Verify your Supabase credentials are correct
- Check that your Supabase project is active

---

## 🚀 Next Steps After Deployment

1. **Custom Domain**: Add a custom domain to your deployment
2. **Analytics**: Add Google Analytics to track players
3. **Social Features**: Add sharing buttons
4. **Mobile App**: Consider making a mobile version

Need help? Check the platform documentation or ask in their communities! 