import React from 'react';
import './favourites.css'
import Header from '../header/header';
import nothing from '../../assets/icon_nothing.png';
import FavouritesTable from '../favouritesTable/favouritesTable';
import back from '../../assets/back.png';
import favMobSearch from '../../assets/searchMobile.png';
// import { useState } from 'react';

const Favourites = () => {
  return (
    // <FavouritesTable/>
    <div className="fav-mobile-page">

      <div className="fav-mob-page">
        <div className="fav-div">
          <div className='fav-back'><img src={back} alt="" /></div>
          <div className="fav-input"><span>Favourite</span></div>
        </div>
        <div className="fav-search"><img src={favMobSearch} alt="" /></div>
      </div>

      <div className='favourite-part'>
        <div className="nothing-center-part">
          <img src={nothing} alt="" />
        </div>
        <div className="nothing-added">No Favourites added</div>
      </div>

    </div>
  )
}

export default Favourites;
