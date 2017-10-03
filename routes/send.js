'use strict';
var conf = require('../conf');
var express = require('express');
var router = express.Router();

// GET: /
router.post('/', function(req, res) {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;