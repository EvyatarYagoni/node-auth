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
        validate: {
            validator: function(value) {
                // Regular expression for email validation
                return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value);
            },
            message: "Invalid email format",
        },
    },
    password: {
        type: String,
        required: true,
    },
    refreshToken: {
        type: String,
        unique: true,
    }
};

const options = {
    timestamps: true,
}

const userSchema = new mongoose.Schema(schema, options);

module.exports = mongoose.model('User', userSchema);