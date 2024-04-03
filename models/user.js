const mongoose = require('mongoose');
const bcrypt= require('bcryptjs');
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  shopName:{
    type:String,
    required:true,
  }
});
userSchema.pre("save", async function(next){
const salt= await bcrypt.genSalt();
this.password = await bcrypt.hash(this.password,salt);
next();
})
 


module.exports = mongoose.model('User', userSchema);
