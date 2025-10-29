import React from "react";

function Dashboard() {
  return (
    <main>
      <h2>Welcome, Treasure 👋</h2>
      <p>Here’s a quick summary of your tickets:</p>

      <div className="stats-grid">
        <div className="stat-card open">
          <h3>Open Tickets</h3>
          <p className="stat-number">5</p>
        </div>
        <div className="stat-card in-progress">
          <h3>In Progress</h3>
          <p className="stat-number">2</p>
        </div>
        <div className="stat-card closed">
          <h3>Closed Tickets</h3>
          <p className="stat-number">3</p>
        </div>
      </div>

      <button className="btn-primary">Go to Ticket Management</button>
      <button className="btn-secondary" onClick={() => alert("Logged out!")}>
        Logout
      </button>
    </main>
  );
}

export default Dashboard;
