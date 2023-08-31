const userService = require('../services/userService');
const {loginValidationSchema, signupValidationSchema} = require('../validators/authValidator');
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const {error} = loginValidationSchema({ email, password });

        if (error) {
            return res.status(400).json({ message: error.message });
        }

        const tokens = await userService.login(email, password);
        res.status(200).json(tokens);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const signup = async (req, res) => {
    try {
        const { email, password, name } = req.body;
        const {error} = signupValidationSchema({ email, password, name });

        if (error) {
            return res.status(400).json({ message: error.message });
        }

        const tokens = await userService.signup(email, password, name);
        res.status(200).json(tokens);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = {
    login,
    signup,
};