const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const stripe = require('stripe')(
  'sk_test_51IzikQHuDLgQ4drvXEHjyu6MvwPxkhRTVMUbsimQ7voi5YV5t53Xayr0rZDjPvpofI0iGfR04b5CNIuVqWufr35r00MVXc86qI'
);
const Order = require('../model/orderModel');
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
      const newOrder = new Order({
        name: currentUser.name,
        email: currentUser.email,
        userId: currentUser._id,
        orderItems: cartItems,
        orderAmount: grandTotal,
        shippingAddress: {
          street: token.card.address_line1,
          city: token.card.address_city,
          country: token.card.address_country,
          postcode: token.address_zip,
        },
        transactionID: payment.source.id,
      });

      newOrder.save();
      res.send('Pay has been made successfully');
    } else {
      res.send('Paymment has failed');
    }
  } catch (error) {
    res.status(400).json({ message: 'something went wrong' + error });
  }
});

router.post('/getuserorders', async (req, res) => {
  const { userId } = req.body;
  try {
    const orders = await Order.find({ userId: userId }).sort({ _id: -1 });
    res.send(orders);
  } catch (error) {
    res.status(404).json({ message: 'something went wrong' + error });
  }
});

router.get('/getallorders', async (req, res) => {
  try {
    const orders = await Order.find({});
    res.send(orders);
  } catch (error) {
    return res.status(400).json({ message: 'something went wrong' + error });
  }
});

router.post('/deliverorder', async (req, res) => {
  const orderId = req.body.orderId;

  try {
    const order = await Order.findOne({ _id: orderId });
    order.isDelivered = true;
    await order.save();
    res.send('Order has been delivered successfully');
  } catch (error) {
    res.status(400).json({ message: 'something went wrong' + error });
  }
});

module.exports = router;
