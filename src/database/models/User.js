const mongoose = require('mongoose');
const schema = {
    name: {
        type: String,
        required: true,
        min: 3,
        max: 20,
    },
    email: {
        type: String,
        required: true,
        max: 50,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
};

const options = {
    timestamps: true,
}

const userSchema = new mongoose.Schema(schema, options);

module.exports = mongoose.model('User', userSchema);