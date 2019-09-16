import React from 'react'
import serviceStyle from './services-brief.module.css'
import SingleService from './services-sub'
import customerService from '../assests/customerService.jpeg'
import dataEntry from '../assests/dataEntry.jpg'
import administrative from '../assests/administrative.jpg'
import { navigate } from 'gatsby';
import {FaChevronCircleDown} from  'react-icons/fa'
export default (props) => {
    let container;
    return (
            <div ref={div=>(container = div)}  className={serviceStyle.servicesDiv} id={'services'} style={{paddingTop:`${props.val}`}} >
            <h2 className={serviceStyle.heading}>What I Do</h2>
            <p className={serviceStyle.paragraph}>Working remotely, i help firms increase productivity, and accomplish tasks in time, offering the following services:-</p>
            <div className={serviceStyle.serviceInfo}>
            <SingleService modalToDisplay ={ props.modalToDisplay} id={1} description={'Organized and efficent Support'} url={administrative} shortDetail={'Adminsitration'}/>
            <SingleService modalToDisplay ={ props.modalToDisplay} id={2} description={'Your clients deserve quality service'} url={customerService} shortDetail={'Customer Service'}/>
            <SingleService modalToDisplay ={ props.modalToDisplay} id={3} description={'Fasten the process of gaining insights'} url={dataEntry} shortDetail={'Data Entry'}/>
            </div>
            <div className={serviceStyle.goDown}><FaChevronCircleDown onClick={()=>navigate('/#contact')}/></div>
            </div>)
}