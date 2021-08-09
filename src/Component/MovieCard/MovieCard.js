import React from 'react'
import { Button, Card } from 'react-bootstrap'
import Ratings from 'react-ratings-declarative';
import { Link } from 'react-router-dom';
const MovieCard = ({movie,handleDelate}) => {
    return (
        <div>
            <Card style={{ width: '20rem'}}>
            <Link to={`/movie/${movie.id}`}><Card.Img variant="top" src={movie.posterUrl} height="300px" /></Link>
                <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text>
                        {movie.description}
                    </Card.Text>
                    <div className="mb-5">
                    <Card.Text>
                        {movie.rate}
                    </Card.Text>
                    <Ratings
        rating={movie.rate}
        widgetDimensions="20px"
        widgetSpacings="10px"
      >
        <Ratings.Widget widgetRatedColor="black"  />
        <Ratings.Widget widgetRatedColor="black"/>
        <Ratings.Widget widgetRatedColor="black" />
        <Ratings.Widget widgetRatedColor="black"/>
        <Ratings.Widget widgetRatedColor="black" />
      </Ratings>
      </div>
                    <Button variant="primary" onClick={()=>handleDelate(movie.id)}>Remove</Button>
                </Card.Body>
            </Card>
            
        </div>
    )
}

export default MovieCard
