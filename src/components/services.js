
import React from 'react';
import modalStyles from './services.module.css'

export default (props) =>{
    const style ={
        backgroundImage: `-webkit-gradient(linear,left bottom, left top,from(rgba(124 ,124 , 124 , 0.8))), url(${props.service.url})`
    }
    return (
        <div className={modalStyles.container} key={props.service.id}  style={style}>
        <h3 id={props.service.id} >{props.service.serviceName}</h3>
        <div>{props.service.serviceDetails}</div>
        <p>Need an assistant for {props.service.serviceName}? >Contact  Me </p>
        </div>
    )
}