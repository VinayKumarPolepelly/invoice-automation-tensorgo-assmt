const express = require("express");
const router = express.Router();

const { invoiceGenerator } = require("../controllers/invoicecontroller");
// Route to handle invoice generation
// Endpoint to handle POST requests
router.post("/generate-invoice", invoiceGenerator);

module.exports = router;
