const express = require('express');
var db = require('./db'); //this imports the entry point of the Mongodb connection

const port = process.env.PORT || 5000;

//using the model that we have created above
const Socks = require('./model/socksModel');

//import the Route of the socks as exported from the route folder
const socksRoute = require('./routes/socksRoute');
//import the User of the socks as exported from the route folder
const userRoute = require('./routes/userRoute');

//rest of code
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('<h1>The server is running </h1>');
});

//to utilise the SocksRoute that has  been imported from
app.use('/api/socks/', socksRoute);
//to utilise the Userroute that has been imported
app.use('/api/users/', userRoute);

app.listen(port, () => {
  console.log(`the server is listening on port: ${port}`);
});
