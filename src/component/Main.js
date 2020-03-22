import React from 'react';
import WeatherCondition from '../component/WeatherCondition';
import WeatherForecast from '../component/WeatherForecast';

function Main(props){
    return(
    <main>
    <WeatherCondition
    unit={props.unit}
    cityName={props.cityName}
    current={props.current}
    />
    <WeatherForecast 
    unit={props.unit}
    forecasts={props.forecasts} 
    cityName={props.cityName}
    current={props.current}
    handleChangeLimit={props.handleChangeLimit}
    limit={props.limit}
    
    />
    </main>
    );
}





export default Main;