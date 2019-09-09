import React from "react"
import icon from "../assests/icon.png"
import headerStyles from "./header.module.css"
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaBars,
  FaTimes
} from "react-icons/fa"

export default () => {
  return (
    <div className={headerStyles.headerContainer}>
      <div className={headerStyles.topMenu}>
        <div className={headerStyles.iconDiv}>
          <img className={headerStyles.icon} src={`${icon}`} alt="" />
          <p className={headerStyles.title}>PreciousO</p>
        </div>
        <FaBars className={headerStyles.hamburger} />
        <FaTimes className={headerStyles.hamburger} />
      </div>
      <div className={headerStyles.socials}>
        <div className={headerStyles.socialsIcon}>
          {" "}
          <FaFacebookF className={headerStyles.singleSocialIcon}/>
          <FaTwitter className={headerStyles.singleSocialIcon} />
          <FaLinkedinIn className={headerStyles.singleSocialIcon}/>
        </div>

        <button className={headerStyles.button}>Contact Me</button>
      </div>
    </div>
  )
}
