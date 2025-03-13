import React from 'react';

const AssistantUI = () => {
    const handleAction = (action) => {
        console.log(`Action triggered: ${action}`);
        // Additional logic for handling actions can be added here
    };

    return (
        <div>
            <h2>Assistant UI</h2>
            <button onClick={() => handleAction('Start')}>Start Assistant</button>
            <button onClick={() => handleAction('Stop')}>Stop Assistant</button>
        </div>
    );
};

export default AssistantUI;
