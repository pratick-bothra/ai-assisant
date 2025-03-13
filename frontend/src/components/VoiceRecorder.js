import React, { useState } from 'react';

const VoiceRecorder = () => {
    const [isRecording, setIsRecording] = useState(false);
    let mediaRecorder;

    const startRecording = async () => {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorder = new MediaRecorder(stream);
        mediaRecorder.start();
        setIsRecording(true);
    };

    const stopRecording = () => {
        mediaRecorder.stop();
        setIsRecording(false);
    };

    return (
        <div>
            <h2>Voice Recorder</h2>
            <button onClick={isRecording ? stopRecording : startRecording}>
                {isRecording ? 'Stop Recording' : 'Start Recording'}
            </button>
        </div>
    );
};

export default VoiceRecorder;
