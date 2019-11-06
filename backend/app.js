// express-generator: 라우터, 모델, 뷰, 필수 미들웨어, 에러 미들웨어를 만들 때마다 반복적으로 수행되는 일을 한번에 만들 수 있도록 도와준다.
// app.js는 서버에 필요한 미들웨어를 등록한 가장 중요한 파일

// 우리가 사용할 express와 미들웨어들을 가져온다.
// path는 경로를 편리하게 만들어주는 모듈
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var session = require('express-session');
var MySQLStore = require('express-mysql-session')(session);

// routes에 있는 파일을 가져온다.
// routes는 express.Router()로 등록한 라우터 파일을 가지고 있는 디렉터리, 라우터 관리 담당
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var movies = require('./routes/movies');
var regist = require('./routes/regist');
var region = require('./routes/region');
var mypage = require('./routes/mypage');

// 미들웨어를 등록할 app 변수
var app = express();

// view engine setup
// app.set을 설정
app.set('views', path.join(__dirname, 'views')); // 템플린 엔진이 있는 디렉터리를 알려준다.
app.set('view engine', 'jade'); // 어떤 템플릿 엔진을 사용할지를 알려주는 부분

// 미들웨어를 등록
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: '9772dbwls!',
  resave: false,
  saveUninitialized: true,
  store: new MySQLStore({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root1234',
    database: 'test_crud'
  })
}));


app.use(bodyParser.urlencoded({extended: false}));

// 요청한 파일 호출
// method와 URL로 라우팅되어 처리
app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/movies', movies);
app.use('/api/regist', regist);
app.use('/api/region', region);
app.use('/api/mypage', mypage);
// app.use(require('connect-history-api-fallback')())

// 에러 처리
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

// 각종 미들웨어가 설정된 app 변수를 외부에서 사용 가능하도록 모듈화
module.exports = app;

// app.js는 미들웨어만 포함하지 서버를 직접 생성하지는 않는다.
// 서버를 생성하는 일은 bin/www가 하게된다.

