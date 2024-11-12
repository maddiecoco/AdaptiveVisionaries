import React from 'react';
import '../Button/MyButton.css';

const Temporary = ({ inputValue, setInputValue }) => {

  // Array of phrases
  const phrases = [
    "My name is Amy Yu",
    "Would you please",
    "Thank you",
    "How are you?",
    "Jerk!",
    "I don't know",
    "Bathroom",
    "Charge my chair",
    "Doctor",
    "Dentist",
    "Go to my mother's",
    "Ride",
    "Tighten",
    "Van",
    "Velcro",
    "Uncomfortable",
    "Wheelchair"
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

      <div className="button-container-1">
        {/* Dynamically generate buttons for each phrase */}
        {phrases.map((phrase, index) => (
          <button key={index} className="my-button" onClick={() => handlePhraseClick(phrase)}>
            {phrase}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Temporary;
