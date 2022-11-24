import React from 'react';
import addFavs from '../../assets/icon_favourite.png';
import sunny from '../../assets/icon_mostly_sunny.png';
import Footer from '../footer/footer';
import { useState } from 'react';
import './homePart.css';

const HomePart = () => {
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

            <Footer />

        </div>
    )
}

export default HomePart;
