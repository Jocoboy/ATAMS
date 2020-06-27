var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var db = require('../../config/db');

// 使用连接池，避免开太多的线程，提升性能
var pool = mysql.createPool(db);


router.get('/', function (req, res, next) {
  switch (req.query.action) {
    case 'del':
      var str = req.query.id.split(',');
      pool.query('Delete FROM sc WHERE Sno="' + str[0] +'" AND Cno ="'+str[1]+'" AND Grade is NULL',function(err,rows){
        if(err){
          console.error(err);
          res.status(500).send({ code: 500, msg: '服务器内部错误！' });
        }else{
          var results = true;
          pool.query('SELECT * FROM sc WHERE  Sno="' + str[0] +'" AND Cno ="'+str[1]+'"',function(err,rows){
            if(err){
              console.error(err);
              res.status(500).send({ code: 500, msg: '服务器内部错误！' });
            }else{
                if(rows.length==0){
                  results = false;
                }
            }
          });
          if(results==false){
            res.status(400).send({ code: 400, msg: '该条选课记录中已经成绩登记，无法删除！' });
          } else{
             res.redirect('/student/tb_sc');
          }
        }
      });
      break;
    default:
      pool.query('SELECT * FROM sc ', function (err, rows) {
        if (err) {
          console.error(err);
          res.status(500).send({ code: 500, msg: '服务器内部错误！' });
        } else {
          res.render('student/tb_sc', {
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

    if(Sno && Cno){
        pool.query('INSERT INTO sc (Sno,Cno) VALUE("'+Sno+'","' +Cno+'")',function(err,rows){
          if(err){
            console.error(err);
           res.status(500).send({ code: 500, msg: '服务器内部错误！' });
          }
          else{
            res.redirect('/student/tb_sc');
          }
        });
      }else{
      res.status(400).send({ code: 400, msg: '参数错误！' }).end();
    }
});

module.exports = router;
