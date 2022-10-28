import React from 'react'

const List = ({birthday}) => 
{
  return (
    <div>
        {birthday.map((event) => {
            const {id, name, age} = event;
            return(
                <div>
                    <h4>{name}</h4>
                    <p>{age}Years</p>
                </div>
            )
        })}
    </div>
  )
}

export default List