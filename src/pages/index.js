import React, {useState} from "react";
import Header from '../components/header'
import Hero from '../components/hero'
import About from '../components/about-brief'
import Services from '../components/services-brief';
import Contact from '../components/contact';
import indexStyles from './index.module.css';
import Footer from '../components/footer'
export default (props) =>{
    const [component ,setComponent] =useState('home')
const addMarginTop =(value , margin)=> {
    setComponent(value)
    const style={
        marginTop:`${margin}`
    }
}
 return(<div className={indexStyles.container} >
 <Header addMarginTop={addMarginTop}/>
<Hero />
<About />
 <Services />
<Contact />
<Footer />
</div>)}
