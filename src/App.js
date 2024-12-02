import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import "./App.css";
import HomePageS from './ButtonPages/HomePageS';
import DaysMonths from './ButtonPages/DayMonths';
import CommonWords from './ButtonPages/CommonWords';
import CommonPhrases from './ButtonPages/CommonPhrases';
import Names from './ButtonPages/Names';
import InformationPage from './InformationPage/InformationPage';
import Holidays from './ButtonPages/Holidays';

function App() {
  const [inputValue, setInputValue] = useState('');
  
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<HomePageS inputValue={inputValue} setInputValue={setInputValue} />} />
          <Route path="/daysMonths" element={<DaysMonths inputValue={inputValue} setInputValue={setInputValue} />} />
          <Route path="/commonWords" element={<CommonWords inputValue={inputValue} setInputValue={setInputValue} />} />
          <Route path="/commonPhrases" element={<CommonPhrases inputValue={inputValue} setInputValue={setInputValue} />} />
          <Route path="/names" element={<Names inputValue={inputValue} setInputValue={setInputValue} />} />
          <Route path="/holidays" element={<Holidays inputValue={inputValue} setInputValue={setInputValue} />} />
          <Route path="/informationPage" element={<InformationPage />} />
        </Routes>
      </div>
    </Router>
  );
}

function Navbar() {
  const location = useLocation(); // Correct use of useLocation inside the Router context

  return (
    <div className="navbar">
      <Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link>
      <Link to="/daysMonths" className={location.pathname === "/daysMonths" ? "active" : ""}>Days/Months</Link>
      <Link to="/commonWords" className={location.pathname === "/commonWords" ? "active" : ""}>Common Words</Link>
      <Link to="/commonPhrases" className={location.pathname === "/commonPhrases" ? "active" : ""}>Phrases</Link>
      <Link to="/names" className={location.pathname === "/names" ? "active" : ""}>Names</Link>
      <Link to="/holidays" className={location.pathname === "/holidays" ? "active" : ""}>Holidays</Link>
      <Link to="/informationPage" className={location.pathname === "/informationPage" ? "active" : ""}>Information</Link>
    </div>
  );
}

export default App;
