const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true // Quita los espacios
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
});

module.exports = mongoose.model("User", UserSchema);
