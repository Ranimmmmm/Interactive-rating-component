// src/FeedbackForm.jsx
import React, { useState } from 'react';
import './Style.css';
import img from '../public/icon-star.svg';

const FeedbackForm = ({ onSubmit }) => {
  const [rating, setRating] = useState(null);

  const handleRating = (value) => {
    setRating(value);
  };

  const handleSubmit = () => {
    if (rating !== null) {
      onSubmit(rating);
    }
  };

  return (
    <div className="feedback-container">
      <div className="feedback-card">
        <div className="feedback-header">
          <div src ={img}className="star">★</div>
        </div>
        <h2>How did we do?</h2>
        <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
        <div className="rating-buttons">
          {[1, 2, 3, 4, 5].map((num) => (
            <button
              key={num}
              className={`rating-button ${rating === num ? 'selected' : ''}`}
              onClick={() => handleRating(num)}
            >
              {num}
            </button>
          ))}
        </div>
        <button className="submit-button" onClick={handleSubmit}>
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default FeedbackForm;
