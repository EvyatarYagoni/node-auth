const userService = require('../services/userService');
const {loginValidationSchema, signupValidationSchema} = require('../validators/authValidator');
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const {error} = loginValidationSchema({ email, password });

        if (error) {
            return res.status(400).json({ message: error.message });
        }

        const {accessToken, refreshToken} = await userService.login(email, password);

        res.cookie('accessToken', accessToken, {
            httpOnly: true,
        });

        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
        });

        res.status(200).json({ message: 'Login successful' });
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

const logout = async (req, res) => {
    try {
        const { refreshToken } = req.cookies;
        await userService.logout(refreshToken);
        res.clearCookie('accessToken');
        res.clearCookie('refreshToken');
        console.log('Logged out successfully')
        res.status(200).json({ message: 'Logged out successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = {
    login,
    signup,
    logout
};