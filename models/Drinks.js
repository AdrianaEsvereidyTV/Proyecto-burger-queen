const mongoose = require("mongoose");

const DrinksSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    shift: {
        type: Boolean,
        required: true
    },
    extra: {
        type: [String]
    },
    side: {
        type: [String]
    }
});

module.exports = mongoose.model("Drinks", DrinksSchema);
