import React, { useState, useEffect } from "react";

import { TileList } from "../../components/tileList/TileList";
import {ContactForm} from "../../components/contactForm/ContactForm";

export const ContactsPage = (props) => {
  // Define state variables for contact info

const [formValue, setFormValue] = useState({
  name: '',
  phone: '',
  email: '',
})

const { name, phone, email } = formValue;

//  const [name, setName] = useState('');
//  const [phone, setPhone] = useState('');
//  const [email, setEmail] = useState('');
 const [duplicate, setDuplicate] = useState(false);
   //  duplicate check

   useEffect(()=>{
    if (props.contacts.filter(contact => contact.name === name).length > 0) {
      /* conctacs contains the element we're looking for */
      console.log('duplicate gevonden!')
      setDuplicate(true)
      console.log('duplicate: ' + duplicate)
      
    } else { 
      setDuplicate(false)
      console.log('duplicate niet gevonden');
      console.log('duplicate: ' + duplicate)
    }
   },[name, duplicate, props.contacts])

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
   if (duplicate){
    window.alert('Naam bestaat. Kies een andere naam')
    return; 
   }

   const newContact = {
     name: name,
     phone: phone,
     email: email
   }
   //add contact info and clear data
   props.addContact(newContact);
    setFormValue({
      name: '',
      phone: '',
      email: '',
    })

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
        setFormValue={setFormValue}
        handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList input={props.contacts}/>
      </section>
    </div>
  );
};
