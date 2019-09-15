import React from 'react'
import serviceStyle from './services-brief.module.css'
import SingleService from './services-sub'
import customerService from '../assests/customerService.jpeg'
import dataEntry from '../assests/dataEntry.jpg'
import administrative from '../assests/administrative.jpg'
export default (props) => {
    return (
            <div className={serviceStyle.servicesDiv} id={'services'}>
            <h2 className={serviceStyle.heading}>What I Do</h2>
            <p className={serviceStyle.paragraph}>Working remotely, i help firms increase productivity, and accomplish tasks in time, offering the following services:-</p>
            <div className={serviceStyle.serviceInfo}>
            <SingleService modalToDisplay ={ props.modalToDisplay} id={1} description={'Organized and efficent Support'} url={administrative} shortDetail={'Adminsitration'}/>
            <SingleService modalToDisplay ={ props.modalToDisplay} id={2} description={'Your clients deserve quality service'} url={customerService} shortDetail={'Customer Service'}/>
            <SingleService modalToDisplay ={ props.modalToDisplay} id={3} description={'Fasten the process of turning data into insights'} url={dataEntry} shortDetail={'Data Entry'}/>
            </div>
            </div>)
}