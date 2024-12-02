import React from 'react';
import TextToSpeech from '../TextToSpeech/TextToSpeech';
import './ButtonPage.css';

const Names = ({ inputValue, setInputValue }) => {

  // Array of phrases
  const names = [
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
    "Biby", 
    "Anna", 
    "Betty",
    "Judy", 
    "Linda", 
    "Mary", 
    "Emma", 
    "Kayla", 
    "Ryan", 
    "Rick"
  ];

  // Function to append phrases to inputValue
  const handlePhraseClick = (names) => {
    setInputValue(inputValue + " " + names); // Append the clicked phrase to inputValue
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
        {names.map((names, index) => (
          <button key={index} className="my-button" onClick={() => handlePhraseClick(names)}>
            {names}
          </button>
        ))}
      </div>
      <TextToSpeech text={inputValue} setInputValue={setInputValue} />
    </div>
  );
};

export default Names;
