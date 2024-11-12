// BottomNav.js
import React from 'react';
import { Link } from 'react-router-dom';
import './TopBar.css';

function TopBar() {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/staffnames">Staff Names</Link>
      <Link to="/daymonths">Days/Months</Link>
      <Link to="/temporary">Temporary</Link>
    </div>
  );
}

export default TopBar;
