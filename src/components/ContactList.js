import React from 'react';
import ContactCard from './ContactCard';
import { Link } from 'react-router-dom'

const  ContactList  = (props) => {
    console.log(props);
    const deleteContactHandler=(id)=> {
        props.getContactId(id);
    }
    const contacts =[{
id:"1",
"name": "Chaitanya",
"email":"royveeerbhardwaj@gmail.com"
    },]
    const rendercontactlist=props.contacts.map((contact)=>{
return(
    <ContactCard contact={contact} clickHandler ={deleteContactHandler} key={contact.id} />
    
)
    })
return(
    <div class="main">
        <h2>Contact List</h2>
      <Link to="/add">
      <button className="ui button blue right">Add contact</button>
      </Link>
   
    <div className="ui celled list">{rendercontactlist}</div>
    </div>
)
}
export default ContactList;