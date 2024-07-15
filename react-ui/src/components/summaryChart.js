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
                    <div className="stats-info">
                        <p>12 Sep, Tue</p>
                        <div className="details">
                            <p>92%</p>
                            <p>7 hr 22 min</p>
                        </div>
                    </div>
                    <div className="circular-charts">
                        <div className="circle" data-percent="62">
                            <div className="inner-circle-cover">
                                <span></span>
                            </div>
                        </div>
                        <div className="circle" data-percent="15">
                            <div className="inner-circle-cover">
                                <span></span>
                            </div>
                        </div>
                        <div className="circle" data-percent="23">
                            <div className="inner-circle-cover">
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="stats-item">
                    <div className="stats-info">
                        <p>13 Sep, Wed</p>
                        <div className="details">
                            <p>104%</p>
                            <p>8 hr 19 min</p>
                        </div>
                    </div>
                    <div className="circular-charts">
                        <div className="circle" data-percent="45">
                            <div className="inner-circle-cover">
                                <span></span>
                            </div>
                        </div>
                        <div className="circle" data-percent="35">
                            <div className="inner-circle-cover">
                                <span></span>
                            </div>
                        </div>
                        <div className="circle" data-percent="24">
                            <div className="inner-circle-cover">
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="stats-item">
                    <div className="stats-info">
                        <p>14 Sep, Thu</p>
                        <div className="details">
                            <p>95%</p>
                            <p>7 hr 36 min</p>
                        </div>
                    </div>
                    <div className="circular-charts">
                        <div className="circle" data-percent="33">
                            <div className="inner-circle-cover">
                                <span></span>
                            </div>
                        </div>
                        <div className="circle" data-percent="22">
                            <div className="inner-circle-cover">
                                <span></span>
                            </div>
                        </div>
                        <div className="circle" data-percent="40">
                            <div className="inner-circle-cover">
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="stats-item">
                    <div className="stats-info">
                        <p>15 Sep, Fri</p>
                        <div className="details">
                            <p>82%</p>
                            <p>6 hr 36 min</p>
                        </div>
                    </div>
                    <div className="circular-charts">
                        <div className="circle" data-percent="28">
                            <div className="inner-circle-cover">
                                <span></span>
                            </div>
                        </div>
                        <div className="circle" data-percent="22">
                            <div className="inner-circle-cover">
                                <span></span>
                            </div>
                        </div>
                        <div className="circle" data-percent="32">
                            <div className="inner-circle-cover">
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  };
  
  export default SummaryChart;
  