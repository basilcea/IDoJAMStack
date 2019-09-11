import React from 'react';
import {Link} from 'gatsby';
import singleServiceStyle from './services-sub.module.css';


export default (props) => {
    const onClicked=(id)=> {
     
        props.modalToDisplay(id)
    }
    return (
        <div className={singleServiceStyle.header} >
        <div className={singleServiceStyle.picture} style={{backgroundImage: `url(${props.url})`}}>
        </div>
        <div>
        <h3>{props.shortDetail}</h3>
        <p  className={singleServiceStyle.paragraph}>{props.description}</p>
        <button className={singleServiceStyle.button}  onClick={() => onClicked(props.id)}><Link to='/services'>Learn More </Link></button>
        </div>
        </div>
    )
}