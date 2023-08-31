const joi = require('joi');

const loginValidationSchema = (data) => {
    const schema = joi.object({
        email: joi.string().email().max(50).
            pattern(new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/))
            .required(),
        password: joi.string().min(6).required()
    });

    return schema.validate(data);
}

const signupValidationSchema = (data) => {
    const schema = joi.object({
        name: joi.string().min(3).max(20).required(),
        email: joi.string().email().max(50).
        pattern(new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/))
            .required(),
        password: joi.string().min(6).required()
    });

    return schema.validate(data);
}

module.exports = {
    loginValidationSchema,
    signupValidationSchema,
};