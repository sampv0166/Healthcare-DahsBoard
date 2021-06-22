import React from 'react';
import './LeftBar.css';
import icon1 from '../Images/1.png';
import icon2 from '../Images/2.png';
import icon3 from '../Images/3.png';
import icon4 from '../Images/4.png';
import icon5 from '../Images/5.png';
import icon6 from '../Images/6.png';
import icon7 from '../Images/7.png';
import icon8 from '../Images/8.png';

const LeftBar = () => {
  return (
    <div className="leftbar">
      <div className="icon">
        <img className="icon" src={icon1} alt="" />
        <img className="icon icon2" src={icon2} alt="" />
        <img className="icon" src={icon3} alt="" />
        <img className="icon" src={icon4} alt="" />
        <img className="icon" src={icon5} alt="" />
        <img className="icon" src={icon6} alt="" />
        <img className="icon" src={icon7} alt="" />
        <img className="icon icon8" src={icon8} alt="" />
      </div>
    </div>
  );
};

export default LeftBar;
