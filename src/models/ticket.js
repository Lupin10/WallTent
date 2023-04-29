const mongoose = require("mongoose");
const ticketSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    schedule:{
        type: Date,
        required: true
    },
    price:{
        type: Number,
        required: true
    }
});
module.exports = mongoose.model("Ticket", ticketSchema);