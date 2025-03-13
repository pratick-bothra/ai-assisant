// Main React app
import React from 'react';
import VoiceRecorder from './components/VoiceRecorder';
import ChatDisplay from './components/ChatDisplay';
import AssistantUI from './components/AssistantUI';

const App = () => {
    return (
        <div>
            <h1>Voice Assistant</h1>
            <VoiceRecorder />
            <ChatDisplay />
            <AssistantUI />
        </div>
    );
};

export default App;
