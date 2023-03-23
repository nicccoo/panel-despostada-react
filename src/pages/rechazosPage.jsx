import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/ProductividadNetaCard/ProductividadNetaCard";
import GraficoPromedioGrasa from "../components/GraficoPromedioGrasa/GraficoPromedioGrasa";
import GraficoRechazosFOSSVL80 from "../components/GraficoRechazosFOSSVL/GraficoRechazosFOSSVL80";
import { useDataRechazos } from "../context/dataRechazosContext";
import "../styles.css";

const RechazosPage = () => {
  const {
    chartData8020,
    chartOptions8020,
    chartOptions7030,
    chartData7030,
    chartData6040,
    chartOptions6040,
  } = useDataRechazos();



  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      return navigate("/rechazos-resumen");
    }, 100000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="main">
      <div className="aside-charts">
        <Card />
        <Card />
      </div>
      <div className="main-charts">
        <div className="main-charts__arriba">
          <GraficoPromedioGrasa
            chartData={chartData8020}
            chartOptions={chartOptions8020}
          />
          <GraficoPromedioGrasa
            chartData={chartData7030}
            chartOptions={chartOptions7030}
          />
          <GraficoPromedioGrasa
            chartData={chartData6040}
            chartOptions={chartOptions6040}
          />
        </div>
        <div className="main-charts__abajo">
          <GraficoRechazosFOSSVL80 />
          <GraficoRechazosFOSSVL80 />
          <GraficoRechazosFOSSVL80 />
        </div>
      </div>
    </div>
  );
};

export default RechazosPage;
