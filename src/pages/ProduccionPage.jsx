import React from "react";
import GraficoProduccionTotal from "../components/GraficoProduccionTotal/GraficoProduccionTotal";
import GraficoEvolucionProd from "../components/GraficoEvolucionProd/GraficoEvolucionProd";
<<<<<<< HEAD
import ProductividadNeta from "../components/ProductividadNeta/ProductividadNeta";
=======
import Card from "../components/Card/Card";
import CardData from "../components/Card/CardData";
>>>>>>> 540034b8df3db5fd7226060368dd7f1f0b5bf89f
import "../styles.css";

const ProduccionPage = () => {
  return (
    <div className="main">
      <div className="aside-charts">
        <GraficoProduccionTotal />
<<<<<<< HEAD
        <ProductividadNeta />
=======
        <Card details={CardData} />
>>>>>>> 540034b8df3db5fd7226060368dd7f1f0b5bf89f
      </div>
      <div className="main-charts">
        <GraficoEvolucionProd />
      </div>
    </div>
  );
};

export default ProduccionPage;
