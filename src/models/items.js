"use strict";
var dbConn = require("../../config/db.config");


//Item object create
var Items = function (items) {
  this.id = items.id;
  this.title = items.title;
  this.picture = items.picture;
  this.condition = items.condition;
  this.free_shipping = items.free_shipping;
  this.sold_quantity = items.sold_quantity;
  this.description = items.description;
};

 //get api/v1/user
 Items.findAll = function ( result) {

  const queryCommand =`SELECT * FROM mercadolibre.items;`;


console.log(queryCommand);

  dbConn.query(queryCommand, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
         console.log("Items: ", res);
      result(null, res);
    }
  });
};

module.exports = Items;