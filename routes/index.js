var express = require('express');
var router = express.Router();
const db = require("../db");
const bcrypt = require("bcrypt");
const expressSession = require("express-session");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
