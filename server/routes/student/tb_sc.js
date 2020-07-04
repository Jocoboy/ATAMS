var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var db = require('../../config/db');
var sql = require('../../lib/mysql');

// 使用连接池，避免开太多的线程，提升性能
var pool = mysql.createPool(db);


router.get('/', function (req, res, next) {
  switch (req.query.action) {
    case 'del':
      var str = req.query.id.split(',');
      pool.query(sql.d_f_sc_w_no2_null,[str[0],str[1]],function(err,rows){
        if(err){
          console.error(err);
          res.status(500).send({ code: 500, msg: '服务器内部错误！' });
        }else{
          var results = true;
          pool.query(sql.s_all_f_sc_w_no2,[str[0],str[1]],function(err,rows){
            if(err){
              console.error(err);
              res.status(500).send({ code: 500, msg: '服务器内部错误！' });
            }else{
                if(rows.length==1){
                  results = false;
                }
                if(results==false){
                  res.status(400).send({ code: 400, msg: '该条选课记录中已经成绩登记，无法删除！' });
                } else{
                   res.redirect('/student/tb_sc');
                }
            }
          });
        }
      });
      break;
    default:
      console.error(req.cookies.teacher)
      pool.query(sql.s3_f2_w1_l1_2, [req.cookies.student],function (err, rows) {
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
        pool.query(sql.i_i_sc_v2,[Sno,Cno],function(err,rows){
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
