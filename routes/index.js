var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ExpressJS - Clint Losee' });
});

router.get('/', function(req, res, next) {
    res.send('Post is working!');
})

router.post('/api', function(req, res, next){
  console.log(req.body.username);
  console.log(req.body.email);
  res.send(req.body);
});

module.exports = router;
