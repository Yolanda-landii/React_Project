import React from 'react';
import './summaryChart.css';

const SummaryChart = () => {
    return (
        <div className="stats-bar">
        <div className="tab">
          <button className="active">Day</button>
          <button>Week</button>
          <button>Month</button>
          <div className="filter-icon">🔍</div>
        </div>
        <div className="stats-details">
          <div className="stats-item">
            <p>12 Sep, Tue</p>
            <div className="stats-percentage">92% 7 hr 22 min</div>
          </div>
          <div className="stats-item">
            <p>13 Sep, Wed</p>
            <div className="stats-percentage active">104% 8 hr 19 min</div>
          </div>
          <div className="stats-item">
            <p>14 Sep, Thu</p>
            <div className="stats-percentage">95% 7 hr 36 min</div>
          </div>
          <div className="stats-item">
            <p>15 Sep, Fri</p>
            <div className="stats-percentage">82% 6 hr 36 min</div>
          </div>
        </div>
        
      </div>
      
      
    );
  };
  
  export default SummaryChart;
  