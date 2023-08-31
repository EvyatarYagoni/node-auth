const userService = require('../services/userService');
const {loginValidationSchema} = require('../validators/authValidator');
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const {error, value} = await loginValidationSchema({ email, password });

        if (error) {
            return res.status(400).json({ message: error.message });
        }

        const token = await userService.login(email, password);
        res.status(200).json({ token });
    } catch (error) {
        res.status(400).json(error);
        // res.status(400).json({ message: 'Login failed', error });
    }
};

module.exports = {
    login,
};