import React, {useEffect, useState} from 'react'

import SearchIcon from './assets/images/search.svg'
import {MovieCard} from './components'

import './App.css'

const API_URL = `http://www.omdbapi.com?apikey=${process.env.REACT_APP_OMDB_APIKEY}`

const App = () => {
    const [searchTerm, setSearchTerm] = useState('batman')
    const [movies, setMovies] = useState([])
    const searchMovies = async () => {
        const response = await fetch(`${API_URL}&s=${searchTerm}}`)
        const data = await response.json()

        setMovies(data.Search || [])
    }

    const handleChange = (e) => {
        e.preventDefault()
        setSearchTerm(e.target.value)
    }

    useEffect(() => {
        searchMovies(searchTerm)
    }, [])
    
    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input
                    placeholder="Search for movies..."
                    value={searchTerm}
                    onChange={(e) => handleChange(e)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            searchMovies()
                        }
                    }}
                />
                <img 
                    src={SearchIcon}
                    alt="search" 
                    onClick={searchMovies}
                />
            </div>
            {movies.length ? (
                <div className="container">
                    {movies?.map(movie => (
                        <MovieCard key={movie.imdbID} {...movie} />
                    ))}
                </div>
            ) : (
                <div className="empty">
                    <h2>No movies found</h2>
                </div>
            ) }
        </div>
    )
}

export default App