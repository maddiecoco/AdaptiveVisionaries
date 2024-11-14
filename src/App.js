import './App.css';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeButtons from './components/HomePage/HomeButtons';
import TextToSpeech from './components/TextToSpeech/TextToSpeech';
import Temporary from './components/ButtonPages/Temporary';
import TopBar from './components/NavBar/TopBar';
import StaffNames from './components/ButtonPages/StaffNames';
import DayMonths from './components/ButtonPages/DayMonths';

function App() {
  const [inputValue, setInputValue] = useState('');

  return (
    <>
      <TopBar />
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <HomeButtons inputValue={inputValue} setInputValue={setInputValue} />
              <TextToSpeech text={inputValue} />
            </>
          } 
        />
        <Route 
          path="/staffnames" 
          element={
            <>
              <StaffNames inputValue={inputValue} setInputValue={setInputValue} />
              <TextToSpeech text={inputValue} />
            </>
          } 
        />
        <Route 
          path="/daymonths" 
          element={
            <>
              <DayMonths inputValue={inputValue} setInputValue={setInputValue} />
              <TextToSpeech text={inputValue} />
            </>
          } 
        />
        <Route 
          path="/temporary" 
          element={
            <>
              <Temporary inputValue={inputValue} setInputValue={setInputValue} />
              <TextToSpeech text={inputValue} />
            </>
          } 
        />
      </Routes>    </>
  );
}

export default App;

