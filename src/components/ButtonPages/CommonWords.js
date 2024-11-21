import React from 'react';
import '../Button/MyButton.css';

const CommonWords = ({ inputValue, setInputValue }) => {

  // Array of words
  const words = [
    "Jerk!",
    "Bathroom",
    "Doctor",
    "Dentist",
    "Ride",
    "Tighten",
    "Van",
    "Velcro",
    "Uncomfortable",
    "Wheelchair"
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
    </div>
  );
};

export default CommonWords;
