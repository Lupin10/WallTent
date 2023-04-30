const express = require("express");
const router = express.Route();
const inventorySnackSchema = require("../models/inventorySnack");

//New inventory snack
router.post("/inventorySnacks", (req,res) => {
    const inventorySnack = inventorySnackSchema (req.body);
    inventorySnack
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});

//Search inventory snack
router.get("/inventorySnacks", (req,res) => {
    inventorySnackSchema.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

//Search inventory snack by id
router.get("/inventorySnacks/:id", (req,res) => {
    const {id} = req.params;
    inventorySnackSchema.findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

//Modify inventory snack by id
router.get("/inventorySnacks/:id", (req,res) => {
    const {id} = req.params;
    const {snack_id, quantity, name} = req.body;
    inventorySnackSchema.updateOne({_id:id}, {
        $set: {snack_id, quantity, name}
    })
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

//Delete inventory snack by id
router.delete("/inventorySnacks/:id", (req,res) => {
    const {id} = req.params;
    inventorySnackSchema.findOneAndDelete(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});
module.exports = router;