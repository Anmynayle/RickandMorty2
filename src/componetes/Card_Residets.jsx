import React from 'react'
import useFetch from '../hooks/useFetch'


const Card_Residets = ({url}) => {

    const resident = useFetch(url)

    //console.log(resident)
  return (
    <div className='card_container'>
      <header className="card_img">
        <img src={resident?.image} alt="" />
          <div className="card_status">
            <div className="circle"></div>
            <span>{resident?.status}</span>
          </div>
      </header>
      <div className="card_info">
        <h2>{resident?.name}</h2>
        <ul className='card_list'>
          <li>Origen Name: {resident?.origin.name}</li>
          <li>Episode: {resident?.episode.length}</li>
        </ul>
      </div>
    </div>
  )
}

export default Card_Residets