require('dotenv').config();
const express = require('express');
const { createClient } = require('@supabase/supabase-js');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.'));

// Supabase configuration
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Missing Supabase environment variables!');
  console.error('Please set SUPABASE_URL and SUPABASE_ANON_KEY');
  console.error('You can get these from your Supabase project dashboard');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

// API Routes

// Get all scores (top 10)
app.get('/api/scores', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('scores')
      .select('player_name, score, created_at')
      .order('score', { ascending: false })
      .order('created_at', { ascending: false })
      .limit(10);

    if (error) {
      console.error('Supabase error:', error);
      res.status(500).json({ error: error.message });
      return;
    }

    res.json(data || []);
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Save a new score
app.post('/api/scores', async (req, res) => {
  try {
    const { player_name, score } = req.body;
    
    if (!player_name || typeof score !== 'number') {
      res.status(400).json({ error: 'Player name and score are required' });
      return;
    }
    
    const { data, error } = await supabase
      .from('scores')
      .insert([
        { 
          player_name: player_name, 
          score: score 
        }
      ])
      .select();

    if (error) {
      console.error('Supabase error:', error);
      res.status(500).json({ error: error.message });
      return;
    }

    res.json({ 
      id: data[0].id,
      player_name,
      score,
      message: 'Score saved successfully'
    });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get scores for a specific player
app.get('/api/scores/:playerName', async (req, res) => {
  try {
    const playerName = req.params.playerName;
    
    const { data, error } = await supabase
      .from('scores')
      .select('player_name, score, created_at')
      .eq('player_name', playerName)
      .order('score', { ascending: false })
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Supabase error:', error);
      res.status(500).json({ error: error.message });
      return;
    }

    res.json(data || []);
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Serve the main HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📊 Using Supabase database`);
}); 