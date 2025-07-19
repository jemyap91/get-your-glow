const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');

console.log('Setting up Get Your Glow database...');

// Create database file if it doesn't exist
const db = new sqlite3.Database('scores.db', (err) => {
  if (err) {
    console.error('Error creating database:', err.message);
    process.exit(1);
  }
  
  console.log('Database created successfully');
  
  // Create scores table
  const createTableSQL = `
    CREATE TABLE IF NOT EXISTS scores (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      player_name TEXT NOT NULL,
      score INTEGER NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `;
  
  db.run(createTableSQL, (err) => {
    if (err) {
      console.error('Error creating table:', err.message);
    } else {
      console.log('Scores table created successfully');
      
      // Add some sample data
      const sampleData = [
        ['GlowMaster', 150],
        ['SparkleQueen', 120],
        ['BeautyGamer', 95],
        ['PinkPrincess', 88],
        ['GlowGetter', 75]
      ];
      
      const insertSQL = 'INSERT INTO scores (player_name, score) VALUES (?, ?)';
      let completed = 0;
      
      sampleData.forEach(([name, score]) => {
        db.run(insertSQL, [name, score], function(err) {
          if (err) {
            console.error('Error inserting sample data:', err.message);
          } else {
            completed++;
            if (completed === sampleData.length) {
              console.log('Sample data inserted successfully');
              console.log('\n✅ Setup complete!');
              console.log('Run "npm start" to start the server');
              console.log('Then visit http://localhost:3000 to play the game');
              db.close();
            }
          }
        });
      });
    }
  });
}); 