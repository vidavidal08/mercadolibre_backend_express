"use strict";
const express = require("express");
const app = express.Router();

//Item object create
/*var Items = function (items) {
  this.id = items.id;
  this.title = items.title;
  this.picture = items.picture;
  this.condition = items.condition;
  this.free_shipping = items.free_shipping;
  this.sold_quantity = items.sold_quantity;
  this.description = items.description;
};*/



//get api/v1/user
Items.findAll = function (err,result) {

  app.get('https://api.mercadolibre.com/sites/MLA/search?q=teclado', function (req, res) {
  console.log(res);
});
  if (err) {
    console.log("error: ", err);
    result(null, err);
  } else {
    result(null, "good");
  }
};

module.exports = Items;