const mongoose = require('mongoose');

const databaseName = process.env.DB_NAME; // Get the database name from the environment variable

const connectionString = process.env.DB_URL.replace('DB_NAME', databaseName);
const connectDB = async () => {
    try {
        console.log('connectionString', connectionString)
        await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB !');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

module.exports = connectDB;
