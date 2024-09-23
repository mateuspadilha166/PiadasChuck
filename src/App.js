import React, { useEffect, useState } from "react";
import './App.css';

function App() {
  const [joke, setJoke] = useState('');

  useEffect(() => {
    function loadApi() {
      let url = 'https://api.chucknorris.io/jokes/random';
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setJoke(data.value);
        })
        .catch((error) => {
          console.error("Erro ao carregar API:", error);
        });
    }
    loadApi();
  }, []);

  return (
    <div className="container">
      <header>
        <strong>Chuck Norris Jokes</strong>
      </header>
      <div className="joke">
        <p>{joke}</p>
      </div>
      <button className="botao" onClick={() => window.location.reload()}>
        Nova Piada
      </button>
    </div>
  );
}

export default App;
