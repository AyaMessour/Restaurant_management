import React from 'react';

const Dashboard = ({ message }) => {
    return (
        <div>
            <h1>{message}</h1>
            <p>Manage reservations and other admin features here.</p>
            {/* You can display more data here, like reservations */}
        </div>
    );
};

export default Dashboard;
