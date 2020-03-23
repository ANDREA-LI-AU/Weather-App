


import React from 'react';


function Navigation(props){
    return (
        <nav>
        <div //style="flex:1; "
        >
          <input 
          value={props.searchValue}
          onChange={props.handleSearchValueChange} 
          className="search-input" 
          />
          <button 
          onClick={props.search}
           className="search-btn">
            <i className="fa fa-search"></i>
          </button>

          <button 
          onClick={ props.toggleDegree }
          className="temp-switch">
            <i
              className="fa fa-thermometer-empty"
              aria-hidden="true"
              //style="padding-right:5px"
            ></i>
            <sup>&deg;</sup> {props.unit}
          </button>
        </div>
      </nav>
    )
}


export default Navigation;