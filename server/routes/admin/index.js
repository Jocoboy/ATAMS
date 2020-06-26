var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

  res.render('admin/index', { title: '浙江理工大学-教务管理系统-后台管理页面' });  
});

module.exports = router;
