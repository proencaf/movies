import './App.css'
import { useEffect, useState } from 'react'
import Movie from './components/Movie'
import Filter from './components/Filter'
import { motion, AnimatePresence } from 'framer-motion'

function App() {
  const [popular, setPopular] = useState([])
  const [filtered, setFiltered] = useState([])
  const [activeGenre, setActiveGenre] = useState(0)

  useEffect(() => {
    fetchMovies()
  }, [])

  const fetchMovies = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=ce570fde957f596d6f2922064e204782'
    )
    const movies = await data.json()
    setPopular(movies.results)
    setFiltered(movies.results)
  }

  return (
    <div className='App'>
      <Filter
        popular={popular}
        setFiltered={setFiltered}
        setActiveGenre={setActiveGenre}
        activeGenre={activeGenre}
      />
      <motion.div layout className='popular-movies'>
        <AnimatePresence></AnimatePresence>
        {filtered.map((movie) => {
          return <Movie key={movie.id} movie={movie} />
        })}
        <AnimatePresence />
      </motion.div>
    </div>
  )
}

export default App
