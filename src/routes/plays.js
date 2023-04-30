const express = require("express");
const router = express.Router();
const playSchema = require("../models/play");

//New Play
router.post("/plays", (req, res) => {
    const play = playSchema (req.body);
    snack
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
module.exports = router;