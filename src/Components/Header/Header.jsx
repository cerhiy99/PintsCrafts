import React, { useState } from 'react'
import {RxHamburgerMenu} from "react-icons/rx";
import WhereToTry from './WhereToTry';
import ListPage from './ListPage';

const Header = () => {
    const [isShowBurger,setIsShowBurger]=useState();
  return (
    <div className="header__main">
        <div className="header__content">
            <WhereToTry/>
            <ListPage/>
            <div className="burger">
                <RxHamburgerMenu width="20px"/>
            </div>
        </div>
    </div>
  )
}

export default Header
