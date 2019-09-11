import React from 'react';
import modalStyles from './services.module.css'

export default (props) =>{
    return (
        <div className={modalStyles.container} style={{backgroundImage: `url(${props.service.url})`}}>
        <h2>{props.service.serviceName}</h2>
        <div></div>
        <p>Need an assistant for {props.service.serviceName}? <a href={`mailto:prechistar@gmail.com`}>Contact  Me </a></p>
        </div>
    )
}