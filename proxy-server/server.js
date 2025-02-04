const express = require('express');
const cors = require('cors');
const axios = require('axios'); 

const app = express();
const port = 3001; // You can choose any available port

app.use(cors());

app.get('/api/bootstrap-static', async (req, res) => {
  try {
    const response = await axios.get('https://fantasy.premierleague.com/api/bootstrap-static/');
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

app.listen(port, () => {
  console.log(`Proxy server listening on port ${port}`);
});