import React from 'react';
import heroStyles from './hero.module.css'
import {FaChevronCircleDown} from 'react-icons/fa'
export default () =>{
return (
    <div className={heroStyles.container}>
        <p className={heroStyles.hiParagraph}>Hi,</p>
        <p className={heroStyles.nameParagraph}>I'm Precious Ogbonda</p>
        <p className={heroStyles.descriptionParagraph}>An independent virtual assistant</p>
        <button className={heroStyles.button}>Contact Me</button>
        <FaChevronCircleDown/>
            </div>
)
}