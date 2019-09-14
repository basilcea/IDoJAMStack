import React from 'react';
import heroStyles from './hero.module.css'

export default () =>{
return (
    <div className={heroStyles.container}>
        <div className={heroStyles.heroMessage}>
        <p className={heroStyles.hiParagraph}>Hi,</p>
        <p className={heroStyles.nameParagraph}>I'm Precious Ogbonda</p>
        <p className={heroStyles.descriptionParagraph}>Virtual Assistant</p>
        <button className={heroStyles.button}>Contact Me</button>
        </div>
    </div>
)
}