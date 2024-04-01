import React, { useState } from 'react';
import './style.css';

const FrankieChatBot = () => {
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');
  
    const sendMessageToAi = async (userMessage) => {
        try {
            const response = await fetch('http://localhost:3000/api/proxy', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: userMessage }),
            });
    
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }
    
            const data = await response.json();
            return data.message;
        } catch (error) {
            console.error('Error in sending message to AI:', error.message);
            return "Sorry, there was an error processing your request.";
        }
    };
    

    const handleQuestionSubmit = async () => {
        const aiResponse = await sendMessageToAi(message);
        setResponse(aiResponse);
        setMessage('');
    };

    return (
        <div className='chat-container'>
            <input 
                type="text" 
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
                placeholder="Ask me anything about Frankie!"
            />
            <button onClick={handleQuestionSubmit}>Ask Frankie-AI</button>
            <div>
                {response && <p>{response}</p>}
            </div>
        </div>
    );
};

export default FrankieChatBot;
