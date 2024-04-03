const express = require('express');
const productRouter = require('./routes/products');
const userRouter = require('./routes/users');
const customerRouter = require('./routes/customers'); // Optional
const orderRouter = require('./routes/orders');
const orderItemRouter = require('./routes/orderItems');
const mongoose = require('mongoose');
const env = require('dotenv').config();

const app = express();


const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://Mohammadol:Mohammad_161281@crm.qsaotj5.mongodb.net/node_tuts?retryWrites=true&w=majority&appName=CRM", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/products', productRouter);
app.use('/users', userRouter);
app.use('/customers', customerRouter); // Optional
app.use('/orders', orderRouter);
app.use('/orderItems', orderItemRouter);

// Error handling middleware (optional)

app.listen(3000, () => console.log('Server listening on port 3000'));
module.exports=app;