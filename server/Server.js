const express = require('express');
const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('the server is working ');
});

app.listen(port, () => {
  console.log(`the server is listening on port: ${port}`);
});
