const express = require('express');
var db = require('./db'); //this imports the entry point of the Mongodb connection

const port = process.env.PORT || 5000;

//using the model that we have created above
const Socks = require('./model/socksModel');

//import the Route of the socks as exported from the route folder
const socksRoute = require('./routes/socksRoute');

//rest of code
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('<h1>The server is running </h1>');
});

//to utilise the SocksRoute that has  been imported from
app.use('/api/socks/', socksRoute);

app.listen(port, () => {
  console.log(`the server is liste ning on port: ${port}`);
});
