import React from 'react'
import { Button, Container, FormControl, Nav, Navbar } from 'react-bootstrap'
import Ratings from 'react-ratings-declarative';
import { Link } from 'react-router-dom';
import MovieAdd from '../MovieAdd/MovieAdd';


const Filter = ({ changeRating, rate,handelChange,title }) => {


    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Link to={'/'}>
                    <Navbar.Brand href="#home">Movie App</Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>
                    </Navbar.Collapse>
                        <FormControl
                        style={{width:'50%'}}
                            placeholder="search film"
                            onChange={handelChange}
                            value={title}
                        />
                   
                    <Ratings
                        rating={rate}
                        widgetRatedColors="blue"
                        changeRating={changeRating}
                    >
                        <Ratings.Widget />
                        <Ratings.Widget />
                        <Ratings.Widget />
                        <Ratings.Widget />
                        <Ratings.Widget />
                    </Ratings>
                    
                </Container>
            </Navbar>
        </div>
    )
}

export default Filter
