import React , {useState} from "react";
import Header from '../components/header'
import Hero from '../components/hero'
import About from '../components/about-brief'
import Services from '../components/services-brief';
import Contact from '../components/contact';
import indexStyles from './index.module.css';
import {navigate} from 'gatsby'
import Footer from '../components/footer'
export default () =>{
const [margin, setMargin] = useState(0)
const [component,setComponent] = useState('')
const setValue = (value ,component) =>{
    setComponent(component)
    setMargin(0)
    setMargin(value)
}
const setInitial =(refValue) =>{
    if(refValue.style.paddingTop === '15vh' || refValue.style.paddingTop ==='30vh'){
        refValue.style.paddingTop = 0
    }
}
const onClicked = value =>{
    if( window.screen.width>500){
      setValue('15vh',value)
    }
    else{
      setValue('25vh',value)
    }
        navigate(`/#${value}`)
      }
 return(<div className={indexStyles.container} >
 <Header onClicked={onClicked} />
<Hero onClicked={onClicked} setInitial ={setInitial} val={component === 'home' && margin}/>
<About  onClicked={onClicked} setInitial ={setInitial} val={ component === 'about' && margin}/>
 <Services  onClicked={onClicked} setInitial ={setInitial} val={ component === 'services' && margin}/>
<Contact />
<Footer  val={margin}/>
</div>)}
