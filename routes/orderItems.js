const express = require('express');
const orderItemController = require('../controllers/orderItems');

const router = express.Router();

router.get('/', orderItemController.getAllOrderItems);
router.get('/:id', orderItemController.getOrderItemByOrderId); // Fetch by order ID
router.post('/', orderItemController.createOrderItem); // Create new order item
router.put('/:id', orderItemController.updateOrderItem); // Update order item
router.delete('/:id', orderItemController.deleteOrderItem); // Delete order item


module.exports = router;
