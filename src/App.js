/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useEffect, useState } from 'react';
import './App.css';

// https://sujeitoprogramador.com/rn-api/?api=posts


function App() {

 const [nutri, setNutri] = useState([]);

  useEffect(() => {

    async function loadAPI() {
      let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';
      const response = await fetch(url);
      const json = await response.json();
      console.log(json);
      setNutri(json);
    }

    loadAPI();
  }, []);


  return (
    <div className="container">
      <header>
        <strong>React Nutri</strong>
      </header>
     {nutri.map((item) => {
        return(
          <article key={item.id} className="post">
            <strong className="titulo">{item.categoria} - {item.titulo}</strong>
            <img src={item.capa} alt={item.titulo} className="capa"/>
            <p className="subtitulo">{item.subtitulo}</p>
            <a className="botao" href="#">Acessar</a>
          </article>
        );
     })}
    </div>
  );
}

export default App;
