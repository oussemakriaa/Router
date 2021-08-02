import './App.css';
import { useState } from 'react';
import Filter from './Component/Filter/Filter';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './Component/MovieList/MovieList';
import { moviedata } from './Moviesd';
import MovieAdd from './Component/MovieAdd/MovieAdd';



function App() {
  const [list, setlist] = useState(moviedata)
  const [rate, setrate] = useState(0)
  const [title, settitle] = useState("")
    const changeRating = (newRating) => {
        setrate(newRating);
    }
    const handelChange=(e)=>{settitle(e.target.value)}
    const handleDelate=(id)=>{setlist(list.filter(el=>id!==el.id))}
    const handleAdd = (newMovie) =>{
      setlist([...list,newMovie])}

  return (
    <div className="App">
      <Filter changeRating={changeRating} rate={rate} handelChange={handelChange} title={title}/>
<MovieList 
moviedata={list.filter(el=>((el.rate>=rate)&&(el.title.toUpperCase().includes(title.toUpperCase()) )))} 
handleDelate={handleDelate}/>
    <MovieAdd handleAdd={handleAdd}/>

    </div>
  );
}

export default App;
