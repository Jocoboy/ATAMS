var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var db = require('../../config/db');
var sql = require('../../lib/mysql');

// 使用连接池，避免开太多的线程，提升性能
var pool = mysql.createPool(db);


router.get('/', function (req, res, next) {
  switch (req.query.action) {
    case 'mod':
      var str = req.query.id.split(',');
      // res.send('mod:'+str[0]+" "+str[1]);
      pool.query(sql.s_all_f_sc_w_no2,[str[0],str[1]],function(err,modrows){
        if(err){
          console.error(err);
          res.status(500).send({ code: 500, msg: '服务器内部错误！' });
        }else if(modrows.length==0){
          res.status(400).send({ code: 400, msg: '记录不存在！' });
        }else{
          pool.query(sql.s_all_f_sc, function (err, rows) {
            if (err) {
              console.error(err);
              res.status(500).send({ code: 500, msg: '服务器内部错误！' });
            } else {
              // res.send(modrows);
              res.render('teacher/tb_sc', {
                modData: modrows,
                usersData: rows,
                title: '浙江理工大学-教务管理系统-后台管理页面'
              });
            }
          });
        }
      });
      break;
    default:
      pool.query(sql.s4_f2_w1_l1_0,[req.cookies.teacher], function (err, rows) {
        if (err) {
          console.error(err);
          res.status(500).send({ code: 500, msg: '服务器内部错误！' });
        } else {
          res.render('teacher/tb_sc', {
            usersData: rows,
            title: '浙江理工大学-教务管理系统-后台管理页面'
          });
        }
      });
  
    }
});

router.post('/',function(req,res){
    // trim()方法用于去掉字符串首尾空格
    var Sno = req.body.Sno.trim();
    var Cno = req.body.Cno.trim();
    var Grade = req.body.Grade.trim();

    if(Sno && Cno && Grade){
      if(req.body.modified){
        var str = req.body.modified.split(",");
        pool.query(sql.u_sc_s1_w_no2,[Grade,str[0],str[1]],function(err,rows){
          if(err){
            console.error(err);
           res.status(500).send({ code: 500, msg: '服务器内部错误！' });
          }
          else{
            res.redirect('/teacher/tb_sc');
          }
        });
      }else{
      }
    }else{
      res.status(400).send({ code: 400, msg: '参数错误！' }).end();
    }
});

module.exports = router;
