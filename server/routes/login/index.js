var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var db = require('../../config/db');

// 使用连接池，避免开太多的线程，提升性能
var pool = mysql.createPool(db);

/* 获取登录页面 */
router.get('/', function(req, res, next) {
  res.render('login/index', { title: '浙江理工大学-教务管理系统-登录页面' });
});

router.post('/',function(req,res){
    var username = req.body.username;
    var password = req.body.password;
    if(username && password){
      pool.query('SELECT * FROM user WHERE Uaccount="' + username + '"',function(err,rows){
         if(err){
          console.error(err);
          res.status(500).send({code: 500,data:[], msg: '服务器内部错误！'});
         }
         else if (rows.length == 0){
          res.status(400).send({code: 400,data:[], msg: '用户不存在！'});
         }else{
           if(rows[0].Upwd != password){
            res.status(400).send({code: 400,data:[], msg: '用户密码错误！'});
           }else{
             req.session['uid'] = rows[0].Uaccount;
             res.status(200).send({
               code: 200,
               data: rows[0].Utype, 
               msg: '登录成功！'
              });
            //  window.location.href('/admin');
            //  res.redirect('/admin');
            //  res.render('admin', { title: '浙江理工大学-教务管理系统-后台管理页面' });
           }
         }
      });
    }else{
      res.status(400).send({code: 400,data:[], msg: '用户名和密码不能为空！'});
    }
});

module.exports = router;