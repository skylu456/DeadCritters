import React from 'react';
import './Home.css'; 

function Home() {
  return (
    <div>
      <section id="hero">
        <div className="content">
          <h1>Bienvenido a Dead Critters</h1>
          <p>El servicio de fumigación N°1</p>
        </div>
      </section>
      <div className="divider"></div>
      <section id="description">
        <h2>Acerca De Nosotros</h2>
        <p>Dead Critters ofrece servicios de fumigación en todo el país.
          Somos una empresa que se compromete con exterminación y aniquilación de 
          criaturas no deseadas en cualquier parte. ¡Contáctanos Ya!</p>
      </section>
    </div>
  );
}

export default Home;
