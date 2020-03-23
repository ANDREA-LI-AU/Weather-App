import React from 'react';
import ForcastRow from './ForcastRow';

class WeatherForecast extends React.Component {

    render(){
        const { limit, unit } = this.props;
        const forecasts = this.props.forecasts.slice(0, limit);
        

        return(
            <section className = "weather-forecast">
            <div className="forecast__switch">
                <button 
                    className={`forecast__switch_0 ${limit === 5 ? 'switch-active' : ''}`}
                    onClick={ () => this.props.handleChangeLimit(5)}
                    >
                        5 items
                    
                    </button>
                <button 
                    className={`forecast__switch_1 ${limit === 10 ? 'switch-active' : ''}`}
                    onClick={() => this.props.handleChangeLimit(10) }
                    >
                        10 items
                    </button>
            </div>
            {
                forecasts.map(forecast =>{

                    const temperatureHigh = 
                    unit === 'C' ? forecast.maxCelsius : forecast.maxFahrenheit;
                    const temperatureLow = 
                    unit === 'C' ? forecast.minCelsius : forecast.minFahrenheit;
                    const key = forecast.day + forecast.time;
                    const day = forecast.day;
                    const time = forecast.time; 
                    return(
                        <ForcastRow 
                            key = {key}
                            day = {day}
                            high= {temperatureHigh + ` ${unit}`} 
                            low = {temperatureLow + ` ${unit}`}
                            time= {time}
                        />

                    )     
            
                    }
                       
                    )
            
                
                
            }
            </section>
        );


    }
}

export default WeatherForecast;