import './App.css'
import Card_Residets from './componetes/Card_Residets'
import Hero_Nav from './componetes/Hero_Nav'
import LocationInfo from './componetes/LocationInfo'
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {

  const [location, setLocation] = useState()
  const [input, setInput] = useState('')
    
  //console.log(input)
  useEffect(() => {

    let numberlocation
    if(input === ''){
      numberlocation= Math.floor(Math.random() * (126 -1) +1)
    } else{
      numberlocation=input
    }

    const url=`https://rickandmortyapi.com/api/location/${numberlocation}`
    axios.get(url)
      .then(res => setLocation(res.data))
      .catch(err => console.log(err))
  }, [input])
  

  const handleSubmit = e =>{
    e.preventDefault()
    setInput(e.target.search.value)    
  }

  return (
    <div className="App">
      <Hero_Nav/>
      <form onSubmit={handleSubmit}>
        <input id='search' type="number"/>
         <button>Search</button>
      </form>
      <LocationInfo location={location}/>
      <div className='conteiner_residents'>
        {
          location?.residents.map(url=>(
          <Card_Residets
          key={url} url={url}
          />
          ))
        }
      </div>
    </div>
  )
}

export default App
