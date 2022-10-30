import React,{useState, useEffect} from 'react'
import Loading from './Loading'
import Tours from "./Tours"
const url = "https://course-api.com/react-tours-project"

const App = () => 
{
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  // Fetching data
  const fetchTours = async() =>
  {
    setLoading(true)
    try
    {
      setLoading(false)
      const response = await fetch(url)
      const tours = await response.json(url)
      console.log(tours)
    }catch(error){
      setLoading(false)
      console.log(error) // Catch error
    }
  }

  useEffect(() => {
    fetchTours()
  }, [])


  // We will set one return for loading and another return for another loading
  if(loading) // If loading is true
  {
    return (
      <div>
        <Loading />
      </div>
    )
  }
  return (
    <div>
      <Tours tours = {tours} />
    </div>
  )
}

export default App