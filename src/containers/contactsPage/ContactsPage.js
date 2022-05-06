import React, { useState, useEffect } from "react";

import { TileList } from "../../components/tileList/TileList";
import {ContactForm} from "../../components/contactForm/ContactForm";

export const ContactsPage = (props) => {
  // Define state variables for contact info

 const [name, setName] = useState('Michiel');
 const [phone, setPhone] = useState('');
 const [email, setEmail] = useState('');
 const [duplicate, setDuplicate] = useState(false);


   //  duplicate check

   useEffect(()=>{
    if (props.contacts.filter(contact => contact.name === name).length > 0) {
      /* conctacs contains the element we're looking for */
      console.log('duplicate gevonden!')
      setDuplicate(true)
    } else { 
      console.log('duplicate niet gevonden');
    }
   },[name])

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
   if (duplicate){
    return; 
   }

   const newContact = {
     name: name,
     phone: phone,
     email: email
   }
   //add contact info and clear data
   props.addContact(newContact);
    setName('');
    setPhone('');
    setEmail('');

  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm name={name}
        phone={phone}
        email={email}
        setName={setName}
        setPhone={setPhone}
        setEmail={setEmail}
        handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contacts={props.contacts}/>
      </section>
    </div>
  );
};
