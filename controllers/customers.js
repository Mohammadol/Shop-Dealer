const Customer = require('../models/customer');
const Order = require('../models/order');

exports.getAllCustomers = async (req, res) => {
  const id = req.params.id
  try {
    const customers = await Customer.find({shopName:id});
    res.status(200).json(customers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getCustomerById = async (req, res) => {
  const id = req.params.id;

  try {
    const customer = await Customer.findById(id);
    if (!customer) {
      return res.status(404).json({ message: 'Customer not found' });
    }
    res.status(200).json(customer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createCustomer = async (req, res) => {
  const newCustomer = new Customer(req.body);

  try {
    const savedCustomer = await newCustomer.save();
    res.status(201).json(savedCustomer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateCustomer = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedCustomer = await Customer.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedCustomer) {
      return res.status(404).json({ message: 'Customer not found' });
    }
    res.status(200).json(updatedCustomer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteCustomer = async (req, res) => {
  const id = req.params.id;
  const ord = await Order.find({ customerId: id });
  console.log(ord);
  if(ord.length>0){return res.status(400).json({message:'Cannot delete customer with existing orders'})}
  else{
  try {
    await Customer.findByIdAndDelete(id);
    res.status(200).json({ message: 'Customer deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
};

