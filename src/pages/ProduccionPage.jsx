import React, {useEffect} from "react";
import GraficoProduccionTotal from "../components/GraficoProduccionTotal/GraficoProduccionTotal";
import GraficoEvolucionProd from "../components/GraficoEvolucionProd/GraficoEvolucionProd";
import Card from "../components/Card/Card";
import CardData from "../components/Card/CardData";
import "../styles.css";
import { useNavigate } from "react-router-dom";

const ProduccionPage = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {    
       return navigate("/rechazos");
    }, 100000);
  
    return () => clearTimeout(timeout);
  },[])


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
