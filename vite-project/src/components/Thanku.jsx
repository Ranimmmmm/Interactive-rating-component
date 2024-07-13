// src/ThankYou.jsx
import React from 'react';
import ill from '../assets/illustration-thank-you.svg'
import Thanku from '../ThankYou.css';

const ThankYou = ({ rating }) => {
  return (
    <div className="thank-you-container">
      <div className="thank-you-card">
        <div className="thank-you-header">
          <img src={ill} alt="Thank You" />
        </div>
        <h2>Thank you!</h2>
        <p>You selected {rating} out of 5</p>
        <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
      </div>
    </div>
  );
};

export default ThankYou;
