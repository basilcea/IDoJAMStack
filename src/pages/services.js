import React from 'react';
import Services from '../components/services';
import {data} from '../data';
import serviceStyle from './services.module.css';

export default (props) =>{
    const serviceDisplayed = data.filter(singleService => singleService)
    const service= {...serviceDisplayed[0]}
   return( <div className={serviceStyle.container}>
        <Services service={service}/>
    </div>)
}