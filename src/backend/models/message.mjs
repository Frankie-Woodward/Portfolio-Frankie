import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String },
    number: { type: Number, maxLength: 30 },
    message: { type: String }
}, { timestamps: true });

const Message = mongoose.model('Message', messageSchema);

export { Message };
