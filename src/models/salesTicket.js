const mongoose = require("mongoose");

const salesTicketSchema = mongoose.Schema({
    ticketId:{
        type: Number,
        required: true
    },
    clientId:{
        type: Number,
        required: true
    },
    quantity:{
        type: Number,
        required: true
    },
    totalValue:{
        type: Number,
        required: true
    },
    salesTicket:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Sales_Ticket',
        required: true
    }
});

module.exports = mongoose.model("Sales_Ticket", salesTicketSchema)