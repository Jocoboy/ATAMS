var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var db = require('../../config/db');

// 使用连接池，避免开太多的线程，提升性能
var pool = mysql.createPool(db);


router.get('/', function (req, res, next) {
  switch (req.query.action) {
    case 'del':
      pool.query('Delete FROM teacher WHERE Tno=?',[req.query.id],function(err,rows){
        if(err){
          console.error(err);
          res.status(500).send({ code: 500, msg: '服务器内部错误！' });
        }else{
          res.redirect('/admin/tb_teacher');
        }
      });
      break;
    case 'mod':
      // res.send('mod:'+req.query.id);
      pool.query('SELECT * FROM teacher WHERE Tno=?',[req.query.id],function(err,modrows){
        if(err){
          console.error(err);
          res.status(500).send({ code: 500, msg: '服务器内部错误！' });
        }else if(modrows.length==0){
          res.status(400).send({ code: 400, msg: '记录不存在！' });
        }else{
          pool.query('SELECT * FROM teacher ', function (err, rows) {
            if (err) {
              console.error(err);
              res.status(500).send({ code: 500, msg: '服务器内部错误！' });
            } else {
              // res.send(modrows);
              res.render('admin/tb_teacher', {
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
      pool.query('SELECT * FROM teacher ', function (err, rows) {
        if (err) {
          console.error(err);
          res.status(500).send({ code: 500, msg: '服务器内部错误！' });
        } else {
          res.render('admin/tb_teacher', {
            usersData: rows,
            title: '浙江理工大学-教务管理系统-后台管理页面'
          });
        }
      });
  
    }
});

router.post('/',function(req,res){
    // trim()方法用于去掉字符串首尾空格
    var Tno = req.body.Tno.trim();
    var Tname = req.body.Tname.trim();
    var Tposition = req.body.Tposition.trim();

    if(Tno && Tname && Tposition){
      if(req.body.modified){
        pool.query('UPDATE teacher SET Tno=?,Tname=?,Tposition=? WHERE Tno=?',[Tno,Tname,Tposition,Tno],function(err,rows){
          if(err){
            console.error(err);
           res.status(500).send({ code: 500, msg: '服务器内部错误！' });
          }
          else{
            res.redirect('/admin/tb_teacher');
          }
        });
      }else{
        pool.query('INSERT INTO teacher (Tno,Tname,Tposition) VALUE(?,?,?)',[Tno,Tname,Tposition],function(err,rows){
          if(err){
            console.error(err);
           res.status(500).send({ code: 500, msg: '服务器内部错误！' });
          }
          else{
            res.redirect('/admin/tb_teacher');
          }
        });
      }
    }else{
      res.status(400).send({ code: 400, msg: '参数错误！' }).end();
    }
});

module.exports = router;