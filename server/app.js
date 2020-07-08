var favicon = require('serve-favicon');
var path = require('path');
var logger = require('morgan');
var express = require('express');
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session');
var createError = require('http-errors');

// 创建服务器
var app = express();
app.listen(8080);

// 设置views文件夹为存放视图资源的目录
app.set('views', path.join(__dirname, 'views'));
// 设置视图模板引擎为ejs
app.set('view engine', 'ejs');

// 加载favicon中间件
app.use(favicon(path.join(__dirname,'/public/favicon.ico')));
// 加载日志中间件
app.use(logger('dev'));
// Express内置中间件，用于解析json，并基于body-parser(在Express v4.16.0及之后版本中提供)
app.use(express.json());  // app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false })); // app.use(bodyParser.urlencoded({ extended: false }))：
// 加载解析cookie的中间件
app.use(cookieParser());
(function (){
  var arr = [];
  for(var i = 0 ; i < 10000 ; i++){
    arr.push('keys_'+Math.random());
  }
  app.use(cookieSession({
      name: 'session_id',
      keys: arr,
      maxAge: 20*60*1000 // 最大失效时间，单位毫秒
  }));
})();
// 设置public文件夹为存放静态资源的目录
app.use(express.static(path.join(__dirname, 'public')));

/*********************路由控制********************************/
app.use('/', require('./routes/index'));
app.use('/login/index',require('./routes/login/index'));

// 管理员超级用户
app.use('/admin/index',require('./routes/admin/index'));
app.use('/admin/tb_course',require('./routes/admin/tb_course'));
app.use('/admin/tb_student',require('./routes/admin/tb_student'));
app.use('/admin/tb_teacher',require('./routes/admin/tb_teacher'));
app.use('/admin/tb_sc',require('./routes/admin/tb_sc'));
app.use('/admin/tb_tc',require('./routes/admin/tb_tc'));
app.use('/admin/tb_user',require('./routes/admin/tb_user'));

//教师用户
app.use('/teacher/index',require('./routes/teacher/index'));
app.use('/teacher/tb_sc',require('./routes/teacher/tb_sc'));
app.use('/teacher/tb_tc',require('./routes/teacher/tb_tc'));
app.use('/teacher/tb_user',require('./routes/teacher/tb_user'));

//学生用户
app.use('/student/index',require('./routes/student/index'));
app.use('/student/tb_course',require('./routes/student/tb_course'));
app.use('/student/tb_sc',require('./routes/student/tb_sc'));
app.use('/student/tb_tc',require('./routes/student/tb_tc'));
app.use('/student/tb_user',require('./routes/student/tb_user'));
/*********************路由控制********************************/

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
