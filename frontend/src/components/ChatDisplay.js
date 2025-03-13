import React, { useState } from 'react';

const ChatDisplay = () => {
    const [messages, setMessages] = useState([]);

    const addMessage = (message) => {
        setMessages([...messages, message]);
    };

    return (
        <div>
            <h2>Chat Display</h2>
            <ul>
                {messages.map((msg, index) => (
                    <li key={index}>{msg}</li>
                ))}
            </ul>
            <button onClick={() => addMessage("New message!")}>Add Message</button>
        </div>
    );
};

export default ChatDisplay;
