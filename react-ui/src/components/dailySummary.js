import React from 'react';
import SummaryDetails from './summaryDetails';
import SummaryChart from './summaryChart';
import Footer from './footer';
import './dailySummary.css';

const DailySummary = () => {
  return (
    <div className="daily-summary">
      <SummaryDetails/>
      <SummaryChart />
      {/* <Footer /> */}
    </div>
    
    
  );
};

export default DailySummary;
