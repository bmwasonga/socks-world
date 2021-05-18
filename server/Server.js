const express = require('express');
var db = require('./db'); //this imports the entry point of the Mongodb connection

const port = process.env.PORT || 5000;

//using the modal that we have created above
const Socks = require('./model/socksModel');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('<h1>The server is running </h1>');
});

app.get('/getsocks', (req, res) => {
  Socks.find({}, (err, result) => {
    if (err) {
      log.error(err);
    } else {
      res.status(200).send(result);
    }
  });
});
// the above when we run http://localhost:5000/getsocks should retun the list as extracted from MongoDB

app.listen(port, () => {
  console.log(`the server is listening on port: ${port}`);
});
