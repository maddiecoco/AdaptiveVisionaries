import React from 'react';
import './ButtonPage.css';
import TextToSpeech from '../TextToSpeech/TextToSpeech';

const CommonPhrases = ({ inputValue, setInputValue }) => {

  // Array of phrases
  const phrases = [
    "My name is Amy Yu",
    "Thank you",
    "How are you?",
    "I don't know",
    "Charge my chair",
    "Would you please ",
    "Can you ",
    "I am ",
    "I need to ",
    "Where is ",
    "Put on my mask.", 
    "Fix my tray.",
    "Go to my mother's",
    "May I have two paper towels please?",
    "Cold pack please!",
    "Heating pad please!",
    "Please get the nurse when I am on the mat.",
    "I need a boost "
  ];

  // Function to append phrases to inputValue
  const handlePhraseClick = (phrase) => {
    setInputValue(inputValue + " " + phrase); // Append the clicked phrase to inputValue
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
        {phrases.map((phrase, index) => (
          <button key={index} className="my-button" onClick={() => handlePhraseClick(phrase)}>
            {phrase}
          </button>
        ))}
      </div>
      <TextToSpeech text={inputValue} setInputValue={setInputValue} />
    </div>
  );
};

export default CommonPhrases;
