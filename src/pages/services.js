import React, { useEffect } from "react"
import { data } from "../data"
import Services from "../components/services"
import serviceStyle from "./services.module.css"
import Header from "../components/header"
import Footer from "../components/footer"
if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

export default props => {
  return (
    <div className={serviceStyle.container}>
      <Header />
      <div className={serviceStyle.heading}>
        <h2>Services</h2>
        <button className={serviceStyle.button}><a href={`mailto:prechistar@gmail.com`}>Contact Me</a></button>
      </div>
      <div className={serviceStyle.servicesDiv}>
        {data.map(service => (
          <Services
            key={service.id}
            service={service}
            toggleModal={props.toggleModal}
          />
        ))}
      </div>
      <Footer />
    </div>
  )
}
