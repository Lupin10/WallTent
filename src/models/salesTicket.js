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
});

module.exports = mongoose.model("Sales Ticket", salesTicketSchema)