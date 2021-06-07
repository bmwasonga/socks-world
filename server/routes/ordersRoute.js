const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const stripe = require('stripe')(
  'sk_test_51IzikQHuDLgQ4drvXEHjyu6MvwPxkhRTVMUbsimQ7voi5YV5t53Xayr0rZDjPvpofI0iGfR04b5CNIuVqWufr35r00MVXc86qI'
);

router.post('/placeorder', async (req, res) => {
  const { token, grandTotal, currentUser, cartItems } = req.body;

  try {
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });
    const payment = await stripe.charges.create(
      {
        amount: grandTotal * 100,
        currency: 'kes',
        customer: customer.id,
        receipt_email: token.email,
      },
      {
        idempotencyKey: uuidv4(),
      }
    );

    if (payment) {
      res.send('Pay has been made successfully');
    } else {
      res.send('Paymment has failed');
    }
  } catch (error) {
    res.status(400).json({ message: 'something went wrong' + error });
  }
});

module.exports = router;
