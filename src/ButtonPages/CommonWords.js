import React from 'react';
import TextToSpeech from '../TextToSpeech/TextToSpeech';
import './ButtonPage.css';

const CommonWords = ({ inputValue, setInputValue }) => {

  // Array of words
  const words = [
    "Please",
    "Yes",
    "No",
    "Hello",
    "Ok",
    "Maybe",
    "Jerk!",
    "Bathroom",
    "Doctor",
    "Dentist",
    "Ride",
    "Tighten",
    "Van",
    "Velcro",
    "Uncomfortable",
    "Wheelchair",
    "Mother",
    "Sister",
    "You"
  ];

  // Function to append phrases to inputValue
  const handlePhraseClick = (words) => {
    setInputValue(inputValue + " " + words); // Append the clicked phrase to inputValue
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
        {words.map((words, index) => (
          <button key={index} className="my-button" onClick={() => handlePhraseClick(words)}>
            {words}
          </button>
        ))}
      </div>
      <TextToSpeech text={inputValue} setInputValue={setInputValue} />
    </div>
  );
};

export default CommonWords;
