import React, { useState, useEffect } from 'react';
import './style.css';
import { createMessage, getMessages, updateMessage, deleteMessage } from '../../utils/backend.js';

export default function MessageBoard() {
    const [formData, setFormData] = useState({ name: '', email: '', phoneNumber: '', message: '', _id: null });
    const [messages, setMessages] = useState([]);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const fetchMessages = async () => {
            const fetchedMessages = await getMessages();
            setMessages(fetchedMessages);
        };
        fetchMessages();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData._id) {
            const updatedMessage = await updateMessage(formData._id, formData);
            setMessages(messages.map(msg => msg._id === formData._id ? updatedMessage : msg));
        } else {
            const newMessage = await createMessage(formData);
            setMessages([...messages, newMessage]);
        }
        setFormData({ name: '', email: '', phoneNumber: '', message: '', _id: null });
        setShowModal(false);
    };

    const handleDelete = async (id) => {
        await deleteMessage(id);
        setMessages(messages.filter(message => message._id !== id));
        setShowModal(false);
    };

    const handleEdit = (message) => {
        setFormData(message);
        setShowModal(true);
    };

    const openModal = () => {
        setFormData({ name: '', email: '', phoneNumber: '', message: '', _id: null });
        setShowModal(true);
    };

    const closeModal = () => setShowModal(false);

    return (
        <div className="message-board">
            <button onClick={openModal}>Leave a Message!</button>
            
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close-button" onClick={closeModal}>&times;</span>
                        <form onSubmit={handleSubmit} className="form-column">
                            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" />
                            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" />
                            <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Your Phone Number" />
                            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" />
                            <button type="submit">Submit</button>
                            {formData._id && <button type="button" onClick={() => handleDelete(formData._id)}>Delete</button>}
                        </form>
                    </div>
                </div>
            )}

            <div className="messages-display">
                {messages.map((msg) => (
                    <div key={msg._id} className="message">
                        <p><strong>{msg.name}:</strong> {msg.message}</p>
                        <button onClick={() => handleEdit(msg)}>Edit</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
