const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  shopName:{
    type: String,
    required:true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
});
productSchema.index({shopName:1})

module.exports = mongoose.model('Product', productSchema);