const mongoose = require('mongoose');
const{Schema, model} = mongoose;

const subscriberSchema = new mongoose.Schema({
    email: {
      type: String,
      required: true,
      unique: true
    }
  });
  
module.exports = mongoose.model('Subscriber', subscriberSchema);