import React from 'react';

const Card = ({locationData}) => {
  if(locationData){
    return(
      <div className='city-card'>
        <h2>{locationData.current_observation.display_location.city}, {locationData.current_observation.display_location.state_name}</h2>
        <img src={locationData.current_observation.icon_url}></img>
        <h3>{locationData.current_observation.temp_f}° F</h3>
      </div>
    )
  }

}

export default Card;
