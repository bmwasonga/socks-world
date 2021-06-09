const mongoose = require('mongoose');

const socksSchema = mongoose.Schema(
  {
    name: { type: 'string', require },
    sizes: [],
    prices: [],
    category: { type: 'string', require },
    image: { type: 'string', require },
    description: { type: 'string', require },
  },
  {
    timestamps: true,
  }
);

const socksModal = mongoose.model('socks', socksSchema);

//socks is the name of the collection we get the data from

module.exports = socksModal;
