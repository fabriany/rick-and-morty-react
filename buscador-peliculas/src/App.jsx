import './App.css'
import { Movies } from './components/movies'
import { useMovies } from './hooks/useMovies'
import { useState } from 'react'

function App() {
  const [sort, setSort] = useState()

  const [search, setSearch] = useState('')
  const { movies, getMovies } = useMovies({search, sort})
  

  const handleSubmit = async (event) => {
    event.preventDefault()
    await getMovies(search)
  }

  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  const handleSort = () => {
    setSort(!sort)
  }
  
  return (
    <div className='page'>
      <header>
        <h1>Buscador de Peliculas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input value={search} onChange={handleChange} placeholder='Avenger, star wars.....'/>
          <input type='checkbox' onChange={handleSort} checked={sort}/>
          <button type='submit'>Buscar</button>
        </form>
      </header>
      <main>
        <Movies movies={ movies } />
      </main>
    </div>
  )
}

export default App
