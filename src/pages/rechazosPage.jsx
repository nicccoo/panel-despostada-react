import React from "react";
import Card from "../components/Card/Card";
import CardDataRechazos from "../components/Card/CardDataRechazos";
import "../styles.css";

const RechazosPage = () => {
  return (
    <div className="aside-charts">
      <Card details={CardDataRechazos} />;
    </div>
  );
};

export default RechazosPage;
