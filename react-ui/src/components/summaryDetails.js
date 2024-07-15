import React from 'react';
import './summaryDetails.css';

const SummaryDetails = () => {
  return (
    <div className="summary-card">
    <h2>Daily Summary</h2>
    <p><span className="highlight">⚡ Today you had <b>20%</b> more meetings than usual, you closed <b>2 tasks</b> on two projects, but the focus was <b>12%</b> lower than yesterday.</span></p>
    <div className="time-details">
      <div>
        <h3>Total time worked</h3>
        <p>6 hr 18 min</p>
      </div>
      <div>
        <h3>Percent of work day</h3>
        <p>79% of 8 hr 0 min</p>
      </div>
    </div>
    <div className="focus-details">
      <div className="focus-item">
        <div className="circle focus"></div>
        <p>Focus</p>
        <p>62%</p>
      </div>
      <div className="focus-item">
        <div className="circle meetings"></div>
        <p>Meetings</p>
        <p>15%</p>
      </div>
      <div className="focus-item">
        <div className="circle breaks"></div>
        <p>Breaks</p>
        <p>11%</p>
      </div>
      <div className="focus-item">
        <div className="circle other"></div>
        <p>Other</p>
        <p>12%</p>
      </div>
    </div>
    <div className="top-categories">
      <h3>Top categories</h3>
      <div className="category-item">
        <div className="bar design"></div>
        <p>Design</p>
        <p>59% (3 hr 44 min)</p>
      </div>
      <div className="category-item">
        <div className="bar video"></div>
        <p>Video Conference</p>
        <p>12% (45 min)</p>
      </div>
      <div className="category-item">
        <div className="bar messaging"></div>
        <p>Work Messaging</p>
        <p>10% (37 min)</p>
      </div>
    </div>
  </div>
  );
};

export default SummaryDetails;
