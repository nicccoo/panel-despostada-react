import React, { useEffect, useState } from "react";
import { getProductividadNeta } from "../../api/request";
import "./card.css";

const ProductividadNetaCard = () => {
  const [productividadNeta, setProductividadNeta] = useState([]);

  useEffect(() => {
    const getProductividadNetaData = async () => {
      const res = await getProductividadNeta();
      setProductividadNeta(res);
    };

    getProductividadNetaData();
  });

  const calculateKGHH = (kilos, presentes, horasTranscurridas) => {
    const resultado = kilos / (presentes * horasTranscurridas);

    return Number(Math.round(resultado));
  };

  return (
    <>
      {productividadNeta.map((item, index) => (
        <div className="card-container" key={index}>
          <div>
            <h3 className="card-title">PRODUCTIVIDAD NETA [KG/HH]</h3>
          </div>
          <h2 className="card-desc">
            {calculateKGHH(item.kilos, 200, 9.5)} KG.
          </h2>
        </div>
      ))}
    </>
  );
};

export default ProductividadNetaCard;
