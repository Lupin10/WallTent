const mongoose = require("mongoose");

const salesSnackSchema = mongoose.Schema({
    quantity:{
        type: Number,
        required: true
    },
    total_value:{
        type: Number,
        required: true
    },
    date_order:{
        type: Date,
        required: true
    },
    //FK snack id
    snack_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'snack',
        required: false
    }],
    //Fk client id
    client_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'client'
    }],
});

module.exports = mongoose.model("Sales Snack", salesSnackSchema)