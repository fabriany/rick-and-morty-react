import { useRef, useState, useMemo, useCallback } from 'react'
import { searchMovies } from '../services/movies';

export function useMovies( {search, sort} ) {

    const [movies, setMovies] = useState([]);
    const previousSearch = useRef('')

    const getMovies = useCallback(async (search) => {
        if (search == previousSearch.current) return
        try {
            previousSearch.current = search
            const newMovies = await searchMovies(search)
            setMovies(newMovies)
        } catch (e) {
            throw new Error(e)
        }
    }, [])

    const sortMovies = useMemo(() => {
        return sort
        ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
        : movies
    }, [sort, movies])
   
    return { movies: sortMovies, getMovies }
}