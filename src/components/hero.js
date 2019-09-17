import React from 'react';
import heroStyles from './hero.module.css';
import {FaChevronCircleDown} from 'react-icons/fa';

export default (props) =>{
let container;
return (
    <div ref={div=>(container =div)} className={heroStyles.container} id={'home'} style={{paddingTop:`${props.val}`}} >
        <p className={heroStyles.hiParagraph}>Hi !</p>
        <p className={heroStyles.nameParagraph}>I'm Precious Ogbonda</p>
        <p className={heroStyles.descriptionParagraph}>An Independent Virtual Assistant</p>
        <button className={heroStyles.button}><a className={heroStyles.a} href={`mailto:${process.env.EMAILURL}`}>Contact Me </a></button>
        <div className={heroStyles.goDown}><FaChevronCircleDown onClick={()=>props.onClicked('about')}/></div>
            </div>
)
}