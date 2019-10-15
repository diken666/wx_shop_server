const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
let testRouter = require('./routes/test');
let userInfoRouter = require('./routes/userInfo');
let loginRouter = require('./routes/login');
let proInfoRouter = require('./routes/getProInfo');
let userLoginRouter = require('./routes/userLogin');
let captchaRouter = require('./routes/captcha');

let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  name: 'isFirst', // 这里是cookie的name，默认是connect.sid
  secret: 'my_session_secret', // 建议使用 128 个字符的随机字符串
  resave: true,  // 在一次会话中无论是否session被改变都会进行强制的储存
  rolling: true, // 在每次会话中的响应中都覆写一次cookie,重置倒计时
  saveUninitialized: true, // 将一个新创建还未修改的会话进行储存,默认为true
  cookie: { expires: new Date(Date.now() + 60*60*1000), httpOnly: true }
}));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/test', testRouter);
app.use('/userInfo', userInfoRouter);
app.use('/login', loginRouter);
app.use('/proInfo', proInfoRouter);
app.use('/userLogin', userLoginRouter);
app.use('/captcha', captchaRouter);


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
