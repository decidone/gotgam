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

// 현재 로그인 중인 사용자의 정보를 보여준다.
router.post('/info', function (req, res) {
  connection.query('SELECT * FROM users WHERE id = "' + req.session.foid + '"', function (err1, row1) {
    if (err1) throw err1;
    else {
      res.send(row1[0])
    }
  });

})

// 현재 로그인 중인 사용자가 작성한 게시물의 리스트를 보여준다.
router.post('/', function (req, res) {
  connection.query('SELECT * FROM boards WHERE boards.userid = "' + req.session.foid + '"', function (err, data) {
    if (err) throw err;

    res.send(data);

  })
});

router.get('/:id', function (req, res) {
  var id = req.params.id;

  connection.query('SELECT * FROM boards WHERE boards.id = "' + [id] + '"', function (err, row) {
    if(err) console.log(err);

    console.log(row[0])

    connection.query('SELECT * FROM day WHERE day.boardid = "' + [id] + '"', function(err, row1) {
      if(err) console.log(err);

      res.send(row1[0])
    })
  })

});

module.exports = router;