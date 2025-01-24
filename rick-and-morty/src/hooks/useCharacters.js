import { useEffect, useState } from 'react'
import { getCharacters } from '../services/characters.js'

export function useCharacters () {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    getCharacters().then(setCharacters)
  }, []) 
  return { characters }
}