import React from 'react';
import contactStyles from '../components/contact.module.css'

export default () => {
    return (
        <div className={contactStyles.container} id={'contact'}>
            <h2 className={contactStyles.heading}>Contact Me</h2>
            <form className={contactStyles.form}>
            <p className={contactStyles.p}>I would love to hear from you...</p>
            <input type='text' placeholder="Name" required/>
            <input type='email' placeholder="Email" required />
            <input type='text' placeholder="Subject" required/>
            <textarea placeholder='Type your message here...'></textarea>
            <input type='submit' value='Submit' />
            </form>
        </div>
    )
}