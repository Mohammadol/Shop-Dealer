const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  shopName:{
    type: String,
    required:true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
});
customerSchema.index({shopName:1});
module.exports = mongoose.model('Customer', customerSchema);
