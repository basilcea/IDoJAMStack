import React from 'react';
import aboutStyles from './about-brief.module.css'
import {FaChevronCircleDown} from 'react-icons/fa'

export default (props) => {
    let container;
    return (
        <div ref={div=>(container =div)}  className={aboutStyles.container} id={'about'} style={{paddingTop:`${props.val}`}}>
        <h2 className={aboutStyles.heading}>About Me</h2>
        <p className={aboutStyles.paragraph}>Highly organized, hard-working, self-motivated assistant to corporate executives, organizations and enterpreneurs. An energtic self-starter with strong communication and good interpersonal skills. A graduate of Biomedical Technology.</p>
        <div className={aboutStyles.goDown}><FaChevronCircleDown onClick={()=>props.onClicked('services')}/></div>
        </div>
    )
}