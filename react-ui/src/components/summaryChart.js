import React, { useState } from 'react';
import './summaryChart.css';
import CircularChart from './circularChart'; // Ensure this component is implemented correctly

const SummaryChart = () => {
    const [activeTab, setActiveTab] = useState('Day');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const data = {
        Day: [
            { date: '12 Sep, Tue', percentage: 92, time: '7 hr 22 min', focus: 62, meetings: 15, breaks: 23 },
            { date: '13 Sep, Wed', percentage: 104, time: '8 hr 19 min', focus: 45, meetings: 35, breaks: 24 },
            { date: '14 Sep, Thu', percentage: 95, time: '7 hr 36 min', focus: 33, meetings: 22, breaks: 40 },
            { date: '15 Sep, Fri', percentage: 82, time: '6 hr 36 min', focus: 28, meetings: 22, breaks: 32 }
        ],
        Week: [
            // Add weekly data here
        ],
        Month: [
            // Add monthly data here
        ]
    };

    return (
        <div className="summary-container">
            <div className="daily-summary">
                <div className="summary-header">
                    <span className="icon"></span>
                    <h1>Daily Summary</h1> 
                    <p>⚡Today you had <span className="highlight">20%</span> more meetings than usual, you closed <span className="highlight">2 tasks</span> on two projects, but the focus was <span className="highlight">12%</span> lower than yesterday.</p>
                </div>
                <div className="stats-overview">
                        <div className="overview-item">
                            <p>Total time worked</p>
                            <h2>6 hr 18 min</h2>
                        </div>
                        <div className="overview-item">
                            <p>Percent of work day</p>
                            <h2>79% of 8 hr 0 min</h2>
                        </div>
                    </div>
                
                <div className="summary-stats">
                    
                    
                    <div className="stats-breakdown">
                        <div className="stats-item">
                            <CircularChart percentage={62} color="#6c5ce7" />
                            <div className="stats-label">
                                {/* <div className="circle focus"></div> */}
                                <p>Focus</p>
                            </div>
                        </div>
                        <div className="stats-item">
                            <CircularChart percentage={15} color="#00b894" />
                            <div className="stats-label">
                                {/* <div className="circle meetings"></div> */}
                                <p>Meetings</p>
                            </div>
                        </div>
                        <div className="stats-item">
                            <CircularChart percentage={11} color="#fd79a8" />
                            <div className="stats-label">
                                {/* <div className="circle breaks"></div> */}
                                <p>Breaks</p>
                            </div>
                        </div>
                        <div className="stats-item">
                            <CircularChart percentage={12} color="#dfe6e9" />
                            <div className="stats-label">
                                {/* <div className="circle other"></div> */}
                                <p>Other</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="top-categories">
                    <h3>Top categories</h3>
                    <div className="top-category">
                        <p>50%  Design</p>
                        <div className="progress-bar">
                            <div className="progress" style={{ width: '59%' }}></div>
                        </div>
                        <p>3 hr 44 min</p>
                    </div>
                    <div className="top-category">
                        <p>12%  Video Conference</p>
                        <div className="progress-bar">
                            <div className="progress" style={{ width: '12%' }}></div>
                        </div>
                        <p>45 min</p>
                    </div>
                    <div className="top-category">
                        <p>10%  Work Messaging</p>
                        <div className="progress-bar">
                            <div className="progress" style={{ width: '10%' }}></div>
                        </div>
                        <p>37 min</p>
                    </div>
                </div>
            </div>
            <div className="stats-bar">
                <div className="tab">
                    <button className={activeTab === 'Day' ? 'active' : ''} onClick={() => handleTabClick('Day')}>Day</button>
                    <button className={activeTab === 'Week' ? 'active' : ''} onClick={() => handleTabClick('Week')}>Week</button>
                    <button className={activeTab === 'Month' ? 'active' : ''} onClick={() => handleTabClick('Month')}>Month</button>
                    <div className="calendar-icon">📅</div>
                </div>
                <div className="stats-details">
                    {data[activeTab].map((item, index) => (
                        <div className="stats-item" key={index}>
                            <div className="stats-info">
                                <p>{item.date}</p>
                                <div className="details">
                                    {/* <p>{item.percentage}%</p> */}
                                    <p>{item.time}</p>
                                </div>
                            </div>
                            <div className="circular-charts">
                                <CircularChart percentage={item.focus} color="#6c5ce7" />
                                <CircularChart percentage={item.meetings} color="#00b894" />
                                <CircularChart percentage={item.breaks} color="#fd79a8" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
        
    );
};

export default SummaryChart;
