import './App.css';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeButtons from './components/HomePage/HomeButtons';
import TextToSpeech from './components/TextToSpeech/TextToSpeech';
import CommonPhrases from './components/ButtonPages/CommonPhrases';
import CommonWords from './components/ButtonPages/CommonWords';
import TopBar from './components/NavBar/TopBar';
import StaffNames from './components/ButtonPages/StaffNames';
import DayMonths from './components/ButtonPages/DayMonths';
import InformationPage from './components/InformationPage/InformationPage';

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
          path="/StaffNames" 
          element={
            <>
              <StaffNames inputValue={inputValue} setInputValue={setInputValue} />
              <TextToSpeech text={inputValue} />
            </>
          } 
        />
        <Route 
          path="/DayMonths" 
          element={
            <>
              <DayMonths inputValue={inputValue} setInputValue={setInputValue} />
              <TextToSpeech text={inputValue} />
            </>
          } 
        />
        <Route 
          path="/CommonWords" 
          element={
            <>
              <CommonWords inputValue={inputValue} setInputValue={setInputValue} />
              <TextToSpeech text={inputValue} />
            </>
          } 
        />
        <Route 
          path="/CommonPhrases" 
          element={
            <>
              <CommonPhrases inputValue={inputValue} setInputValue={setInputValue} />
              <TextToSpeech text={inputValue} />
            </>
          } 
        />
        <Route 
          path="/Information" 
          element={
            <>
              <InformationPage inputValue={inputValue} setInputValue={setInputValue} />
            </>
          } 
        />
      </Routes>    </>
  );
}

export default App;

