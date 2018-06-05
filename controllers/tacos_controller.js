// Node Dependencies
var express = require('express');
var router = express.Router();
var taco = require('../models/tacos.js');
var db = require("../models/index.js");


// Create routes
// ----------------------------------------------------
// Index Redirect
router.get('/', function (req, res) {
  res.redirect('/index');
});


// Index Page (render all burgers to DOM)
router.get('/index', function (req, res) {
  db.Tacos.findAll({}).then(function (data) {
    res.render('index', { Tacos: data });
    // res.json(data);
  })
});


// Create a New Taco
router.post('/taco/create', function (req, res) {
  db.Tacos.create({
    taco_name: req.body.taco_name,
    devoured: false
  }).then(function (data) {
    res.redirect('/index');
    console.log(data);

  });
});


// Devour a Taco
router.post('/taco/devour/:id', function (req, res) {

  db.Tacos.update({
    taco_name: req.body.taco_name,
    devoured: true
  }, {
      where: {
        id: req.params.id
      }
    }).then(function (data) {
      res.redirect('/index');
      console.log(data);
    });
});

// Make more Tacos
router.post('/taco/masTacos/:id', function (req, res) {

  db.Tacos.update({
    taco_name: req.body.taco_name,
    devoured: false
  }, {
      where: {
        id: req.params.id
      }
    }).then(function (data) {
      res.redirect('/index');
      console.log(data);
    });
});

// DESTROY ALL TACOS! BWUAHAHAHAHAHA!!!!!!!
router.get('/index/youMonster', function (req, res) {
  db.Tacos.destroy({
    where: {},
    truncate: true
  }).then(function (data) {
    res.redirect('/index');
    console.log(data);
  });
});
// ----------------------------------------------------


// Export routes
module.exports = router;