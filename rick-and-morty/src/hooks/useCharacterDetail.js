import { useEffect, useState } from 'react'
import { getCharacterById } from '../services/characters.js'

export function useCharacterDetail () {
  const [selectedCharacterId, setSelectedCharacterId] = useState(null); 
  const [characterDetails, setCharacterDetails] = useState(null);

  useEffect(() => {
    if (selectedCharacterId) {
      getCharacterById(selectedCharacterId).then(setCharacterDetails)
    }
  }, [selectedCharacterId]); 

  const handleCharacterClick = (id) => {
    setSelectedCharacterId(id); 
  };

  const handleCloseModal = () => {
    setSelectedCharacterId(null); 
    setCharacterDetails(null); 
  }; 
    return { 
      handleCharacterClick, 
      handleCloseModal,
      characterDetails
    }
  }