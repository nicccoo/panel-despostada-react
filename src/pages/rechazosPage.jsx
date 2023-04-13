import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDataRechazos } from "../context/dataRechazosContext";
import GraficoPromedioGrasa from "../components/GraficoPromedioGrasa/GraficoPromedioGrasa";
import GraficoRechazosFOSSVL from "../components/GraficoRechazosFOSSVL/GraficoRechazosFOSSVL";
import PorcGrasaAceptadaFOSS from "../components/PorcGrasaAceptadaFOSS/PorcGrasaAceptadaFOSS";
import PorcCajasRechazadasFOSS from "../components/PorcCajasRechazadasFOSS/PorcCajasRechazadasFOSS";
import { useDataRechazosFOSS } from "../context/dataRechazosFOSSContext";
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

  const {
    chartDataVL80,
    chartOptionsVL80,
    chartDataVL70,
    chartOptionsVL70,
    chartDataVL60,
    chartOptionsVL60,
  } = useDataRechazosFOSS();

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
        <PorcGrasaAceptadaFOSS />
        <PorcCajasRechazadasFOSS />
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
          <GraficoRechazosFOSSVL
            chartData={chartDataVL80}
            chartOptions={chartOptionsVL80}
          />
          <GraficoRechazosFOSSVL
            chartData={chartDataVL70}
            chartOptions={chartOptionsVL70}
          />
          <GraficoRechazosFOSSVL
            chartData={chartDataVL60}
            chartOptions={chartOptionsVL60}
          />
        </div>
      </div>
    </div>
  );
};

export default RechazosPage;
