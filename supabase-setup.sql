-- Create the scores table
CREATE TABLE IF NOT EXISTS scores (
  id BIGSERIAL PRIMARY KEY,
  player_name TEXT NOT NULL,
  score INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on score for faster leaderboard queries
CREATE INDEX IF NOT EXISTS idx_scores_score ON scores(score DESC);

-- Create an index on player_name for faster player-specific queries
CREATE INDEX IF NOT EXISTS idx_scores_player_name ON scores(player_name);

-- Insert some sample data
INSERT INTO scores (player_name, score) VALUES
  ('GlowMaster', 150),
  ('SparkleQueen', 120),
  ('BeautyGamer', 95),
  ('PinkPrincess', 88),
  ('GlowGetter', 75),
  ('ShimmerStar', 110),
  ('GlowBabe', 92),
  ('SparkleDiva', 85),
  ('BeautyQueen', 78),
  ('GlowGoddess', 105)
ON CONFLICT DO NOTHING;

-- Enable Row Level Security (RLS) for better security
ALTER TABLE scores ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows all operations (for this game, we want public read/write)
CREATE POLICY "Allow all operations" ON scores
  FOR ALL USING (true)
  WITH CHECK (true); 