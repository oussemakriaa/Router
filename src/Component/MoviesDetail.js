import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const MoviesDetail = ({ match, list }) => {
    console.log(match)
    console.log(list)
    const movie = list.find(el => el.id.toString() === match.params.id)
    return (
        <div>
          <iframe width="560" height="315" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p>{movie.description}</p>
        <Link to={'/'}><Button>back</Button></Link>
        </div>
    )
}

export default MoviesDetail
