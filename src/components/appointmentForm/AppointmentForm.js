import React from "react";
import { ContactPicker } from '../contactPicker/ContactPicker';

export const AppointmentForm = ({
  contacts,
  title,
  contact,
  date,
  time,
  setAppFormValue,
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
      <input name="title" type="text" value={title} onChange={handleChange} />
      <input name="date" type="date" min={getTodayString()} value={date} onChange={handleChange} />
      <input name="time" type="time" value={time} onChange={handleChange} />
      <ContactPicker contacs={contacts} />
      <button type="submit">Submit</button>
    </form>
  );
};
