// BottomNav.js
import React from 'react';
import { Link } from 'react-router-dom';
import './BottomBar.css';

function BottomBar() {
  return (
    <div className="navbar">
      <Link to="/" className="active">Home</Link>
      <Link to="/staffnames">Staff Names</Link>
      <Link to="/daymonths">Days/Months</Link>
      <Link to="/temporary">Temporary</Link>
    </div>
  );
}

export default BottomBar;
