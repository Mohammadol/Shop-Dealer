const express = require('express');
const productController = require('../controllers/products');

const router = express.Router();

router.get('/:id', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.post('/', productController.createProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;
