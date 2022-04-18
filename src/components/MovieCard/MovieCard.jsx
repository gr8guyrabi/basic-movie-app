import React from 'react'

import './MovieCard.css'

const MovieCard = ({ id, title, description, image }) => {
  return (
    <div className="movie">
        <div>
            <p>{description}</p>
        </div>
        <div>
            <img src={image !== 'N/A' ? image : 'https://via.placeholder.com/400'} alt={title} />
        </div>

        <div>
            <span>{description}</span>
            <h3>{title}</h3>
        </div>
    </div>
  )
}

export default MovieCard