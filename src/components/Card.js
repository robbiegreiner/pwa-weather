import React from 'react';

const Card = ({locationData}) => {
  if(locationData){
    return(
      // on click of card, show entire card and pass in locationData
      <div className='city-card'>
        <h2>{locationData.current_observation.display_location.city}, {locationData.current_observation.display_location.state_name}</h2>
        <h3>{locationData.current_observation.weather}</h3>
        <img src={locationData.current_observation.icon_url}></img>
        <div className='temp-container'>
          <div className='temps'>
            <h3>low</h3>
            <h3>{locationData.forecast.simpleforecast.forecastday[0].low.fahrenheit}° F</h3>
          </div>
          <div className='temps current'>
            <h3>current</h3>
            <h3>{locationData.current_observation.temp_f}° F</h3>
          </div>
          <div className='temps'>
            <h3>high</h3>
            <h3>{locationData.forecast.simpleforecast.forecastday[0].high.fahrenheit}° F</h3>
          </div>
        </div>
      </div>
    )
  }

}

export default Card;
