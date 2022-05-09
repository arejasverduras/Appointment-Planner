import React from "react";
import { ContactPicker } from '../contactPicker/ContactPicker';

export const AppointmentForm = ({
  contacts,
  title,
  contact,
  date,
  time,
  setAppFormValue,
  setContact,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAppFormValue((prevState) => {
      return {
        ...prevState,
        [name]: value,
      }
    })
  }



  return (
    <form onSubmit={handleSubmit}>
      <input name="title" type="text" value={title} onChange={handleChange} required />
      <input name="date" type="date" min={getTodayString()} value={date} onChange={handleChange} required />
      <input name="time" type="time" value={time} onChange={handleChange} required />
      <ContactPicker contacts={contacts} setContact={setContact} />
      <button type="submit">Submit</button>
    </form>
  );
};
