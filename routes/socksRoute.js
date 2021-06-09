const express = require('express');
const router = express.Router();
//import the socks mmodel
const Socks = require('../model/socksModel');

router.get('/getallsocks', async (req, res) => {
  try {
    const socks = await Socks.find({});
    res.status(200).send(socks);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.post('/addsock', async (req, res) => {
  const sock = req.body.sock;

  console.log('the recieved data is ' + sock);

  const newSock = new Socks({
    name: sock.name,
    image: sock.image,
    description: sock.description,
    category: sock.category,
    prices: [sock.prices],
    sizes: ['small', 'medium'],
  });

  await newSock.save();
  res.send('new sock saved successfully');
  try {
  } catch (error) {
    return res.status(400).json({ message: 'something went wrong' });
  }
});

module.exports = router;
