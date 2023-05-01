const mongoose = require("mongoose");

const inventorySnackSchema = mongoose.Schema({
    snack_id:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'snack',
        required: false
    }],
    quantity:{
        type: Number,
        required: true
    },
    name:{
        type: String,
        required: true
    }    
});

module.exports = mongoose.model("Inventory Snack", inventorySnackSchema)