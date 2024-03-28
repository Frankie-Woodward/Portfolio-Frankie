import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    number: { type: Number, maxLength: 30 },
    message: { type: String, required: true }
}, { timestamps: true });

const Message = mongoose.model('Message', messageSchema);

export { Message };
