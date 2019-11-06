var express = require('express');
var router = express.Router();

var mysql = require('mysql');
// Connection 객체 생성 
var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root1234',
  database: 'test_crud'
});

// Connect
connection.connect(function (err) {
  if (err) {
    console.error('mysql connection error');
    console.error(err);
    throw err;
  }
});

/* GET users listing. */
router.get('/', function (req, res, next) {
  
});

router.post('/signUp1', function (req, res) {
  const user = {
    'userid': req.body.userid,
    'password': req.body.password,
    'name': req.body.name,
    'age': req.body.age
  };
  connection.query('SELECT userid FROM users WHERE userid = "' + user.userid + '"', function (err, row) {
    if (row[0] == null) { //  동일한 아이디가 없을경우,
      connection.query('INSERT INTO users (userid, password, name, age) VALUES ("' + user.userid + '","' + user.password + '","' + user.name + '","' + user.age + '")', user, function (err, row2) {
        if (err) throw err;
      });
      res.json({
        success: true,
        message: '곶감 회원이 되신걸 환영합니다!'
      })
    } else {  //동일한 아이디가 있을경우
      res.json({
        success: false,
        message: '이미 사용중인 아이디에요~'
      })
    }
  });

});

router.post('/login1', function (req, res) {
  const user = {
    'userid': req.body.userid,
    'password': req.body.password
  };
  connection.query('SELECT id, userid, password, name FROM users WHERE userid = "' + user.userid + '"', function (err, row) {
    if (row[0] == null) {
      res.json({ // 매칭되는 아이디 없을 경우
        success: false,
        message: '아이디가 없어요!'
      })
    } else if (row[0].password == user.password) {
      req.session.userid = user.userid;
      req.session.foid = row[0].id;
      console.log(req.session.foid)
      req.session.save(() =>{
        res.json({ // 로그인 성공 
          // name: row[0].name,
          name: req.session.userid,
          success: true,
          message: '곶감에 로그인 되었습니다!'
        })
      })
    } else {
      res.json({ // 매칭되는 아이디는 있으나, 비밀번호가 틀린 경우 
        success: false,
        message: '아이디는 :), 비밀번호 확인해주세요 :('
      })
    }
  })

});

router.get('/logout', function(req, res) {
  delete req.session.userid;
  delete req.session.foid;
  req.session.save(() => {
    res.json({
      success: true,
      message: '로그아웃 되었습니다.'
    })
  })
})

router.get('/debug', function(req,res){
  res.send(req.session)
})

module.exports = router;
