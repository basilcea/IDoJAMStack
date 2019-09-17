import React from 'react';
import singleServiceStyle from './services-sub.module.css';


export default (props) => {
    return (
        <div className={singleServiceStyle.header} >
        <div className={singleServiceStyle.picture} style={{backgroundImage: `url(${props.url})`}}>
        </div>
        <div>
        <h3>{props.shortDetail}</h3>
        <p  className={singleServiceStyle.paragraph}>{props.description}</p>
        </div>
        </div>
    )
}