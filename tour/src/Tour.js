import React from 'react'

const Tour = ({id, image, info, price, name}) => {
  return (
    <article>
        <img src = {image} alt = {name} />
        <footer>
            <div>
                <h4>{name}</h4>
                <h4>{price}</h4>
                <h4>{info}</h4>
            </div>
        </footer>
    </article>
  )
}

export default Tour