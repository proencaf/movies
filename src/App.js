import './App.css'
import { useEffect, useState } from 'react'
import Movie from './components/Movie'
import Filter from './components/Filter'

function App() {
  const [popular, setPopular] = useState([])

  useEffect(() => {
    fetchMovies()
  }, [])

  const fetchMovies = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=ce570fde957f596d6f2922064e204782'
    )
    const movies = await data.json()
    setPopular(movies.results)
  }

  return (
    <div className='App'>
      <Filter />
      <div className='popular-movies'>
        {popular.map((movie) => {
          return <Movie key={movie.id} movie={movie} />
        })}
      </div>
    </div>
  )
}

export default App
