import React, { useState } from 'react';
import OpenAI from 'openai';
import './style.css';

const FrankieChatBot = () => {
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');
    
    const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
    const openai = new OpenAI({
        apiKey: OPENAI_API_KEY,
        dangerouslyAllowBrowser: true,
    });

    const sendMessageToAi = async (userMessage) => {
        try {
            const response = await openai.chat.completions.create({
                model: "gpt-3.5-turbo",
                messages: [
                    {
                        role: "system",
                        content: "You are Frankie-AI and that is your name. You know a lot about Frankie's personal and professional life. Answer questions based on this knowledge.",
                    },    
                    {
                        role: "user",
                        content: userMessage,
                    },
                ],
            });

            return response.choices[0].message.content;
        } catch (error) {
            console.error('Error in sending message to AI:', error);
            return "Sorry, I'm having trouble understanding that.";
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
