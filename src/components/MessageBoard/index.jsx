import React, { useState, useEffect } from 'react';
import './style.css';
import { createMessage, getMessages, updateMessage, deleteMessage } from '../../utils/backend.js';

export default function MessageBoard() {
    const [formData, setFormData] = useState({ name: '', email: '', phoneNumber: '', message: '' });
    const [messages, setMessages] = useState([]);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const fetchMessages = async () => {
            try { 
                const fetchedMessages = await getMessages();
                console.log('Fetched Messages:', fetchedMessages); 
                setMessages(fetchedMessages);
            }
            catch (error) {
                console.error('Error fetching messages:', error);
            }
        };
        fetchMessages();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!formData.name || !formData.message) {
                throw new Error('Name and Message are required fields.');
            }
            // Log formData just before making the API call
            console.log('Form Data:', formData);

            if (formData._id) {
                const updatedMessage = await updateMessage(formData._id, formData);
                setMessages(messages.map(msg => msg._id === formData._id ? updatedMessage : msg));
            } else {
                const newMessage = await createMessage(formData);
                setMessages([...messages, newMessage]);
            }
            setFormData({ name: '', email: '', phoneNumber: '', message: ''});
            setShowModal(false);
        } catch (error) {
            console.error('Error submitting form:', error.message);
            // Display error message to the user or handle it appropriately
        }
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
        setFormData({ name: '', email: '', phoneNumber: '', message: '' });
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
                            <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Your Phone Number" />
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
