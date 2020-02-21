import React from 'react';
import umberella from '../assets/icon/icon-umberella.png';
import wind from '../assets/icon/icon-wind.png';
import compass from '../assets/icon/icon-compass.png';

const inlineStyle = {textAlign: 'center', fontSize: '14px'}



function WeatherCondition(){
    return(
        <section className = "weather-condition">
          <div className="weather-condition__location">Brisbane</div>
          <div
          style={inlineStyle}
          > Clear</div>
          <div className="weather-condition__temp">19 c</div>
          <div className="weather-condition__desc">
            <div>
              <img src={umberella} alt='umberella icon'/>
              <span className="citem">20%</span>
            </div>
            <div>
              <img src={wind}  alt = 'wind icon'/> <span className="citem">3 km/h</span>
            </div>
            <div>
              <img src={compass} alt = 'compass icon'/> <span className="citem">NE</span>
            </div>
          </div>

        </section>
    )
}





export default WeatherCondition;