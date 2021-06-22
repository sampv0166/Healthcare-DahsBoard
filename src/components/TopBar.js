import React from 'react';
import './TopBar.css';
import icon9 from '../Images/9.png';
import AppoinmentButton from './AppoinmentButton';

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="topbar_icon">
        <img src={icon9} alt="" />
      </div>
      <AppoinmentButton />
    </div>
  );
};

export default TopBar;
