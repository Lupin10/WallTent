const express = require("express");
const router = express.Router();
const ticketSchema = require("../models/ticket");

//New ticket
router.post("/tickets", (req, res) => {
    const ticket = ticketSchema (req.body);
    snack
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});