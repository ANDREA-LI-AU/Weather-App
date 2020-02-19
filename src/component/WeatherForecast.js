import React from 'react';
import ForcastSwitch from './ForecastSwitch';
import ForcastRow from './ForcastRow';


function WeatherForecast(){
    return(
        <section class = "weather-forecast">
        <div class="forecast__switch">
        <button class="forecast__switch_0 switch-active">5 items</button>
        <button class="forecast__switch_1">10 items</button>
        </div>
        <ForcastRow 
        day = 'Fri'
        high = '19 c'
        low = '8 c'
        time = '10:00'
        />
        <ForcastRow 
        day = 'Fri'
        high = '19 c'
        low = '8 c'
        time = '13:00'
        />
        <ForcastRow 
        day = 'Fri'
        high = '19 c'
        low = '8 c'
        time = '16:00'
        />
        </section>
    );


}

export default WeatherForecast;