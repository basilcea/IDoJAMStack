import React, {useState} from "react";
import Header from '../components/header'
import Hero from '../components/hero'
import About from '../components/about-brief'
import Services from '../components/services-brief'
import Contact from '../components/contact';
import indexStyles from './index.module.css';
import Modal from '../components/services'
export default () =>{
    const [openModal , setOpenModal] =useState(false)
    const [modalId , setModalId] =useState(0)
    const toggleModal=(value) =>{
        setOpenModal(value)
    }
    const modalToDisplay=(value)=>{
        console.log(value)
        toggleModal(true)
        setModalId(value)
    }
 return(<div className={indexStyles.container}>
 <Header />
 <Hero />
<About />
<Services modalToDisplay={modalToDisplay} openModal={openModal}/>
<Contact />
{openModal && <Modal modalId={modalId} toggleModal={toggleModal}/>}
</div>)}
