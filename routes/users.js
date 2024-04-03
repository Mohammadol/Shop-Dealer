const express = require('express');
const userController = require('../controllers/users');
const router = express.Router();

router.get('/', userController.getAllUsers); // Implement if needed
router.get('/:username', userController.getUserByUsername);
router.get('/:id', userController.getUserById);
router.post('/', userController.createUser);
router.post('/login', userController.loginUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;