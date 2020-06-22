var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var favicon = require('serve-favicon');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

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
// 设置public文件夹为存放静态资源的目录
app.use(express.static(path.join(__dirname, 'public')));

// 路由控制
app.use('/', indexRouter);
app.use('/users', usersRouter);

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
