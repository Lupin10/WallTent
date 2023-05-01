const express = require("express");
const router = express.Route();
const salesSnackSchema = require("../models/salesSnack");
const snackSchema = require("../models/snack")

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
router.put("/salesSnacks/:id", async (req,res) => {
    const {id} = req.params;
    const snack = snackSchema(req.body)
    var idSnack = null;

    const snackSearch = await snackSchema.findOne({name: req.body.name})
    if (!snackSearch) {
        await snack.save().then((dataSnack) => {
            idSnack = dataSnack._id;
        });        
    }
    else {
        idSnack = snackSearch._id;
    }

    salesSnackSchema.updateOne({_id:id}, {
        $addToSet: {snack_id: idSnack}
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