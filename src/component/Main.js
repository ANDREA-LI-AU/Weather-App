import React from 'react';
import WeatherCondition from '../component/WeatherCondition';
import WeatherForecast from '../component/WeatherForecast';
import Footer from '../component/Footer';

function Main(){
    return(
    <main>
    <WeatherCondition/>
    <WeatherForecast/>
    <Footer/>
    </main>
    );
}





export default Main;