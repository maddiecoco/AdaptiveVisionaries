import React, { useState, useEffect } from "react";
import './TextToSpeech.css';

const TextToSpeech = ({ text }) => {
  const [utterance, setUtterance] = useState(null);

  useEffect(() => {
    const synth = window.speechSynthesis;
    const u = new SpeechSynthesisUtterance(text);

    setUtterance(u);

    return () => {
      synth.cancel();
    };
  }, [text]);

  const handlePlay = () => {
    const synth = window.speechSynthesis;
    synth.speak(utterance);
  };

  const handleStop = () => {
    const synth = window.speechSynthesis;
    synth.cancel();
  };

  return (
    <div className="voice-container">
      <button className="speech-buttons" onClick={handlePlay}>Play</button>
      <button className="speech-buttons" onClick={handleStop}>Stop</button>
    </div>
  );
};  

export default TextToSpeech;
