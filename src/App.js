import React, { useState, useEffect } from 'react';
import './App.css';
import Character from './components/Character';
import axios from 'axios';



const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [character, setCharacter] = useState([]);


  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
    .then(res => {
      setCharacter(res.data)
    })
    .catch(err => {
      console.error(err)
    })
  }, [])

  return (
    <div className="App">
      <h1 className="Header"> Star Wars Characters</h1>
        {
        character.map(ch => {
          return <Character  character={ch} key={ch.name} />
        })}
    </div>
  );
}

export default App;
