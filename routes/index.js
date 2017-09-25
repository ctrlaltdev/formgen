'use strict';
var conf = require('../conf');
var form = require('../form.sample');
var express = require('express');
var router = express.Router();
var fs = require('fs');
if (fs.existsSync('../form.json')) {
  form = require('../form');
}

// GET: /
router.get('/', function(req, res) {
  res.render('index', {
    author: conf.app.author,
    url: conf.app.url + '/',
    name: conf.app.name,
    title: conf.app.name,
    form: form
  });
});

module.exports = router;