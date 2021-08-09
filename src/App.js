import './App.css';
import { useState } from 'react';
import Filter from './Component/Filter/Filter';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './Component/MovieList/MovieList';
import { moviedata } from './Moviesd';
import MovieAdd from './Component/MovieAdd/MovieAdd';
import MoviesDetail from './Component/MoviesDetail';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'




function App() {
  const [list, setlist] = useState(moviedata)
  const [rate, setrate] = useState(0)
  const [title, settitle] = useState("")
  const changeRating = (newRating) => {
    setrate(newRating);
  }
  const handelChange = (e) => { settitle(e.target.value) }
  const handleDelate = (id) => { setlist(list.filter(el => id !== el.id)) }
  const handleAdd = (newMovie) => {
    setlist([...list, newMovie])
  }

  return (
    <div className="App">
      <Router>
        <Filter changeRating={changeRating} rate={rate} handelChange={handelChange} title={title} />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <MovieList
                moviedata={list.filter(el => ((el.rate >= rate) && (el.title.toUpperCase().includes(title.toUpperCase()))))}
                handleDelate={handleDelate} />)} />
          <Route exact path="/add" render={() => <MovieAdd handleAdd={handleAdd} />} />

          <Route path="/movie/:id" render={(props) => <MoviesDetail {...props} list={list} />} />

        </Switch>



      </Router>


    </div>
  );
}

export default App;
