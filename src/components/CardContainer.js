import React from 'react';
import Card from './Card';

const CardContainer = ({ weatherData }) => {

  const weatherCards = weatherData.map(location => {
    console.log(location);
    return <Card locationData={location} />
  })

  return(
    <div className='card-container'>
      <h1>Card Container Here</h1>
      {weatherCards}
    </div>
  )
}

export default CardContainer;
