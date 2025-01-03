import React from 'react';
import TextToSpeech from '../TextToSpeech/TextToSpeech';
import './ButtonPage.css';
import YesAndNo from '../YesAndNo/YesAndNo';

const DaysMonths = ({ inputValue, setInputValue }) => {

  // Array of phrases
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  // ];
  // const months = [
    "January",
    "Febuary",
    "March", 
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
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
        {days.map((days, index) => (
          <button key={index} className="my-button" onClick={() => handlePhraseClick(days)}>
            {days}
          </button>
        ))}
      </div>
      <YesAndNo/>
      <TextToSpeech text={inputValue} setInputValue={setInputValue} />
    </div>
  );
};

export default DaysMonths;
