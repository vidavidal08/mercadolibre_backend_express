const express = require("express");
const router = express.Router();
const mercadoLibreController = require("../controllers/items.controller");

// Retrieve kpi
router.get("/getAllItems", mercadoLibreController.findAll);

/*router.get('/getAllItems', function(req, res) {
    res.send('Birds home page');
  });
*/
module.exports = router;