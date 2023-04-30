const express = require("express");
const router = express.Route();
const salesTicketSchema = require("../models/salesTicket");

//New salesTicket
router.post("/salesTickets", (req,res) => {
    const salesTickets = salesTicketSchema (req.body)
    salesTickets
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});

//Search salesTicket
router.get("/salesTickets", (req,res) => {
    salesTicketSchema.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

//Search salesTicket by id
router.get("/salesTickets/:id", (req,res) => {
    const {id} = req.params;
    salesTicketSchema.findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

//Modify salesTicket by id
router.put("/salesTickets/:id", (req,res) => {
    const {id} = req.params;
    const {quantity, total_value, ticket_id, client_id} = req.body;
    salesTicketSchema.updateOne({_id:id}, {
        $set: {quantity, total_value, ticket_id, client_id}
    })
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

//Delete salesTicket by id
router.delete("/salesTIckets/:id", (req,res) => {
    const {id} = req.params;
    salesTicketSchema.findOneAndDelete(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});
module.exports = routes;