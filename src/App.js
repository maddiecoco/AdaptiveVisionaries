import './App.css';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import MyButton from './components/Button/MyButton';
import TextToSpeech from './components/TextToSpeech';
import Temporary from './components/Temporary';

function App() {
  const [inputValue, setInputValue] = useState('');

  return (
    <Routes>
      <Route 
        path="/" 
        element={
          <>
            <MyButton inputValue={inputValue} setInputValue={setInputValue} />
            <TextToSpeech text={inputValue} />
          </>
        } 
      />
      <Route 
        path="/temporary" 
        element={<Temporary inputValue={inputValue} setInputValue={setInputValue} />} 
      />
    </Routes>
  );
}

export default App;

// import './App.css';
// import React, { useState } from 'react';
// // import { createRoot } from "react-dom/client";

// // import BlogPost from "./BlogPost";

// // const rootElement = document.getElementById("root");
// // const root = createRoot(rootElement);

// function MyButton() {
//   const [inputValue, setInputValue] = useState('');

//   const handleButtonClick = (char) => {
//     setInputValue((prev) => prev + char); // Append the clicked letter to the input value
//   };

//   // Create an array of letters A-Z
//   const alphabet = Array.from({ length: 26 }, (_, index) => String.fromCharCode(65 + index));

//   return (
//     <div>
//       <input
//         type="text"
//         value={inputValue}
//         readOnly // Prevent user from typing manually
//         placeholder="Type here..."
//       />
//       <div className="button-container">
//         {alphabet.map((char, index) => (
//           <button
//             key={index}
//             className="my-button"
//             onClick={() => handleButtonClick(char)}
//           >
//             {char}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       <h1>Welcome to my app</h1>
//       <MyButton />
//     </div>
//   );
// }

// export default App;
