import React from 'react'
import MovieCard from '../MovieCard/MovieCard'

const MovieList = ({moviedata,handleDelate}) => {
    return (
        <div className="d-flex justify-content-around flex-wrap">
{moviedata.map(el=><MovieCard movie={el} handleDelate={handleDelate}/>)}
        </div>
    )
}

export default MovieList
