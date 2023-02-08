import React from "react";
import "../../styles.css";
import "./ProductividadNeta.css";

const ProductividadNeta = () => {
  return (
    <div className="aside-charts">
      <div className="prod-neta__container">
        <div>
          <h3 className="prod-neta__title">PRODUCTIVIDAD NETA</h3>
          <h3 className="prod-neta__title">[KG/HH]</h3>
        </div>
        <div className="prod-neta__container-desc">
          <h2 className="prod-neta__desc">51.7 Kg/HH</h2>
        </div>
      </div>
    </div>
  );
};

export default ProductividadNeta;
