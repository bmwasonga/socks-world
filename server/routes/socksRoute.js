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

module.exports = router;
