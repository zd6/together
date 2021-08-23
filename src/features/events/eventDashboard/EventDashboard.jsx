import { createEvent } from "@testing-library/react";
import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import { sampleData } from "../../../app/api/sampleDate";
import EventForm from "../eventForm/EventForm";
import EventList from "./EventList";

export default function EventDashboard({
  formOpen,
  setFormOpen,
  selectEvent,
  selectedEvent,
}) {
  const [events, setEvents] = useState(sampleData);
  function handleCreateEvent(event) {
    setEvents([...events, event]);
  }

  function handleUpdateEvent(updateEvent){
    setEvents(events.map(evt => evt.id === updateEvent.id ? updateEvent : evt));
    selectEvent(null);
  }

  function handleDeleteEvent(eventID){
    setEvents(events.filter(evt => evt.id !== eventID))
  }
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList events={events} selectEvent={selectEvent} deleteEvent = {handleDeleteEvent}/>
      </Grid.Column>
      <Grid.Column width={6}>
        {formOpen && (
          <EventForm
            setFormOpen={setFormOpen}
            setEvents={setEvents}
            createEvent={handleCreateEvent}
            selectedEvent={selectedEvent}
            updateEvent = {handleUpdateEvent}
            key={selectedEvent ? selectedEvent.id : null} // this id is for re
          />
        )}
      </Grid.Column>
    </Grid>
  );
}
