import React from 'react';
import '../Button/MyButton.css';

const DayMonths = ({ inputValue, setInputValue }) => {

  // Array of phrases
  const phrases = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
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
      <div className="button-container">
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

export default DayMonths;
