var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var db = require('../../config/db');

// 使用连接池，避免开太多的线程，提升性能
var pool = mysql.createPool(db);


router.get('/', function(req, res, next) {
  var results = {};
  pool.query('SELECT * FROM tc ',function(err,rows){
    if(err){
      console.error(err);
      res.status(500).send({code: 500, msg: '服务器内部错误！'});
    }else{
      res.render('teacher/tb_tc',{
        usersData: rows,
        title: '浙江理工大学-教务管理系统-后台管理页面'
      });
    }
  })
});

module.exports = router;
