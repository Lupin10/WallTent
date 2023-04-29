const mongoose = require("mongoose");

const providerSchema = mongoose.Schema({
    nameProvider:{
        type: String,
        required: true
    },
    link:{
        type: String,
        required: true
    },
    provider:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Provider',
        required: true
    }
});

module.exports = mongoose.model("Provider", providerSchema)