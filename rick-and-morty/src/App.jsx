import  { useCharacters } from './hooks/useCharacters.js'
import { useCharacterDetail } from './hooks/useCharacterDetail.js'
import './App.css'

function App() {
  const { characters } = useCharacters();
  const { 
    handleCharacterClick, 
    handleCloseModal,
    characterDetails 
  } = useCharacterDetail();
   
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
