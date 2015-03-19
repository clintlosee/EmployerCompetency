var express = require('express');
var router = express.Router();

var data = {
    'name': 'Clint Losee',
    'title': 'Student',
    'class': 'Senior'
};

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send(data);
});

module.exports = router;
