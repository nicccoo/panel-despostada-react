import React from 'react'
import GraficoProduccionTotal from '../components/GraficoProduccionTotal/GraficoProduccionTotal'
import GraficoEvolucionProd from '../components/GraficoEvolucionProd/GraficoEvolucionProd'
import ProductividadNeta from '../components/ProductividadNeta/ProductividadNeta'
import "../styles.css";

const ProduccionPage = () => {
  return (
    <div className="main">
    <div className="aside-charts">
      <GraficoProduccionTotal />
      <ProductividadNeta />
    </div>
    <div className="main-charts">
     <GraficoEvolucionProd />        
    </div>
  </div>
  )
}

export default ProduccionPage