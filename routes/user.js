const express = require('express');
const userController = require('../controller/user');

const router = express.Router();

router.post('/user', userController.postAddUser);

router.get('/user', userController.getUsers);

router.get('/user/:id', userController.getUserById);

router.patch('/user/:id', userController.updateUser);

router.delete('/user/:id', userController.deleteUser);

module.exports = router;
