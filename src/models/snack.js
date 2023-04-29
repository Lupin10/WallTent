const mongoose = require("mongoose"); //importando el componente mongoose

const clientSchema = mongoose.Schema({
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
    client_student: {
        type: moongose.Schema.Types.ObjectId,
        ref: 'Snack',
        required: true
    }
});

module.exports = mongoose.model("Client", clientSchema)