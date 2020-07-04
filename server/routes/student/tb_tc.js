var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var db = require('../../config/db');
var sql = require('../../lib/mysql');
// var common = require('../../lib/common');
// import $ from 'jquery';
// import 'jquery.cookie';

// 使用连接池，避免开太多的线程，提升性能
var pool = mysql.createPool(db);


router.get('/', function (req, res, next) {

  pool.query(sql.s3_f3_w1_l2_3, [req.cookies.student], function (err, rows) {
    if (err) {
      console.error(err);
      res.status(500).send({ code: 500, msg: '服务器内部错误！' });
    } else {
      res.render('student/tb_tc', {
        usersData: rows,
        title: '浙江理工大学-教务管理系统-后台管理页面'
      });
    }
  });

});


module.exports = router;