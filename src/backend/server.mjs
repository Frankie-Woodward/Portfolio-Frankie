// Use import instead of require for ES modules
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import OpenAI from 'openai';
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
app.use(cors({
    origin: 'https://Frankie-Woodward.github.io', // Update with your React app's URL
    methods: ['GET', 'POST'], // Allow only GET and POST requests
    allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
    credentials: true,
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Openai
console.log(process.env.OPENAI_API_KEY);
const apiKey = process.env.OPENAI_API_KEY;

if (!apiKey) {
    throw new Error('OPENAI_API_KEY environment variable is missing or empty.');
}

const openai = new OpenAI({ apiKey });

app.use('/api/proxy', async (req, res) => {
    try {
        const { message } = req.body;
        const openaiResponse = await openai.chat.completions.create({
            model: "gpt-3.5-turbo-0125",
            messages: [
                {
                    role: "system",
                    content: "You are Frankie-AI and that is your name. You know a lot about Frankie's personal and professional life. Answer questions based on this knowledge.",
                },
                {
                    role: "user",
                    content: message,
                },
            ],
        });

        console.log('OpenAI Response:', JSON.stringify(openaiResponse, null, 2));

        if (openaiResponse && openaiResponse.choices && openaiResponse.choices.length > 0) {
            const choice = openaiResponse.choices[0];
            const reply = choice.message.content;
            console.log('OpenAI Response:', reply); // Log the response content
            res.json({ message: reply });
        } else {
            console.error('No valid response from OpenAI');
            res.status(500).send({ error: "No valid response from OpenAI" });
        }
        
    } catch (error) {
        console.error('Error in sending message to AI:', error);
        res.status(500).send({ error: "Sorry, I'm having trouble understanding that." });
    }
});




// Mount routes
app.use('/api/messages', messagesCtrl);

// Start the server
app.listen(process.env.PORT, () => {
    console.log(`Express is running on port ${process.env.PORT}`);
});
