import React from 'react';
import contacts from '../data/contacts.json';
import ContactItem from './ContactItem.js';
import queryString from 'query-string';

const Contacts = (props) => {  
  const query = queryString.parse(props.location.search);

  const searchContacts = contacts.filter(contact => (
    contact.name.includes(query.name || '')
  ));

  return (
    <article className="Contacts">
      {searchContacts.map((contact, i) => (
        <ContactItem {...contact} key={i} />
      ))}
    </article>
  );
}

export default Contacts;