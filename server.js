const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// Import Routes
const tripRoutes = require('./routes/tripRoutes');

// Use Routes
app.use('/api/trips', tripRoutes);

app.get('/', (req, res) => {
  res.send('AI Travel Planner Backend Running');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});