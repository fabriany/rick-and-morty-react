const MOVIE_ENDPOINT = search => `https://www.omdbapi.com/?apikey=7920f937&s=${search}`;

export const searchMovies = async (search) => {
    if (search === '') return

    try {
        console.log('Hace el fetch')
        const response = await fetch(MOVIE_ENDPOINT(search))
        const json = await response.json();
        const movies = json.Search
        return movies?.map(movie => ({
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            poster: movie.Poster
        })) 
    } catch (e) {
        throw new Error('Error en la busqueda', e)
    }
}