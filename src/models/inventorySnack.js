const mongoose = require("mongoose");

const inventorySnackSchema = mongoose.Schema({
    snack_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'snack',
        required: true
    },
    quantity:{
        type: Number,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    /*inventory_snack:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'InventorySnack',
        required: false
    }*/
});

module.exports = mongoose.model("Inventory Snack", inventorySnackSchema)