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

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.find({ email, password });
    if (user.length > 0) {
      const currentUser = {
        name: user[0].name,
        email: user[0].email,
        isAdmin: user[0].isAdmin,
        _id: user[0]._id,
      };
      res.send(currentUser);
    } else {
      return res.status(200).json({ message: 'User Login failed' });
    }
  } catch (error) {
    return res.status(400).json({ message: 'Something went wrong' });
  }
});

router.get('/getallusers', async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    res.status.send(400).json({ message: 'Something went wrong' });
  }
});

router.post('/deleteUser', async (req, res) => {
  const userID = req.body.userID;
  try {
    await User.findOneAndDelete({ _id: userID });
    res.send('The user has been deleted');
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});
module.exports = router;
