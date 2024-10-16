const express = require('express');

const Socks = require('./model/socksModel');
// this is a random test

const port = process.env.PORT || 5000;
const path = require('path');

const socksRoute = require('./routes/socksRoute');
const userRoute = require('./routes/userRoute');
const orderRoute = require('./routes/ordersRoute');

const app = express();
var db = require('./db');
app.use(express.json());

app.use('/api/socks/', socksRoute);
app.use('/api/user/', userRoute);
app.use('/api/orders/', orderRoute);

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client/build/index.html'));
  });
}

app.listen(port, () => {
  console.log(`the server is listening on port: ${port}`);
});
