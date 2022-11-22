import React from 'react'
import './header.css';
import logo from '../../assets/logo.png';
import search from '../../assets/icon_search_white.png';

const Header = () => {
  return (
    <div>
      <div className="header">
        {/* <div className="header-div"> */}
        <div className="logo-img">
          <img src={logo} alt="" />
        </div>
        <div className="search-bar">
          <form action="">
            <input type="text" name="" className='search-input' placeholder='Search city' id="" />
            <div className="search-icon">
              <img src={search} alt="" />
            </div>
          </form>
          {/* </div> */}
        </div>

      </div>

    </div>
  )
}

export default Header;
