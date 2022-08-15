import './App.css'
import Card_Residets from './componetes/Card_Residets'
import Hero_Nav from './componetes/Hero_Nav'
import LocationInfo from './componetes/LocationInfo'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Footer from './componetes/Footer'
// import Pagination from './componetes/Pagination'


function App() {

 // const urlinfo = (`https://rickandmortyapi.com/api/location/`)
  const [location, setLocation] = useState()
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(true)
  // const [info, setInfo] = useState(urlinfo)

  // const onPrevius = () =>{
  //     setInfo(info?.prev) 
  // }

  // const onNext = () =>{
  //   setInfo(info?.next)
  // }
 
 
  // useEffect(() => {
  //   axios.get(urlinfo)
  //   .then(res => setInfo(res.data.info))
  //   .catch(err => console.log(err))
  // }, [])

  useEffect(() => {

    let numberlocation
    if(input === ''){
      numberlocation= Math.floor(Math.random() * (126 -1) +1)
    }
    else{
      numberlocation=input
    }

    const url=`https://rickandmortyapi.com/api/location/${numberlocation}`
    axios.get(url)
      .then(res => {
        setLocation(res.data)
        setLoading(false)
      })
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
        <div className="search">
            <input id='search' type="number"/>
            <button className='btn'><i class='bx bx-search-alt'></i></button>
         </div>
      </form>
      <LocationInfo location={location}/>
      <div className='conteiner_residents'>
        {
          location?.residents.map(url=>(
          <Card_Residets
          key={url}
          url={url} 
          loading={loading}
          />
          ))
        }
      </div>
      <Footer/>      
      {/* <Pagination prev={info.prev} next={info.next} onPrevius={onPrevius} onNext={onNext} /> */}
    </div>
  )
}

export default App
