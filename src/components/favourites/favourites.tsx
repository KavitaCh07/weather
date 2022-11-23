import React from 'react';
import './favourites.css'
import Header from '../header/header';
import nothing from '../../assets/icon_nothing.png';
import FavouritesTable from '../favouritesTable/favouritesTable';

const Favourites = () => {
  return (
    <FavouritesTable/>
    // <div className='favourite-part'>
    //   <div className="nothing-center-part">
    //   <img src={nothing} alt="" />
    //   </div>
    //   <div className="nothing-added">
    //   No Favourites added
    //   </div>

    // </div>
  )
}

export default Favourites;
