const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    food: {
        type: [mongoose.Schema.Types.ObjectId],
        required: true,
        ref: "Food"
    },
    drink: {
        type: [mongoose.Schema.Types.ObjectId],
        required: true,
        ref: "Drink"
    },
    total: {
        type: Number,
        required: true,
        trim: true
    },
    client:{
        type: String,
        required: true
    },
    employee:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    }
});

module.exports = mongoose.model("Order", OrderSchema);
