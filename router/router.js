const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');

router.get('/', controller.home);
router.get('/set', controller.setRedis);
router.get('/get', controller.getRedis);

module.exports = {
  router
};