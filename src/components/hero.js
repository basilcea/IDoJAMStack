import React from 'react';
import heroStyles from './hero.module.css';
import {navigate} from 'gatsby';
import {FaChevronCircleDown} from 'react-icons/fa';
export default () =>{
return (
    <div className={heroStyles.container}>
        <p className={heroStyles.hiParagraph}>Hi !</p>
        <p className={heroStyles.nameParagraph}>I'm Precious Ogbonda</p>
        <p className={heroStyles.descriptionParagraph}>An Independent Virtual Assistant</p>
        <button className={heroStyles.button}>Contact Me</button>
        <div className={heroStyles.goDown}><FaChevronCircleDown onClick={navigate}/></div>
            </div>
)
}