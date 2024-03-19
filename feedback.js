const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/feedback', (req, res) => {
  const feedback = req.body;

  // Process feedback (e.g., store in database, log file, etc.)
  console.log('Received feedback:', feedback);

  // Send confirmation response
  res.status(200).send({ message: 'Feedback received. Thank you for your input!' });
});

app.listen(PORT, () => {
  console.log(`Feedback endpoint is running on port ${PORT}`);
});