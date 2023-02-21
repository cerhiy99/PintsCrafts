import React from 'react'
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';

const ListPage = () => {
    const navigate=useNavigate();
  return (
    <div className="list__page">
        <div className="home">
            <NavLink to="/">ГОЛОВНА</NavLink>
        </div>
        <div className="about__us">
            <NavLink to="/aboutUs">ПРО НАС</NavLink>
        </div>
        <div className="logo" onClick={()=>navigate("/")}>
            <img src='/imgs/logo-beer-img-light.png'/>
        </div>
        <div className="menu">
            <NavLink to="/menu">МЕНЮ</NavLink>
        </div>
        <div className="TEAM">
            <NavLink to="/team">КОМАНДА</NavLink>
        </div>
    </div>
  )
}

export default ListPage
