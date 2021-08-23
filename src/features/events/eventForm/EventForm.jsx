import cuid from "cuid";
import React, { useState } from "react";
import { Button, Form, Header, Segment } from "semantic-ui-react";

export default function EventForm({
  setFormOpen,
  setEvents,
  createEvent,
  selectedEvent,
  updateEvent,
}) {
  const initialValues = selectedEvent ?? {
    title: "",
    category: "",
    description: "",
    city: "",
    venue: "",
    date: "",
    id: "",
  };
  const [values, setValues] = useState(initialValues);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  function handleOnSubmit() {

    console.log(selectedEvent)
    selectedEvent
      ? updateEvent({...selectedEvent, ...values})
      : createEvent({
          ...values,
          id: cuid(),
          hostedBy: "Bob",
          attendees: [],
          hostPhotoURL: "assets/user.png",
        });
    setFormOpen(false);
  }

  return (
    <Segment clearing>
      <Header
        content={selectedEvent ? "Editing an event" : "Create new event"}
      />
      <Form onSubmit={handleOnSubmit}>
        <Form.Field>
          <input
            type='text'
            placeholder='Event title'
            name='title'
            value={values.title}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            placeholder='Category'
            name='category'
            value={values.category}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            placeholder='Description'
            name='description'
            value={values.description}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            placeholder='City'
            name='city'
            value={values.city}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            placeholder='Venue'
            name='venue'
            value={values.venue}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='date'
            placeholder='Date'
            name='date'
            value={values.date}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Button type='submit' floated='left' positive content='Submit' />
        <Button
          onClick={() => setFormOpen(false)}
          floated='right'
          content='Cancel'
        />
      </Form>
    </Segment>
  );
}
