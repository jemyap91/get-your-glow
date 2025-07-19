# Supabase Setup Guide

This guide will help you set up Supabase as your database for the Get Your Glow game.

## Step 1: Create a Supabase Account

1. Go to [supabase.com](https://supabase.com)
2. Click "Start your project" or "Sign up"
3. Create an account (you can use GitHub, Google, or email)

## Step 2: Create a New Project

1. Click "New Project"
2. Choose your organization
3. Fill in the project details:
   - **Name**: `get-your-glow` (or any name you prefer)
   - **Database Password**: Create a strong password (save this!)
   - **Region**: Choose the closest to your users
4. Click "Create new project"
5. Wait for the project to be created (this takes a few minutes)

## Step 3: Get Your API Keys

1. In your project dashboard, go to **Settings** → **API**
2. Copy the following values:
   - **Project URL** (looks like: `https://your-project-id.supabase.co`)
   - **anon public** key (starts with `eyJ...`)

## Step 4: Set Up the Database

1. In your Supabase dashboard, go to **SQL Editor**
2. Click "New Query"
3. Copy and paste the contents of `supabase-setup.sql`
4. Click "Run" to execute the SQL

This will create:
- The `scores` table
- Indexes for better performance
- Sample data
- Row Level Security policies

## Step 5: Configure Environment Variables

1. Create a `.env` file in your project root:
   ```bash
   cp env.example .env
   ```

2. Edit the `.env` file with your actual values:
   ```env
   SUPABASE_URL=https://your-project-id.supabase.co
   SUPABASE_ANON_KEY=your-anon-key-here
   PORT=3000
   ```

## Step 6: Install Dependencies and Run

```bash
# Install dependencies
npm install

# Start the server with Supabase
node supabase-server.js
```

## Step 7: Test Your Setup

1. Visit `http://localhost:3000`
2. Play the game and try to get a score
3. Check if your score appears in the leaderboard
4. You can also check your Supabase dashboard → **Table Editor** → **scores** to see the data

## Troubleshooting

### "Missing Supabase environment variables"
- Make sure your `.env` file exists and has the correct values
- Check that you copied the URL and key correctly from Supabase

### "Table 'scores' doesn't exist"
- Make sure you ran the SQL from `supabase-setup.sql` in the SQL Editor

### "Permission denied"
- Check that Row Level Security policies are set up correctly
- The SQL setup should handle this automatically

## Benefits of Using Supabase

✅ **Free Tier**: 500MB database, 50MB file storage, 2GB bandwidth  
✅ **Real-time**: Built-in real-time subscriptions  
✅ **Authentication**: User management if you want to add it later  
✅ **Dashboard**: Beautiful interface to view and manage data  
✅ **API**: Auto-generated REST and GraphQL APIs  
✅ **Security**: Row Level Security and built-in security features  

## Next Steps

Once this is working, you can:
- Deploy to a platform like Railway, Render, or Vercel
- Add user authentication
- Add real-time leaderboard updates
- Add more game features

Need help? Check the [Supabase documentation](https://supabase.com/docs) or ask in the community! 