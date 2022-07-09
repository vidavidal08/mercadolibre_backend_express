"use strict";
const Items = require('../models/items');

exports.findAll = function (req, res) {
    console.log("this is find  All Controller");
    res.send("this is find All Controller");
    /*Items.findAll(function (err, items) {
      console.log("controller");
      if (err) res.send(err);
     // console.log("res", items);
      res.send(items);
    });*/
  };
