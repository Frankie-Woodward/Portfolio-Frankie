import express from 'express';
const router = express.Router();

// Assuming `Message` is your Mongoose model as defined in your models
import {Message} from '../models/message.mjs';

// POST/Create Route: Save a new message
router.post('/', async (req, res) => {
    try {
        const newMessage = new Message(req.body);
        const savedMessage = await newMessage.save();
        res.status(201).json(savedMessage);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// GET/Read Route: Get all messages
router.get('/', async (req, res) => {
    try {
        const messages = await Message.find({});
        res.status(200).json(messages);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// PUT/Update Route: Update a message by id
router.put('/:id', async (req, res) => {
    try {
        const updatedMessage = await Message.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedMessage);
    } catch (error) {
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
