var express  = require('express');
var router   = express.Router();
var mongoose = require('mongoose');
var Company  = require('../models/Company.js');

router.get('/', function(req, res, next){
   Company.find(function (err, companies){
      if(err) return next(err);
      res.json(companies);
   });
});

router.post('/', function(req, res, next){
   Company.create(req.body, function(err, post){
   	  console.log(req);
      if(err) return next(err);
      res.json(post);
   });
});

module.exports = router;