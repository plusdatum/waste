var express  = require('express');
var router   = express.Router();
var mongoose = require('mongoose');
var Branch   = require('../models/Branch.js');

router.get('/', function(req, res, next){
   Branch.find(function (err, branchs){
      if(err) return next(err);
      res.json(branchs);
   });
});

router.post('/', function(req, res, next){
   Branch.create(req.body, function(err, post){
   	  console.log(req.body);
      if(err) return next(err);
      res.json(post);
   });
});

router.get('/:id', function(req, res, next){
   Branch.findById(req.params.id, function(err, post){
      if(err) return next(err);
      res.json(post);
   });
});

router.put('/:id', function(req, res, next){
   Branch.findByIdAndUpdate(req.params.id, req.body, function(err, post){
      if(err) return next(err);
      res.json(post);
   });
});

module.exports = router;