import React from 'react'
import './footer.css';
import minMax from '../../assets/icon_temperature_info.png';
import precipitation from '../../assets/icon_precipitation_info.png';
import humidity from '../../assets/icon_humidity_info.png';
import wind from '../../assets/icon_wind_info.png';
import visibility from '../../assets/icon_visibility_info.png';

const Footer = () => {
    return (
        <div className='footer-div'>
            <div className="footer-item">
                <div className="footer-img">
                    <div className="min-max"><img src={minMax} alt="" /></div>
                </div>
                <div className="footer-info">
                    <div className="item-name">Min-Max</div>
                    <div className="item-info">75 <span>&deg;</span> - 90<span>&deg;</span></div>
                </div>
            </div>

            <div className="footer-item">
                <div className="footer-img">
                    <div className="min-max"><img src={precipitation} alt="" /></div>
                </div>
                <div className="footer-info">
                    <div className="item-name">Precipitation</div>
                    <div className="item-info">0%</div>
                </div>
            </div>

            <div className="footer-item">
                <div className="footer-img">
                    <div className="min-max"><img src={humidity} alt="" /></div>
                </div>
                <div className="footer-info">
                    <div className="item-name">Humidity</div>
                    <div className="item-info">47%</div>
                </div>
            </div>

            <div className="footer-item">
                <div className="footer-img">
                    <div className="min-max"><img src={wind} alt="" /></div>
                </div>
                <div className="footer-info">
                    <div className="item-name">Wind</div>
                    <div className="item-info">4 mph</div>
                </div>
            </div>

            <div className="footer-item">
                <div className="footer-img">
                    <div className="min-max"><img src={visibility} alt="" /></div>
                </div>
                <div className="footer-info">
                    <div className="item-name">Visibility</div>
                    <div className="item-info">12 mph</div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
