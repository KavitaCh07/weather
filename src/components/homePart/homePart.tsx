import React, { useEffect } from 'react';
import addFavs from '../../assets/icon_favourite.png';
import sunny from '../../assets/icon_mostly_sunny.png';
import Footer from '../footer/footer';
import { useState, } from 'react';
import Switch from "react-switch";
import './homePart.css';
import { useSelector } from 'react-redux';

const HomePart = (props: any) => {

  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };

  const state = useSelector((state: any) => state.weather.place)

  useEffect(() => {
    console.log(state);
  }, [state])

  const [value, onChange] = useState("");
  const [time, onChangeTime] = useState("");

  const date = new Date();

  setInterval(function () {
    today();
  }, 1000);

  setInterval(function () {
    todayTime();
  }, 1000);


  const today = () => {
    onChange(
      `${date.toLocaleString("en-us", {
        weekday: "short",
      })} ${date.getDate()}, ${date.toLocaleString("en-us", {
        month: "short",
      })} ${date.getFullYear()} `
    );
  };

  const todayTime = () => {
    onChangeTime(
      ` ${date.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        // second: "numeric",
        hour12: true,
      })}`
    );
  };

  return (
    <div className='home-part'>
      <div className="mid-part">
        <div className="mobile-date-div">
          <div className='mob-date'>{value}&nbsp;&nbsp;{time}</div>
        </div>
        <div className="city-name">{state && state.location && state.location.city}, {state && state.location && state.location.country}</div>
        <div className="add-fav">
          <img className='fav-img' src={addFavs} alt="" /><span className='add-to-fav'>Add to favourite</span>
        </div>
      </div>

      <div className="middle-sun-part">
        <div className="sum-img"><img src={sunny} alt="" /></div>
        <div className="temperature-div">
          <div className="temperature">{state && state.current_observation && state.current_observation.condition.temperature}</div>
          <div className="switch-temperature">
            <Switch
              borderRadius={4}
              onChange={handleChange}
              checked={checked}
              className="react-switch"
              offColor="#ffffff"
              onColor="#ffffff"
              uncheckedHandleIcon={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    fontSize: 18,
                    color: "red",
                  }}
                >
                  {"\u00B0"}C
                </div>
              }
              uncheckedIcon={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    fontSize: 18,
                    paddingRight: 2,
                    color: "white",
                    zIndex: "2",
                  }}
                >
                  {"\u00B0"}F
                </div>
              }
              checkedIcon={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    fontSize: 18,
                    paddingRight: 2,
                    color: "white",
                  }}
                >
                  {"\u00B0"}C
                </div>
              }
              checkedHandleIcon={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    color: "red",
                    fontSize: 18,
                  }}
                >
                  {"\u00B0"}F
                </div>
              }
            />
          </div>
        </div>
        <div className="mostly-sunny">{state && state.current_observation && state.current_observation.condition.text}</div>
      </div>

      <Footer />

    </div>
  )
}

export default HomePart;
