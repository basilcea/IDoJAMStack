import React from 'react';
import contactStyles from '../components/contact.module.css'

export default () => {
    return (
        <div className={contactStyles.container}>
            <h2 className={contactStyles.heading}>Contact Me</h2>
            <form className={contactStyles.form}>
            <input type='text' placeholder="Name" required/>
            <input type='email' placeholder="Email" required />
            <input type='text' placeholder="Subject" required/>
            <textarea placeholder='Type your message here...'></textarea>
            <input type='submit' value='Submit' />
            <p className={contactStyles.paragraph}>Thanks for submitting</p>
            </form>
            <div>
            <p className={contactStyles.footer}>&copy; 2019 by basilcea</p>
            </div>
        </div>
    )
}