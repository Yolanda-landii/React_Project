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
        <h3>Percent of work day</h3>
      </div>
      <div>
        <p>6 hr 18 min</p>
        <p>79% of 8 hr 0 min <span className="pie-chart"></span></p>
      </div>
    </div>
    <div className="focus-details">
            <div className="focus-item">
                <div className="percentage" data-percent="62">
                    <div className="inner-circle-cover">
                        <span>62%</span>
                    </div>
                </div>
                <div className="percentage" data-percent="15">
                    <div className="inner-circle-cover">
                        <span>15%</span>
                    </div>
                </div>
                <div className="percentage" data-percent="11">
                    <div className="inner-circle-cover">
                        <span>11%</span>
                    </div>
                </div>
                <div className="percentage" data-percent="12">
                    <div className="inner-circle-cover">
                        <span>12%</span>
                    </div>
                </div>
            </div>
            <div className="details">
                <p>Focus</p>
                <p>Meetings</p>
                <p>Breaks</p>
                <p>Other</p>
            </div>
        </div>
    <div className="top-categories">
      <h3>Top categories</h3>
      <div className="category-item">
        <p>59% </p>
        <p>Design</p>
        <div className="bar design"></div>
        <p>3 hr 44 min</p>
      </div>
      <div className="category-item">
        <p>12% </p>
        <p>Video Conference</p>
        <div className="bar video"></div>
        <p>45 min</p>
      </div>
      <div className="category-item">
        <p>10% </p>
        <p>Work Messaging</p>
        <div className="bar messaging"></div>
        <p>37 min</p>
      </div>
    </div>
    
    
  </div>
  );
};

export default SummaryDetails;
