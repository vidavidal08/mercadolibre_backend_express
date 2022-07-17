const requestify = require('requestify');


exports.findAll = function (req, res) {
  requestify.get('https://api.mercadolibre.com/sites/MLA/search?q=teclado')
  .then(function(response) {
      // Get the response body (JSON parsed or jQuery object for XMLs)
      const data =response.getBody();
      console.log(response.getBody());
      res.json(data);
  }
);
};
/*
exports.descripcionById = function (req, res) {
  console.log("this is descripcionById  All Controller");
  Items.findAll(function (err, items) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", items);
    res.send(items);
  });
};
*/
