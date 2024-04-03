const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  shopName:{
    type: String,
    required:true,
  },
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer', // Optional reference if using Customers collection
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  totalAmount: {
    type: Number,
    required: true,
  },
},{timestamps: true});
orderSchema.index({shopName:1});

module.exports = mongoose.model('Order', orderSchema);