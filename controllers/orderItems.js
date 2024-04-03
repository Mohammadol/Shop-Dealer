const OrderItem = require('../models/orderItem');

exports.getAllOrderItems = async (req, res) => {
  try {
    const orderItems = await OrderItem.find().populate('orderId productId'); 
    res.status(200).json(orderItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.getOrderItemByOrderId = async (req, res) => {
  const id = req.params.id;

  try {
    const orderItem = await OrderItem.find({ orderId: id }).populate('orderId productId');
    if (!orderItem) {
      return res.status(404).json({ message: 'OrderItem not found' });
    }
    res.status(200).json(orderItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createOrderItem = async (req, res) => {
  const newOrderItem = new OrderItem(req.body);
  try {
    const savedOrderItem = await newOrderItem.save();
    res.status(201).json(savedOrderItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateOrderItem = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedOrderItem = await OrderItem.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedOrderItem) {
      return res.status(404).json({ message: 'OrderItem not found' });
    }
    res.status(200).json(updatedOrderItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteOrderItem = async (req, res) => {
  const id = req.params.id;

  try {
    await OrderItem.findByIdAndDelete(id);
    res.status(200).json({ message: 'OrderItem deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};