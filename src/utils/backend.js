import axios from 'axios';

const apiBaseUrl = 'http://localhost:3000/api/messages';

// Create a new message
export async function createMessage(data) {
    try {
        const response = await axios.post(`${apiBaseUrl}/`, data);
        return response.data;
    } catch (error) {
        console.error('Error creating message:', error);
        throw error;
    }
}

// Get all messages
export async function getMessages() {
    try {
        const response = await axios.get(`${apiBaseUrl}/`);
        return response.data;
    } catch (error) {
        console.error('Error getting messages:', error);
        throw error;
    }
}

// Update a message by id
export async function updateMessage(id, data) {
    try {
        const response = await axios.put(`${apiBaseUrl}/${id}`, data);
        return response.data;
    } catch (error) {
        console.error('Error updating message:', error);
        throw error;
    }
}

// Delete a message by id
export async function deleteMessage(id) {
    try {
        const response = await axios.delete(`${apiBaseUrl}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting message:', error);
        throw error;
    }
}
