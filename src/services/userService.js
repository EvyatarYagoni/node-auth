const User = require('../database/models/User');
const bycrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const login = async (email, password) => {
   const foundUser = await User.findOne({ email });

    if (!foundUser) {
        throw new Error('User not found');
    }

    // compare passwords
    const isPasswordMatch = await bycrypt.compare(password, foundUser.password);

    if (!isPasswordMatch) {
        throw new Error('Invalid credentials');
    }

    const accessToken = await jwt.sign(
        { id: foundUser._id },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: '15m' }
    );

    const refreshToken = await jwt.sign(
        { id: foundUser._id },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: '1d' }
    );

    // save refresh token in db
    foundUser.refreshToken = refreshToken;
    await foundUser.save();

    return { accessToken, refreshToken };
}

const signup = async (email, password, name) => {
    const salt = await bycrypt.genSalt(10);
    const hashedPassword = await bycrypt.hash(password, salt);

    const newUser = new User({
        email,
        password: hashedPassword,
        name,
    });

    await newUser.save();

    return login(email, password);
}

const logout = async (refreshToken) => {
    // remove refresh token from db
    await User.findOneAndUpdate({ refreshToken }, { refreshToken: '' });
}

module.exports = {
    login,
    signup,
    logout
}