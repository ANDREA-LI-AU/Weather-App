import React from 'react';
import ForcastSwitch from './ForecastSwitch';
import ForcastRow from './ForcastRow';


function WeatherForecast(){
    return(
        <section class = "weather-forecast">
        <ForcastSwitch/>
        <ForcastRow 
        time = '10:00'
        />
        <ForcastRow 
        time = '13:00'
        />
        <ForcastRow 
        time = '16:00'
        />
        </section>
    );


}

export default WeatherForecast;