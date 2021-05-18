const express = require('express');
var db = require('./db'); //this imports the entry point of the Mongodb connection

const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('<h1>The server is running </h1>');
});

app.listen(port, () => {
  console.log(`the server is listening on port: ${port}`);
});
