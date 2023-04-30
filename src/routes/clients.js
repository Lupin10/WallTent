const express = require("express");
const router = express.Router();
const clientSchema = require("../models/client");

//New Client
router.post("/clients", (req, res) => {
    const client = clientSchema (req.body);
    client
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});