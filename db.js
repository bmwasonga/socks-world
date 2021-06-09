const mongoose = require('mongoose');

var mongoUrl =
  'mongodb+srv://admin:admin@socksworld.idyuc.mongodb.net/socksworld';
mongoose.connect(mongoUrl, { useUnifiedTopology: true, useNewUrlParser: true });

var db = mongoose.connection;

db.on('connected', () => {
  console.log('MongoDB has connected successfully');
});

db.on('error', () => {
  console.log('"There has been an error connecting to MongoDB');
});

module.exports = mongoose;
