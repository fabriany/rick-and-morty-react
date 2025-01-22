# Rick and Morty Fetch Exercise

## Objetivo del Ejercicio
El propósito de este ejercicio es practicar el uso de **fetch** en React para consumir datos de una API. Se realizarán dos llamados consecutivos a la API de [Rick and Morty](https://rickandmortyapi.com/), donde el segundo llamado utilizará datos obtenidos del primero.

## Requisitos
1. Realizar un `fetch` al endpoint de personajes para obtener información general (como ID, nombre, etc.).
2. Seleccionar el primer personaje del resultado y hacer un segundo `fetch` utilizando su ID para obtener detalles adicionales.
3. Renderizar en pantalla:
   - Una lista de personajes obtenidos del primer `fetch`.
   - Detalles específicos del personaje seleccionado.

## Endpoints que vas a consumir
- **Lista de personajes**  
  **Endpoint:** [https://rickandmortyapi.com/api/character](https://rickandmortyapi.com/api/character)  
  Devuelve un listado de personajes con información básica.  

- **Detalles de un personaje**  
  **Endpoint:** [https://rickandmortyapi.com/api/character/{id}](https://rickandmortyapi.com/api/character/{id})  
  Devuelve información detallada de un personaje específico utilizando su `ID`.

## Instalación y Uso
1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/rick-and-morty-fetch.git
   cd rick-and-morty-fetch
