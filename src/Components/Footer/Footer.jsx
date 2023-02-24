import React from 'react'
import FooterInfo from './FooterInfo';
import Location from './Location';
import Newsletter from './Newsletter';
import TimeWork from './TimeWork';

const Footer = () => {
  return (
    <div className="footer__main">
      <div className="footer__main__content">
        <TimeWork/>
        <Location/>
        <Newsletter/>
        <FooterInfo/>
      </div>
    </div>
  )
}

export default Footer
