const express = require("express");
const router = express.Router();
const mercadoLibreController = require("../controllers/items.controller");

// Retrieve kpi
router.get("/getAllItems", mercadoLibreController.findAll);

module.exports = router;