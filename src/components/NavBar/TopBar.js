// BottomNav.js
import React from 'react';
import { Link } from 'react-router-dom';
import './TopBar.css';

function TopBar() {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/StaffNames">Staff Names</Link>
      <Link to="/DayMonths">Days/Months</Link>
      <Link to="/CommonWords">Common Words</Link>
      <Link to="/CommonPhrases">Common Phrases</Link>
      <Link to="/Information">My Information</Link>
    </div>
  );
}

export default TopBar;
