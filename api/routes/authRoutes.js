const express = require('express');
const router = express.Router();
const authController = require('./api/controllers/authController');

router.route('/register').post(authController.register);