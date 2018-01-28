import React from 'react';
import Card from './Card';

const CardContainer = ({ weatherData }) => {

  const weatherCards = weatherData.map(location => {
    return <Card locationData={location} />
  })

  return(
    <div className='card-container'>
      <h1>Card Container Here</h1>
    </div>
  )
}

export default CardContainer;
