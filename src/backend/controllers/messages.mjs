import express from 'express';
const router = express.Router();

// Assuming `Message` is your Mongoose model as defined in your models
import {Message} from '../models/message.mjs';

// POST/Create Route: Save a new message
// Route for creating a new message
router.post('/messages', async (req, res) => {
    try {
        // Extract data from the request body
        const { name, email, number, message } = req.body;

        // Validate required fields
        if (!name || !message) {
            return res.status(400).json({ error: 'Name and Message are required fields.' });
        }

        // Create a new message instance
        const newMessage = new Message({
            name,
            email,
            number,
            message
        });

        // Save the message to the database
        await newMessage.save();

        // Return the newly created message
        res.status(201).json(newMessage);
    } catch (error) {
        console.error('Error creating message:', error);
        res.status(500).json({ error: 'Server error. Failed to create message.' });
    }
});
// GET/Read Route: Get all messages
router.get('/', async (req, res) => {
    try {
        console.log('Fetching messages from the database...');

        const messages = await Message.find({});
        console.log('Fetched messages:', messages);

        res.status(200).json(messages); // Send JSON response
    } catch (error) {
        console.error('Error fetching messages:', error);
        res.status(500).json({ error: 'Internal server error' }); // Send JSON error response
    }
});




// PUT/Update Route: Update a message by id
router.put('/:id', async (req, res) => {
    try {
        console.log('Update Request Body:', req.body); // Log request body for debugging
        const updatedMessage = await Message.findByIdAndUpdate(req.params.id, req.body, { new: true });
        console.log('Updated Message:', updatedMessage); // Log updated message for debugging
        res.status(200).json(updatedMessage);
    } catch (error) {
        console.error('Error updating message:', error);
        res.status(400).json({ error: error.message });
    }
});


// DELETE/Delete Route: Delete a message by id
router.delete('/:id', async (req, res) => {
    try {
        const deletedMessage = await Message.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedMessage);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

export default router;
