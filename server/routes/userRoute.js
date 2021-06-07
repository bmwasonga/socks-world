const express = require('express');
const router = express.Router();
const User = require('../model/userModel');

router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  const newUser = new User({ name, email, password });

  try {
    newUser.save();
    res.send('The User has been successfully registered');
  } catch (error) {
    return res.status(404).json({ message: error });
  }
});

module.exports = router;
