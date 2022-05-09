import React, {useState} from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({
  appointments,
  addAppointment,
  contacts
}) => {

 const [appFormValue, setAppFormValue] = useState({
   title: '',
   date: '',
   time: ''
 });

 const [contact, setContact] = useState('');

 const { title, date, time} = appFormValue;

  const handleSubmit = (e) => {
    e.preventDefault();

   addAppointment({
     title: title,
     contact: contact,
     date: date,
     time: time
   })

   setAppFormValue({
    title: '',
    date: '',
    time: ''
   })
   
   setContact('');

  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm 
          title={title}
          contact={contact}
          date={date}
          time={time}
          setAppFormValue={setAppFormValue}
          setContact={setContact}
          handleSubmit={handleSubmit}
          contacts={contacts}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList input={appointments}/>
      </section>
    </div>
  );
};
