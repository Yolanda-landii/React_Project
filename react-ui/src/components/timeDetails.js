import React from 'react';
import './timeDetails.css';

const TimeDetails = () => {
  return (
    <div className="time-details">
      <div className="time-item">
        <p>Total time worked</p>
        <h3>6 hr 18 min</h3>
      </div>
      <div className="time-item">
        <p>Percent of work day</p>
        <h3>79% of 8 hr 0 min</h3>
      </div>
    </div>
  );
};

export default TimeDetails;
