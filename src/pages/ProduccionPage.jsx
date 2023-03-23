import React, { useEffect, useState } from "react";
import GraficoProduccionTotal from "../components/GraficoProduccionTotal/GraficoProduccionTotal";
import GraficoEvolucionProd from "../components/GraficoEvolucionProd/GraficoEvolucionProd";
import ProductividadNetaCard from "../components/ProductividadNetaCard/ProductividadNetaCard";
import "../styles.css";
import { useNavigate } from "react-router-dom";

const ProduccionPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      return navigate("/rechazos");
    }, 100000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="main">
      <div className="aside-charts">
        <GraficoProduccionTotal />
        <ProductividadNetaCard />
      </div>
      <div className="main-charts">
        <GraficoEvolucionProd />
      </div>
    </div>
  );
};

export default ProduccionPage;
