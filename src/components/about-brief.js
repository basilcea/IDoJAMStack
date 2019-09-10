import React from 'react';
import aboutStyles from './about-brief.module.css'

export default () => {
    return (
        <div className={aboutStyles.container}>
        <h2 className={aboutStyles.heading}>About Me</h2>
        <p className={aboutStyles.paragraph}>Highly organized, hard-working, self-motivated assistant to corporate executives, organizations and enterpreneurs. An energtic self-starter with strong communication skills .</p>
        </div>
    )
}