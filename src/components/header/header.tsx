import React from 'react'
import './header.css';
import logo from '../../assets/logo.png';
import searchImg from '../../assets/icon_search_white.png';
import burgerMenu from '../../assets/icon_menu_white.png';
import mobSearch from '../../assets/icon_search_white.png';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import back from '../../assets/back.png';
import HomePart from '../homePart/homePart';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addPlace, addCountry, addWeatherData } from '../../redux/weatherSlice';

const Header = () => {

  const [place, setPlace] = useState([]);
  const [searchInputData, setSearchInputData] = useState([]);
  const [country, setCountry] = useState([]);
  const [weather, setWeather] = useState([]);
  const dispatch = useDispatch();

  const options = {
    method: 'GET',
  }

  useEffect(() => {
    dispatch(addPlace(place));
  }, [place]);

  useEffect(() => {
    dispatch(addCountry(country));
  }, [country]);

  useEffect(() => {
    dispatch(addWeatherData(weather));
  }, [weather]);

  useEffect(() => {
    getPlaces(searchInputData)
      .then((data: any) => {
        console.log(data);
        setPlace(data && data.location && data.location.city && data.location.city);
        setCountry(data && data.location && data.location.country && data.location.country);
        setWeather(data && data);
        console.log(weather);
      })
  }, [searchInputData]);

  const getPlaces = async(searchInputData: any) => {
    try {
      const response = await axios.get(url, options);
      return response?.data;
    } catch (error) {
      console.log(error);
    }   
  };

  

  const url = 'https://api.openweathermap.org/data/2.5/weather?q=${searchInputData}&appid=b9a7b22ff1d3c701a8eb51c9e36548af';

  const [sidebar, setSidebar] = useState(false);

  const [searchPage, setSearchPage] = useState(false);

  

  const navigate = useNavigate();

  const onSubmit = (event: any) => {
    event.preventDefault();
    setSearchInputData(event.target.searchInputData.value);
    console.log(searchInputData);
  }

  return (
    <div>
      <div className="header">
        {/* <div className="header-div"> */}
        <div className="logo-img"><img src={logo} alt="" /></div>
        <div className="search-bar">
          <form action="" onSubmit={onSubmit}>
            <input type="text" className='search-input' name='searchInputData' placeholder='Search city' id="" />
            <div className="search-icon"><img src={searchImg} alt="" /></div>
          </form>
          {/* </div> */}
        </div>
      </div>

      <div className="header-mobile">
        <div className="burger-logo">
          <div className="burger-menu"><img src={burgerMenu} alt="" onClick={() => setSidebar(true)} /></div>
          <div className="mob-logo"><img src={logo} alt="" /></div>
        </div>
        <div className="mob-search">
          <img src={mobSearch} alt="" onClick={() => setSearchPage(true)} />
        </div>
      </div>

      {sidebar ? (
        <div className="side-bar-container">
          <NavLink to='/' className='burgerLinks' onClick={() => setSidebar(false)}>Home</NavLink>
          <NavLink to='/fav' className='burgerLinks' onClick={() => setSidebar(false)}>Favourite</NavLink>
          <NavLink to='/recentSearch' className='burgerLinks' onClick={() => setSidebar(false)}>Recent Search</NavLink>
        </div>
      ) : ("")}

      {searchPage ? (
        <div className="search-page">
          <div className="mob-search-field">
            <div className="mob-search-icon">
              <img src={back} alt="" onClick={() => setSearchPage(false)} />
            </div>
            <div className="mob-search-input-field">
              <input type="search" placeholder='Search for City' />
            </div>
          </div>
        </div>
      ) : ("")
      }



    </div>
  )
}

export default Header;
