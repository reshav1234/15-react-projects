import React, { useState, useEffect } from 'react'
import Tours from "./Tours"
import Loading from './Loading'
const url = "https://course-api.com/react-tours-project"

const App = () => 
{
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  const removeTours = (id) =>
  {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  const fetchTour = async() =>
  {
    setLoading(true)
    try 
    {
      const response = await fetch(url)
      const tours = await response.json()
      setLoading(false)
      setTours(tours)
    }catch(error){
      setLoading(false)
      console.log(error)
    }
  }

  useEffect(() => {
    fetchTour()
  }, [])

  // We are going to show two returs
  // If loading is true
  if(loading)
  {
    return(
      <Loading />
    )
  }

  if(tours.length === 0)
  {
    return(
      <div>
        <h2>
          No tours left
        </h2>
        <button onClick = {() => fetchTour()}>Refresh</button>
      </div>
    )
  }

  return (
    <div>
      <Tours tours = {tours} removeTours = {removeTours} />
    </div>
  )
}

export default App