import React, {useState} from "react";
import Header from '../components/header'
import Hero from '../components/hero'
import About from '../components/about-brief'
import Services from '../components/services-brief';
import Service from './services'
import Contact from '../components/contact';
import indexStyles from './index.module.css';
import Footer from '../components/footer'
export default () =>{
    const [openModal , setOpenModal] =useState(false)
    const [modalId , setModalId] =useState(0)
    const toggleModal=(value) =>{
        setOpenModal(value)
    }
  
    const modalToDisplay=(value)=>{
        console.log(value - 1)
        toggleModal(true)
        setModalId(value - 1)
    }

 return(<div className={indexStyles.container} >
 {!openModal && <Header />}
 {!openModal && <Hero />}
{!openModal && <About />}
{!openModal && <Services modalToDisplay={modalToDisplay} openModal={openModal}/>}
{!openModal && <Contact />}
{!openModal && <Footer />}
{openModal && <Service modalId={modalId} toggleModal={toggleModal}/>}
</div>)}
