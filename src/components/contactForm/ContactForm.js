import React, { useState } from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  const handleNameChange = (e) =>{
    const newName = e.target.value;
    console.log(e.target);
    setName(newName)
  }

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
    
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    // if (inputName === "name") {
    //   setName(inputValue);
    // } else if (inputName === "tel") {
    //   setPhone(inputValue);
    // } else if (label === "email") {
    //   setEmail(inputValue);
    // }
  }



  return (
    <form onSubmit={handleSubmit}>
      <label htmlfor="name">Naam</label>
        <input name="name" type="text" onChange={handleNameChange} value={name} required/>
      <label htmlfor="tel">Tel</label>
        <input name="tel" type="tel" onChange={handlePhoneChange} value={phone} pattern="(^\+[0-9]{2}|^\+[0-9]{2}\(0\)|^\(\+[0-9]{2}\)\(0\)|^00[0-9]{2}|^0)([0-9]{9}$|[0-9\-\s]{10}$)" required />
      <label htmlfor="email">Email</label>
        <input name="email" onChange={handleEmailChange} value={email} required/>
      <button type="submit">Submit</button>
    </form>
  );
};
