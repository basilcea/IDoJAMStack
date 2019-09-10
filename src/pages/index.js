import React from "react";
import Header from '../components/header'
import Hero from '../components/hero'
import About from '../components/about-brief'
import Services from '../components/services-brief'
import Contact from '../components/contact';
import indexStyles from './index.module.css';

export default () =>
 <div className={indexStyles.container}>
 <Header />
 <Hero />
<About />
<Services />
<Contact />

</div>
