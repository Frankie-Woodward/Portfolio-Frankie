import axios from 'axios';

const apiBaseUrl = 'https://portfolio-frankie-3976b8e5c822.herokuapp.com/api/messages';

const axiosInstance = axios.create({
    baseURL: apiBaseUrl,
    timeout: 5000, // Adjust timeout as needed
    // Other Axios configurations
});
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
        const response = await axiosInstance.get('/');
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
