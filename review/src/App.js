import React, {useState} from 'react'
import people from "./review"

const App = () => 
{

  const [index, setIndex] = useState(0);
  const {name, job, text} = people[index]

  const checkNumber = (number) =>
  {
    if (number > people.length - 1)
      {
        return 0;
      }
    if (number < 0)
    {
      return people.length - 1
    }
    return number;
  };


  const nextPerson = () =>
  {
    setIndex((index) => {
      let newIndex = index + 1
      return checkNumber(newIndex)
    })
  }


  const prevPerson = () =>
  {
    setIndex((index) => {
      let newIndex = index - 1
      return checkNumber(newIndex)
    })
  }


  const randomPerson = () =>
  {
    // Generate random number
    let randomNumber = Math.floor(Math.random() * people.length)
    if( randomNumber === index)
    {
       randomNumber = index + 1
    }
    setIndex(checkNumber(randomNumber))
  }
  return (
      <>
        <div>
          <h4>{name}</h4>
          <p>{job}</p>
          <p>{text}</p> 
        </div>
        <div>
          <button onClick = {prevPerson}>previous</button>
          <button onClick = {nextPerson}>next</button>
        </div>
        <button onClick = {randomPerson}>Random</button>
      </>
  )
}

export default App