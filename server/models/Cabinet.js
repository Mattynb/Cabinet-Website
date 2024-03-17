const mongoose = require('mongoose');

const cabinetSchema = new mongoose.Schema(
  {
    productId: {
      type: String,
      unique: true,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
      min: 0,
    },
    color: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
  },
  {
    timestamps: true,
  }
);

const Cabinet = mongoose.model('Cabinet', cabinetSchema);

module.exports = Cabinet;