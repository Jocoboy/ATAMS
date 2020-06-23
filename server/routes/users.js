var express = require('express');
var mysql = require('mysql');
var router = express.Router();

// var db = require('../config/db');

// 使用连接池，避免开太多的线程，提升性能
var pool = mysql.createPool({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'root1234',
    database: 'atams'
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  var results = {};
  pool.query('SELECT * FROM tc ',function(err,rows){
    if(err){
      
    }else{
      results = rows;
      // res.send(results);
      res.render('users',{
        usersData: rows,
        title: '浙江理工大学-教务管理系统-后台管理页面'
      });
    }
  })
  // res.render('users', { title: '浙江理工大学-教务管理系统-后台管理页面' });
});

module.exports = router;
