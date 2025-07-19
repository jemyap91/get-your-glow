const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.'));

// Database setup
const db = new sqlite3.Database('scores.db', (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to SQLite database');
    createTable();
  }
});

function createTable() {
  const sql = `
    CREATE TABLE IF NOT EXISTS scores (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      player_name TEXT NOT NULL,
      score INTEGER NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `;
  
  db.run(sql, (err) => {
    if (err) {
      console.error('Error creating table:', err.message);
    } else {
      console.log('Scores table ready');
    }
  });
}

// API Routes

// Get all scores (top 10)
app.get('/api/scores', (req, res) => {
  const sql = `
    SELECT player_name, score, created_at 
    FROM scores 
    ORDER BY score DESC, created_at DESC 
    LIMIT 10
  `;
  
  db.all(sql, [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// Save a new score
app.post('/api/scores', (req, res) => {
  const { player_name, score } = req.body;
  
  if (!player_name || typeof score !== 'number') {
    res.status(400).json({ error: 'Player name and score are required' });
    return;
  }
  
  const sql = 'INSERT INTO scores (player_name, score) VALUES (?, ?)';
  
  db.run(sql, [player_name, score], function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ 
      id: this.lastID,
      player_name,
      score,
      message: 'Score saved successfully'
    });
  });
});

// Get scores for a specific player
app.get('/api/scores/:playerName', (req, res) => {
  const playerName = req.params.playerName;
  const sql = `
    SELECT player_name, score, created_at 
    FROM scores 
    WHERE player_name = ? 
    ORDER BY score DESC, created_at DESC
  `;
  
  db.all(sql, [playerName], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// Serve the main HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// Graceful shutdown
process.on('SIGINT', () => {
  db.close((err) => {
    if (err) {
      console.error('Error closing database:', err.message);
    } else {
      console.log('Database connection closed');
    }
    process.exit(0);
  });
}); 