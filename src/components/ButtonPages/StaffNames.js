import React from 'react';
import '../Button/MyButton.css';

const StaffNames = ({ inputValue, setInputValue }) => {

  // Array of phrases
  const phrases = [
    "Kara", 
    "Ron",
    "Mike",
    "Louis",
    "Tasha",
    "Anoma",
    "Mars",
    "Ronald",
    "Erricka",
    "Ruvini",
    "Chloe",
    "Tamara",
    "Sarah",
    "Lucy",
    "Danielle",
    "John",
    "Crystal",
    "Gigi",
    "Biby"
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
        readOnly 
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

export default StaffNames;
