import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import { sampleData } from "../../../app/api/sampleDate";
import EventList from "./EventList";

export default function EventDashboard() {
  const [events, setEvents] = useState(sampleData);
  // function handleCreateEvent(event) {
  //   setEvents([...events, event]);
  // }

  // function handleUpdateEvent(updateEvent){
  //   setEvents(events.map(evt => evt.id === updateEvent.id ? updateEvent : evt));
  //   selectEvent(null);
  // }

  function handleDeleteEvent(eventID){
    setEvents(events.filter(evt => evt.id !== eventID))
  }
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList events={events} deleteEvent = {handleDeleteEvent}/>
      </Grid.Column>
      <Grid.Column width={6}>
        <h2>Event Filters</h2>
      </Grid.Column>
    </Grid>
  );
}
