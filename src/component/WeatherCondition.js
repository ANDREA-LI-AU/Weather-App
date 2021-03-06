import React from 'react';
import umberella from '../assets/icon/icon-umberella.png';
import wind from '../assets/icon/icon-wind.png';
import compass from '../assets/icon/icon-compass.png';

//const inlineStyle = {textAlign: 'center', fontSize: '14px'}



function WeatherCondition(props){
  //destruct props locally
  const { cityName, current, unit } = props;
  const temperature = 
    unit === 'C' ? current.maxCelsius : current.maxFahrenheit
  const city = cityName.toLowerCase();
    return(
        <section className = "weather-condition">
          <div className="weather-condition__location" style={{textTransform: 'capitalize'}}>{ city }</div>
    <div className="weather-condition__temp">{ temperature } { unit }</div>
          <div className="weather-condition__desc">
            <div>
              <img src={umberella} alt='umberella icon'/>
              <span className="citem">{props.current.humidity}%</span>
            </div>
            <div>
              <img src={wind}  alt = 'wind icon'/> <span className="citem">{ current.windSpeed } km/h</span>
            </div>
            <div>
              <img src={compass} alt = 'compass icon'/> <span className="citem">{ current.windDirection }</span>
            </div>
          </div>

        </section>
    )
}





export default WeatherCondition;