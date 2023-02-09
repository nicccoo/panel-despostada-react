import React from "react";
import GraficoProduccionTotal from "../components/GraficoProduccionTotal/GraficoProduccionTotal";
import GraficoEvolucionProd from "../components/GraficoEvolucionProd/GraficoEvolucionProd";
import Card from "../components/Card/Card";
import CardData from "../components/Card/CardData";
import "../styles.css";

const ProduccionPage = () => {
  return (
    <div className="main">
      <div className="aside-charts">
        <GraficoProduccionTotal />
        <Card details={CardData} />
      </div>
      <div className="main-charts">
        <GraficoEvolucionProd />
      </div>
    </div>
  );
};

export default ProduccionPage;
