# Get Your Glow

A pixel-chic twist on the classic snake game. Collect glow-boosting sachets, leave a trail of sparkling magic, and rack up your score in this playful, beauty-inspired browser game by The Purest Co. How long can you keep glowing?

## Features

- 🎮 Classic snake gameplay with a beauty-inspired twist
- ✨ Sparkling visual effects and glow animations
- 🏆 Global leaderboard with database storage
- 👥 Multi-user score tracking
- 💾 Persistent score storage with SQLite database

## Setup Instructions

### Prerequisites
- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up the database:**
   ```bash
   node setup.js
   ```

3. **Start the server:**
   ```bash
   npm start
   ```

4. **Play the game:**
   Open your browser and visit `http://localhost:3000`

### Development Mode

For development with auto-restart:
```bash
npm run dev
```

## API Endpoints

- `GET /api/scores` - Get top 10 scores
- `POST /api/scores` - Save a new score
- `GET /api/scores/:playerName` - Get scores for a specific player

## Database Schema

The game uses SQLite with the following table structure:

```sql
CREATE TABLE scores (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  player_name TEXT NOT NULL,
  score INTEGER NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

## How to Play

- Use arrow keys to control the snake
- Collect the pink sachets to grow and score points
- Avoid hitting the walls or yourself
- Try to achieve the highest score possible!

## Technologies Used

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Backend:** Node.js, Express.js
- **Database:** SQLite3
- **Styling:** Custom CSS with Google Fonts
