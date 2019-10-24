const express = require('express');

const router = express.Router();

const userCtrl = require('../controllers/user.controller');

router.route('/')
  .get(userCtrl.getUser)
  
module.exports = router;
