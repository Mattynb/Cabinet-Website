const mongoose = require('mongoose');
const{Schema, model} = mongoose;

// framed collection item
const framedCollectionSchema = new Schema({
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  dimensions: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }, 
  imageUrl: { 
    type: String,
    required: true
  }  
});

// frameless collection item
const framelessCollectionSchema = new Schema({
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  dimensions: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageUrl: { 
    type: String,
    required: true
  }
});

// schema for the entire collection
const mainSchema = new mongoose.Schema({
  framedCollection: [framedCollectionSchema],
  framelessCollection: [framelessCollectionSchema]
});

const FramedCollection = model('FramedCollection', framedCollectionSchema);
const FramelessCollection = model('FramelessCollection', framelessCollectionSchema);
const MainCollection = model('MainCollection', mainSchema);

module.exports = { FramedCollection, FramelessCollection, MainCollection };
