import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card/Card";
import CardDataRechazos from "../components/Card/CardDataRechazos";
import GraficoPromedioGrasa from "../components/GraficoPromedioGrasa/GraficoPromedioGrasa";
import GraficoRechazosFOSS from "../components/GraficoRechazosFOSS/GraficoRechazosFOSS";
import "../styles.css";


const RechazosPage = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {    
       return navigate("/");
    }, 100000);
  
    return () => clearTimeout(timeout);
  },[])


  return (
    <div className="main">
      <div className="aside-charts">
        <Card details={CardDataRechazos} />
      </div>
      <div className="main-charts">
        <div className="main-charts__arriba">
          <GraficoPromedioGrasa />
          <GraficoPromedioGrasa />
          <GraficoPromedioGrasa />
        </div>
        <div className="main-charts__abajo">
          <GraficoRechazosFOSS />
          <GraficoRechazosFOSS />
        </div>
      </div>
    </div>
  );
};

export default RechazosPage;
