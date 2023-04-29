const mongoose = require("mongoose");

const inventorySnackSchema = mongoose.Schema({
    snackId:{
        type: Number,
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
    inventorySnack:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'InventorySnack',
        required: true
    }
});

module.exports = mongoose.model("InventorySnack", inventorySnackSchema)