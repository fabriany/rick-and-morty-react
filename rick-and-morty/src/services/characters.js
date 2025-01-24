const CHARACTERS_EDN_POINT = 'https://rickandmortyapi.com/api/character'
const CHARACTER_BY_ID_ENDPOINT = id => `https://rickandmortyapi.com/api/character/${id}`;

export const getCharacters = async () => {
    const res = await fetch(CHARACTERS_EDN_POINT)
    const data = await res.json()
    const { results } = data;
    return results
}

export const getCharacterById = async (selectedCharacterId) => {
    const res = await fetch(CHARACTER_BY_ID_ENDPOINT(selectedCharacterId));
    const data = await res.json();
    return data;
}