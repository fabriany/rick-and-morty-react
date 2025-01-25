function ListOfMovies( {movies} ) {
    return (
        <ul className="movies">
        {
            movies.map(movie => (
                <li className="movie" key={movie.id}>
                <h3>{movie.title}</h3>
                <p>{movie.year}</p>
                <img src={movie.poster} alt={movie.title}></img>
                </li>
            )
            )
        }
        </ul>
    )
}

function NotFount() {
    return (
        <h1>No Se encontraron peliculas para esta busqueda</h1>
    )
}

export function Movies( { movies } ) {
    const hasMovies = movies?.length > 0;
    
    return (
        hasMovies
        ? <ListOfMovies movies={movies}/> 
        : <NotFount />  
    )
}