import React from "react";

export const ContactForm = ({
  name,
  phone,
  email,
  setFormValue,
  handleSubmit
}) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue((prevState) => {
      return {
        ...prevState,
        [name]: value,
      }
    })
  }

  return (
    <form style={{'max-width': 600}} onSubmit={handleSubmit}>
      <label htmlFor="name">Naam </label>
        <input name="name" type="text" onChange={handleChange} value={name} required/>
        <br/>
       
      <label htmlFor="tel">Tel </label>
        <input name="phone" type="tel" onChange={handleChange} value={phone} pattern="(^\+[0-9]{2}|^\+[0-9]{2}\(0\)|^\(\+[0-9]{2}\)\(0\)|^00[0-9]{2}|^0)([0-9]{9}$|[0-9\-\s]{10}$)" required />
        <br/>
      <label htmlFor="email">Email </label>
        <input name="email" onChange={handleChange} value={email} required/>
        <br/>
      <button type="submit">Submit</button>
    </form>
  );
};
