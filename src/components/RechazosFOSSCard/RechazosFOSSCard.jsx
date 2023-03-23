import React from 'react'
import '../ProductividadNetaCard/card.css'

const PorcentajeGrasaFOSSCard = () => {
  return (
    <>
      {productividadNeta.map((item, index) => (
        <div className="card-container" key={index}>
          <div>
            <h3 className="card-title">PRODUCTIVIDAD NETA [KG/HH]</h3>
          </div>
          <h2 className="card-desc">{item.kilos} KG.</h2>
        </div>
      ))}
    </>
  );
}

export default PorcentajeGrasaFOSSCard