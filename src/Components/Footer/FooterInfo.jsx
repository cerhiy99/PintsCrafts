import React from 'react'
import { NavLink } from 'react-router-dom';

const FooterInfo = () => {
  return (
    <div className="footer__info footer__block">
        <div className="footer__title">
            ІНФОРМАЦІЯ
        </div>
        <div className="footer__desctiption">
            <div className="info__decription">
                <div className="home">
                    <NavLink to="/">ГОЛОВНА</NavLink>
                </div>
                <div className="menu">
                    <NavLink to="/menu">МЕНЮ</NavLink>
                </div>
                <div className="TEAM">
                    <NavLink to="/teem">КОМАНДА</NavLink>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FooterInfo
