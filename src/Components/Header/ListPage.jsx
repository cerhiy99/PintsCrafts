import React from 'react'
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';

const ListPage = () => {
    const navigate=useNavigate();
  return (
    <>
        <div className="list__page">
            <div className="home none">
                <NavLink to="/">ГОЛОВНА</NavLink>
            </div>
            <div className="menu none">
                <NavLink to="/menu">МЕНЮ</NavLink>
            </div>
            <div className="TEAM none">
                <NavLink to="/teem">КОМАНДА</NavLink>
            </div>
        </div>
        <div className="logo" onClick={()=>navigate("/")}>
            <img src='/imgs/logo-beer-img-light.png'/>
        </div>
    </>
  )
}

export default ListPage
