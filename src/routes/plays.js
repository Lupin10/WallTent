const express = require("express");
const router = express.Router();
const playSchema = require("../models/play");
const ticketSchema = require("../models/ticket");

//New Play
router.post("/plays", (req, res) => {
    const play = playSchema (req.body);
    snack
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
//Consult document of the Play collection
router.get("/plays", (req, res)=>{
    employeeSchema.find()
    .then((data) => res.json(data))
    .catch((error)=>res.json({message: error}));
});
//Consult a play by ID
router.get("/plays/:id", (req, res)=>{
    const{id} = req.params;
    employeeSchema.findById(id)
    .then((data) => res.json(data))
    .catch((error)=>res.json({message: error}));
});
//Edit play by ID
router.put("/plays/:id", (req, res)=>{
    const{id} = req.params;
    const{name, id_card, birthday, member, student} = req.body; 
    employeeSchema.updateOne({_id:id}, {
        $set: {name, id_card, birthday, member, student}
    })
    .then((data) => res.json(data))
    .catch((error)=>res.json({message: error}))
});
//Modify play to add a ticket
router.put("/plays/:id") ,async(req,res) =>{
    const {id} = req.params;
    const ticket = ticketSchema(req.body);
    var idTicket = null;

    const ticketSearch = await ticketSchema.findOne({title:req.body.title});
    if(!ticketSearch){
        await ticket.save().then((dataTicket) =>{
            idTicket = dataTicket._id;
        });
    } else {
        idTicket = ticketSearch._id;
    }
    playSchema
        .updateOne({_id: id}, {
            $pull: {playsplay_ticket:idTicket}
        })
    .then((data)=> res.json(data))
    .catch((error) => res.json({message: error}));
}
//Delete play by ID
router.delete("/plays/:id", (req, res)=>{
    const{id} = req.params;
    employeeSchema
    .findOneAndDelete({_id:id})
    .then((data) => res.json(data))
    .catch((error)=>res.json({message: error}));
});
module.exports = router;