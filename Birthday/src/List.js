import React from 'react'


// We will list the people having birthdays

const List = ({birthday}) => {
  return (
    <div>
        {birthday.map((people) => {
            const {id, name, age } = people
            return(
                <div key = {id}>
                    <h4>{name}</h4>
                    <h4>{age}</h4>

                </div>
            )
        })}
    </div>
  )
}

export default List