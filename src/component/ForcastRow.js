import React from 'react';



function ForcastRow (props){
    return(
    <div class="weather-forecast__row">
        <span class="weather-forecast__day">{this.props.day}</span>
        <span class="weather-forecast__icon">
          <i class="fa fa-clock-o"></i> {this.props.time}
        </span>
        <span class="weather-forecast__high">{this.props.high}</span>
        <span class="weather-forecast__low">{this.props.low}</span>
      </div>
        
    )

}



export default ForcastRow;