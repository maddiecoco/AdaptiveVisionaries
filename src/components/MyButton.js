import React from 'react';

function MyButton({ inputValue, setInputValue }) {
  const handleButtonClick = (char) => {
    setInputValue((prev) => prev + char); // Append the clicked letter to the input value
  };

  // Create an array of letters A-Z
  const alphabet = Array.from({ length: 26 }, (_, index) => String.fromCharCode(65 + index));

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        readOnly // Prevent user from typing manually
        placeholder="Type here..."
      />
      <div className="button-container">
        {alphabet.map((char, index) => (
          <button
            key={index}
            className="my-button"
            onClick={() => handleButtonClick(char)}
          >
            {char}
          </button>
        ))}
      </div>
    </div>
  );
}

export default MyButton;
