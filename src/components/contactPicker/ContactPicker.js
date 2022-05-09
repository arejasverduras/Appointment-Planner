import React from "react";

export const ContactPicker = ({
  contacts,
  setContact
}) => {
  

  const contactNamesArray = []
  
  contacts.forEach(contact => {
    const name = contact.name;
    contactNamesArray.push(name)
  })

  const contactOptions = contactNamesArray.map((naam)=> 
    <option value={naam}>{naam}</option>
  )
  
const handleChange = (e) => {
  setContact(e.target.value);
}

  return (

  <select onChange={handleChange} >
    <option value='' selected disabled hidden>Choose contact</option>
    {contactOptions}
  </select>
  );
};
