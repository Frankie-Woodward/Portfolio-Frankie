import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, maxLength: 30 }, // Change type to String and add maxLength
    message: { type: String, required: true }
}, { timestamps: true });


const Message = mongoose.model('Message', messageSchema);

export { Message };
