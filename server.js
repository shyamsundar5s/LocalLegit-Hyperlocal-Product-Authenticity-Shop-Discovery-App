const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const { Pool } = require('pg');

dotenv.config();

const app = express();
const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

app.use(cors());
app.use(bodyParser.json());

app.get('/api/shops', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM shops');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: 'Database query failed' });
  }
});

app.listen(5000, () => console.log('Backend running on http://localhost:5000'));
