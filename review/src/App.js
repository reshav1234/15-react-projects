import React, {useState} from 'react'


const App = () => 
{

  const [index, setIndex] = useState(0);
  const {name, job, image, text} = people([index])

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
      let newIndex = index + 1
    }
    setIndex(checkNumber(randomNumber))
  }
  return (
      <>
        <div>
          
        </div>
      </>
  )
}

export default App