const mongoose = require("mongoose");

const salesTicketSchema = mongoose.Schema({    
    quantity:{
        type: Number,
        required: true
    },
    total_value:{
        type: Number,
        required: true
    },
    ticket_id:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'tickets'
    }],
    client_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'clients'
    }
});

module.exports = mongoose.model("Sales Ticket", salesTicketSchema)