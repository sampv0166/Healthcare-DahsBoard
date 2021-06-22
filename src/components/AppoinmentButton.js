import React from 'react';
import './AppoinmentButton.css';
import AppoinmentText from '../Images/AppoinmentText.png';
import ArrowIcon from '../Images/ArrowIcon.png';

const AppoinmentButton = () => {
  return (
    <div className="appoinment_button">
      <img className="appoinment_button_text" src={AppoinmentText} alt="" />
      <img className="arrow_icon" src={ArrowIcon} alt="" />
    </div>
  );
};

export default AppoinmentButton;
