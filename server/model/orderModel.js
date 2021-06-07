const mongoose = require('mongoose');
const orderSchema = mongoose.Schema({
  name: {type: String, require}, 
  email: {type: String, require},
  userId : {type: String, require},
  oderItems: [], 
  shippingAddress: {type: Object},
  orderAmount: {type: Number, require}, 
  isDelivered: {type: Boolean, require},
  transactionID: {type: String, require},
}, {
  timestamps = true,
})