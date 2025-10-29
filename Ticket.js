import React from "react";

function Tickets() {
  return (
    <main>
      <h2>Manage Tickets</h2>

      <section className="ticket-form">
        <h3>Create a New Ticket</h3>
        <form>
          <label>Title:</label>
          <input type="text" placeholder="Enter ticket title" />

          <label>Description:</label>
          <textarea placeholder="Describe the issue"></textarea>

          <button className="btn-primary">Submit Ticket</button>
        </form>
      </section>

      <section className="ticket-list">
        <h3>Existing Tickets</h3>

        <div className="ticket-card open">
          <h4>Login Issue</h4>
          <p>Status: Open</p>
        </div>

        <div className="ticket-card in-progress">
          <h4>Payment Delay</h4>
          <p>Status: In Progress</p>
        </div>

        <div className="ticket-card closed">
          <h4>UI Bug Fixed</h4>
          <p>Status: Closed</p>
        </div>
      </section>
    </main>
  );
}

export default Tickets;
