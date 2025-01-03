import React from 'react';
import './ButtonPage.css';
import TextToSpeech from '../TextToSpeech/TextToSpeech';
import YesAndNo from '../YesAndNo/YesAndNo';

const CommonRequests = ({ inputValue, setInputValue }) => {

  // Array of phrases
  const requests = [
    "Charge my chair",
    "Put on my mask.", 
    "Fix my tray.",
    "Go to my mother's",
    "Cold pack please!",
    "Heating pad please!",
    "Please get the nurse when I am on the mat.",
    "May I have two paper towels please?",
    "I need a boost "
  ];

  // Function to append requests to inputValue
  const handlePhraseClick = (requests) => {
    setInputValue(inputValue + " " + requests); // Append the clicked requests to inputValue
  };

  return (
    <div className="container">
      <input
        type="text"
        value={inputValue}
        placeholder="Phrase will appear here."
        readOnly // Prevent user from typing manually
      />

      <div className="button-container-3">
        {/* Dynamically generate buttons for each phrase */}
        {requests.map((requests, index) => (
          <button key={index} className="my-button" onClick={() => handlePhraseClick(requests)}>
            {requests}
          </button>
        ))}
      </div>
      <YesAndNo/>
      <TextToSpeech text={inputValue} setInputValue={setInputValue} />
    </div>
  );
};

export default CommonRequests;
