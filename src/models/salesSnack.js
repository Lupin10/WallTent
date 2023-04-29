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
    }
});

module.exports = mongoose.model("Sales Snack", salesSnackSchema)