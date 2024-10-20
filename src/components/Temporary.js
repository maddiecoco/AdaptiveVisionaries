import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Button/MyButton.css'
const Temporary = ({ inputValue, setInputValue }) => {
  const navigate = useNavigate();

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

  const handleNavigateBack = () => {
    navigate('/'); // Navigate back to the home page
  };

  return (
    <div className="container">
      <p>Current input: {inputValue}</p>

      <div className="button-container">
        {/* Dynamically generate buttons for each phrase */}
        {phrases.map((phrase, index) => (
          <button key={index} className="my-button" onClick={() => handlePhraseClick(phrase)}>
            {phrase}
          </button>
        ))}
      </div>

      {/* Button to navigate back to the main page */}
      <button className="my-button" onClick={handleNavigateBack}>
        Back to Main Page
      </button>
    </div>
  );
};

export default Temporary;
