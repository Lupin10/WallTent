const mongoose = require("mongoose"); //importando el componente mongoose

const snackSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    snack_sales_snack: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'salesSnack',
        required: false
    }
});

module.exports = mongoose.model("Snack", snackSchema)