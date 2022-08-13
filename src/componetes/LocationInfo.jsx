import React from 'react'

const LocationInfo = ({location}) => {

console.log(location)
  return (
   <article className='container_location'>
    <h2 className='title'>{location?.name}</h2>
    <ul className='container_info'>
        <li><span>Type: {location?.type}</span></li>  
        <li><span>Dimension: {location?.dimension}</span></li>
        <li><span>Population: {location?.residents.length}</span></li>       
    </ul>
   
   </article>
  )
}

export default LocationInfo