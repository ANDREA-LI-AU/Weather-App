import React from 'react';
import umberella from '../assets/icon/icon-umberella.png';
import wind from '../assets/icon/icon-wind.png';
import compass from '../assets/icon/icon-compass.png';

const inlineStyle = "text-align: center; font-size: 14px";



function WeatherCondition(){
    return(
        <section className = "weather-condition">
          <div class="weather-condition__location">Brisbane</div>
          <div style={inlineStyle}> Clear</div>
          <div class="weather-condition__temp">19 c</div>
          <div class="weather-condition__desc">
            <div>
              <img src={umberella} alt='umberella icon'/>
              <span class="citem">20%</span>
            </div>
            <div>
              <img src={wind}  alt = 'wind icon'/> <span class="citem">3 km/h</span>
            </div>
            <div>
              <img src={compass} alt = 'compass icon'/> <span class="citem">NE</span>
            </div>
          </div>

        </section>
    )
}





export default WeatherCondition;