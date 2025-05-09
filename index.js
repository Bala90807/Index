const express = require('express');
const request = require('request');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/proxy', (req, res) => {
  const target = req.query.url;
  if (!target) return res.send('Missing ?url=');

  request({
    url: target,
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/119.0 Safari/537.36'
    }
  }).pipe(res);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Proxy running on port ${port}`);
});
