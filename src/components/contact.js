import React, {useState} from 'react';
import contactStyles from '../components/contact.module.css'

export default (props) => {

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }
  const [contact,setContact]= useState({
    email:'',
    name:'',
    subject:'',
    message:''
  });

 const change = (e) => {
    setContact({ ...contact,[e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));
  
    e.preventDefault();
  };  
    return (
        <div className={contactStyles.container} id={'contact'}> 
            <h2 className={contactStyles.heading}>Contact Me</h2>
            <form className={contactStyles.form} onSubmit={handleSubmit}>
            <p className={contactStyles.p}>I would love to hear from you...</p>
            <input type='text' value={contact.name} name='name' placeholder="Your Name" onChange={change} required/>
            <input type='email' value={contact.email} name='email' placeholder="Your Email" onChange={change} required />
            <input type='text'  value={contact.subject} name='subject' placeholder="Subject" onChange={change} required/>
            <textarea  name='message'  value={contact.message} placeholder='Type your message here...' onChange={change} />
            <input type='submit' value='Submit' />
            </form>
        </div>
    )
}