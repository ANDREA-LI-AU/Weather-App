import React from 'react';
import ForcastRow from './ForcastRow';
import axios from 'axios';
import { format } from 'date-fns';

class WeatherForecast extends React.Component {
    state = {
        forecasts:[ ]
    }

    componentDidMount(){
        //加载，发请求
        axios.get('https://jr-weather-api.herokuapp.com/api/weather?city=brisbane&&cc=au')
            .then(response => {
                const rawforecasts = response.data.data.forecast.slice(0, 10);
                const forecasts = rawforecasts.map(rawforecasts =>{
                    const date = new Date(rawforecasts.time*1000);
                    const day = format(date, 'EEE');
                    const time = format(date, 'HH:mm');
                    return{
                        ...rawforecasts, 
                        day,
                        time 
                    }
                })
                this.setState({forecasts});
                console.log(forecasts);
            }
            )

    }

    render(){
        return(
            <section className = "weather-forecast">
            <div className="forecast__switch">
                <button className="forecast__switch_0 switch-active">5 items</button>
                <button className="forecast__switch_1">10 items</button>
            </div>
            {
                this.state.forecasts.map(forecast  => (
                        <ForcastRow 
                            key = {forecast.day + forecast.time}
                            day = {forecast.day}
                            high= {forecast.maxCelsius + ' c'} 
                            low = {forecast.minCelsius + ' c'}
                            time= {forecast.time}

                        />
                ))
            }
            </section>
        );


    }
}

export default WeatherForecast;