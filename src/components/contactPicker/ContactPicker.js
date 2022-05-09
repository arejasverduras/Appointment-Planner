import React from "react";

export const ContactPicker = ({
  contacts,
  setContact
}) => {
  const selectValues = '';
  //contact = array of object [{},{},{}]
  // from each object, select the value of the first key: 'name'
  //return an <option> jsx element with the objects first value as its value

  //maak eerst een array met alleen de namen met map.
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
