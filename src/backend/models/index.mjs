// Require the Mongoose package & your environment configuration
import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGODBURI);
const db = mongoose.connection

db.on('connected', function () {
    console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
});

// Export models and seed data to `server.js`
import { Message } from './message.mjs';

export { Message };