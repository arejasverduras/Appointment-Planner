import React, {useState} from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";


import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
 const [contacts, setContacts] = useState([{
   name: 'Michiel'
 }]);
 const [appointments, setAppointments] = useState([]);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */
//  add contact
 const addContact = (newContact) => {
   const contact = {
     name: newContact.name,
     phone: newContact.phone,
     email: newContact.email
   }

   setContacts((prev)=>{
     const newContactsArray = [...prev, contact];
     return newContactsArray;
   })
 }

// add appointment
const addAppointment = (newAppointment) => {
  const appointment = {
    title: newAppointment.title,
    contact: newAppointment.contact,
    date: newAppointment.date,
    time: newAppointment.time
  }

  setAppointments((prev)=>{
    const newAppointmentsArray = [...prev, appointment];
    return newAppointmentsArray;
  })
}

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
            <ContactsPage 
              contacts={contacts} 
              addContact={addContact}/>
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            <AppointmentsPage 
              appointments={appointments} 
              addAppointment={addAppointment} />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
