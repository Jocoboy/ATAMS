var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: '浙江理工大学-教务管理系统-登录页面' });
});

module.exports = router;
