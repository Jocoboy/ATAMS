var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var db = require('../../config/db');

// 使用连接池，避免开太多的线程，提升性能
var pool = mysql.createPool(db);


router.get('/', function (req, res, next) {
  switch (req.query.action) {
    case 'del':
      pool.query('Delete FROM course WHERE Cno= ?',[req.query.id],function(err,rows){
        if(err){
          console.error(err);
          res.status(500).send({ code: 500, msg: '服务器内部错误！' });
        }else{
          res.redirect('/admin/tb_course');
        }
      });
      break;
    case 'mod':
      // res.send('mod:'+req.query.id);
      pool.query('SELECT * FROM course WHERE Cno=?',[req.query.id],function(err,modrows){
        if(err){
          console.error(err);
          res.status(500).send({ code: 500, msg: '服务器内部错误！' });
        }else if(modrows.length==0){
          res.status(400).send({ code: 400, msg: '记录不存在！' });
        }else{
          pool.query('SELECT * FROM course ', function (err, rows) {
            if (err) {
              console.error(err);
              res.status(500).send({ code: 500, msg: '服务器内部错误！' });
            } else {
              // res.send(modrows);
              res.render('admin/tb_course', {
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
      pool.query('SELECT * FROM course ', function (err, rows) {
        if (err) {
          console.error(err);
          res.status(500).send({ code: 500, msg: '服务器内部错误！' });
        } else {
          res.render('admin/tb_course', {
            usersData: rows,
            title: '浙江理工大学-教务管理系统-后台管理页面'
          });
        }
      });
  
    }
});

router.post('/',function(req,res){
    // trim()方法用于去掉字符串首尾空格
    var Cno = req.body.Cno.trim();
    var Cname = req.body.Cname.trim();
    var Ctype = req.body.Ctype.trim();
    var Tno = req.body.Tno.trim();

    if(Cno && Cname && Ctype && Tno){
      if(req.body.modified){
        pool.query('UPDATE course SET Cno = ?,Cname = ?,Ctype= ?, Tno=? WHERE Cno= ?',[Cno,Cname,Ctype,Tno,Cno],function(err,rows){
          if(err){
            console.error(err);
           res.status(500).send({ code: 500, msg: '服务器内部错误！' });
          }
          else{
            res.redirect('/admin/tb_course');
          }
        });
      }else{
        pool.query('INSERT INTO course (Cno,Cname,Ctype,Tno) VALUE(?,?,?,?)',[Cno,Cname,Ctype,Tno],function(err,rows){
          if(err){
            console.error(err);
           res.status(500).send({ code: 500, msg: '服务器内部错误！' });
          }
          else{
            res.redirect('/admin/tb_course');
          }
        });
      }
    }else{
      res.status(400).send({ code: 400, msg: '参数错误！' }).end();
    }
});

module.exports = router;
