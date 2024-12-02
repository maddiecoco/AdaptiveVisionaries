import React from 'react';
import TextToSpeech from '../TextToSpeech/TextToSpeech';
import './ButtonPage.css';

const Holidays = ({ inputValue, setInputValue }) => {

  // Array of phrases
  const holidays = [
    "Birthday",
    "New Year",
    "Valendtine's Day",
    "St.Patrick's Day",
    "Easter",
    "Fourth of July",
    "Labor Day",
    "Halloween",
    "Thanksgiving",
    "Christmas"
  ];

  // Function to append phrases to inputValue
  const handlePhraseClick = (days) => {
    setInputValue(inputValue + " " + days); // Append the clicked phrase to inputValue
  };
  // const handlePhraseClickMonths = (moths) => {
  //   setInputValue(inputValue + " " + days); // Append the clicked phrase to inputValue
  // };

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
        {holidays.map((holidays, index) => (
          <button key={index} className="my-button" onClick={() => handlePhraseClick(holidays)}>
            {holidays}
          </button>
        ))}
      </div>
      <TextToSpeech text={inputValue} setInputValue={setInputValue} />
    </div>
  );
};

export default Holidays;
