import { useEffect, useState } from 'react'
import './App.css'

const CHARACTERS_EDN_POINT = 'https://rickandmortyapi.com/api/character'
const CHARACTER_BY_ID_ENDPOINT = id => `https://rickandmortyapi.com/api/character/${id}`;

function App() {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacterId, setSelectedCharacterId] = useState(null); 
  const [characterDetails, setCharacterDetails] = useState(null);


  
  useEffect(() => {
    fetch(CHARACTERS_EDN_POINT)
    .then(res => res.json())
    .then(data => {
      setCharacters(data.results)
    })
  }, []) 

  useEffect(() => {
    if (selectedCharacterId) {
      fetch(CHARACTER_BY_ID_ENDPOINT(selectedCharacterId))
        .then((res) => res.json())
        .then((data) => {
          setCharacterDetails(data); 
        });
    }
  }, [selectedCharacterId]); 

  const handleCharacterClick = (id) => {
    setSelectedCharacterId(id); 
  };

  const handleCloseModal = () => {
    setSelectedCharacterId(null); 
    setCharacterDetails(null); 
  };  

  return (
    <main>
      <h1>Character of Rick and Morty</h1>
      
      {characterDetails && (
        <div className="modal">
          <div className="modal-content">
            <h2>{characterDetails.name}</h2>
            <img src={characterDetails.image} alt={characterDetails.name} className="character-image" />
            <p><strong>Gender:</strong> {characterDetails.gender}</p>
            <p><strong>Species:</strong> {characterDetails.species}</p>
            <p><strong>Status:</strong> {characterDetails.status}</p>
            <button onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}

      <ul>
        {characters && characters.map(chart => (
          chart && <li key={chart.id} className="character-item" onClick={() => handleCharacterClick(chart.id)}>
            <img src={chart.image} alt={chart.name} className="character-image" />
            <span className="character-name">{chart.name}</span>
          </li>
        ))}  
      </ul>
    </main>
  )
}

export default App
