var express = require('express');
var router = express.Router();
var request = require('superagent');
//https://api.github.com/repos/UVU-DigitalMedia/DGM-Competency-Browser/commits?author=clintlosee

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {title: 'ExpressJS - Clint Losee'});
});

router.get('/', function(req, res, next) {
    res.send('Post is working!');
});


router.post('/api', function(req, res, next) {
    console.log(req.body.username);
    console.log(req.body.email);
    res.send(req.body);
});

router.get('/commitData', function(req, res) {
    request.get("https://api.github.com/repos/UVU-DigitalMedia/DGM-Competency-Browser/commits?author=clintlosee")
    .end(function(err, response) {
        res.json(response);
    })
});

module.exports = router;
