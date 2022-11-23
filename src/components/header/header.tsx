import React from 'react'
import './header.css';
import logo from '../../assets/logo.png';
import search from '../../assets/icon_search_white.png';
import burgerMenu from '../../assets/icon_menu_white.png';
import mobSearch from '../../assets/icon_search_white.png';

const Header = () => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=b9a7b22ff1d3c701a8eb51c9e36548af`;

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


      <div className="header-mobile">
        <div className="burger-logo">
        <div className="burger-menu">
          <img src={burgerMenu} alt="" />
        </div>
        <div className="mob-logo">
          <img src={logo} alt="" />
        </div>
        </div>
        <div className="mob-search">
          <img src={mobSearch} alt="" />
        </div>
      </div> 



    </div>
  )
}

export default Header;
