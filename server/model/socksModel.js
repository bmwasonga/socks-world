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

//the schema above describes how the data is defined by mongo
//I am pretty sure that will dictate how it extracts the same data from the clusters

const socksModal = mongoose.model('socks', socksSchema);

//socks is the name of the collection we get the data from

module.exports = socksModal;
