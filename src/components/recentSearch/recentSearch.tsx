import React from 'react';
import './recentSearch.css';
import nothing from '../../assets/icon_nothing.png';
import back from '../../assets/back.png';
import favMobSearch from '../../assets/searchMobile.png';

const RecentSearch = () => {
  return (
    <div className="recentSearch-page">

      <div className="fav-mob-page">
        <div className="fav-div">
          <div className='fav-back'><img src={back} alt="" /></div>
          <div className="fav-input"><span>Recent Search</span></div>
        </div>
        <div className="fav-search"><img src={favMobSearch} alt="" /></div>
      </div>

      <div className='recent-search-part'>
        <div className="nothing-center-part">
          <img src={nothing} alt="" />
        </div>
        <div className="nothing-added">
          No Recent Search
        </div>
      </div>
      
    </div>
  )
}

export default RecentSearch
