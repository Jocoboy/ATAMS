var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var db = require('../../config/db');
var common = require('../../lib/common');
var sql = require('../../lib/mysql');

// 使用连接池，避免开太多的线程，提升性能
var pool = mysql.createPool(db);


router.get('/', function (req, res, next) {
  switch (req.query.action) {
    case 'mod':
      // res.send('mod:'+req.query.id);
      pool.query(sql.s_all_f_user_w_account,[req.cookies.student2],function(err,modrows){
        if(err){
          console.error(err);
          res.status(500).send({ code: 500, msg: '服务器内部错误！' });
        }else if(modrows.length==0){
          res.status(400).send({ code: 400, msg: '记录不存在！' });
        }else{
              // res.send(modrows);
              res.render('student/tb_user', {
                modData: modrows,
                usersData: modrows,
                title: '浙江理工大学-教务管理系统-后台管理页面'
              });
            }
          });
      break;
    default:
      pool.query(sql.s_all_f_user_w_account,[req.cookies.student2], function (err, rows) {
        if (err) {
          console.error(err);
          res.status(500).send({ code: 500, msg: '服务器内部错误！' });
        } else {
          res.render('student/tb_user', {
            usersData: rows,
            title: '浙江理工大学-教务管理系统-后台管理页面'
          });
        }
      });
  
    }
});

router.post('/',function(req,res){
    // trim()方法用于去掉字符串首尾空格
    var Uaccount = req.body.Uaccount.trim();
    var Upwd = common.md5(req.body.Upwd.trim());

    if(Uaccount && Upwd){
      if(req.body.modified){
        pool.query(sql.u_user_s1_w_account,[Upwd,Uaccount],function(err,rows){
          if(err){
            console.error(err);
           res.status(500).send({ code: 500, msg: '服务器内部错误！' });
          }
          else{
            res.redirect('/student/tb_user');
          }
        });
      }
    }else{
      res.status(400).send({ code: 400, msg: '参数错误！' }).end();
    }
});

module.exports = router;