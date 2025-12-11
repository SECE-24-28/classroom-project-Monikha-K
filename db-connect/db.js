const mongoose = require('mongoose');

// Connect to local MongoDB without TLS to avoid WRONG_VERSION_NUMBER on plain ports
exports.connect = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/Backend', {
            tls: false,
            serverSelectionTimeoutMS: 5000
        });
        console.log('Connected to MongoDB successfully!');
    } catch (e) {
        console.log('MongoDB connection failed:', e.message);
        console.log('Ensure mongod is running and the URI starts with mongodb://');
    }
};