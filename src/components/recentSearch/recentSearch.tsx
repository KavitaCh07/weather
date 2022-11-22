import React from 'react';
import './recentSearch.css';
import nothing from '../../assets/icon_nothing.png';

const RecentSearch = () => {
  return (
    <div className='recent-search-part'>
       <div className="nothing-center-part">
      <img src={nothing} alt="" />
      </div>
      <div className="nothing-added">
      No Recent Search
      </div>
      
    </div>
  )
}

export default RecentSearch
