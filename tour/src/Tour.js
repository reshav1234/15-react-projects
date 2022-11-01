import React, {useState} from 'react'

const Tour = ({id, image, info, price, name, removeTours}) => 
{
    
    const [readMore, setReadMore] =useState(true)

    return (
        <article>
            <img src = {image} alt = {name} />
            <p>
                
                {readMore ? info: `${info.substring(0, 200)}...` // If readmore is true then display info
                }
                <button onClick = {() => setReadMore(!readMore)}>{readMore ? `show less`:'read more'}</button>
            </p>
            <button onClick = {() => removeTours(id)}>Not interested</button>
        </article>
    )
}

export default Tour