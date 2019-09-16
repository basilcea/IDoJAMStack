import React from "react"
import icon from "../assests/icon.png"
import headerStyles from "./header.module.css"
import {navigate} from 'gatsby'
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaBars,
  FaTimes,
} from "react-icons/fa"

export default () => {
  const onClicked = value =>{
    navigate(`/#${value}`)
  }

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
          <FaFacebookF className={headerStyles.singleSocialIcon} />
          <FaTwitter className={headerStyles.singleSocialIcon} />
          <FaLinkedinIn className={headerStyles.singleSocialIcon} />
        </div>
      </div>
      <div className={
        headerStyles.navBar

      }>           
      <button className={headerStyles.button}  onClick={()=>onClicked('home')}>Home</button>
      <button className={headerStyles.button} onClick={()=>onClicked('about')}>About</button>
        <button className={headerStyles.button}  onClick={()=>onClicked('services')}>Services</button>
        <button className={headerStyles.button}  onClick={()=>onClicked('contact')}>Contact</button>

      </div>
    </div>
  )
}
