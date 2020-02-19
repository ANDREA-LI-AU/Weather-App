import React from 'react';



function ForcastRow (props){
    return(
    <div class="weather-forecast__row">
        <span class="weather-forecast__day">Fri</span>
        <span class="weather-forecast__icon">
          <i class="fa fa-clock-o"></i> {this.props.time}
        </span>
        <span class="weather-forecast__high">19 c</span>
        <span class="weather-forecast__low">8 c</span>
      </div>
        
    )

}



export default ForcastRow;