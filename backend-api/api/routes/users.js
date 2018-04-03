var express = require('express');
var router = express.Router();
var User = require('../dbconnection/connection');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', function(req, res, next) {
  console.log(req.body);

  User.find({$and:[{email:req.body.email},{password:req.body.password}]},function(err,data){
    if(err){
      res.json({err:err,code:0});
    }else if(data.length){
      res.json({msg:'User Login successfully',data:data, code:2})
    }else{
      res.json({msg:'Invalid email or password',code:1})
    }
  });
});

router.post('/register', function(req, res, next) {
  console.log(req.body)
  User.find({$and:[{email: req.body.email},{mobile: req.body.mobile}]},function(err,data){
    if(err) {
      res.json({err:err,code:0});
    }else if(data.length) {
      res.json({msg:'User already registered',code:1});
    }else {
      var user = new User({
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password
            
      });
      user.save(function(err,user){
        if(err){
          res.json({err:err,code:0});
        }else {
          res.json({msg:'Registered successfully',data:user,code:2})
        }
      })
    }
  })
});

router.get('/getAllUsers', function(req, res, next) {
  console.log("@@@@@@@@@@@@@@@@@@@@")
  User.find({},function(err,data){
    console.log(data)
    if(err){
      res.json({err:err});
    }else{
      res.json({msg:'success',data:data});
    }
  });
});



module.exports = router;
