import React, { useState } from 'react'
import './Dashboard.css'
import LiveScoring from './LiveScoring/LiveScoring'
import Match from './Match/Match'

const Dashboard = () => {

    const [activeTab, setActiveTab] = useState("Live Score");
    const [showComponent, setShowComponent] = useState(<LiveScoring />);

    const componentMap = {
        "Live Score": <LiveScoring />,
        "Match Management": <Match />,
        "Teams Management": <LiveScoring />,
        "Players Management": <LiveScoring />,
        "Reports And Analytics": <LiveScoring />,
    };

    const toggleFunction = (value) => {
        setActiveTab(value);
        setShowComponent(componentMap[value] || <LiveScoring />);
    };

return (
    <div>
        <div className='dashboard-navbar'>
            <h1>Cricket Score Management System | Admin Panel</h1>
            <button>Admin</button>
        </div>
        <div className='dashboard-management'>
            <div className='dashboard-management-menu'>
                {Object.keys(componentMap).map((item) => (
                    <h3
                        key={item}
                        className={activeTab === item ? "active" : ""}
                        onClick={() => toggleFunction(item)}
                    >
                        {item}
                    </h3>
                ))}
            </div>
            <div>
                {showComponent}
            </div>
        </div>
    </div>
)
}

export default Dashboard