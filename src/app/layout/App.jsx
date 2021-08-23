import React, { useState } from "react";
import { Container } from "semantic-ui-react";
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import NavBar from "../../features/events/nav/NavBar";

function App() {
  const [formOpen, setFormOpen] = useState(false);
  const [selecetedEvent, setSelectedEvent] = useState(null);
  function handleSelectEvent(event) {
    setSelectedEvent(event);
    setFormOpen(true);
  }
  function handleCreateFormOpen() {
    setSelectedEvent(null);
    setFormOpen(true);
  }
  return (
    <>
      <h1>Together</h1>
      <NavBar setFormOpen={handleCreateFormOpen} />
      <Container className='main'>
        <EventDashboard
          formOpen={formOpen}
          setFormOpen={setFormOpen}
          selectEvent={handleSelectEvent}
          selectedEvent={selecetedEvent}
        />
      </Container>
    </>
  );
}

export default App;
