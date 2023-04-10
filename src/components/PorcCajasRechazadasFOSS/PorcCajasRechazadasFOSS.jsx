import React, { useState } from "react";
import "../ProductividadNetaCard/card.css";

const PorcCajasRechazadasFOSS = () => {
  
    const [initialValue, setInitialValue] = useState(['test']);
    
    return (
    <>
      {initialValue.map((item, index) => (
        <div className="card-container" key={index}>
          <div>
            <h3 className="card-title">% CAJAS RECHAZADAS POR FOSS POR DESVIO DE GRASA</h3>
          </div>
          <h2 className="card-desc">
            1% (6 CAJAS)
          </h2>
        </div>
      ))}
    </>
  );
};

export default PorcCajasRechazadasFOSS;
