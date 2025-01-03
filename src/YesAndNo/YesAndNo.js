import React from "react";
import './YesAndNo.css';

const YesAndNo = () => {
  const handleSpeak = (text) => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
  };

  return (
    <div className="yesno-container">
      <button className="yes-button" onClick={() => handleSpeak("Yes")}> Yes </button>
      <button className="no-button" onClick={() => handleSpeak("No")}> No </button>
    </div>
  );
};

export default YesAndNo;
