import React from "react";
import { Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import EventDetailedPage from "../../features/events/eventDetailed/EventDetailedPage";
import EventForm from "../../features/events/eventForm/EventForm";
import NavBar from "../../features/events/nav/NavBar";
import HomePage from "../../features/home/homePage";

function App() {
  // const [formOpen, setFormOpen] = useState(false);
  // const [selecetedEvent, setSelectedEvent] = useState(null);
  // function handleSelectEvent(event) {
  //   setSelectedEvent(event);
  //   setFormOpen(true);
  // }
  // function handleCreateFormOpen() {
  //   setSelectedEvent(null);
  //   setFormOpen(true);
  // }
  return (
    <>

      <Route exact path='/' component={HomePage} />
      <Route
        path={"/(.+)"}
        render={() => (
          <>
            <NavBar/>
            <Container className='main'>
              <Route exact path='/events' component={EventDashboard} />
              <Route path='/events/:id' component={EventDetailedPage} />
              <Route path={['/createEvent', 'manage/:id']} component={EventForm} />
            </Container>
          </>
        )}
      />
    </>
  );
}

export default App;
