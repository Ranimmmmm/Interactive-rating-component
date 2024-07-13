// src/App.jsx
import React, { useState } from 'react';
import FeedbackForm from './components/FeedbackForm';
import ThankYou from './components/Thanku';
import './App.css';

const App = () => {
  const [submitted, setSubmitted] = useState(false);
  const [rating, setRating] = useState(null);

  const handleFormSubmit = (rating) => {
    setRating(rating);
    setSubmitted(true);
  };

  return (
    <div className="app-container">
      {submitted ? (
        <ThankYou rating={rating} />
      ) : (
        <FeedbackForm onSubmit={handleFormSubmit} />
      )}
    </div>
  );
};

export default App;

  



