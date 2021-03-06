var express = require('express');
var router = express.Router();


router.use(function(req,res,next){
    if(req.url =='/admin/index' && !req.session['uid']){
      res.redirect('/login/index'); 
    }else{
      next();
    }
});

/* 获取首页 */
router.get('/', function(req, res, next) {
  res.render('index', { title: '浙江理工大学-首页' });
});


module.exports = router;
