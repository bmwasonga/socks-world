const express = require('express');
var db = require('./db'); //this imports the entry point of the Mongodb connection

const port = process.env.PORT || 5000;
const path = require('path');

//using the model that we have created above
const Socks = require('./model/socksModel');

//import the Route of the socks as exported from the route folder
const socksRoute = require('./routes/socksRoute');
//import the User of the socks as exported from the route folder
const userRoute = require('./routes/userRoute');

const orderRoute = require('./routes/ordersRoute');

//rest of code
const app = express();

app.use(express.json());

if (process.env.NODE_ENV == 'production') {
  app.use('/', express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client/build/index.html'));
  });
}

//to utilise the SocksRoute that has  been imported from
app.use('/api/socks/', socksRoute);
//to utilise the Userroute that has been imported
app.use('/api/user/', userRoute);

app.use('/api/orders/', orderRoute);

app.listen(port, () => {
  console.log(`the server is listening on port: ${port}`);
});
