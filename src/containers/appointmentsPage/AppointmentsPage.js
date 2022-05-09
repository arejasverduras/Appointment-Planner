import React, {useState} from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({
  appointments,
  addAppointment,
  contacts
}) => {
  /*
  Define state variables for 
  appointment info
  */
 const [appFormValue, setAppFormValue] = useState({
   title: '',
   contact: '',
   date: '',
   time: ''
 });

 const { title, contact, date, time} = appFormValue;

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
   addAppointment({
     title: title,
     contact: contact,
     date: date,
     time: time
   })

   setAppFormValue({
    title: '',
    contact: '',
    date: '',
    time: ''
   })
   
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
          handleSubmit={handleSubmit}
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
