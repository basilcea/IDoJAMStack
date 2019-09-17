import React from "react"
import icon from "../assests/icon.png"
import headerStyles from "./header.module.css"
import {navigate} from 'gatsby'
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa"

export default (props) => {


  return (
    <div className={headerStyles.headerContainer}>
      <div className={headerStyles.topMenu}>
        <div className={headerStyles.iconDiv}>
          <img className={headerStyles.icon} src={`${icon}`} alt="" />
          <p className={headerStyles.title}>PreciousO</p>
        </div>
      </div>
      <div className={headerStyles.socials}>
        <div className={headerStyles.socialsIcon}>
          {" "}
          <a className={headerStyles.singleSocialIcon} href={`${process.env.FACEBOOKURL}`}><FaFacebookF  /></a>
          <a className={headerStyles.singleSocialIcon} href={`${process.env.TWITTERURL}`}><FaTwitter  /></a>
          <a className={headerStyles.singleSocialIcon} href={`${process.env.LINKEDINURL}`}><FaLinkedinIn /></a>
        </div>
      </div>
      <div className={
        headerStyles.navBar

      }>           
      <button className={headerStyles.button}  onClick={()=>props.onClicked('home')}>Home</button>
      <button className={headerStyles.button} onClick={()=>props.onClicked('about')}>About</button>
        <button className={headerStyles.button}  onClick={()=>props.onClicked('services')}>Services</button>
        <button className={headerStyles.button}  onClick={()=>props.onClicked('contact')}>Contact</button>

      </div>
    </div>
  )
}
