import React from 'react';
import './circularChart.css';

const CircularChart = ({ percentage, color }) => {
    return (
        <div className="circle" style={{ background: `conic-gradient(${color} 0% ${percentage}%, #dfe6e9 ${percentage}% 100%)` }}>
            <div className="inner-circle-cover">
                <span>{percentage}%</span>
            </div>
        </div>
    );
};

export default CircularChart;
