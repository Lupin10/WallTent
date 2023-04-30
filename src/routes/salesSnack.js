const express = require("express");
const router = express.Route();
const salesSnackSchema = require("../models/salesSnack");

//New salesSnack
router.post("/salesSnacks", (req,res) => {
    const salesSnack = salesSnackSchema (req.body)
    salesSnack
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});

//Search salesSnack
router.get("/salesSnacks", (req,res) => {
    salesSnackSchema.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
});

//Search salesSnack by id
router.get("/salesSnacks/:id", (req,res) => {
    const {id} = req.params;
    salesSnackSchema.findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

//Modify salesSnack by id
router.put("/salesSnacks/:id", (req,res) => {
    const {id} = req.params;
    const {quantity, total_value, date_order, snack_id, client_id} = req.body;
    salesSnackSchema.updateOne({_id:id}, {
        $set: {quantity, total_value, date_order, snack_id, client_id}
    })
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

//Delete salesSnack by id
router.delete("/salesSnacks/:id", (req,res) => {
    const {id} = req.params;
    salesSnackSchema.findOneAndDelete(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});
module.exports = router;