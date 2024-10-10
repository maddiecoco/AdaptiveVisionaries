import React from 'react';
import './MyButton.css'

function MyButton({ inputValue, setInputValue }) {
  const handleButtonClick = (char) => {
    setInputValue((prev) => prev + char); // Append the clicked letter to the input value
  };

  const handleDelete = () => {
    setInputValue((prev) => prev.slice(0, -1)); // Remove the last character from the input value
  };

  // Create an array of numbers, punctuation, and letters
  const numbers = Array.from({ length: 10 }, (_, index) => index.toString());
  const alphabet = Array.from({ length: 26 }, (_, index) => String.fromCharCode(65 + index));
  const punctuation = ['.', '?'];
  
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        readOnly // Prevent user from typing manually
        placeholder="Type here..."
      />
      <div className="button-container">
        {/* Numbers 0-9 */}
        {numbers.map((num) => (
          <button
            key={num}
            className="my-button"
            onClick={() => handleButtonClick(num)}
          >
            {num}
          </button>
        ))}

        {/* Punctuation buttons */}
        {punctuation.map((punct) => (
          <button
            key={punct}
            className="my-button"
            onClick={() => handleButtonClick(punct)}
          >
            {punct}
          </button>
        ))}

        {/* Alphabet A-Z */}
        {alphabet.map((char) => (
          <button
            key={char}
            className="my-button"
            onClick={() => handleButtonClick(char)}
          >
            {char}
          </button>
        ))}
        {/* Wider Space Button */}
        <button className="my-button space-button" onClick={() => handleButtonClick(' ')}>Space</button>
        
        {/* Delete Button */}
        <button className="my-button" onClick={handleDelete}>
          Delete
        </button>

      </div>
    </div>
  );
}

export default MyButton;