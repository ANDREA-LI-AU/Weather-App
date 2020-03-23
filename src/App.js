import React from 'react';
import Footer from './component/Footer';
import Header from './component/Header';
import Main from './component/Main';
import Navigation from './component/Navigation';
import { format } from 'date-fns';
import './App.css';
import { getWeather } from './utils/axios';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      cityName: 'Brisbane',
      current: {},
      forecasts: [],
      limit:5,
      searchValue:'',
      unit:'C',
    };
  }


async componentDidMount(){
    //加载，发请求
    // axios.get('https://jr-weather-api.herokuapp.com/api/weather?city=brisbane&&cc=au')
    //     .then(response => {
    //         const rawforecasts = response.data.data.forecast.slice(0, 10);
    //         const forecasts = rawforecasts.map(rawforecasts =>{
    //             const date = new Date(rawforecasts.time*1000);
    //             const day = format(date, 'EEE');
    //             const time = format(date, 'HH:mm');
    //             return{
    //                 ...rawforecasts, 
    //                 day,
    //                 time 
    //             }
    //         })
    //         this.setState({forecasts});
    //         console.log(forecasts);
    //     }
    //     )


    try{
        const response = await getWeather(this.cityName);
        this.updateWeather(response);
    } catch (err) {
        console.log(err);
    }
   
}


updateWeather = (response) => {
  console.log(response);
  const cityName = this.state.cityName;
  const current = response.data.data.current;
  const unit = this.state.unit;
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
        this.setState({unit, current, cityName, forecasts});
}

handleChangeLimit = limit => {
  this.setState({ limit });
}

handleSearchValueChange = event => {
  const value = event.target.value;
  this.setState( { searchValue: value });
}

search = async () => {
  const response = await getWeather(this.state.searchValue);
  const city = this.state.searchValue;
  this.setState({cityName: city});
  this.updateWeather(response);
  
}

toggleDegree = () =>{
  this.state.unit === 'C' 
  ?  this.setState({ unit : 'F' })
  :  this.setState( { unit: 'C'});
}

  render(){
    return(
      <div className="weather-channel__container">
      <Header/>
      <Navigation 
        toggleDegree = {this.toggleDegree}
        unit = {this.state.unit}
        search = {this.search}
        searchValue = {this.state.searchValue}
        handleSearchValueChange={this.handleSearchValueChange}
        />
      <Main 
        unit={ this.state.unit}
        cityName={this.state.cityName}
        current={this.state.current}
        forecasts={this.state.forecasts}
        handleChangeLimit={this.handleChangeLimit}
        limit={this.state.limit}
      />
      <Footer/>
      </div> 
    )
  }
     
 
}

export default App;
