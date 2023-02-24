import React from 'react'
import WhereToTry from './WhereToTry';
import ListPage from './ListPage';
import Burger from './Burger';

const Header = () => {
  return (
    <div className="header__main">
        <div className="header__content">
          <WhereToTry/>
          <ListPage/>
          <Burger/>
        </div>
    </div>
  )
}

export default Header
