// Use import instead of require for ES modules
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import path from 'path';

// Import your database and models
import { Message } from './models/index.mjs';
import messagesCtrl from './controllers/messages.mjs';

import mongoose from 'mongoose';

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGODBURI);
const dbConnection = mongoose.connection;

dbConnection.on('connected', () => {
    console.log(`Connected to MongoDB ${dbConnection.name} at ${dbConnection.host}:${dbConnection.port}`);
});

// Express app setup
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Mount routes
app.use('/api/messages', messagesCtrl);

// Start the server
app.listen(process.env.PORT, () => {
    console.log(`Express is running on port ${process.env.PORT}`);
});
