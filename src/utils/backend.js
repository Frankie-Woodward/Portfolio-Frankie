import axios from 'axios';

const apiBaseUrl = 'https://localhost:3000/api/messages';

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
        const response = await axios.get(apiBaseUrl); // Use apiBaseUrl directly without appending '/'
        const responseData = response.data;
   

        console.log('Response Data:', responseData); // Log the response data

        if (Array.isArray(responseData) && responseData.length > 0) {
            return responseData;
        } else {
            console.warn('Empty response or invalid data format');
            return []; // Return an empty array or handle empty response as needed
        }
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
