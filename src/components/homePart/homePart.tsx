import React from 'react';
import addFavs from '../../assets/icon_favourite.png';
import sunny from '../../assets/icon_mostly_sunny.png';
import Footer from '../footer/footer';

const HomePart = () => {
  return (
    <div className='home-part'>
         <div className="mid-part">
                <div className="city-name">Udupi, Karnataka</div>
                <div className="add-fav">
                    <img src={addFavs} alt="" /><span className='add-to-fav'>Add to favourite</span>
                </div>
            </div>

            <div className="middle-sun-part">
                <div className="sum-img"><img src={sunny} alt="" /></div>
                <div className="temperature">87</div>
                <div className="mostly-sunny">Mostly Sunny</div>
            </div>

            <Footer/>
      
    </div>
  )
}

export default HomePart;
