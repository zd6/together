import React, {useState} from 'react'
import { Container } from 'semantic-ui-react';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard'
import NavBar from '../../features/events/nav/NavBar';

function App() {

  const [formOpen, setFormOpen] = useState(false);
  return (
    <>
      <h1>Together</h1>
      <NavBar setFormOpen = {setFormOpen} />
      <Container className='main'>
      <EventDashboard formOpen = {formOpen} setFormOpen = {setFormOpen}/>
      </Container>
    </>
  );
}

export default App;
