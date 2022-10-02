const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mogoURL');

const connectDB = async () => {
    try {
        await mongoose.connect(db);
    } catch (err) {
        console.log(err)
        process.exit(1);
    }
}

module.exports = connectDB;