import './App.css';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import MyButton from './components/Button/MyButton';
import TextToSpeech from './components/TextToSpeech';
import Temporary from './components/Temporary';
import BottomNav from './components/NavBar/BottomBar';
import StaffNames from './components/StaffNames';
import DayMonths from './components/DayMonths';

function App() {
  const [inputValue, setInputValue] = useState('');

  return (
    <>
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
          path="/staffnames" 
          element={<StaffNames inputValue={inputValue} setInputValue={setInputValue} />} 
        />
        <Route 
          path="/daymonths" 
          element={<DayMonths inputValue={inputValue} setInputValue={setInputValue} />} 
        />
        <Route 
          path="/temporary" 
          element={<Temporary inputValue={inputValue} setInputValue={setInputValue} />} 
        />
      </Routes>
      <BottomNav />
    </>
  );
}

export default App;

