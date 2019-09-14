import React from 'react';
import {navigate} from 'gatsby'
import singleServiceStyle from './services-sub.module.css';


export default (props) => {
    const onClicked=(id)=> {
        props.modalToDisplay(id)
        navigate(`/services/#${id-1}`)
    }
    return (
        <div className={singleServiceStyle.header} >
        <div className={singleServiceStyle.picture} style={{backgroundImage: `url(${props.url})`}}>
        </div>
        <div>
        <h3>{props.shortDetail}</h3>
        <p  className={singleServiceStyle.paragraph}>{props.description}</p>
        <button className={singleServiceStyle.button}  onClick={() => onClicked(props.id)}>Learn More</button>
        </div>
        </div>
    )
}