import React, { useState } from "react"
import icon from "../assests/icon.png"
import headerStyles from "./header.module.css"
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaBars,
  FaTimes,
} from "react-icons/fa"

export default () => {
  const [clicked, setClicked] = useState(false)
  const buttonClicked = () => {
    setClicked(!clicked)
  }

  return (
    <div className={headerStyles.headerContainer}>
      <div className={headerStyles.topMenu}>
        <div className={headerStyles.iconDiv}>
          <img className={headerStyles.icon} src={`${icon}`} alt="" />
          <p className={headerStyles.title}>PreciousO</p>
        </div>
        {!clicked && (
          <FaBars className={headerStyles.hamburger} onClick={buttonClicked} />
        )}
        {clicked && (
          <FaTimes className={headerStyles.hamburger} onClick={buttonClicked} />
        )}
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
      }>   <button className={headerStyles.button}>About</button>
        <button className={headerStyles.button}>Services</button>
        <button className={headerStyles.button}>Contact</button>
      </div>
    </div>
  )
}
