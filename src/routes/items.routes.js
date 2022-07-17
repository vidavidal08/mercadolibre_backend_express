const express = require("express");
const router = express.Router();
const mercadoLibreController = require("../controllers/items.controller");

// Retrieve kpi
router.get("/items", mercadoLibreController.findAll);
//router.get("/items/:id", mercadoLibreController.descripcionById);

module.exports = router;