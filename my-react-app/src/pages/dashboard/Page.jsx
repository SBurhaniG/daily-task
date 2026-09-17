import React, { useState, useEffect} from 'react'

function Dashboard() {

  const [stats, setStats] = useState([]);

    useEffect(()=> {
      fetch('http://localhost:5000/api/stats')
        .then(response => response.json())
        .then(data => setStats(data))
        .catch(error => console.log('Error fetching data: ', error));
    }, []);

    
  return (
    <div className="dashboard-container">
      <h2>Dashboard Overview</h2>
      
      <div className="dashboard-grid">
        {stats.map(stat => (
          <div key={stat.id} className="stat-card">
            <h3>{stat.label}</h3>
            <p>{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
