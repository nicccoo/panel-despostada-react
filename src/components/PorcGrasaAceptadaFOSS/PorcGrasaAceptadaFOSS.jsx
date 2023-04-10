import React, { useState } from 'react'
import '../ProductividadNetaCard/card.css'

const PorcGrasaAceptadaFOSS = () => {

    const [initialValue, setInitialValue] = useState(['test']);
    
    return (
        <>
          {initialValue.map((item, index) => (
            <div className="card-container" key={index}>
              <div>
                <h3 className="card-title">% GRASA ACEPTADA POR FOSS</h3>
              </div>
              <h2 className="card-desc">
                95%
              </h2>
            </div>
          ))}
        </>
      );
}

export default PorcGrasaAceptadaFOSS