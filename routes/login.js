var express = require('express');
var router = express.Router();
var db = require('../db/db.js')

/* GET home page. */
router.get('/', function(req, res, next) {
    // let project = { project_name: 'test', create_time: '2017-03-28 14:09:29' };
    // let sqlString = 'INSERT INTO project SET ?';
    // let connection = db.connection();
    // db.insert(connection, sqlString, project, function(id) {
    //     console.log('inserted id is:' + id);
    // });
    // db.close(connection);
    let user = req.query;
    let inform = {
        username: "用户名：" + user.username,
        password: "密码：" + user.password
    }
    res.send(inform);
});

module.exports = router;