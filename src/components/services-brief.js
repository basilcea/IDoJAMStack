import React from 'react'
import serviceStyle from './services-brief.module.css'
import SingleService from './services-sub'
import customerService from '../assests/customerService.jpeg'
import dataEntry from '../assests/dataEntry.jpg'
import administrative from '../assests/administrative.jpg'
export default (props) => {
    return (<div className={serviceStyle.header} >
            <div className={serviceStyle.servicesDiv}>
            <h2 className={serviceStyle.heading}>My Services</h2>
            <p className={serviceStyle.paragraph}>Working remotely, i help firms increase productivity, and accomplish tasks in time, the following services:-</p>
            <SingleService modalToDisplay ={ props.modalToDisplay} id={1} description={'Organized and efficent'} url={administrative} shortDetail={'Adminsitrative Support'}/>
            <SingleService modalToDisplay ={ props.modalToDisplay} id={2} description={'Your clients deserve quality service'} url={customerService} shortDetail={'Customer Service'}/>
            <SingleService modalToDisplay ={ props.modalToDisplay} id={3} description={'Fasten the process of turning data into insights'} url={dataEntry} shortDetail={'Data Entry'}/>
            </div>
        </div>)
}